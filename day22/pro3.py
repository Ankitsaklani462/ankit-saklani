import threading
import random

def generate_contact(filename,totalrecord):
    with open (filename,"w")as file:
        for _ in range(totalrecord):
            number=random.randint(6000000000,9999999999)
            file.write(str(number)+"\n")

generate_contact("contact1.txt",200)
generate_contact("contact2.txt",200)

print("files generate sucessfully")

def search_number(filename, targetnum):
    found = False

    with open(filename, "r") as file:
        for line_no, number in enumerate(file, start=1):
            number = number.strip()

            if number == targetnum:
                print(f"{targetnum} found in {filename} at line {line_no}")
                found = True
                break

    if not found:
        print(f"{targetnum} not found in {filename}")


search = input("Enter your num := ")


t1 = threading.Thread(
    target=search_number,
    args=("contact1.txt", search)
)

t2 = threading.Thread(
    target=search_number,
    args=("contact2.txt", search)
)

t1.start()
t2.start()

t1.join()
t2.join()

