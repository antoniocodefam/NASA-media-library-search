import { IMediaItemDetails } from "../../../interfaces/mediaItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { format } from "date-fns";
import localeConfig from "../../../config/locale";

export default function DetailsContent({
  title,
  photographer,
  dateCreated,
  description,
  images,
}: Omit<IMediaItemDetails, "keywords" | "id" | "thumbnail">) {
  return (
    <>
      <Row className="justify-content-center mt-3 pb-4 pt-2">
        <h1>{title}</h1>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <Image
            fluid
            src={images[0]}
            alt={title}
            rounded
            style={{ maxHeight: 480 }}
          />
        </Col>
        <Col sm={12} md={6}>
          {description}
        </Col>
      </Row>
      <Row className="justify-content-center my-4">
        {photographer}
        {"   "}&#8226;{"   "}
        {format(new Date(dateCreated), localeConfig.dateFormat)}
      </Row>
    </>
  );
}
