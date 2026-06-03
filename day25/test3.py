inputnum=input("enter your num:")
small=9
size=len(inputnum)
num=int(inputnum)
for i in range(size):
    rem=num%10
    num=num//10
    if rem<small:
        small=rem
print(small)