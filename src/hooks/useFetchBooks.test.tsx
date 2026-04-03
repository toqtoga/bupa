import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { parseBookOwners, useFetchBookOwners } from "./useFetchBooks";

import { setupServer } from "msw/node";
import { handlers } from "../tests/mockHandlers";
import bookOwnerData from "../tests/fixtures/owner";

const server = setupServer(...handlers);

describe("useFetchBooks", async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("tests the useFetchBooks hook in all books mode", async () => {
    const parser = parseBookOwners();
    const { result } = renderHook(
      () => useFetchBookOwners({ select: parser }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual([
      {
        books: [
          "A Midsummer Night's Dream",
          "Wuthering Heights",
          "React: The Ultimate Guide",
          "Gulliver's Travels",
          "Jane Eyre",
          "Great Expectations",
        ],
        title: "Adults",
      },
      {
        books: [
          "A Midsummer Night's Dream",
          "Great Expectations",
          "Little Red Riding Hood",
          "The Hobbit",
        ],
        title: "Children",
      },
    ]);
  });

  it("tests the useFetchBooks hook in hardcover mode", async () => {
    const parser = parseBookOwners("Hardcover");
    const { result } = renderHook(
      () => useFetchBookOwners({ select: parser }),
      { wrapper },
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual([
      {
        books: [
          "A Midsummer Night's Dream",
          "React: The Ultimate Guide",
          "Gulliver's Travels",
          "Great Expectations",
        ],
        title: "Adults",
      },
      {
        books: ["Great Expectations", "Little Red Riding Hood"],
        title: "Children",
      },
    ]);
  });
});

describe("parseBookOwners", () => {
  it("parses book owners correctly in all books mode", () => {
    const data = bookOwnerData;
    const parser = parseBookOwners()(data);
    expect(parser).toEqual([
      {
        books: [
          "A Midsummer Night's Dream",
          "Wuthering Heights",
          "React: The Ultimate Guide",
          "Gulliver's Travels",
          "Jane Eyre",
          "Great Expectations",
        ],
        title: "Adults",
      },
      {
        books: [
          "A Midsummer Night's Dream",
          "Great Expectations",
          "Little Red Riding Hood",
          "The Hobbit",
        ],
        title: "Children",
      },
    ]);
  });

  it("parses book owners correctly in hardcover mode", () => {
    const data = bookOwnerData;
    const parser = parseBookOwners("Hardcover")(data);
    expect(parser).toEqual([
      {
        books: [
          "A Midsummer Night's Dream",
          "React: The Ultimate Guide",
          "Gulliver's Travels",
          "Great Expectations",
        ],
        title: "Adults",
      },
      {
        books: ["Great Expectations", "Little Red Riding Hood"],
        title: "Children",
      },
    ]);
  });
});
