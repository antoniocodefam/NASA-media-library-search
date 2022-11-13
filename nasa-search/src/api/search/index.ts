import apiConfig from "..";
import { INasaResponse } from "../interfaces";
import { IMediaItem } from "../../interfaces/mediaItem";

export interface ISearchResult {
  data: IMediaItem[];
  error: boolean;
}

export default async function getSearchResult(
  q: string,
  year_start: string,
  year_end: string
) {
  const searchParams = new URLSearchParams({
    q,
    ...(year_start && { year_start }),
    ...(year_end && { year_end }),
    media_type: "image",
  });

  return await fetch(`${apiConfig.root}/search?${searchParams}`)
    .then((res) => res.json())
    .then(
      ({ collection: { items } }: INasaResponse) => ({
        data: items.map(
          ({ data, links }): IMediaItem => ({
            id: data[0].nasa_id,
            photographer: data[0].photographer,
            title: data[0].title,
            location: data[0].location,
            thumbnail: links[0].href,
          })
        ),
        error: false,
      }),
      (error) => {
        return { data: [], error: true };
      }
    );
}
