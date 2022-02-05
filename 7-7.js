function solution(need, plan) {
  let answer;
  let store = [];

  let queue = plan.split("");

  while (queue.length > 0) {
    let toRemove = queue.shift();
    for (let y of need) {
      if (toRemove === y) {
        store.push(toRemove);
      }
    }
  }

  if (store.join("") === need) {
    answer = "YES";
  } else {
    answer = "NO";
  }

  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
