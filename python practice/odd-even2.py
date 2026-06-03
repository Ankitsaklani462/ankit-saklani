num= int(input("Enter a number: "))
checknum=lambda num : "even" if num%2==0 else "odd"
result = checknum(num)
print(result)