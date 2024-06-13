import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProductDetails from "@/app/master/products/[id]/page";

describe("ProductDetails", () => {
  it('renders "Back" link', () => {
    const { getByText } = render(<ProductDetails params={{ id: "1" }} />);
    const backLink = getByText("Back");
    expect(backLink).toBeInTheDocument();
  });

  it('renders "Back" link with correct href', () => {
    const { getByText } = render(<ProductDetails params={{ id: "1" }} />);
    const backLink = getByText("Back");
    expect(backLink).toHaveAttribute("href", "/master/products");
  });
});
