enum role {
  students,
  teacher,
}
let persons: {
  name: string;
  age: number;
  adress: {
    number: number;
  },
  role
} = {
  name: "Ramiro",
  age: 19,
  adress: {
    number: 5,
  },
  role: role.teacher,
};

console.log(persons)
