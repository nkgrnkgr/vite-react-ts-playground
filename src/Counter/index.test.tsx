import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { Counter } from "./";

it("Test", async () => {
  render(<Counter />);
  const button = await screen.findByRole("button");
  userEvent.click(button);

  const article = await screen.findByRole("article");

  expect(article.textContent).toBe(2);
});
