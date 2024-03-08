import {MongoClient} from 'mongodb';

declare global {
    const _mongoClientPromise: Promise<MongoClient>; // NOTE: Revert back to a "var" if problems arise.
}
