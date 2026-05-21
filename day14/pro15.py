from datetime import date
dob_input = input("Enter your DOB (YYYY-MM-DD): ")
dob = date.fromisoformat(dob_input)
today = date.today()
age = today.year - dob.year
if (today.month, today.day) < (dob.month, dob.day):
    age -= 1
print(f"Your age is {age} years")