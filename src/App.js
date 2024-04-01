// App.js
import React from 'react';
import './App.css';
import Header from './Header';
import Course from './Course';

function App() {
  const courses = [
    { id: 1, title: 'Curso de React', instructor: 'João Silva', duration: '4 semanas', image: 'course1.jpg' },
    { id: 2, title: 'Curso de JavaScript', instructor: 'Maria Santos', duration: '6 semanas', image: 'course2.jpg' },
  ];

  return (
    <div className="App">
      <Header userName="João" userImage="user.jpg" />
      <h1>Catálogo de Cursos</h1>
      <div className="course-list">
        {courses.map(course => (
          <Course
            key={course.id}
            title={course.title}
            instructor={course.instructor}
            duration={course.duration}
            image={course.image} // Passando o caminho da imagem como propriedade
          />
        ))}
      </div>
    </div>
  );
}

export default App;
