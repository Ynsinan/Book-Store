export interface BookData {
    volumeInfo: {
        title: string;
        authors: string[];
        publisher: string;
        pageCount: number;
        publishedDate: string;
        description: string;
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
            small: string;
            medium: string;
            large: string;
            extraLarge: string;
        };
    };
    etag: string;
    id: string;
    saleInfo: {
        buyLink: string;
        retailPrice: {
            amount: number;
            currencyCode: string;
        }
    };
    accessInfo: {
        pdf: {
            isAvailable: boolean;
            downloadLink: string;
        };
    };

}