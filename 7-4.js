function solution(s) {
  let answer = null;
  let stack = [];

  for (let x of s) {
    if (x === "+" || x === "-" || x === "*" || x === "/") {
      if (answer === null) {
        answer = Number(stack.pop());
      }
      switch (x) {
        case "+":
          answer += Number(stack.pop());
          break;
        case "-":
          answer -= Number(stack.pop());
          break;
        case "*":
          answer *= Number(stack.pop());
          break;
        case "/":
          answer /= Number(stack.pop());
          break;
      }
    } else {
      stack.push(x);
    }
  }

  return answer;
}

let str = "352+*9-";
console.log(solution(str));
