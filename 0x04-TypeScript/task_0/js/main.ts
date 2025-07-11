interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Mwenda",
  age: 22,
  location: "Kenya"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 24,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

console.log(studentsList);