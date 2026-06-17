import psycopg2


# Database Connection
def connect_db():
    connection = psycopg2.connect(
        host="localhost",
        database="employee_db",
        user="postgres",
        password="ankit"
    )
    return connection


# Create Employee
def create_employee():
    conn = connect_db()
    cursor = conn.cursor()

    name = input("Enter Name: ")
    age = int(input("Enter Age: "))
    dept = input("Enter Department: ")

    query = """
    INSERT INTO employee(name, age, department)
    VALUES (%s,%s,%s)
    """
    cursor.execute(query, (name, age, dept))
    conn.commit()
    print("Employee Added Successfully")
    cursor.close()
    conn.close()

# Read Employees
def read_employee():

    conn = connect_db()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM employee")

    data = cursor.fetchall()

    print("\nEmployee List\n")

    for row in data:
        print(row)

    cursor.close()
    conn.close()


# Update Employee
def update_employee():

    conn = connect_db()
    cursor = conn.cursor()

    emp_id = int(input("Enter Employee ID: "))
    new_dept = input("Enter New Department: ")

    query = """
    UPDATE employee
    SET department=%s
    WHERE id=%s
    """

    cursor.execute(query, (new_dept, emp_id))

    conn.commit()

    print("Employee Updated")

    cursor.close()
    conn.close()


# Delete Employee
def delete_employee():

    conn = connect_db()
    cursor = conn.cursor()

    emp_id = int(input("Enter Employee ID: "))

    query = """
    DELETE FROM employee
    WHERE id=%s
    """

    cursor.execute(query, (emp_id,))

    conn.commit()

    print("Employee Deleted")

    cursor.close()
    conn.close()


# Menu
while True:

    print("\n===== Employee CRUD =====")

    print("1. Create")
    print("2. Read")
    print("3. Update")
    print("4. Delete")
    print("5. Exit")

    choice = input("Enter Choice: ")

    if choice == "1":
        create_employee()

    elif choice == "2":
        read_employee()

    elif choice == "3":
        update_employee()

    elif choice == "4":
        delete_employee()

    elif choice == "5":
        print("Program Closed")
        break

    else:
        print("Invalid Choice")