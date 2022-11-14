import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

export default function HomeSearchLanding() {
  return (
    <>
      <Row className="justify-content-center">
        <Image src="/search.svg" fluid style={{ maxWidth: 280 }} />
      </Row>
      <Row className="my-2 justify-content-center text-center">
        <h1>Search for NASA media</h1>
      </Row>
    </>
  );
}
