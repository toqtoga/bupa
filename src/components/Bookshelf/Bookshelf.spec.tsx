import { afterEach, beforeAll, describe, expect, test } from "vitest";
import { cleanup, render } from "vitest-browser-react";
import { Bookshelf } from "./Bookshelf";
import { bookshelfFixture } from "./Bookshelf.fixture";
import { page } from "vitest/browser";

describe("Bookshelf tests", async () => {
  beforeAll(async () => {});
  afterEach(() => {
    cleanup();
  });

  test("renders a bookshelf", async () => {
    const { getByText } = await render(<Bookshelf {...bookshelfFixture} />);
    expect(
      getByText("Books owned by Horses", { exact: true }),
    ).toBeInTheDocument();
    expect(getByText("Book 1.1", { exact: true })).toBeInTheDocument();
    expect(getByText("Book 1.2", { exact: true })).toBeInTheDocument();
    expect(getByText("Book 1.3", { exact: true })).toBeInTheDocument();
  });

  test("renders the bookshelf in desktop view", async () => {
    await page.viewport(1920, 600);
    const { baseElement } = await render(<Bookshelf {...bookshelfFixture} />);
    await expect(baseElement).toMatchScreenshot("bookshelf-desktop");
  });

  test("renders the bookshelf in mobile view", async () => {
    await page.viewport(400, 600);
    const { baseElement } = await render(<Bookshelf {...bookshelfFixture} />);
    await expect(baseElement).toMatchScreenshot("bookshelf-mobile");
  });
});
