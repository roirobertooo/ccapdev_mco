import {NextApiRequest, NextApiResponse} from 'next';

import clientPromise from '../../../app/lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const sortKey = (req.query.sortKey) as string || null;
    const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1; // -1 for descending, 1 for ascending (default)

    try {
        const client = await clientPromise;
        const db = client.db();

        let restaurants: any[];

        if (sortKey) { // If sortKey is provided, sort the restaurants with the given direction
            restaurants = await db
                .collection("restaurants")
                .find()
                .sort({[sortKey]: sortOrder})
                .toArray();
        } else { // If sortKey is not provided, return all restaurants in default order (asc)
            restaurants = await db
                .collection("restaurants")
                .find()
                .toArray();
        }

        res.json(restaurants);
    } catch (e) {
        console.error(e);
    }
}

export default handler;