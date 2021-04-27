enum role {
  Nurse,
  Assistant,
  Anaesthetist,
}
const doctor = {
  name: "David",
  email: "david@gmail.com",
  role: role.Nurse,
};

interface Staff {
  name: string;
  email: string;
  role: role;
}

const printStaff = (staff: Staff) => {
  console.log(staff);
};

printStaff(doctor);
