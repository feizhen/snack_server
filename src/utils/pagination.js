// TODO
export function pagination(arr, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const result = arr.slice(start, end);
  return result;
}
