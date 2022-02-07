// 이분 탐색
function binarySearch(arr, target, lp, rp) {
  let mid = Math.floor((lp + rp) / 2);

  if (target < arr[mid]) {
    rp--;
    return binarySearch(arr, target, lp, rp);
  } else if (target > arr[mid]) {
    lp++;
    return binarySearch(arr, target, lp, rp);
  } else {
    return mid;
  }
}

function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lp = 0;
  let rp = arr.length - 1;

  answer = binarySearch(arr, target, lp, rp);

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
