def emplyee(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}:{value}")

emplyee(id=101,name="user1",salary=45657,desig="developer",city="rewari")  