class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        pref = strs[0]
        prefLen = len(pref)
        for i in range(1, len(strs)):
            s = strs[i]
            while(pref != s[:prefLen]):
                prefLen -= 1
                if prefLen==0:
                    return ''
                pref = pref[:prefLen] 

        return pref
        