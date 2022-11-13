import apiConfig from "..";
import { INasaResponse } from "../interfaces";
import { IMediaItemDetails } from "../../interfaces/mediaItem";

export default async function getDetailsResult(nasa_id: string) {
  return await fetch(`${apiConfig.root}/search?nasa_id=${nasa_id}`)
    .then((res) => res.json())
    .then(
      ({ collection: { items } }: INasaResponse) => ({
        data: items.map(
          ({ data, links }): IMediaItemDetails => ({
            id: data[0].nasa_id,
            photographer: data[0].photographer,
            title: data[0].title,
            location: data[0].location,
            thumbnail: links[0].href,
            description: data[0].description,
            keywords: data[0].keywords,
            dateCreated: data[0].date_created,
            images: links.map((link) => link.href),
          })
        ),
        error: false,
      }),
      () => {
        return { data: [], error: true };
      }
    );
}
