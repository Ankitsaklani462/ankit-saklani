class Mobile:
    def __init__(self):
        print("default constructor")
    def dispinfo(self):
        print("working inside the dispinfo method")
    def calling(self):
        print("working fine")
    def __call__(self, *args, **kwds):
        print("hello use")

mi = Mobile()
samsung= Mobile()
samsung.dispinfo()
mi.calling()

