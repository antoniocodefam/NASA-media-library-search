import { IMediaItemDetails } from "../../../interfaces/mediaItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

export default function DetailsKeyword({
  keywords,
}: Pick<IMediaItemDetails, "keywords">) {
  return (
    <Row className="mt-4">
      {keywords.map((keyword) => (
        <Col key={keyword} sm={"auto"} className="px-1 my-1">
          <Badge bg="primary" className="p-2">
            {keyword}
          </Badge>
        </Col>
      ))}
    </Row>
  );
}
