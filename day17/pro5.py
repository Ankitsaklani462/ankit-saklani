list=[1,2,3,4,2,3,1,4,5,7,2,4,7,9,1]
max_num=list[0]
for i in list:
    if max_num<i:
        max=i
print(max)
print(f"maximum value is:{max}")
