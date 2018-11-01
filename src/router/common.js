export function routerize(realMonth) {
  const year = String(realMonth.year);
  const month = String(realMonth.month + 1);
  return {
    year,
    month,
  };
}

export function derouterize(routerPath) {
  const year = Number(routerPath.year);
  const month = Number(routerPath.month) - 1;
  return {
    year,
    month,
  };
}
