import { IMediaItemDetails } from "../../../interfaces/mediaItem";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { format } from "date-fns";
import localeConfig from '@cfg/locale';

export default function DetailsContent({
  title,
  photographer,
  dateCreated,
  description,
  images,
}: Omit<IMediaItemDetails, "keywords" | "id" | "thumbnail">) {
  return (
    <>
      <Row className="mt-3 pb-4 pt-2">
        <h1>{title}</h1>
      </Row>
      <div className="d-flex flex-column flex-md-row gap-4">
        <div>
          <Image
            src={images[0]}
            alt={title}
            rounded
            style={{ maxHeight: 480 }}
            fluid
          />
        </div>
        <div>{description}</div>
      </div>
      <Row className="justify-content-center mt-4">
        {photographer}
        {"   "}&#8226;{"   "}
        {format(new Date(dateCreated), localeConfig.dateFormat)}
      </Row>
    </>
  );
}
