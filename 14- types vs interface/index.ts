enum role {
  tire,
  break,
  paint,
}

const mechanical = {
  name: "David",
  email: "david@gmail.com",
  role: role.tire,
  total: 25,
  currentBill() {
    return `Actual value of the bill is ${this.total}`;
  },
};

interface Staff {
  name: string;
  email: string;
  role: role;
}

interface Billable {
  total: number;
  currentBill(): string;
}

const printMechanical = (staff: Staff) => {
  console.log(staff);
};

const printBill = (bill: Billable) => {
  console.log(bill.currentBill());
};

printMechanical(mechanical);
printBill(mechanical);
