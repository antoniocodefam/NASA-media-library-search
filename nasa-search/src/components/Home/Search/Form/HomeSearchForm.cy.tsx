import { mount } from "@cypress/react18";
import { HomeSearchFormProps } from ".";
import { MemoryRouter } from "react-router-dom";
import HomeSearchForm from ".";

const props: HomeSearchFormProps = {
  onSubmit: () => {},
  initialValues: {
    search: "test",
    from: "2000",
    until: "2020",
  },
};
describe("<HomeSearchForm />", () => {
  beforeEach(() => {
    mount(
      <MemoryRouter>
        <HomeSearchForm {...props} />
      </MemoryRouter>
    );

    cy.get("input").clear();
  });

  it("Renders form", () => {
    cy.get("form").should("be.visible");
  });

  it("Renders inputs", () => {
    ["search", "from", "until"].forEach((inputName) => {
      cy.getByName(inputName).should("be.visible");
    });
  });

  it("Renders two buttons", () => {
    cy.get("button").should("have.length", 2);
  });

  it("Disables button for future from year", () => {
    cy.getByName("from").type("2025");
    cy.getByTestId("submit").should("be.disabled");
  });

  it("Disables button for future until year", () => {
    cy.getByName("until").type("2025");
    cy.getByTestId("submit").should("be.disabled");
  });

  it("Invalidates form when year until is less than year from", () => {
    cy.getByName("from").type("2020");
    cy.getByName("until").type("2018");
    cy.get("form").then(
      ($form) => expect($form[0].checkValidity()).to.be.false
    );
  });
});
