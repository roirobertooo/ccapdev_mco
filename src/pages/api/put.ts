import {NextApiRequest, NextApiResponse} from 'next';
import {InsertOneResult, ObjectID} from 'mongodb';

import clientPromise from '@/app/lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const collectionName = (req.query.collectionName) as string || null;

    const putKeys = (req.query.putKeys as string)?.split(",") || [];
    const putValues = (req.query.putValues as string)?.split(",") || [];

    if (putKeys.length !== putValues.length) {
        return;
    }

    try {
        const client = await clientPromise;
        const db = client.db();

        let documents: InsertOneResult<Document> | null = null

        if (collectionName && putKeys && putValues && putKeys.length === putValues.length) {
            let insert = putKeys.reduce((obj: Record<string, any>, key, index) => {
                if (key === "rating") {
                    obj[key] = Number(putValues[index]);
                } else {
                    obj[key] = putValues[index];
                }

                return obj;
            }, {});

            if (collectionName === "user_accounts") {
                if (!putKeys.includes("is_business")) {
                    insert["is_business"] = false;
                    insert["restaurant_owned"] = "";
                }

                insert["review_count"] = 0;
                insert["reviews"] = [];
                insert["comment_count"] = 0;
                insert["comments"] = [];
            } else if (collectionName === "restaurants") {
                // TODO: Add default values when adding restaurants.
                // insert["review_count"] = 0;
                // insert["reviews"] = [];
                // insert["average_rating"] = 0;
                // insert["owners_comments"] = [];
                // insert["likes"] = [];
                // insert["dislikes"] = [];
            } else if (collectionName === "reviews") {
                if (!putKeys.includes("review_media_url")) {
                    insert["review_media_url"] = [];
                }
                insert["likes_count"] = 0;
                insert["likes"] = [];
                insert["dislikes_count"] = 0;
                insert["dislikes"] = [];
                insert["owners_comments"] = [];
            }

            documents = await db
                .collection(collectionName)
                .insertOne(insert);

            if (collectionName === "reviews") {
                const restaurant_id = insert["restaurant_id"];
                const review_id = documents.insertedId.toString();

                try {
                    const reviews = await db.collection("reviews").find({restaurant_id: restaurant_id}).toArray();

                    const totalRating = reviews.reduce((total, review) => total + review.rating, 0);
                    let averageRating = totalRating / reviews.length;
                    averageRating = Number(averageRating.toFixed(2));

                    const result = await db.collection("restaurants").updateOne(
                        {_id: new ObjectID(restaurant_id)},
                        {
                            $set: {review_average: averageRating},
                            $inc: {review_count: 1},
                            $push: {reviews: review_id}
                        }
                    );
                } catch (e) {
                    console.error(e);
                }
            }
        }

        res.json(documents);
    } catch (e) {
        console.error(e);
    }
}

export default handler;