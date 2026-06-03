inputnum=input("enter your num:")
size=len(inputnum)
num=int(inputnum)
count=0
for i in range(size):
    count=count+1
    num=num//10
print(count)