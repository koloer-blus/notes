/**
 * 
 * @param {number[]} array
 */
const insertionSort = (array) => {
  const arr = [...array];
  const Len = array.length;
  for (let i = 0; i < Len; i++) {
    for (let j = i; j > 0 && (arr[j] < arr[j-1]); j--) {
      if (arr[j] < arr[j-1]) {
        let temp =  arr[j-1]
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr = [6,4,3,7,2,1,9,13,10];

console.log(insertionSort(arr));