num= int(input("Enter a number: "))
def numcheck(num):
  if( num<2):
    return (num%2==0)
  return (numcheck(num-2))

if (numcheck(num)==True):
   print("Even")
else:
  print("odd")
    
    