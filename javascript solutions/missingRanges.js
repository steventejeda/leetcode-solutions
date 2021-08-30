var findMissingRanges = function(nums, lower, upper) {
    const result = []
      const count = (low, hi) => hi - low - 1
      const set = (low, hi) => {
        if (count(low, hi) === 1) {
          result.push(`${low + 1}`)
        } else if (count(low, hi) > 1) {
          result.push(`${low + 1}->${hi - 1}`)
        }
      }
      for (let i = 0; i <= nums.length; i++) {
        set(
          i === 0 ? lower - 1 : nums[i - 1],
          i === nums.length ? upper + 1 : nums[i],
        )
      }
      return result
    };