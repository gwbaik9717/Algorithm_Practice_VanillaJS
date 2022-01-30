function solution(arr) {
    let ans = [];
  
    for (let i = 0; i < arr[0].length - 1; i++) {
        for (let j = i + 1; j < arr[0].length; j++) {
            const temp = [arr[0][i], arr[0][j]];
            ans.push(temp);
        }
    }  
  
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < ans.length; j++) {
            let tchr = ans[j][0];
            let stnt = ans[j][1];
  
            if (arr[i].indexOf(tchr) > arr[i].indexOf(stnt)) {
                ans.splice(j, 1);
                j--;
            }
        }
    }
  
    console.log(ans);
  
    return ans.length;
  }
  
  let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2]
  ];
  console.log(solution(arr));