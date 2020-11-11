export function pagination(arr, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return arr.slice(start, end);
}
