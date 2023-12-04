//Typescript Interface for bussiness
interface Count {
    rating: number;
    count: number;
}

// Define the Featured interface for the "featured" field
interface Featured {
    rating: string;
    author: string;
    review: string;
}

export interface business {
    title: string,
    description: string,
    location: string,
    rating: number,
    link: string,
    files: [],
    phoneNumber: string
    email: string
    type: string
    subType: string,
    average: string,
    totalCount: number,
    counts: Count[];
    featured: Featured[];
}

