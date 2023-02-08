import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { Card } from "../../../features/cardlist/components/card/card";

jest.mock("../../../features/cardlist/components/card/card");

describe("Given an App component", () => {
  describe("when it is rendered", () => {
    test("then it should call Card component", () => {
      render(<App />);
      expect(Card).toHaveBeenCalled();
    });
  });
});
