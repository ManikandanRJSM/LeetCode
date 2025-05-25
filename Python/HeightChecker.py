class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        expected = sorted(heights)
        indices = 0
        for key, val in enumerate(heights):
            if heights[key] != expected[key]:
                indices +=1
        return indices
