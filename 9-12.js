function solution(n, r) {
  let answer;
  let store = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  console.log(store);

  function DFS(n, r) {
    if (store[n][r] !== 0) {
      return store[n][r];
    }
    if (n === r || r === 0) {
      return 1;
    } else {
      return (store[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }

  answer = DFS(n, r);

  return answer;
}

console.log(solution(5, 3));
