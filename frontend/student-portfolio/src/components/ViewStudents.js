import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewStudents.css';

const API = 'http://localhost:3000/student';

function ViewStudents({ onEdit }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);
  const [search, setSearch] = useState('');

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API}/view`);
      setStudents(res.data);
    } catch {
      setStatus({ type: 'error', msg: '❌ Could not connect to backend. Make sure server is running on port 3000.' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete ${name}'s record?`)) return;
    try {
      await axios.delete(`${API}/delete/${id}`);
      setStatus({ type: 'success', msg: `✅ ${name} deleted successfully.` });
      fetchStudents();
    } catch {
      setStatus({ type: 'error', msg: '❌ Failed to delete student.' });
    }
  };

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase()) ||
    s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="view-header">
        <div>
          <h2 className="page-title">📋 All Students</h2>
          <p className="page-subtitle">{students.length} student{students.length !== 1 ? 's' : ''} in the database</p>
        </div>
        <input
          className="search-input"
          placeholder="🔍 Search by name, email, course..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {status && (
        <div className={`alert alert-${status.type}`} style={{ marginBottom: 16 }}>{status.msg}</div>
      )}

      {loading ? (
        <div className="loading">
          <div className="spinner" />
          <p>Fetching students...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state card">
          <div className="empty-icon">📭</div>
          <h3>No Students Found</h3>
          <p>{students.length === 0 ? 'No records in database yet. Add your first student!' : 'No results match your search.'}</p>
        </div>
      ) : (
        <div className="students-grid">
          {filtered.map(student => (
            <div key={student._id} className="student-card card">
              <div className="student-card-header">
                <div className="student-avatar">
                  {student.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                </div>
                <div className="student-info">
                  <h3 className="student-name">{student.name}</h3>
                  <p className="student-email">📧 {student.email}</p>
                </div>
                {student.cgpa && <span className="cgpa-badge">⭐ {student.cgpa}</span>}
              </div>

              <div className="student-details">
                <div className="detail-row">
                  <span className="detail-icon">🎓</span>
                  <span>{student.course}</span>
                </div>
                {student.skills && (
                  <div className="detail-row">
                    <span className="detail-icon">🛠</span>
                    <div>{student.skills.split(',').map(s => (
                      <span key={s.trim()} className="tag">{s.trim()}</span>
                    ))}</div>
                  </div>
                )}
                {student.about && (
                  <p className="student-about">{student.about.slice(0, 100)}{student.about.length > 100 ? '…' : ''}</p>
                )}
                <div className="student-links">
                  {student.github && <a href={student.github} target="_blank" rel="noreferrer" className="mini-link">🐙 GitHub</a>}
                  {student.linkedin && <a href={student.linkedin} target="_blank" rel="noreferrer" className="mini-link">💼 LinkedIn</a>}
                </div>
              </div>

              <div className="student-actions">
                <button className="btn btn-edit" onClick={() => onEdit(student)}>✏️ Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(student._id, student.name)}>🗑 Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewStudents;
