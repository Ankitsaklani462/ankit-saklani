num=int(input("Enter your num:"))
result=0
while (num>0):
    rem=num%10
    num=int(num/10)
    result=result+rem
print(result) 