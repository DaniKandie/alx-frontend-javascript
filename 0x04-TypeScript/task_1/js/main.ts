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