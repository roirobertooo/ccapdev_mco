import {createClient} from 'contentful-management';

const client = createClient({
    accessToken: "CFPAT-XiT-brHd6KB6hJrkNYgBr-fqPLxyeI7PR2FTzCDdWEM"
});

const spaceId = "pof3zafcks92";
const environmentId = "master";

let assetUrl = "";

interface Asset {
    title: string;
    path: string;
}

function uploadImage(asset: Asset) {
    const {title, path} = asset;

    client.getSpace(spaceId)
        .then((space) => space.getEnvironment(environmentId))
        .then((environment) => environment.createAssetFromFiles({
            fields: {
                title: {
                    "en-US": title
                },
                description: {
                    "en-US": "Asset description"
                },
                file: {
                    "en-US": {
                        contentType: "image/*",
                        fileName: `${path}.png`,
                        file: path
                    }
                }
            }
        }))
        .then((asset) => asset.processForAllLocales())
        .then((asset) => {
            asset.publish().then(r => r);

            if (asset.fields.file["en-US"].url) {
                assetUrl = "https:" + asset.fields.file["en-US"].url;
            } else {
                assetUrl = ""; // default value
            }
        })
        .catch(console.error)

    return assetUrl;
}

export default uploadImage;