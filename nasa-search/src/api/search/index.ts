import apiConfig from "..";
import { INasaResponse } from "../interfaces";
import { IMediaItem } from "../interfaces/mediaItem";

export interface ISearchResult {
  data: IMediaItem[];
  error: boolean;
}

export default async function getSearchResult(q: string) {
  return await fetch(`${apiConfig.root}/search?q=${q}&media_type=image`)
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
