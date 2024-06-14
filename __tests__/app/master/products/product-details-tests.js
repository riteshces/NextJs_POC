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

  it("renders product details", async () => {
    const params = { id: "1" };
    const productUrl = `${process.env.NEXT_APP_PRODUCTSAPI}/products/${params.id}`;
    const data = {
      title: "Product 1",
      description: "This is product 1",
      price: 10.99,
      image: "https://example.com/image1.jpg",
      category: "Electronics",
    };
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        json: () => data,
      });
    });
    const { getByText } = render(<ProductDetails params={params} />);
    await waitFor(() => getByText(data.title));
    expect(getByText(data.description)).toBeInTheDocument();
    expect(getByText(`Price: ${data.price}$`)).toBeInTheDocument();
    expect(getByText(data.category)).toBeInTheDocument();
    expect(getByText("Back")).toBeInTheDocument();
  });

  it("renders error message when API call fails", async () => {
    const params = { id: "1" };
    const productUrl = `${process.env.NEXT_APP_PRODUCTSAPI}/products/${params.id}`;
    jest.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.reject(new Error("API call failed"));
    });
    const { getByText } = render(<ProductDetails params={params} />);
    await waitFor(() => getByText("Error: API call failed"));
  });
});
