//Typescript Interface for resturant
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

export interface resturant {
    name: string,
    description: string, 
    type:string,
    rating: number,
    files: string, 
    location: string,
    average: string,
    counts: Count[];
    featured: Featured[];
  }
  