import axios from "axios";

const response = await axios.get("https://angular.io/guide/typed-forms");

console.log(response.data);
