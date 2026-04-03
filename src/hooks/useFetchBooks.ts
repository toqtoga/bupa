import { useQuery } from "@tanstack/react-query";
import bookOwnerData from "../tests/fixtures/owner";
import type { BookshelfProps } from "../components/Bookshelf/Bookshelf";
import type { BookOwner } from "./types";

const MOCKED_DATA = false;
export const API_URL = "/api/v1/bookowners";

export const useFetchBookOwners = ({
  select,
}: {
  select?: (data: BookOwner[]) => BookshelfProps[];
}) => {
  return useQuery({
    queryKey: ["bookOwnerData"],
    queryFn: async (): Promise<BookOwner[]> => {
      if (MOCKED_DATA) return [...bookOwnerData];
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Not found");
      return res.json() as Promise<BookOwner[]>;
    },
    select,
  });
};

export const parseBookOwners =
  (bookType?: string) =>
  (data: BookOwner[]): BookshelfProps[] => {
    const categorised = data.reduce(
      (acc, cur) => {
        const bookCategory = cur.age >= 18 ? "Adults" : "Children";
        if (!acc[bookCategory]) {
          acc[bookCategory] = [];
        }
        acc[bookCategory].push(
          ...cur.books.flatMap((book) => {
            if (!bookType) return book.name;
            if (bookType === book.type) {
              return book.name;
            }
            return [];
          }),
        );
        return acc;
      },
      { Adults: [], Children: [] } as Record<string, string[]>,
    );
    return Object.keys(categorised).map((key) => ({
      title: key,
      books: categorised[key],
    }));
  };
