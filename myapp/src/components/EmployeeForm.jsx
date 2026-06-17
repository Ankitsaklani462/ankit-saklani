import { useEffect, useState } from "react";

function EmployeeForm({ selected, save }) {
    const [form, setForm] = useState({
        name: "",
        age: "",
        department: ""
    });

    // Modified Effect: Jab selected data update ho jaye ya clear (null) ho, form apne aap sync hoga
    useEffect(() => {
        if (selected) {
            setForm(selected);
        } else {
            // Agar edit complete ho jaye aur selected null ho, toh form khali ho jaye
            setForm({
                name: "",
                age: "",
                department: ""
            });
        }
    }, [selected]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Safe-side validation check (koi field khali na chhoote)
        if (!form.name.trim() || !form.age || !form.department.trim()) {
            alert("Sari fields bharna zaroori hai!");
            return;
        }

        // Parent function (App.jsx) ko data pass karein
        save(form);

        // Agar hum naya employee bana rahe the (selected null tha), toh form ko manually reset karenge
        if (!selected) {
            setForm({
                name: "",
                age: "",
                department: ""
            });
        }
        // Agar Edit tha, toh App.jsx ka "setSelected(null)" chalne par upar wala useEffect khud hi isse reset kar dega
    };

    return (
        <div>
            <h2>{selected ? "Edit Employee" : "Add Employee"}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="age"
                    placeholder="Enter Age"
                    value={form.age}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={form.department}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">
                    {selected ? "Update" : "Create"}
                </button>
            </form>
        </div>
    );
}

export default EmployeeForm;