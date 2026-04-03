import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";
import { render, cleanup } from "vitest-browser-react";
import { OwnerAndBooks } from "./OwnerAndBooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupWorker } from "msw/browser";
import { handlers } from "../../tests/mockHandlers";
import { page } from "vitest/browser";

const server = setupWorker(...handlers);

describe("OwnerAndBooks tests", async () => {
  beforeAll(async () => {
    server.start();
    await page.viewport(1920, 1080);
  });
  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });
  afterAll(() => server.stop());

  const createWrapper = () => {
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });
    return ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  test("renders the app in desktop view", async () => {
    const wrapper = createWrapper();
    await page.viewport(1920, 1080);
    const { baseElement } = await render(<OwnerAndBooks />, {
      wrapper,
    });
    await expect(baseElement).toMatchScreenshot("ownerAndBooks-desktop");
  });

  test("renders the app hardcover page in desktop view", async () => {
    const wrapper = createWrapper();
    await page.viewport(1920, 1080);
    const { baseElement, getByTitle } = await render(<OwnerAndBooks />, {
      wrapper,
    });
    await getByTitle("hardcover-btn").click();
    await expect(baseElement).toMatchScreenshot(
      "ownerAndBooks-desktop-hardcover",
    );
  });

  test("renders the app in mobile view", async () => {
    const wrapper = createWrapper();
    await page.viewport(400, 1080);
    const { baseElement } = await render(<OwnerAndBooks />, {
      wrapper,
    });
    await expect(baseElement).toMatchScreenshot("ownerAndBooks-mobile");
  });

  test("renders the app hardcover page in mobile view", async () => {
    const wrapper = createWrapper();
    await page.viewport(400, 1080);
    const { baseElement, getByTitle } = await render(<OwnerAndBooks />, {
      wrapper,
    });
    await getByTitle("hardcover-btn").click();
    await expect(baseElement).toMatchScreenshot(
      "ownerAndBooks-mobile-hardcover",
    );
  });
});
