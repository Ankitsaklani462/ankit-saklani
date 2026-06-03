inputnum=input("enter your num:")
size=len(inputnum)
num=int(inputnum)
reverse=0
for i in range(size):
   rem=num%10
   num=num//10
   reverse=reverse*10+rem
print(reverse)