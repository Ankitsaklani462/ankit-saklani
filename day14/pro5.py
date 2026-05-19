num1=int(input("Enter your num1:"))
num2=int(input("Enter your num2:"))
num3=int(input("Enter your num3:"))
if num1>num2 and num1>num3:
    print(f"num1 is bigger:{num1}")
else:
    if num2>num3:
        print(f"num2 is bigger:{num2}")
    else:
        print(f"num3 is bigger:{num3}")
