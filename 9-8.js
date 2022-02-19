function solution(n, m) {
  let answer = [];
  let store = Array.from({ length: m }, () => 0);

  function DFS(v) {
    if (v >= m) {
      answer.push(store.join(""));
      return;
    } else {
      for (let i = 0; i < n; i++) {
        store[v] = i + 1;
        DFS(v + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

console.log(solution(3, 2));
