count = 0
num = 2

while count < 100:
    status = True

    for i in range(2, num):
        if num % i == 0:
            status = False
            break

    if status:
        print(num)
        count=count+1

    num=num+ 1