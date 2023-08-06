const user = {
  id: 1,
  privateInfo: {
    fname: "Brad",
    sname: "Pitt",
    bday: {
      day: 18,
      month: 12,
      year: 1963,
    },
    children: ["Helen", "Alex", "Georg", "Anna"],
  },
  contactInfo: {
    phone: {
      work: "123-12-45",
      mobile: "005-002-003",
    },
    adress: {
      town: "ZP",
      street: "12 Avenue",
      house: 45,
    },
    mail: "brad@gmail.com",
  },
  profession: "actor",
};

const {
  privateInfo: {
    bday: { year: birthYear },
    children: [, secondChildName],
  },
  contactInfo: {
    phone: { work: workPhone },
    adress: { street: userStreet, house: userHouse },
  },
} = user;
console.log(birthYear, secondChildName, workPhone, userStreet, userHouse);