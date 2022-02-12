function solution(v) {
  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      console.log(v); // 중간
      DFS(2 * v); // 왼쪽 자식
      DFS(2 * v + 1); // 오른쪽 자식
    }
  }
  DFS(v);
}

console.log(solution(1));
