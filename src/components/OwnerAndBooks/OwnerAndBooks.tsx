import styled from "styled-components";
import { Bookshelf, type BookshelfProps } from "../Bookshelf/Bookshelf";

export interface OwnerAndBooksProps {
  books: BookshelfProps[];
}

export const OwnerAndBooks = ({ books }: OwnerAndBooksProps) => {
  return (
    <OwnerAndBooksContainer>
      <OwnerAndBooksTitle>Owner and Books</OwnerAndBooksTitle>
      <OwnerAndBooksContents>
        {books.map((book, index) => (
          <Bookshelf key={index} {...book} />
        ))}
      </OwnerAndBooksContents>
      <OwnerAndBooksFooter>
        <ButtonBlue>Get Books</ButtonBlue>
        <ButtonPlain>Hardcover only</ButtonPlain>
      </OwnerAndBooksFooter>
    </OwnerAndBooksContainer>
  );
};

const OwnerAndBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OwnerAndBooksTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem;
  background-color: var(--color-primary);
  color: white;
  text-align: center;
`;

const OwnerAndBooksContents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 1rem auto;
  padding: 0 1rem;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0.5rem;
    width: 60%;
  }
`;

const OwnerAndBooksFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  border-top: 1px solid grey;
  margin-top: 1rem;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 600px) {
    border-top: 1px solid grey;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    align-items: center;
    gap: 0rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 200px;
    margin-bottom: 0.5rem;
  }
`;
const ButtonBlue = styled(Button)`
  background-color: var(--color-primary);
  color: white;
  border: none;
`;

const ButtonPlain = styled(Button)`
  padding: 0;
  background-color: transparent;
  color: var(--color-primary);
  text-decoration: underline;
`;
