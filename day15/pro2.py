def employe(id,name,desig,salary):
    return f"Id:{id} | Name:{name} | Desig: {desig} | Salary:{salary}"
#keyword arrgument
print(employe(name="user1",desig="devloper",salary=45678,id=101))
#positionaing arrgument
print(employe("user1","devloper",45678,101))