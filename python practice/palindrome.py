num=int(input("enter your first num:"))  
temp=num
rev=0
while num>0:
    rem=num%10 
    rev=rev*10+rem     
    num=num//10     
if (temp==rev):
    print("The number is a palindrome!")
else:
    print("The number is not a palindrome!")


   
    