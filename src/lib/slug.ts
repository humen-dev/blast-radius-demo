/** Turns a title into a URL slug. Not used anywhere yet. */
export function slugify(title: string): string {
  return title.trim().toLowerCase().replace(/\s+/g, '-');
}
