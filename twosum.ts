function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) { 
      for (let j = i + 1; j < nums.length; j++) {  
        if (nums[j] + nums[i] === target) { 
          return [i, j];  
        }
      }
    }
    return []; 
  }

  twoSum([1,2,3],4)

  console.log(twoSum([1,2,3],4))