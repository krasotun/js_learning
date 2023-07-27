const normalize = (array) => {
  return array
    .map(({ name, country }) => {
      return {
        name: name.trim().toLowerCase(),
        country: country.trim().toLowerCase(),
      };
    })
    .reduce((acc, { name, country }) => {
      if (
        Object.hasOwn(acc, country) &&
        !acc[country].some((value) => value === name)
      ) {
        acc[country] = [...acc[country], name].sort();
      } else if (!acc[country]) {
        acc[country] = [name];
      }

      return acc;
    }, {});
};

export default normalize;

const raw = [
  {
    name: "pariS ",
    country: " france",
  },
  {
    name: " madrid",
    country: " sPain",
  },
  {
    name: "valencia",
    country: "spain",
  },
  {
    name: "marcel",
    country: "france",
  },
  {
    name: " madrid",
    country: " sPain",
  },
];

console.log(normalize(raw));
