num = int(input("enter your num: "))
for i in range(2,num):
    if num % i == 0:
        print("Not Prime")
        break
    else:
      if num > 1:
        print("Prime")
      else:
        print("Not Prime")