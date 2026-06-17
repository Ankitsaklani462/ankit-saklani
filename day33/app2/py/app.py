from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 1 Employees
@app.route("/employees")
def employees():
    return jsonify([
        {"id": 1, "name": "Rahul", "department": "IT", "salary": 50000},
        {"id": 2, "name": "Aman", "department": "HR", "salary": 45000}
    ])

# 2 Students
@app.route("/students")
def students():
    return jsonify([
        {"roll": 101, "name": "Priya", "course": "BCA", "marks": 85},
        {"roll": 102, "name": "Neha", "course": "MCA", "marks": 90}
    ])

# 3 Products
@app.route("/products")
def products():
    return jsonify([
        {"name": "Laptop", "price": 50000, "category": "Electronics", "stock": 10},
        {"name": "Mobile", "price": 20000, "category": "Electronics", "stock": 20}
    ])

# 4 Profile
@app.route("/profile")
def profile():
    return jsonify({
        "name": "Rohit",
        "email": "rohit@gmail.com",
        "city": "Delhi",
        "mobile": "9876543210"
    })

# 5 Movies
@app.route("/movies")
def movies():
    return jsonify([
        {"title": "KGF", "rating": 9, "year": 2022, "genre": "Action"},
        {"title": "Dangal", "rating": 8.5, "year": 2016, "genre": "Drama"}
    ])

# 6 Orders
@app.route("/orders")
def orders():
    return jsonify([
        {"id": 1, "customer": "Amit", "amount": 1200, "status": "Delivered"},
        {"id": 2, "customer": "Karan", "amount": 3000, "status": "Pending"}
    ])

# 7 Weather
@app.route("/weather")
def weather():
    return jsonify([
        {"city": "Delhi", "temperature": 35, "humidity": 60, "condition": "Sunny"},
        {"city": "Mumbai", "temperature": 30, "humidity": 80, "condition": "Cloudy"}
    ])

# 8 Patients
@app.route("/patients")
def patients():
    return jsonify([
        {"id": 1, "name": "Rakesh", "disease": "Fever", "doctor": "Dr Sharma", "room": 101},
        {"id": 2, "name": "Suresh", "disease": "Diabetes", "doctor": "Dr Gupta", "room": 102}
    ])

# 9 Visitors
@app.route("/visitors")
def visitors():
    return jsonify([
        {"name": "Ankit", "purpose": "Meeting", "entry": "10:00 AM", "employee": "Rahul"},
        {"name": "Pooja", "purpose": "Interview", "entry": "11:30 AM", "employee": "Aman"}
    ])

# 10 Dashboard
@app.route("/dashboard")
def dashboard():
    return jsonify({
        "total_products": 150,
        "total_users": 500,
        "total_orders": 1200,
        "total_revenue": 500000
    })

if __name__ == "__main__":
    app.run(debug=True)