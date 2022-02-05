function solution(s) {
  let answer = 0;
  let stack = [];
  let store = [];

  //레이저랑 그냥 꺼내는 것 구분하기
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === ")") {
        //레이저가 아니면 +1
        answer += 1;
      } else {
        //레이저이면 + 남아있는 막대수
        answer += stack.length;
      }
    }
  }

  return answer;
}

let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
