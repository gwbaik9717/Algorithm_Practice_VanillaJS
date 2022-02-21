function solution(m, arr) {
  let answer = [];
  let temp = Array.from({ length: m }, () => 0);
  let checked = Array.from({ length: arr.length }, () => 0);

  function DFS(v) {
    if (v === m) {
      answer.push([...temp]);

      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (checked[i] === 0) {
          temp[v] = arr[i];
          checked[i] = 1;

          DFS(v + 1);

          checked[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

let arr = [2, 4, 8];
console.log(solution(2, arr));
