import React, { useState } from 'react';
import './App.css';
import studentData from './data';
import Student from './Student'

function App() {
  const [students, setStudents] = useState(studentData)
    return (
      <>
        {students.map((studentInfo, index) => {
          return (
            <Student student={studentInfo} key={index} />
          )
        })}
      </>
    )
}

export default App;
