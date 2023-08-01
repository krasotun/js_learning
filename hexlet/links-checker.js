import axios from "axios";

const links = [
  "https://habr.com/ru/companies/ruvds/articles/751516/",
  "https://angular.io/guide/typed-forms",
  "httpss://maratatsd",
  "https://nosite.local",
];

const getBadLinks = async (array) => {
  const mapData = async (link) => {
    try {
      const response = await axios.get(link);
      if (response.status === 200) {
        return null;
      }
    } catch {
      return link;
    }
  };

  const promises = array.map(mapData);

  const result = await Promise.all(promises);

  return result.filter((value) => value);
};

const badLinks = await getBadLinks(links);

console.log(badLinks); // ["undefined", "https://nosite.local"];
