num=int(input("Enter your num:"))  
sum1=0
def sum():
    if num==0:
     rem=num%10
     sum1=sum1+rem
     num=num//10
    return sum1+(sum(num))


print(sum(num))

