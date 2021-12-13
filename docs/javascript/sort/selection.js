/**
 * 
 * @param {number[]} array
 */
const selectionSort = (array) => {
  const arr = [...array];
  const Len = array.length;
  for (let i = 0; i < Len; i++) {
    const min = i;
    for (let j = i + 1; j < Len; j++) {
      if (arr[j] < arr[min]) {
        let temp =  arr[min]
        arr[min] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr = [6,4,3,7,2,1,9,13,10];

console.log(selectionSort(arr));