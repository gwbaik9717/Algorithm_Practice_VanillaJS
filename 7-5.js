function solution(s) {
  let answer = 0;
  let stack = [];
  let store = [];

  //레이저랑 그냥 꺼내는 것 구분하기
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(0);
    } else {
      if (s[i - 1] === ")") {
        //레이저가 아님
        store.push(stack.pop());
      } else {
        //레이저임
        stack.pop();
        for (let i = 0; i < stack.length; i++) {
          stack[i]++;
        }
      }
    }
  }

  for (let x of store) {
    answer += x + 1;
  }

  return answer;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
