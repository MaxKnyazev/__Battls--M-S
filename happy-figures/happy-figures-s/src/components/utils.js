export const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export const randomArrayValue = (arr) => {
  // возвращает случайный элемент массива
  let rand = Math.random() * (arr.length);
  rand = Math.floor(rand);
  return arr[rand];
}