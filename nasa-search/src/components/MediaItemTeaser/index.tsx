import { IMediaItemTeaser } from '@i/mediaItem';
import Card from "react-bootstrap/Card";
import { MdLocationPin, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MediaItemTeaser({
  id,
  title,
  location,
  photographer,
  thumbnail,
}: IMediaItemTeaser) {
  return (
    <Link
      to={`/details/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card style={{ height: "100%" }}>
        <Card.Img style={{ height: 360 }} variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title data-test-id="title">{title}</Card.Title>
          <Card.Subtitle>
            {photographer && (
              <>
                <MdPerson title="Photographer" /> {photographer}
              </>
            )}
          </Card.Subtitle>
          <Card.Text className="py-3">
            {location && (
              <>
                <MdLocationPin title="Location" size={20} /> {location}
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link
            as={Link}
            to={`/details/${id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bolder",
            }}
          >
            See more
          </Card.Link>
        </Card.Body>
      </Card>
    </Link>
  );
}
