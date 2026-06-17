import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
    const [visitors, setVisitors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/visitors')
            .then(res => res.json())
            .then(data => setVisitors(data))
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="admin-container">
            <div className="admin-header">
                <h2>Visitor Logs</h2>
                <Link to="/" className="back-btn">← Back to Form</Link>
            </div>
          
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th><th>Date</th><th>In Time</th><th>Out Time</th>
                            <th>Name</th><th>Gender</th><th>Phone</th><th>Email</th>
                            <th>Company</th><th>Designation</th><th>Address</th>
                            <th>Purpose</th><th>Meet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visitors.map((v, i) => (
                            <tr key={i}>
                                <td>{v.visitorId}</td>
                                <td>{v.date}</td>
                                <td>{v.inTime}</td>
                                <td>{v.outTime}</td>
                                <td>{v.name}</td>
                                <td>{v.gender}</td>
                                <td>{v.phone}</td>
                                <td>{v.email}</td>
                                <td>{v.company}</td>
                                <td>{v.designation}</td>
                                <td>{v.address}</td>
                                <td>{v.purpose}</td>
                                <td>{v.meet}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;