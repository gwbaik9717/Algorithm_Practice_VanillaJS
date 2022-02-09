// 정렬로 구해보기
function solution(times) {
  let answer = 0;
  let temp = 0;
  let store = [];
  for (let x of arr) {
    store.push([x[0], 1]); // 시작
    store.push([x[1], 0]); // 끝
  }

  store.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  for (let x of store) {
    switch (x[1]) {
      case 1:
        temp += 1;
        break;
      case 0:
        temp -= 1;
        break;
    }
    answer = Math.max(temp, answer);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
