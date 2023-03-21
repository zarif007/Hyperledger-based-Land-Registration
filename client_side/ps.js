// Initializing IPFS instance 
const ipfs = ipfsHttpClient(ipfsUrl, credentials);

async function onSubmitHandler() {
    //user input
    const file = files[0];
    // upload files
    const result = await ipfs.add(file);
    // Storing upload image path
    setUploadedImage(result.path)
}
