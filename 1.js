var twoSum = function(nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; ++i) {
    const compl = target - nums[i];
    const iCompl = hash[compl];
    if (typeof iCompl !== "undefined") {
      return [iCompl, i];
    }
    hash[nums[i]] = i;
  }
};
