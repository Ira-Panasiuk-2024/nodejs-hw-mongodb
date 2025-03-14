export const calculatePaginationData = (totalItems, perPage, page) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const hasNextPage = totalPages > page;
  const hasPreviousPage = page > 1;

  return {
    page,
    perPage,
    totalItems,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};
