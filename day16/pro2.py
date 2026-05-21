try: 
   num1=int(input("Enter your num:"))
   num2=int(input("Enter your num:"))
   result=num1+num2
   print(result+"200")
except ValueError:
   print("handling code for value error")   
except TypeError:
   print("handling code for type error")   
except Exception:
   print("working inside exception handlings")   