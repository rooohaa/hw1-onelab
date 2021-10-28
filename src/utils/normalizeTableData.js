export const normalizeTableData = (currenciesObject) => {
  const res = []

  for (const [key, value] of Object.entries(currenciesObject)) {
    const row = {
      id: key,
      name: key,
      purValue: value.toFixed(2),
      saleValue: (value * 1.02).toFixed(2),
    }

    res.push(row)
  }
  return res
}
