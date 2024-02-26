import {NextApiRequest, NextApiResponse} from 'next';

import clientPromise from '../../../app/lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db();

        const restaurants = await db
            .collection("restaurants")
            .find()
            .toArray();

        res.json(restaurants);
    } catch (e) {
        console.error(e);
    }
}

export default handler;