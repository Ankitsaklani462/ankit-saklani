import { useEffect, useState } from "react";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
} from "./services/employeeService";

function App() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state added

  // 1. Load Employees with Error Handling
  async function loadEmployees() {
    setLoading(true);
    try {
      const data = await getEmployees();
      setEmployees(data || []); // Fallback to empty array if data is undefined
    } catch (error) {
      console.error("Failed to load employees:", error);
      alert("Error loading employee data. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  // 2. Save / Update Employee
  async function saveEmployee(data) {
    try {
      if (selected) {
        await updateEmployee(selected.id, data);
        setSelected(null); // Reset selection after successful update
      } else {
        await createEmployee(data);
      }
      await loadEmployees(); // Refresh the list
    } catch (error) {
      console.error("Error saving employee:", error);
      alert("Could not save employee. Please check your data.");
    }
  }

  // 3. Remove Employee with Confirmation
  async function removeEmployee(id) {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;
    
    try {
      await deleteEmployee(id);
      await loadEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee.");
    }
  }

  // 4. Set Employee for Editing
  function editEmployee(emp) {
    setSelected(emp);
  }

  // 5. Clear selection (for a "Cancel" button in your form)
  function cancelEdit() {
    setSelected(null);
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Employee CRUD</h1>

      <EmployeeForm
        selected={selected}
        save={saveEmployee}
        cancel={cancelEdit} // Form ko cancel option dene ke liye
      />

      <hr style={{ margin: "24px 0" }} />

      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <EmployeeTable
          employees={employees}
          edit={editEmployee}
          remove={removeEmployee}
        />
      )}
    </div>
  );
}

export default App;