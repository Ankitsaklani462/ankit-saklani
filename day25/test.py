inputnum=input("enter your num:")
size=len(inputnum)
num=int(inputnum)
sum=0
for i in range(size):
    
    rem=num%10
    num=num//10
    sum=sum+rem
print(sum)