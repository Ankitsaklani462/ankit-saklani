const API = "http://127.0.0.1:5000/employees";

// GET ALL
export async function getEmployees() {
    const response = await fetch(API);
    return await response.json();
}

// GET BY ID
export async function getEmployee(id) {
    const response = await fetch(`${API}/${id}`);
    return await response.json();
}

// CREATE
export async function createEmployee(data) {
    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

// UPDATE
export async function updateEmployee(id, data) {
    await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}

// DELETE
export async function deleteEmployee(id) {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    });
}