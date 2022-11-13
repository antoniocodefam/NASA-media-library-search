import { IMediaItemTeaser } from "../../../interfaces/mediaItem";
import Col from "react-bootstrap/Col";
import MediaItemTeaser from '../../MediaItemTeaser';

interface HomeTeasersProps {
  teasers: IMediaItemTeaser[];
}
export default function HomeTeasers({ teasers }: HomeTeasersProps) {
  return (
    <>
      {teasers.map((props, index) => (
        <Col md={4} key={index} className="mb-5 px-3">
          <MediaItemTeaser {...props} />
        </Col>
      ))}
    </>
  );
}
