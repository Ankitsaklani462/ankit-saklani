mixed_data = [1, "hello", 3.4, 50, "world", 9]
integers=[]
for i in mixed_data:
    if type(i)==int:
        integers.append(i)
print(integers)      