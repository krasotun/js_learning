const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com", "yahoo.com"];
const emails = [
  "info@gmail.com",
  "info@yandex.ru",
  "info@hotmail.com",
  "mk@host.com",
  "support@hexlet.io",
  "key@yandex.ru",
  "sergey@gmail.com",
  "vovan@gmail.com",
  "vovan@hotmail.com",
];

// const getFreeDomainsCount = (array) => {
//   const isFree = (domain) => freeEmailDomains.includes(domain);

//   const result = {};

//   for (const email of array) {
//     const [__, domain] = email.split("@");
//     if (isFree(domain)) {
//       if (!Object.hasOwn(result, domain)) {
//         result[domain] = 0;
//       }
//       result[domain] += 1;
//     }
//   }
//   return result;
// };

const getFreeDomainsCount = (array) => {
  const isFree = (domain) => freeEmailDomains.includes(domain);

  return array.reduce((acc, email) => {
    const [__, domain] = email.split("@");

    if (isFree(domain)) {
      if (!Object.hasOwn(acc, domain)) {
        acc[domain] = 0;
      }
      acc[domain] += 1;
    }

    return acc;
  }, {});
};

console.log(getFreeDomainsCount(emails));
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
