import { BlogPost, Label } from "@/types"

const GITHUB_API_BASE = "https://api.github.com"
const REPO_OWNER = "koloer-blus" // Replace with your GitHub username
const REPO_NAME = "notes" // Replace with your repo name
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

export const PER_PAGE = 10

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  }
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`
  }
  return headers
}

// 解析 GitHub Link header 获取分页信息
function parseLinkHeader(linkHeader: string | null): { last?: number; next?: number } {
  if (!linkHeader) return {}
  
  const result: { last?: number; next?: number } = {}
  const links = linkHeader.split(",")
  
  for (const link of links) {
    const match = link.match(/<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="(\w+)"/)
    if (match) {
      const [, page, rel] = match
      if (rel === "last") result.last = parseInt(page, 10)
      if (rel === "next") result.next = parseInt(page, 10)
    }
  }
  
  return result
}

export interface PaginatedResult<T> {
  data: T[]
  totalPages: number
  currentPage: number
  hasNext: boolean
}

export async function fetchIssues(
  page: number = 1,
  labels?: string[]
): Promise<PaginatedResult<BlogPost>> {
  let url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&per_page=${PER_PAGE}&page=${page}`
  
  if (labels && labels.length > 0) {
    url += `&labels=${labels.join(",")}`
  }

  const response = await fetch(url, {
    headers: getHeaders(),
  })

  if (!response.ok) {
    console.error("Failed to fetch issues:", response.statusText)
    return { data: [], totalPages: 1, currentPage: page, hasNext: false }
  }

  const linkHeader = response.headers.get("Link")
  const { last, next } = parseLinkHeader(linkHeader)
  
  const data = await response.json()
  const filteredData = data.filter(
    (issue: BlogPost & { pull_request?: unknown }) => !issue.pull_request
  )

  return {
    data: filteredData,
    totalPages: last || page,
    currentPage: page,
    hasNext: !!next,
  }
}

export async function fetchIssueByNumber(number: number): Promise<BlogPost | null> {
  const url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/issues/${number}`

  const response = await fetch(url, {
    headers: getHeaders(),
  })

  if (!response.ok) {
    console.error("Failed to fetch issue:", response.statusText)
    return null
  }

  return response.json()
}

export async function fetchLabels(): Promise<Label[]> {
  const url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/labels`

  const response = await fetch(url, {
    headers: getHeaders(),
  })

  if (!response.ok) {
    console.error("Failed to fetch labels:", response.statusText)
    return []
  }

  return response.json()
}

export function getRepoConfig() {
  return {
    owner: REPO_OWNER,
    repo: REPO_NAME,
  }
}
