class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        indexList = [];
        if nums.count(target) == 0:
            return [-1, -1]
            
        for i in range(0, len(nums)):
            if nums[i] == target:
                indexList.append(i)
                
        if len(indexList) == 1:
            indexList.append(indexList[0])
        elif len(indexList) == 0:
            indexList = [0, 0]
        elif len(indexList) > 1:
            indexList = [indexList[0], indexList[-1]]
            
        return indexList
