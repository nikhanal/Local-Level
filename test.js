const users = [
  { Province: "1", District: "Bara", City: "Gadimai" },
  { Province: "1", District: "Parsa", City: "Sauraha" },
  { Province: "1", District: "Jhapa", City: "Sunaul" },
  { Province: "2", District: "Morang", City: "Biratnagar" },
  { Province: "2", District: "Itari", City: "Dharan" },
  { Province: "3", District: "Kathmandu", City: "Chandragiri" },
  { Province: "3", District: "Arghakhanchi", City: "Sandikharka" },
];

var provinces = [];
users.forEach((user) => {
  provinces.push(user.Province);
});
data = provinces.filter((item, index) => {
  return provinces.indexOf(item) === index;
});
console.log(data);
