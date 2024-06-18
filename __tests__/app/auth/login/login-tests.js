import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Login from "@/app/(auth)/login/page";

describe("Login component", () => {
  it("renders correctly", () => {
    const { getAllByText, getByText, getByTestId, getByPlaceholderText } =
      render(<Login />);
    expect(getAllByText("Login")).toHaveLength(2);
    expect(
      getByText("Enter your credentials to access your account.")
    ).toBeInTheDocument();
    expect(getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(getByPlaceholderText("Password")).toBeInTheDocument();
    expect(getByText("Forgot password?")).toBeInTheDocument();
    expect(getByTestId("Login")).toBeInTheDocument();
  });

  it("validates email input", () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText("Email address");
    fireEvent.change(emailInput, { target: { value: "invalid email" } });
    expect(emailInput).toBeInvalid();
    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    expect(emailInput).toBeValid();
  });

  it("validates password input", () => {
    const { getByPlaceholderText } = render(<Login />);
    const passwordInput = getByPlaceholderText("Password");
    fireEvent.change(passwordInput, {
      target: { value: "testpassword" },
    });
    expect(passwordInput).toBeValid();
  });
});
