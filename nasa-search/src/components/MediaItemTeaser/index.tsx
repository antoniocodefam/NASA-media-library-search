import { IMediaItem } from "../../api/interfaces/mediaItem";

export default function MediaItemTeaser({
  title,
  location,
  photographer,
  thumbnail,
}: IMediaItem) {
  return (
    <>
      {title} {location} {photographer} <img src={thumbnail} />
    </>
  );
}
