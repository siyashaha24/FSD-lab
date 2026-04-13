import React, { useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:3000/student';

function EditStudent({ student, onDone }) {
  const [form, setForm] = useState({
    name: student?.name || '',
    email: student?.email || '',
    course: student?.course || '',
    cgpa: student?.cgpa || '',
    skills: student?.skills || '',
    github: student?.github || '',
    linkedin: student?.linkedin || '',
    about: student?.about || ''
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
      const res = await axios.put(`${API}/update/${student._id}`, form);
      setStatus({ type: 'success', msg: `✅ ${res.data.message}` });
      setTimeout(() => onDone && onDone(), 1000);
    } catch {
      setStatus({ type: 'error', msg: '❌ Failed to update student.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <h2 className="page-title">✏️ Edit Student</h2>
        <button className="btn btn-secondary" onClick={onDone}>← Back</button>
      </div>
      <p className="page-subtitle">Editing: <strong style={{ color: '#a78bfa' }}>{student?.name}</strong></p>

      {status && (
        <div className={`alert alert-${status.type}`}>{status.msg}</div>
      )}

      <div className="form-grid">
        <div className="form-group">
          <label>Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Course / Degree *</label>
          <input name="course" value={form.course} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>CGPA</label>
          <input name="cgpa" value={form.cgpa} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>GitHub URL</label>
          <input name="github" value={form.github} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>LinkedIn URL</label>
          <input name="linkedin" value={form.linkedin} onChange={handleChange} />
        </div>
        <div className="form-group full-width">
          <label>Skills (comma-separated)</label>
          <input name="skills" value={form.skills} onChange={handleChange} />
        </div>
        <div className="form-group full-width">
          <label>About / Career Objective</label>
          <textarea name="about" value={form.about} onChange={handleChange} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
        <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>
          {loading ? '⏳ Saving...' : '💾 Save Changes'}
        </button>
        <button className="btn btn-secondary" onClick={onDone}>Cancel</button>
      </div>
    </div>
  );
}

export default EditStudent;
