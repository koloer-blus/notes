import { BlogPost, Label } from "@/types"

const GITHUB_API_BASE = "https://api.github.com"
const REPO_OWNER = "koloer-blus" // Replace with your GitHub username
const REPO_NAME = "notes" // Replace with your repo name
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  }
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`
  }
  return headers
}

export async function fetchIssues(labels?: string[]): Promise<BlogPost[]> {
  let url = `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/issues?state=open&per_page=100`
  
  if (labels && labels.length > 0) {
    url += `&labels=${labels.join(",")}`
  }

  const response = await fetch(url, {
    headers: getHeaders(),
  })

  if (!response.ok) {
    console.error("Failed to fetch issues:", response.statusText)
    return []
  }

  const data = await response.json()
  return data.filter((issue: BlogPost & { pull_request?: unknown }) => !issue.pull_request)
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
