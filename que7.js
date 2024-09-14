// Problem 10: countCalculation
function countCalculation(school) {
    const {
      departments: {
        math: { teachers: mathTeachersCount, students: mathStudentsCount },
        history: { teachers: historyTeachersCount, students: historyStudentsCount },
      },
    } = school;
    
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
  }
  
  console.log(countCalculation(school));
  // Output: { mathTeachersCount: 5, historyTeachersCount: 3, mathStudentsCount: 150, historyStudentsCount: 100 }
  
  // Problem 11: findTopStudent
  function findTopStudent(school, courseName) {
    const { students } = school;
    let topStudent = students.reduce((prev, current) => {
      return current.scores[courseName] > prev.scores[courseName] ? current : prev;
    });
  
    return topStudent;
  }
  
  console.log(findTopStudent(school, 'math'));
  // Output: { name: 'Alice', className: 'Grade 5', scores: { math: 95, science: 88, history: 85, english: 92 } }
  
  // Problem 12: addNewDept
  function addNewDept(school, newDepartment) {
    return {
      ...school,
      departments: { ...school.departments, ...newDepartment }
    };
  }
  
  const newDepartment = { art: { teachers: 2, students: 50 } };
  console.log(addNewDept(school, newDepartment));
  // Output: Updated school object with art department
  
  // Problem 13: highestStudentCountDepartment
  function highestStudentCountDepartment(school) {
    const { departments } = school;
    let highestDept = Object.keys(departments).reduce((prev, curr) => {
      return departments[curr].students > departments[prev].students ? curr : prev;
    });
  
    return highestDept;
  }
  
  console.log(highestStudentCountDepartment(school));
  // Output: 'math'
  
  // Problem 14: generateGreeting
  function generateGreeting(name, language = 'English') {
    const greetings = {
      English: 'Hello',
      Spanish: '¡Hola',
      French: 'Bonjour',
    };
  
    return `${greetings[language]}, ${name}!`;
  }
  
  console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
  console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"

  function countCalculation(school) {
    // Destructuring to extract teacher and student counts for math and history
    const {
      departments: {
        math: { teachers: mathTeachersCount, students: mathStudentsCount },
        history: { teachers: historyTeachersCount, students: historyStudentsCount }
      }
    } = school;
  
    return { mathTeachersCount, historyTeachersCount, mathStudentsCount, historyStudentsCount };
  }
  
  // Example Invocation
  console.log(countCalculation(school));
  // Output: { mathTeachersCount: 5, historyTeachersCount: 3, mathStudentsCount: 150, historyStudentsCount: 100 }

  function findTopStudent(school, courseName) {
    // Find the student with the highest score in the given course using destructuring
    let topStudent = school.students.reduce((top, student) => {
      return student.scores[courseName] > (top.scores?.[courseName] || 0) ? student : top;
    }, {});
  
    return topStudent;
  }
  
  // Example Invocation
  console.log(findTopStudent(school, 'math'));
  // Output: { name: 'Alice', className: 'Grade 5', scores: { math: 95, science: 88, history: 85, english: 92 } }

  function addNewDept(school, newDepartment) {
    // Use spread operator to add a new department to the existing school departments
    const updatedSchool = {
      ...school,
      departments: {
        ...school.departments,
        ...newDepartment
      }
    };
  
    return updatedSchool;
  }
  
  // Example Invocation
  const newDepartment = { art: { teachers: 2, students: 50 } };
  console.log(addNewDept(school, newDepartment));
  /* Output:
  {
    name: 'XYZ School',
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
      art: { teachers: 2, students: 50 }
    },
    courses: [ 'math', 'science', 'history', 'english' ],
    students: [ { ... }, { ... }, { ... }, { ... } ]
  }
  */

  function highestStudentCountDepartment(school) {
    // Destructure and iterate through the departments to find the one with the highest student count
    const { departments } = school;
    let highestDept = '';
    let maxStudents = 0;
  
    for (const [department, { students }] of Object.entries(departments)) {
      if (students > maxStudents) {
        maxStudents = students;
        highestDept = department;
      }
    }
  
    return highestDept;
  }
  
  // Example Invocation
  console.log(highestStudentCountDepartment(school));
  // Output: 'math'

  function generateGreeting(name, language = 'English') {
    // Greeting messages for different languages
    const greetings = {
      English: "Hello",
      Spanish: "Hola",
      French: "Bonjour"
    };
  
    // Return the greeting message based on the language provided
    return `${greetings[language]}, ${name}!`;
  }
  
  // Example Invocation
  console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
  console.log(generateGreeting("Bob", "Spanish")); // Output: "Hola, Bob!"
  console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"
    
  