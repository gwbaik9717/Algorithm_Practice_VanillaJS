function solution(arr1, arr2){
    let pointer1 = 0;
    let pointer2 = 0;
    let answer = [];
  
    while(pointer1 < arr1.length && pointer2 < arr2.length){
      if(arr1[pointer1] > arr2[pointer2]){
        answer.push(arr2[pointer2++]);
      }
      else{
        answer.push(arr1[pointer1++]);
      }
    }
  
    if(pointer1 >= arr1.length){
      answer = answer.concat(arr2.splice(pointer2));
      return answer; 
    }
  
    if(pointer2 >= arr2.length){
      answer = answer.concat(arr1.splice(pointer1));
      return answer; 
    }
  }
   
  
  let a=[1, 3, 5];
  let b=[2, 3, 6, 7, 9];
  console.log(solution(a, b));