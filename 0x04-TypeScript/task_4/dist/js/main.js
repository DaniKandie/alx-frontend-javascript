/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var cpp = new Subjects.Cpp();
var react = new Subjects.React();
var java = new Subjects.Java();
var teacher = {
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
//# sourceMappingURL=main.js.map