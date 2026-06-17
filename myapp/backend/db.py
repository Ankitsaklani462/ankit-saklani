import psycopg2


class EmployeeCRUD:

    def __init__(self):

        self.connection = psycopg2.connect(
            host="localhost",
            database="employee_db",
            user="postgres",
            password="ankit"
        )

        self.cursor = self.connection.cursor()


    # CREATE
    def create_employee(self, data):

        query = """
        INSERT INTO employee(name, age, department)
        VALUES(%s,%s,%s)
        RETURNING id
        """

        self.cursor.execute(
            query,
            (
                data["name"],
                data["age"],
                data["department"]
            )
        )

        emp_id = self.cursor.fetchone()[0]

        self.connection.commit()

        return emp_id


    # READ
    def get_all_employees(self):

        self.cursor.execute(
            "SELECT * FROM employee"
        )

        data = self.cursor.fetchall()

        result = []

        for emp in data:

            result.append({
                "id": emp[0],
                "name": emp[1],
                "age": emp[2],
                "department": emp[3]
            })

        return result


    # READ BY ID
    def get_employee(self, emp_id):

        query = """
        SELECT * FROM employee
        WHERE id=%s
        """

        self.cursor.execute(
            query,
            (emp_id,)
        )

        emp = self.cursor.fetchone()

        if emp:

            return {
                "id": emp[0],
                "name": emp[1],
                "age": emp[2],
                "department": emp[3]
            }

        return None


    # UPDATE
    def update_employee(self,emp_id,data):

        query = """
        UPDATE employee
        SET
            name=%s,
            age=%s,
            department=%s
        WHERE id=%s
        """

        self.cursor.execute(
            query,
            (
                data["name"],
                data["age"],
                data["department"],
                emp_id
            )
        )

        self.connection.commit()


    # DELETE
    def delete_employee(
        self,
        emp_id
    ):

        query = """
        DELETE FROM employee
        WHERE id=%s
        """

        self.cursor.execute(
            query,
            (emp_id,)
        )

        self.connection.commit()