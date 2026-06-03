def square(*number):
    list=[]
    for num in number:
        result=num*num
        list.append(result)
    return list
print(square(10,20,30))    