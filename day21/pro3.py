import threading

class Test(threading.Thread):
    def run(self):
        for i in range(1,10):
            print(f"first={i}")

class Test1(threading.Thread):
    def run(self):
        for j in range(1,10):
            print(f"second={j}")

t1=Test()
t2=Test1()

t1.start()
t2.start()