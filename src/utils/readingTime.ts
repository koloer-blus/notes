/**
 * 计算文章阅读时间（纯浏览器实现，无需第三方库）
 * @param content 文章内容（Markdown 格式）
 * @returns 阅读时间（分钟）
 */
export function calculateReadingTime(content: string): number {
  // 移除 Markdown 语法标记，获取纯文本
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .replace(/`[^`]*`/g, '') // 移除行内代码
    .replace(/!\[.*?\]\(.*?\)/g, '') // 移除图片
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1') // 保留链接文字
    .replace(/[#*_~`>]/g, '') // 移除 Markdown 标记
    .replace(/\n+/g, ' ') // 换行转空格
    .trim()

  // 分别计算中文字符和英文单词
  // 中文阅读速度约 300-500 字/分钟，取 400
  // 英文阅读速度约 200-250 词/分钟，取 200
  
  // 匹配中文字符
  const chineseChars = plainText.match(/[\u4e00-\u9fa5]/g) || []
  const chineseCount = chineseChars.length
  
  // 移除中文后计算英文单词数
  const textWithoutChinese = plainText.replace(/[\u4e00-\u9fa5]/g, ' ')
  const englishWords = textWithoutChinese.split(/\s+/).filter(word => word.length > 0)
  const englishCount = englishWords.length

  // 计算阅读时间
  const chineseTime = chineseCount / 400
  const englishTime = englishCount / 200
  const totalMinutes = chineseTime + englishTime

  // 至少返回 1 分钟
  return Math.max(1, Math.ceil(totalMinutes))
}
