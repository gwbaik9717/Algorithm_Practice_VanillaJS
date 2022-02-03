function solution(s){
    let answer = 'YES';
    let stack = [];
  
    for(let x of a){
      if(x === '('){
        stack.push('(');
      }else{
        if(!stack.length){
          return 'NO';
        }else{
          stack.pop();
        }
      }
    }
  
    if(stack.length){
      return 'NO';
    }
  
    return answer;
  }
  
  let a="(()(()))(()";
  console.log(solution(a));