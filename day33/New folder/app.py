from flask import Flask
from flask import jsonify
from flask_cors import CORS

app= Flask(__name__)
CORS(app)

employees = [
    {
        "id":101,
        "name":"Kamal",
        "department":"it",
        "salary":60000

    },
    {
        "id":102,
        "name":"Kamali",
        "department":"itbp",
        "salary":600000

    },
    {
        "id":103,
        "name":"Kama",
        "department":"ito",
        "salary":6000000

    }
]

@app.route('/')
def home():
    return "Welcome Ankit"

@app.route('/about')
def about():
    return "Welcome Ankit ji"

@app.route("/employees",methods=["GET"])
def get_employees():
    return jsonify({
        "status": "success",
        "count":len(employees),
        "data":employees
    })

if __name__ =="__main__":
  app.run(debug=True)