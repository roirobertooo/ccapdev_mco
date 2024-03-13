import {NextApiRequest, NextApiResponse} from 'next';
import {ObjectId} from 'mongodb';

import clientPromise from '@/app/lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const collectionName = (req.query.collectionName) as string || null;

    const findKeys = (req.query.findKeys as string)?.split(",") || [];
    const findValues = (req.query.findValues as string)?.split(",") || [];

    const updateKeys = (req.query.updateKeys as string)?.split(",") || [];
    const updateValues = (req.query.updateValues as string)?.split(",") || [];

    if (findValues[findKeys.indexOf("_id")] === "null" || findValues[findKeys.indexOf("_id")] === "undefined" ||
        findKeys.length !== findValues.length || updateKeys.length !== updateValues.length) {
        return;
    }

    try {
        const client = await clientPromise;
        const db = client.db();

        if (collectionName && findKeys && findValues && findKeys.length === findValues.length && updateKeys && updateValues && updateKeys.length === updateValues.length) {
            const queryObject = findKeys.reduce((obj: Record<string, any>, key, index) => {
                obj[key] = key === "_id" ? new ObjectId(findValues[index]) : findValues[index];
                return obj;
            }, {});

            const pushObject: Record<string, any> = {};
            const setObject: Record<string, any> = {};
            const pullObject: Record<string, any> = {};

            updateKeys.forEach((key, index) => {
                if (updateValues[index] !== "undefined") {
                    if (key.startsWith("-")) {
                        const actualKey = key.substring(1); // remove the "-" from the start
                        if (!pullObject[actualKey]) {
                            pullObject[actualKey] = updateValues[index];
                        } else {
                            pullObject[actualKey].push(updateValues[index]);
                        }
                    } else if (key === "reviews" || key === "review_media_url" || key === "likes" || key === "dislikes" || key === "owners_comments") {
                        if (!pushObject[key]) {
                            pushObject[key] = updateValues[index];
                        } else {
                            pushObject[key].push(updateValues[index]);
                        }
                    } else {
                        if (key.includes("count") || key.includes("average") || key == "rating") {
                            setObject[key] = Number(updateValues[index]);
                        } else {
                            setObject[key] = updateValues[index];
                        }
                    }
                }
            });

            const result = await db
                .collection(collectionName)
                .updateMany(queryObject, {$set: setObject, $push: pushObject, $pull: pullObject});

            res.json({matchedCount: result.matchedCount, modifiedCount: result.modifiedCount});
        }
    } catch (e) {
        console.error(e);
    }
}

export default handler;