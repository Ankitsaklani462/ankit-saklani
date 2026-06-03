employee =[
    {"id":101,"name":"user1","desig":"data analyst","salary":56789},
    {"id":102,"name":"user2","desig":"frontend devloper","salary":56789},
    {"id":103,"name":"user3","desig":"backend developer","salary":56789},
    {"id":104,"name":"user4","desig":"devops engineer","salary":56789},
]

while True:
    employee["id"]=int(input("Enter new employee id : "))
    employee["name"]=input("Enter user name : ")
    employee["desig"]=input("Enter user designation : ")
    employee["salary"]=float(input("Eanter user salary : "))
    employee.append(employee)
    print(employee)

