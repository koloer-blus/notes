import Giscus from "@giscus/react"
import { getRepoConfig } from "@/services/github"

export function GiscusComments() {
  const { owner, repo } = getRepoConfig()

  return (
    <Giscus
      id="comments"
      repo={`${owner}/${repo}` as `${string}/${string}`}
      repoId="YOUR_REPO_ID" // Replace with your repo ID
      category="Announcements"
      categoryId="YOUR_CATEGORY_ID" // Replace with your category ID
      mapping="number"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
    />
  )
}
