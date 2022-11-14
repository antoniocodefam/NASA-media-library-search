import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

export default function HomeSearchError() {
  const navigate = useNavigate();

  return (
    <>
      <Row className="justify-content-center">
        <Image src="/error.svg" fluid style={{ maxWidth: 280 }} />
      </Row>
      <Row className="my-2 justify-content-center text-center">
        <h1>An error happened while searching</h1>
        <Button
          className="mt-5"
          style={{ width: "min-content" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Reset
        </Button>
      </Row>
    </>
  );
}
