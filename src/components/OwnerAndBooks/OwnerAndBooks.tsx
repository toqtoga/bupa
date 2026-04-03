import styled from "styled-components";
import { Bookshelf } from "../Bookshelf/Bookshelf";
import { ButtonBlue, ButtonPlain } from "../Button/Button";
import { parseBookOwners, useFetchBookOwners } from "../../hooks/useFetchBooks";
import { useState } from "react";

const parseAll = parseBookOwners();
const parseHardcover = parseBookOwners("Hardcover");

export const OwnerAndBooks = () => {
  const [bookshelfType, setBookshelfType] = useState<string | undefined>(
    undefined as undefined | "Hardcover",
  );
  const {
    data: allData,
    isLoading: allDataIsLoading,
    error: allDataError,
  } = useFetchBookOwners({ select: parseAll });
  const {
    data: hardcoverData,
    isLoading: hardcoverDataIsLoading,
    error: hardcoverError,
  } = useFetchBookOwners({ select: parseHardcover });

  const dataToDisplay = bookshelfType === "Hardcover" ? hardcoverData : allData;

  if (allDataIsLoading || hardcoverDataIsLoading || !allData || !hardcoverData)
    return <p>Loading books...</p>;
  if (allDataError || hardcoverError) return <p>Error occurred.</p>;

  return (
    <OwnerAndBooksContainer>
      <OwnerAndBooksTitle>Owners and Books</OwnerAndBooksTitle>
      <OwnerAndBooksContents>
        {dataToDisplay &&
          dataToDisplay.map((book, index) => (
            <Bookshelf key={index} {...book} booksType={bookshelfType} />
          ))}
      </OwnerAndBooksContents>
      <OwnerAndBooksFooter>
        <ButtonBlue title="all-btn" onClick={() => setBookshelfType(undefined)}>
          Get Books
        </ButtonBlue>
        <ButtonPlain
          title="hardcover-btn"
          onClick={() => setBookshelfType("Hardcover")}
        >
          Hardcover only
        </ButtonPlain>
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
  max-width: 700px;
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
  width: 700px;
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
