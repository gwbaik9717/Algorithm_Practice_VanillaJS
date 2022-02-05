//삽입정렬
function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (key < arr[j]) {
        //한 칸 오른쪽으로
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = key;
  }

  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
