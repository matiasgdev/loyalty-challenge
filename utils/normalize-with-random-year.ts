export const normalizeWithRandomYear = (ISODate?: string) => {
  if (!ISODate) return '';

  const date = new Date(ISODate);
  const month = date.getMonth() + 1;
  const year = date.getFullYear() + 7;

  return [month >= 10 ? month : '0'.concat(month.toString()), year].join('/');
};
