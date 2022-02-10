function solution(meeting) {
  // 빨리 끝나는 순으로 정렬
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let finish = 0;
  let answer = 0;

  for (let x of meeting) {
    if (x[0] >= finish) {
      answer++;
      finish = x[1];
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
