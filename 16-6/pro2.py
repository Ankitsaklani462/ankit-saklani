import psycopg2


class EmployeeCRUD:

    def __init__(self):

        self.connection = psycopg2.connect(
            host="localhost",
            database="employee_db",
            user="postgres",
            password="kamal"
        )

        self.cursor = self.connection.cursor()


    # Create
    def create_employee(self):

        name = input("Enter Name: ")
        age = int(input("Enter Age: "))
        department = input("Enter Department: ")

        query = """
        INSERT INTO employees(name, age, department)
        VALUES(%s,%s,%s)
        """

        self.cursor.execute(
            query,
            (name, age, department)
        )

        self.connection.commit()

        print("Employee Added Successfully")


    # Read
    def read_employee(self):

        query = "SELECT * FROM employees"

        self.cursor.execute(query)

        employees = self.cursor.fetchall()

        print("\n===== Employee List =====")

        for emp in employees:
            print(
                f"ID: {emp[0]} | "
                f"Name: {emp[1]} | "
                f"Age: {emp[2]} | "
                f"Department: {emp[3]}"
            )


    # Update
    def update_employee(self):

        emp_id = int(input("Enter Employee ID: "))
        department = input("Enter New Department: ")

        query = """
        UPDATE employees
        SET department=%s
        WHERE id=%s
        """

        self.cursor.execute(
            query,
            (department, emp_id)
        )

        self.connection.commit()

        print("Employee Updated Successfully")


    # Delete
    def delete_employee(self):

        emp_id = int(input("Enter Employee ID: "))

        query = """
        DELETE FROM employees
        WHERE id=%s
        """

        self.cursor.execute(
            query,
            (emp_id,)
        )

        self.connection.commit()

        print("Employee Deleted Successfully")


    # Close Connection
    def close_connection(self):

        self.cursor.close()
        self.connection.close()

        print("Database Connection Closed")


    # Menu
    def menu(self):

        while True:

            print("\n===== EMPLOYEE CRUD =====")

            print("1. Create")
            print("2. Read")
            print("3. Update")
            print("4. Delete")
            print("5. Exit")

            choice = input("Enter Choice: ")

            if choice == "1":
                self.create_employee()

            elif choice == "2":
                self.read_employee()

            elif choice == "3":
                self.update_employee()

            elif choice == "4":
                self.delete_employee()

            elif choice == "5":
                self.close_connection()
                break

            else:
                print("Invalid Choice")


# Driver Code
obj = EmployeeCRUD()

obj.menu()