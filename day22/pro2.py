import random
import threading
def generate_contact(filename,totalrecord):
    with open (filename,"w")as file:
        for _ in range(totalrecord):
            number=random.randint(6000000000,9999999999)
            file.write(str(number)+"\n")

generate_contact("contact1.txt",200)
generate_contact("contact2.txt",200)

print("files generate sucessfully")
