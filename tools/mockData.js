const employees = [
  {
    id: 1,
    firstName: "Vincent",
    lastName: "Asamoah",
      slug: "hey-vincent",
    employerId: 1,
    category: ""
  },


];

const employers = [
  { id: 1, name: "Elfreda Agyemang" },
  { id: 2, name: "Abigail Bawua" },
  { id: 3, name: "Samuel Bawua" }
];

const newEmployee = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newEmployee,
  employees,
  employers
};
