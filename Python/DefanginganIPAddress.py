class Solution:
    def defangIPaddr(self, address: str) -> str:
        result_str = ""
        for i in list(address):
            if i == '.':
                result_str += '[.]'
            else:
                result_str += i
                
        return result_str
