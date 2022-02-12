function solution(n) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0);

  function DFS(v) {
    if (v === n + 1) {
      let temp = "";
      check.forEach((value, index) => {
        if (value === 1) {
          temp += index;
        }
      });

      if (temp) {
        answer.push(temp);
      }
      return;
    } else {
      check[v] = 1;
      DFS(v + 1);

      check[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3));
