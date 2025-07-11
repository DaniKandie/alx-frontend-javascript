// Task 1: Teacher Interface

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'dan',
  lastName: 'kandi',
  fullTimeEmployee: false,
  location: 'kenya',
  contract: false,
};

console.log(teacher3);
