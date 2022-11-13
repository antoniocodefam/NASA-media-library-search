import { IMediaItemDetails } from "../../interfaces/mediaItem";
import Stack from "react-bootstrap/Stack";
import DetailsContent from "./Content";
import DetailsKeyword from "./Keywords";
import BackButton from "../Buttons/Back";

export default function Details({
  title,
  photographer,
  dateCreated,
  description,
  images,
  location,
  keywords,
}: IMediaItemDetails) {
  return (
    <Stack gap={2}>
      <BackButton />
      <DetailsContent
        title={title}
        photographer={photographer}
        dateCreated={dateCreated}
        images={images}
        description={description}
        location={location}
      />
      <DetailsKeyword keywords={keywords} />
    </Stack>
  );
}
