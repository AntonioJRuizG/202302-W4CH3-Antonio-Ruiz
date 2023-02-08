import React from "react";
import { screen, render } from "@testing-library/react";
import { Card } from "./card";

describe("Given a Card component", () => {
  describe("when it is rendered", () => {
    test("then it should be in document", () => {
      render(<Card />);
      const element = screen.getAllByRole("list");
      const elementLength = 11;
      expect(element.length).toBe(elementLength);
    });
  });
});
