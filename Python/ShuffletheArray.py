class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        x = nums[0:n]
        y = nums[n:len(nums)]
        result = list()
        i = 0
        while i < len(x):
            result.append(x[i])
            result.append(y[i])
            i += 1
        return result
