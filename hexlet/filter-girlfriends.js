const users = [
  {
    name: "Tirion",
    friends: [
      { name: "Mira", gender: "female" },
      { name: "Ramsey", gender: "male" },
    ],
  },
  { name: "Bronn", friends: [] },
  {
    name: "Sam",
    friends: [
      { name: "Aria", gender: "female" },
      { name: "Keit", gender: "female" },
    ],
  },
  {
    name: "Rob",
    friends: [{ name: "Taywin", gender: "male" }],
  },
];
const getGirlFriends = (array) => {
  //   const result = [];

  //   for (const element of array) {
  //     result.push(element.friends.filter(({ gender }) => gender === "female"));
  //   }

  //   return result.flat();
  const friends = array.map(({ friends }) => friends);
  return friends.flat().filter(({ gender }) => gender === "female");
};
console.log(getGirlFriends(users));
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];
