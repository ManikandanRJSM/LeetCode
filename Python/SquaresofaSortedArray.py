class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        for index, i in enumerate(nums):
            nums[index] = i**2
        return sorted(nums)
