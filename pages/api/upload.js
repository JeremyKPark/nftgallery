import fs from "fs"; // Filesystem
import { promisify } from "util"; // Promisify fs
import { v4 as uuid } from "uuid"; // UUID generation
import formidable from "formidable"; // Formidable form handling
// import fleekStorage from "@fleekhq/fleek-storage-js"; // Fleek storage
import { NFTStorage, File } from 'nft.storage' // NFT.Storage

// Fleek authentication
//const fleekAuth = {
//  apiKey: process.env.FLEEK_API_KEY,
//  apiSecret: process.env.FLEEK_API_SECRET,
//};

//NFT.Storage authentication
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnaXRodWJ8NzM1NzcxMTYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYxNjI2MzUwMjUwNSwibmFtZSI6IlpvcmFVcGxvYWQifQ.bFZ9Rqp_483Jkscr_8T_1zN66SvBC-ngfmxg0GX004E';
const client = new NFTStorage({ token: apiKey });
const ipfsGateway = '.ipfs.dweb.link/';

// Async readFile operation
const readFileAsync = promisify(fs.readFile);

export default async (req, res) => {
  // Setup incoming form data
  const form = new formidable.IncomingForm({ keepExtensions: true });

  // Collect data from form
  const data = await new Promise((res, rej) => {
    // Parse form data
    form.parse(req, (err, fields, files) => {
      // if error, reject promise
      if (err) return rej(err);
      // Else, return fields and files
      res({ fields, files });
    });
  });

  // Collect file and metadataJSON from POST request
  const { name, metadata } = data.fields;

  // Collect uploaded media
  const { upload: file } = data.files;
  const fileData = await readFileAsync(file.path);

  // If file, name, and metadata provided
  if (fileData && name && metadata) {

    // Get Blob from filedata
	//const contentFile = new Blob([fileData]);


    // Get Blob from Metadata
    //const contentMeta = new Blob([metadata]);



    //INIT directory on NFT.Storage and get CID
    const cid = await client.storeDirectory([
        new File([fileData], 'image.jpg'),
        new File([metadata], 'metadata.json')
    ]);

    const fileUrl = 'https://' + cid + ipfsGateway + 'image.jpg';
    const metadataUrl = 'https://' + cid + ipfsGateway + 'metadata.json';
    console.log({ fileUrl, metadataUrl });

      // Upload media to Fleek
    	// const { publicUrl: fileUrl } = await fleekStorage.upload({
    	//  ...fleekAuth,
    	// key: uuid(),
    	// data: fileData,
    	//});

    // Upload metdata to Fleek
    	//const { publicUrl: metadataUrl } = await fleekStorage.upload({
      	//...fleekAuth,
      	//key: uuid(),
      	//data: metadata,
    	//});

    // Return fileUrl and metadataUrl
    res.send({fileUrl, metadataUrl});
  } else {
    // Else, return 501
    res.status(501);
  }

  // End
  res.end();
};

// Remove bodyParser from endpoint
export const config = {
  api: {
    bodyParser: false,
  },
};
