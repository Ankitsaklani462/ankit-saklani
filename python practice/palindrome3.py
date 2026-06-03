def check(num):
    return str(num)==''.join(reversed(str(num)))


num=int(input("enter your first num:"))

if check(num):
     print("The number is a palindrome!")
else:
  print("The number is not a palindrome.")



   
    