import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. Link import kiya
import './VisitorPass.css';

const VisitorPass = () => {
    const [formData, setFormData] = useState({
        visitorId: '', date: '', inTime: '', outTime: '', name: '',
        gender: '', phone: '', email: '', company: '',
        designation: '', address: '', purpose: '', meet: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const now = new Date();
        setFormData(prev => ({
            ...prev,
            visitorId: `TBDI${Date.now().toString().slice(-8)}`,
            date: now.toISOString().split('T')[0],
            inTime: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        Object.keys(formData).forEach(key => {
            if (key === 'gender') {
                if (!formData.gender) newErrors.gender = true;
            } else if (key !== 'outTime' && !formData[key]) {
                newErrors[key] = true;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            alert("Please fill all mandatory fields!");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/visitor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Success:", result);
                alert("Gate Pass Generated Successfully!");

                setFormData({
                    visitorId: `TBDI${Date.now().toString().slice(-8)}`,
                    date: new Date().toISOString().split('T')[0],
                    inTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    outTime: '', name: '', gender: '', phone: '', email: '',
                    company: '', designation: '', address: '', purpose: '', meet: ''
                });
                setErrors({});
            } else {
                alert("Server error: Could not save data.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Make sure your backend server is running on port 5000!");
        }
    };

    const inputClass = (name) => errors[name] ? 'error-input' : '';

    return (
        <div className="app-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'})` }}>
            <div className="form-card">
                <div className="logo-container">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Company Logo" />
                </div>
                <div className="header">Visitor Registration</div>
                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="group"><label>VISITOR ID</label><input value={formData.visitorId} readOnly style={{ background: '#f1f5f9' }} /></div>
                        <div className="group"><label>DATE</label><input value={formData.date} readOnly style={{ background: '#f1f5f9' }} /></div>
                        <div className="group"><label>IN TIME</label><input value={formData.inTime} readOnly style={{ background: '#f1f5f9' }} /></div>
                        <div className="group"><label>OUT TIME</label><input type="time" name="outTime" value={formData.outTime} className={inputClass('outTime')} onChange={handleChange} /></div>

                        <div className="group full-width"><label>FULL NAME</label><input name="name" value={formData.name} className={inputClass('name')} onChange={handleChange} /></div>

                        <div className={`group ${errors.gender ? 'error-input-container' : ''}`}>
                            <label style={{ color: errors.gender ? '#ef4444' : '#64748b' }}>GENDER</label>
                            <div style={{ display: 'flex', gap: '25px', padding: '10px 0' }}>
                                {['Male', 'Female', 'Other'].map(g => (
                                    <label key={g} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} style={{ width: 'auto' }} /> {g}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="group"><label>CONTACT</label><input name="phone" type="number" value={formData.phone} className={inputClass('phone')} onChange={handleChange} /></div>
                        <div className="group"><label>EMAIL</label><input name="email" type="email" value={formData.email} className={inputClass('email')} onChange={handleChange} /></div>
                        <div className="group"><label>COMPANY</label><input name="company" value={formData.company} className={inputClass('company')} onChange={handleChange} /></div>
                        <div className="group"><label>DESIGNATION</label><input name="designation" value={formData.designation} className={inputClass('designation')} onChange={handleChange} /></div>
                        <div className="group full-width"><label>ADDRESS</label><textarea name="address" rows="2" value={formData.address} className={inputClass('address')} onChange={handleChange} /></div>
                        <div className="group"><label>PURPOSE</label><input name="purpose" value={formData.purpose} className={inputClass('purpose')} onChange={handleChange} /></div>
                        <div className="group"><label>WHOM TO MEET</label><input name="meet" value={formData.meet} className={inputClass('meet')} onChange={handleChange} /></div>
                    </div>
                    <button type="submit">GENERATE GATE PASS</button>
                </form>
                
               
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/admin" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>
                        Go to Admin Panel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VisitorPass;