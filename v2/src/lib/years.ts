// Year calculations shared by the build (server) and the browser refresh (scripts/years.ts).

/** Full years elapsed since an ISO date (YYYY-MM-DD), counting the anniversary day itself. */
export function yearsSinceDate(iso: string, now = new Date()): number {
  const [y, m, d] = iso.split('-').map(Number);
  let years = now.getFullYear() - y;
  const beforeAnniversary = now.getMonth() + 1 < m || (now.getMonth() + 1 === m && now.getDate() < d);
  if (beforeAnniversary) years -= 1;
  return years;
}

/** Calendar years since a year (partnerships only have a start year). */
export function yearsSinceYear(year: number, now = new Date()): number {
  return now.getFullYear() - year;
}
