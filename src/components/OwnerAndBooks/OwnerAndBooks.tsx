import styled from "styled-components";
import { Bookshelf } from "../Bookshelf/Bookshelf";
import { ButtonBlue, ButtonError, ButtonPlain } from "../Button/Button";
import { parseBookOwners, useFetchBookOwners } from "../../hooks/useFetchBooks";
import { useState } from "react";

const parseAll = parseBookOwners();
const parseHardcover = parseBookOwners("Hardcover");

export const OwnerAndBooks = () => {
  const [bookshelfType, setBookshelfType] = useState<string | undefined>();
  const {
    data: allData,
    isLoading: allDataIsLoading,
    error: allDataError,
    refetch: refetchAllData,
  } = useFetchBookOwners({ select: parseAll });
  const {
    data: hardcoverData,
    isLoading: hardcoverDataIsLoading,
    error: hardcoverError,
  } = useFetchBookOwners({ select: parseHardcover });

  const dataToDisplay = bookshelfType === "Hardcover" ? hardcoverData : allData;

  const loading =
    allDataIsLoading || hardcoverDataIsLoading || !allData || !hardcoverData;
  const error = allDataError || hardcoverError;

  const contents = (
    <>
      <OwnerAndBooksContents>
        {dataToDisplay &&
          dataToDisplay.map((book) => (
            <Bookshelf key={book.title} {...book} booksType={bookshelfType} />
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
    </>
  );

  return (
    <OwnerAndBooksContainer>
      <OwnerAndBooksTitle>Owners and Books</OwnerAndBooksTitle>
      {!loading && !error && contents}
      {loading && <NotificationBox>Loading...</NotificationBox>}
      {error && (
        <NotificationBox>
          Error occured.
          <ButtonError onClick={() => refetchAllData()}>Try again?</ButtonError>
        </NotificationBox>
      )}
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

const NotificationBox = styled.div`
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
  padding: 1rem;
  background-color: white;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  gap: 1rem;
  position: sticky;
  bottom: 0;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0rem;
  }
`;
