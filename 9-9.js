function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(v, sum) {
    if (v >= answer) {
      return;
    } // 레벨이 answer보다 더 높으면 검색 중단

    if (sum >= m) {
      if (m === sum) {
        console.log(v, sum);
        answer = Math.min(answer, v);
      }

      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(v + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
