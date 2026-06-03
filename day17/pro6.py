numbers = [1,2,3,4,5,6,7,8,9]
count = 0
count1=0
for i in numbers:
    if i % 2 == 0:
     count = count + 1
    else:
      count1=count1+1
print("even num:",count)
print("odd num:",count1)