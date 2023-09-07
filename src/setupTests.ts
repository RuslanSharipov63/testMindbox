// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TextField from "./components/textfield/TextField";
import userEvent from "@testing-library/user-event";


describe("textfield component", () => {
  it("onChange", () => {
    render(<TextField />);
   userEvent.type(screen.getByRole('textbox'), 'Learn React');
   expect(onchange).toHaveBeenCalledTimes(5)
  });
});
