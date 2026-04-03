import type { BookOwner } from "../../hooks/types";

const bookOwnerData: BookOwner[] = [
  {
    name: "Jane",
    age: 23,
    books: [
      {
        name: "A Midsummer Night's Dream",
        type: "Hardcover",
      },
      {
        name: "Wuthering Heights",
        type: "Paperback",
      },
    ],
  },
  {
    name: "Charlotte",
    age: 14,
    books: [
      {
        name: "A Midsummer Night's Dream",
        type: "Paperback",
      },
    ],
  },
  {
    name: "Max",
    age: 25,
    books: [
      {
        name: "React: The Ultimate Guide",
        type: "Hardcover",
      },
      {
        name: "Gulliver's Travels",
        type: "Hardcover",
      },
      {
        name: "Jane Eyre",
        type: "Paperback",
      },
      {
        name: "Great Expectations",
        type: "Hardcover",
      },
    ],
  },
  {
    name: "William",
    age: 15,
    books: [
      {
        name: "Great Expectations",
        type: "Hardcover",
      },
    ],
  },
  {
    name: "Charles",
    age: 17,
    books: [
      {
        name: "Little Red Riding Hood",
        type: "Hardcover",
      },
      {
        name: "The Hobbit",
        type: "Ebook",
      },
    ],
  },
];

export default bookOwnerData;
