function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(n, score, time) {
    if (time > m) {
      return;
    } else {
      if (n === ps.length) {
        answer = Math.max(answer, score);
      } else {
        DFS(n + 1, score + ps[n], time + pt[n]);
        DFS(n + 1, score, time);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
