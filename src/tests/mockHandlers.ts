import { http, HttpResponse } from "msw";
import bookOwnerData from "./fixtures/owner";

export const handlers = [
  http.get("/api/v1/bookowners", () => {
    return HttpResponse.json(bookOwnerData);
  }),
];
