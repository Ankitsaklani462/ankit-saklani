import threading
def task1():
    for i in range(1,11):
        print(f"task1:{i}")
def task2():
    for i in range(1,11):
        print(f"task2:{i}")

t1=threading.Thread(target=task1)
t2=threading.Thread(target=task2)

t1.start()
t2.start()

t1.join()
t2.join()

for i in range(10):
    print("main thread=",i)