function solution(arr) {
  let answer = "NO";
  const target = arr.reduce((a, b) => a + b, 0) / 2;
  let flag = 0; // 답을 찾았을 경우 바로 종료

  function DFS(L, sum) {
    if (flag) return;

    if (L === arr.length) {
      if (sum === target) {
        answer = "YES";
        flag = 1; // 답을 찾으면 이후 건 보지 않음.
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
