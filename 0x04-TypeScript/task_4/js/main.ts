/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

const cpp = new Subjects.Cpp();
const react = new Subjects.React();
const java = new Subjects.Java();

const teacher: Subjects.Teacher = {
  firstName: 'Dani',
  lastName: 'Kandie',
  experienceTeachingC: 5,
  experienceTeachingReact: 0,
  experienceTeachingJava: 2,
};

cpp.setTeacher(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

react.setTeacher(teacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

java.setTeacher(teacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());