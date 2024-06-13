import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProductList from "@/app/master/products/page";

describe("ProductTable", () => {
  it('renders header with title "Products"', () => {
    const { getByText } = render(<ProductList />);
    expect(getByText("Products")).toBeInTheDocument();
  });

  it("renders table with 8 columns", () => {
    const { getAllByRole } = render(<ProductList />);
    const columns = getAllByRole("columnheader");
    expect(columns).toHaveLength(8);
  });

  it('renders "View" link with correct href', () => {
    const { getAllByText } = render(<ProductList />);
    const viewLink = getAllByText("View", { selector: "a" });
    viewLink.map((v) => expect(v).toHaveClass("bg-green-500"));
  });

  it('renders "Edit" button with correct class', () => {
    const { getAllByText } = render(<ProductList />);
    const editButton = getAllByText("Edit", { selector: "button" });
    editButton.map((e) => expect(e).toHaveClass("bg-orange-500"));
  });

  it('renders "Delete" button with correct class', () => {
    const { getAllByText } = render(<ProductList />);
    const deleteButton = getAllByText("Delete", { selector: "button" });
    deleteButton.map((d) => expect(d).toHaveClass("bg-red-500"));
  });
});
