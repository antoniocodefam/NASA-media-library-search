import { mount } from "@cypress/react18";
import Pagination, { HomeSearchPaginationProps, TEASERS_PER_PAGE } from ".";

function getProps(
  itemsAmount: number,
  currentPage: number
): HomeSearchPaginationProps {
  return {
    onPageChange: (nextPage: number) => {},
    itemsAmount,
    currentPage,
  };
}

describe("<Pagination />", () => {
  it("Displays pagination with pages and first/last icons", () => {
    mount(<Pagination {...getProps(TEASERS_PER_PAGE * 100, 10)} />);
    ["first", "previous", "current", "next", "last"].forEach((page) => {
      cy.getByTestId(page).should("be.visible");
    });
  });

  it("Display pagination with first, previous and current page", () => {
    mount(<Pagination {...getProps(TEASERS_PER_PAGE * 3, 2)} />);
    ["first", "previous", "current"].forEach((page) => {
      cy.getByTestId(page).should("be.visible");
    });
  });

  it("Display pagination with first, previous, current page and last page", () => {
    mount(<Pagination {...getProps(TEASERS_PER_PAGE * 4, 2)} />);
    ["first", "previous", "current", "last"].forEach((page) => {
      cy.getByTestId(page).should("be.visible");
    });
  });
});
