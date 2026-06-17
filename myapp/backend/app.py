from flask import Flask
from flask import request
from flask import jsonify

from flask_cors import CORS

from db import EmployeeCRUD


app = Flask(__name__)

# Enable CORS
CORS(app)

employee = EmployeeCRUD()


@app.route("/employees", methods=["GET"])
def get_all():
    return jsonify(
        employee.get_all_employees()
    )


@app.route("/employees", methods=["POST"])
def create():

    data = request.json

    emp_id = employee.create_employee(
        data
    )

    return jsonify({
        "message": "Created",
        "id": emp_id
    })


@app.route("/employees/<int:id>",methods=["PUT"])
def update(id):
    data = request.json
    employee.update_employee(id,data)
    return jsonify({
        "message": "Updated"
    })


@app.route(
    "/employees/<int:id>",
    methods=["DELETE"]
)
def delete(id):

    employee.delete_employee(id)

    return jsonify({
        "message": "Deleted"
    })


if __name__ == "__main__":

    app.run(
        debug=True
    )