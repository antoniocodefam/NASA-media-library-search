export interface IMediaItemTeaser {
  id: string;
  title: string;
  location: string;
  photographer: string
  thumbnail: string
}

export interface IMediaItemDetails extends IMediaItemTeaser {
  description: string;
  keywords:string[];
  dateCreated: string;
  images: string[]
}