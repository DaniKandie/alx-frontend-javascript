interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'dani',
  lastName: 'kandie',
  location: 'Kenya',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function using the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("dani", "kandie")); // Output: d. kandie

// Interface for constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class that implements the interface
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Daniel", "Kandie");
console.log(student.displayName());  // Output: Daniel
console.log(student.workOnHomework()); // Output: Currently working
