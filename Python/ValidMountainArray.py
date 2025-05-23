class Solution:
    def validMountainArray(self, arr: list[int]) -> bool:
        mountain = list()
        for index, i in enumerate(arr):
            if index+1 < len(arr):
                if arr[index] < arr[index+1]:
                    if index > 1 and mountain[-1] == 'down':
                        mountain.append('up1')
                    mountain.append('up')
                elif arr[index] > arr[index+1]:
                    mountain.append('down')
                else:
                    mountain.append('flat')
        if 'flat' in mountain or 'up1' in mountain or len(arr) <= 1 or mountain[0] != 'up' or mountain.count('down') == 0:
            return False
        else:
            return True
