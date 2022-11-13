import { mount } from "@cypress/react18";
import MediaItemTeaser from ".";
import { IMediaItemTeaser } from "../../interfaces/mediaItem";
import { MemoryRouter } from "react-router-dom";

const props: IMediaItemTeaser = {
  id: "id",
  title: "Title",
  location: "Location",
  photographer: "John Doe",
  thumbnail: "",
};
describe("<MediaItemTeaser />", () => {
  beforeEach(() => {
    mount(
      <MemoryRouter>
        <MediaItemTeaser {...props} />
      </MemoryRouter>
    );
  });

  it("Renders title", () => {
    cy.getByTestId("title").should("be.visible");
  });
  
  it("Renders correct title", () => {
    cy.getByTestId("title").invoke("text").should("equal", props.title);
  });
});
