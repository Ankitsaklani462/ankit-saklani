class Parent:
    def assets(self):
        print("asset of parent")

class Child(Parent):
    def business(self):
        print("child class business method")

obj=Child()
obj.business()
obj.assets()                