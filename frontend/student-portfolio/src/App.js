import React, { useState } from 'react';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';
import EditStudent from './components/EditStudent';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('portfolio');
  const [editingStudent, setEditingStudent] = useState(null);

  const handleEdit = (student) => {
    setEditingStudent(student);
    setActivePage('edit');
  };

  const handleEditDone = () => {
    setEditingStudent(null);
    setActivePage('view');
  };

  const navItems = [
    { id: 'portfolio', label: '🏠 Portfolio', },
    { id: 'view', label: '📋 All Students' },
    { id: 'add', label: '➕ Add Student' },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">StudentPortfolio</span>
            <span className="logo-badge">MERN</span>
          </div>
          <nav className="nav">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-btn ${activePage === item.id ? 'active' : ''}`}
                onClick={() => setActivePage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        {activePage === 'portfolio' && <Portfolio />}
        {activePage === 'view' && <ViewStudents onEdit={handleEdit} />}
        {activePage === 'add' && <AddStudent onSuccess={() => setActivePage('view')} />}
        {activePage === 'edit' && (
          <EditStudent student={editingStudent} onDone={handleEditDone} />
        )}
      </main>

      <footer className="footer">
        <p>Built with ❤️ using MERN Stack · Experiment 6 · MIT World Peace University</p>
      </footer>
    </div>
  );
}

export default App;
