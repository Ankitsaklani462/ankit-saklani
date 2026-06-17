function EmployeeTable({
    employees,
    edit,
    remove
}) {
    return (
        <div>
            <h2>Employee List</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.department}</td>

                            <td>
                                <button
                                    onClick={() => edit(emp)}
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => remove(emp.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;