import styled from "styled-components";

export interface BookshelfProps {
  title: string;
  books: string[];
}

export const Bookshelf = ({ title, books }: BookshelfProps) => {
  return (
    <BookshelfContainer>
      <BookshelfTitle>{title}</BookshelfTitle>
      <BookshelfContents>
        {books.map((book, index) => (
          <div key={index}>{book}</div>
        ))}
      </BookshelfContents>
    </BookshelfContainer>
  );
};

const BookshelfContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 5px 5px 0px -1px #000000;
    padding: 0.5rem;
  }
`;

const BookshelfTitle = styled.h1`
  font-size: 2rem;
  line-height: 2rem;
  padding: 1rem;
  font-weight: bold;
  background-color: var(--color-primary);
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const BookshelfContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;
