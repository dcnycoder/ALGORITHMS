nums = [1,2,3,1,2,3]
nums1 = [1,2,3,1]
k = 3

var containsNearbyDuplicate = function(nums, k) {
  let chars = {}

  for (let i=0; i<nums.length; i++) {
    const char = nums[i]
    if (!char in chars) chars[char] = i
    else {
      if (Math.abs(chars[char] - i) <= k) return true
      else chars[char] = i
    }
  }
  return false
}

console.log(containsNearbyDuplicate(nums1, k))