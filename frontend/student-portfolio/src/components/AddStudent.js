import React, { useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:3000/student';

function AddStudent({ onSuccess }) {
  const [form, setForm] = useState({
    name: '', email: '', course: '', cgpa: '', skills: '', github: '', linkedin: '', about: ''
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.course) {
      setStatus({ type: 'error', msg: '⚠️ Name, Email and Course are required.' });
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/add`, form);
      setStatus({ type: 'success', msg: `✅ ${res.data.message}` });
      setForm({ name: '', email: '', course: '', cgpa: '', skills: '', github: '', linkedin: '', about: '' });
      setTimeout(() => onSuccess && onSuccess(), 1200);
    } catch (err) {
      setStatus({ type: 'error', msg: '❌ Failed to add student. Is the backend running?' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2 className="page-title">➕ Add New Student</h2>
      <p className="page-subtitle">Fill in the student portfolio details below.</p>

      {status && (
        <div className={`alert alert-${status.type}`}>{status.msg}</div>
      )}

      <div className="form-grid">
        <div className="form-group">
          <label>Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Siya Shaha" />
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="e.g. siya@mitwpu.edu.in" />
        </div>
        <div className="form-group">
          <label>Course / Degree *</label>
          <input name="course" value={form.course} onChange={handleChange} placeholder="e.g. B.Tech CSE" />
        </div>
        <div className="form-group">
          <label>CGPA</label>
          <input name="cgpa" value={form.cgpa} onChange={handleChange} placeholder="e.g. 8.58" />
        </div>
        <div className="form-group">
          <label>GitHub URL</label>
          <input name="github" value={form.github} onChange={handleChange} placeholder="https://github.com/username" />
        </div>
        <div className="form-group">
          <label>LinkedIn URL</label>
          <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/username" />
        </div>
        <div className="form-group full-width">
          <label>Skills (comma-separated)</label>
          <input name="skills" value={form.skills} onChange={handleChange} placeholder="e.g. C++, JavaScript, React, Python" />
        </div>
        <div className="form-group full-width">
          <label>About / Career Objective</label>
          <textarea name="about" value={form.about} onChange={handleChange} placeholder="Brief description about the student..." />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
        <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>
          {loading ? '⏳ Saving...' : '💾 Add Student'}
        </button>
        <button className="btn btn-secondary" onClick={() => setForm({ name: '', email: '', course: '', cgpa: '', skills: '', github: '', linkedin: '', about: '' })}>
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default AddStudent;
