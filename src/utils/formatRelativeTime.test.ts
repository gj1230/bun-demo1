import { expect, test, describe } from "bun:test";
import { formatRelativeTime } from "./date";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

/** Build a Date that is `ms` milliseconds in the past relative to now. */
function ago(ms: number): Date {
  return new Date(Date.now() - ms);
}

describe("formatRelativeTime", () => {
  test('returns "刚刚" for less than a minute ago', () => {
    expect(formatRelativeTime(ago(10 * SECOND))).toBe("刚刚");
  });

  test("returns minutes for less than an hour ago", () => {
    expect(formatRelativeTime(ago(3 * MINUTE))).toBe("3 分钟前");
  });

  test("returns hours for less than a day ago", () => {
    expect(formatRelativeTime(ago(2 * HOUR))).toBe("2 小时前");
  });

  test('returns "昨天" for one day ago', () => {
    expect(formatRelativeTime(ago(DAY + HOUR))).toBe("昨天");
  });

  test("returns days for two-to-seven days ago", () => {
    expect(formatRelativeTime(ago(3 * DAY + HOUR))).toBe("3 天前");
  });

  test("returns YYYY-MM-DD for more than seven days ago", () => {
    expect(formatRelativeTime(new Date("2020-01-15T10:00:00"))).toBe(
      "2020-01-15",
    );
  });
});
