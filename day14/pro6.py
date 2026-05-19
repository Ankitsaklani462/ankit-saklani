status = True
while status:
    print("""
            1.Add
            2.Sub
            3.Mult
            4.Div
            5.Exit
            """)
    choice = int(input("enter your choice:"))
    if choice == 1:
        num1 = int(input("Enter your digit:"))
        num2 = int(input("Enter your digit:"))
        result = num1 + num2
        print(f"sum of your num:{result}")
    elif choice == 2:
        num1 = int(input("Enter your digit:"))
        num2 = int(input("Enter your digit:"))
        result = num1 - num2
        print(f"sub of your num:{result}")
    elif choice == 3:
        num1 = int(input("Enter your digit:"))
        num2 = int(input("Enter your digit:"))
        result = num1 * num2
        print(f"multi of your num:{result}")
    elif choice == 4:
        num1 = int(input("Enter your digit:"))
        num2 = int(input("Enter your digit:"))
        result = num1 / num2
        print(f"div of your num:{result}")
    else:
        print("Thank your for using calculator")
        status = False
