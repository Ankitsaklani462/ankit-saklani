import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (endpoint, heading) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:5000/${endpoint}`);
      if (!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();
      
    
      setData(Array.isArray(result) ? result : [result]);
      setTitle(heading);
    } catch (error) {
      console.error("Error:", error);
      setData([]);
    }
    setLoading(false);
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Flask API Data Dashboard</h1>

      {/* Navigation Buttons */}
      <div className="btn-container" style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {["dashboard", "products", "orders", "employees", "students", "profile", "weather", "movies", "patients", "visitors"].map(item => (
          <button key={item} onClick={() => fetchData(item, `${item.toUpperCase()} DATA`)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
 
      <h2>{title}</h2>

      {/* Dynamic Table */}
      {loading ? <p>Loading...</p> : (
        data.length > 0 ? (
          <div className="table-wrapper">
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#1e293b', color: 'white' }}>
                  {Object.keys(data[0]).map((key) => (
                    <th key={key} style={{ padding: '12px' }}>{key.toUpperCase()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                    {Object.values(item).map((val, i) => (
                      <td key={i} style={{ padding: '12px' }}>
                        {typeof val === 'object' ? JSON.stringify(val) : val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>{title ? "No data found!" : "Please select a category above."}</p>
        )
      )}
    </div>
  );
}

export default App;