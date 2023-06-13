export function removeArrayElement(array: any[], index: number): any[] {
  let newArray = [...array]

  if (index === newArray.length - 1) newArray.pop()
  if (index === 0) newArray.shift()

  newArray = newArray.slice(0, index).concat(newArray.slice((index = 1)))

  return newArray
}
