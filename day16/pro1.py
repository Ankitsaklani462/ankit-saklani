num1=int(input("Enter your first num:"))
num2=int(input("Enter your second num:"))
try:
    result=num1/num2
    print(f"result is :{result}")
except ZeroDivisionError:
    print("please do not enter second num as zero")
    num2=int(input("Enter your second num:"))
    try:
        result=num1/num2
        print(f"result is :{result}")
    except ZeroDivisionError:
        print("please do not enter second num as zero this is last chance")
        num2=int(input("Enter your second num:"))
        try:
          result=num1/num2
          print(f"result is :{result}")
        except Exception:
            print("You are not allowed to use this service")
print("line100")
print("line1000")            
    