export type UserAccount = {
    _id: string;

    name: string;
    username: string; password: string;
    avatar_url: string;
    description: string;

    is_business: boolean; restaurant_owned: string;

    review_count: number; reviews: string[];
    comment_count: number; comments: string[];
}

export type Restaurant = {
    _id: string;

    name: string;
    description: string;
    address: string;
    phone: string;
    hours: string[][];
    cover_url: string;

    review_average: number;
    review_count: number; reviews: string[];

    owner_id: string;
}

export type Review = {
    _id: string;

    user_id: string; restaurant_id: string;

    rating: number;
    date: string;
    review_title: string; review_body: string;
    review_media_url: string[];

    likes_count: number; likes: string[];
    dislikes_count: number; dislikes: string[];

    comment_count: number; comments: string[];
}

export type Comment = {
    _id: string;

    user_id: string; review_id: string;

    date: string;
    comment_body: string;
}
