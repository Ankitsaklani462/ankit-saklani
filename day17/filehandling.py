num1=int(input("Enter first num:"))
num2=int(input("Enter second num:"))
Result=num1+num2
print(f"sum of your num:{Result}")
file=open("abc.txt","w")
file.write(str(Result))
file.close()
print("Successfully saved")