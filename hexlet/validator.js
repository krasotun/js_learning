import yup from "yup";

const genres = ["drama", "horror", "fantasy", "classic"];
const books = [{ name: "book", author: "author" }, { author: "author 2" }];

const getInvalidBooks = (books) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive().integer(),
    link: yup.string().url().nullable().min(1),
    genre: yup.string().oneOf(genres),
  });

  return books.filter((book) => !schema.isValidSync(book));
};
console.log(getInvalidBooks(books));
