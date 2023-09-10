import { render, screen } from "@testing-library/react";
import Button from "./components/button/Button";

test("renders Button", () => {
  render(<Button />);
  const linkElement = screen.getByText(/добавить/i);
  expect(linkElement).toBeInTheDocument();
});
