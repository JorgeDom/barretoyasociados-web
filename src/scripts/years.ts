// Refresh year counts in the browser so the static page stays correct between deploys.
import { yearsSinceDate, yearsSinceYear } from '../lib/years';

document.querySelectorAll<HTMLElement>('[data-years-since]').forEach((el) => {
  const n = String(yearsSinceDate(el.dataset.yearsSince!));
  el.textContent = n;
  if (el.dataset.count) el.dataset.count = n;
});
document.querySelectorAll<HTMLElement>('[data-years-since-year]').forEach((el) => {
  const n = String(yearsSinceYear(Number(el.dataset.yearsSinceYear)));
  el.textContent = n;
  if (el.dataset.count) el.dataset.count = n;
});
