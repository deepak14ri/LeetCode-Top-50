def freqCount(arr):
    freq = {}
    for item in arr:
        if item in freq:
            freq[item] += 1
        else:
            freq[item] = 1 
    return freq
    
arr = [1, 2, 1, 2, 3, 2, 4]
freqKeysValues = freqCount(arr)
# print(freqKeysValues.items()) //dict_items([(1, 2), (2, 3), (3, 1), (4, 1)])
oddKeysPairs = {key: value for key, value in freqKeysValues.items() if value%2 != 0}
print(sum(oddKeysPairs.keys())) #9