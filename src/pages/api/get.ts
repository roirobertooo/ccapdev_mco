import {NextApiRequest, NextApiResponse} from 'next';
import {ObjectId} from 'mongodb';

import clientPromise from '../../app/lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const collectionName = (req.query.collectionName) as string || null;
    const findKeys = (req.query.findKeys as string)?.split(',') || [];
    const findValues = (req.query.findValues as string)?.split(',') || [];
    const sortKeys = (req.query.sortKeys as string)?.split(',') || [];
    const sortOrders = (req.query.sortOrders as string)?.split(',') || [];

    try {
        const client = await clientPromise;
        const db = client.db();

        let documents: any[];

        if (collectionName && findKeys && findValues && findKeys.length === findValues.length) {
            const queryObject = findKeys.reduce((obj: Record<string, any>, key, index) => {
                obj[key] = key === '_id' ? new ObjectId(findValues[index]) : findValues[index];
                return obj;
            }, {});

            const sortObject = sortKeys.reduce((obj: Record<string, any>, key, index) => {
                obj[key] = sortOrders[index] === 'desc' ? -1 : 1;
                return obj;
            }, {});

            documents = await db
                .collection(collectionName)
                .find(queryObject)
                .sort(sortObject)
                .toArray();
        }

        res.json(documents);
    } catch (e) {
        console.error(e);
    }
}

export default handler;