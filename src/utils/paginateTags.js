export function paginateTags(tags, page, pageSize) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return tags.slice(startIndex, endIndex);
}
