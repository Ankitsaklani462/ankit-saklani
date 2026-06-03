class A:
    def __init__(self,value1):
        self.value1=value1
        print("class a counstructor")
    def disp1(self):
        print("disp1 of class A")

class B(A):
    def __init__(self,value1,value2):
        super().__init__(value1)
        self.value2=value2
        print("child class counstructor")

    def dispinfo(self):
        print(f"Value 1 is : {self.value1} | Value 2 is : {self.value2}")

    def disp1(self):
        print("disp method of class b")

obj = B(100,200)
obj.dispinfo()