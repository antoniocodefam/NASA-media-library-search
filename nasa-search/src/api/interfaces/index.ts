export interface INasaResponse {
  collection: {
    items: [
      {
        data: [
          {
            nasa_id: string;
            date_created: string;
            title: string;
            location: string;
            photographer: string;
          }
        ];
        links: [{ href: string }];
      }
    ];
    metadata: {
      total_hits: number;
    };
  };
}
