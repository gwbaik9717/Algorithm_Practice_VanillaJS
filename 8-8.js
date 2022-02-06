function solution(meeting) {
  meeting.sort((a, b) => a[0] - b[0]);
  let min = Number.MAX_SAFE_INTEGER;
  let answer = 0;

  for (let i = 0; i < meeting.length - 1; i++) {
    min = Math.min(min, meeting[i][1]);
    //마지막이면 무조건 +1
    if (i + 1 === meeting.length - 1) {
      answer++;
    }

    if (min <= meeting[i + 1][0]) {
      answer++;
      min = Number.MAX_SAFE_INTEGER;
    }
  }

  return answer;
}

//let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let arr = [
  [1, 3],
  [1, 4],
  [2, 3],
];
console.log(solution(arr));
