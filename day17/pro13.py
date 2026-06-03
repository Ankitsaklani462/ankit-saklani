num=[2,-1,5,-7,8,-3] 
num_positive=[]
num_negative=[]
for i in num:
 if i>0:
    num_positive.append(i)
 else:
   num_negative.append(i)
print(num_negative)
print(num_positive)