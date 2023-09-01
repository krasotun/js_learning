const _ = require("lodash");

const users = [
  { name: "Tirion", birthday: "Nov 19, 1988" },
  { name: "Sam", birthday: "Nov 22, 1999" },
  { name: "Rob", birthday: "Jan 11, 1975" },
  { name: "Sansa", birthday: "Mar 20, 2001" },
  { name: "Tisha", birthday: "Feb 27, 1992" },
  { name: "Chris", birthday: "Dec 25, 1995" },
];

const takeOldest = (obj, num = 1) => {
  return _.sortBy(obj, ({ birthday }) => Date.parse(birthday)).slice(0, num);
};
console.log(takeOldest(users));
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];
