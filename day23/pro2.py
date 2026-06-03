import random

password_length=int(input("Enter password length to generate password : "))
loop_for_single_char=0
pass_list=[]

loop_for_single_char = password_length//4
for i in range(loop_for_single_char):
    pass_list.append(chr(random.randint(65, 90)))

for i in range(loop_for_single_char):
    pass_list.append(chr(random.randint(97, 122)))

for i in range(loop_for_single_char):
    pass_list.append(chr(random.randint(48, 57)))

for i in range(password_length-(loop_for_single_char*3)):
    pass_list.append(chr(random.randint(33, 47)))

random.shuffle(pass_list)
password="".join(pass_list)

if len(password)>=8:
    print(password)
else:
    print(f"Password cant generated because length of password is : {password_length}")