def twoNumberSum(array, targetSum):
    # Write your code here.
	for i in range(len(array)):
		firstNum = array[i]
		for j in range(i + 1, len(array)):
			secondNum = array[j]
			if firstNum + secondNum == targetSum:
				return [firstNum, secondNum]
	return []