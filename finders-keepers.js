function findElement(arr, func) {
  let num;

  const filter = arr.filter(func)
  if (filter.length) return filter[0]

  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);