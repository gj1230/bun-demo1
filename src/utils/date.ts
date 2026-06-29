const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function formatDate(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/**
 * Format a past `Date` as a human-readable relative time in Chinese.
 *
 * - < 1 分钟        → "刚刚"
 * - < 1 小时        → "N 分钟前"
 * - < 1 天          → "N 小时前"
 * - 1 天            → "昨天"
 * - 2–7 天          → "N 天前"
 * - > 7 天          → "YYYY-MM-DD"
 */
export function formatRelativeTime(date: Date): string {
  const diff = Date.now() - date.getTime();

  if (diff < MINUTE) return "刚刚";
  if (diff < HOUR) return `${Math.floor(diff / MINUTE)} 分钟前`;
  if (diff < DAY) return `${Math.floor(diff / HOUR)} 小时前`;

  const days = Math.floor(diff / DAY);
  if (days === 1) return "昨天";
  if (days <= 7) return `${days} 天前`;

  return formatDate(date);
}
