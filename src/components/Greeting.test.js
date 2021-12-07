import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component UI", () => {
  test("renders Hello Worls as a text", () => {
    // arrange
    render(<Greeting />);

    //act
    // ... nothing

    //assert
    const helloWorldElement = screen.getByText(/hello world/i, {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button NOT clicked", () => {
    // arrange
    render(<Greeting />);

    //act
    // ... nothing

    //assert
    const outputElement = screen.getByText(/good to see you/i, {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    // arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText(/changed/i, {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    // arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.queryByText(/good to see you/i, {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
