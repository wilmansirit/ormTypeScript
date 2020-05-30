

import { createConnection } from "typeorm";
import { Photo } from './entity/Photo'

createConnection().then(async connection => {

    const photoRepository = connection.getRepository(Photo);

    // Find all
    let allPhotos = await photoRepository.find();
    console.log("All photos from db:\n", allPhotos, "\n");

    // Find the first one
    let firstPhoto = await photoRepository.findOne(1);
    console.log("First photo from db:\n", firstPhoto, "\n");

    // Find a particular photo
    let SpaceX = await photoRepository.findOne({ name: "SpaceX" });
    console.log("SpaceX photo from db:\n", SpaceX, "\n");

    // Find all viewed photos
    let allViewedPhotos = await photoRepository.find({ views: 1 });
    console.log("Viewed photos from db:\n", allViewedPhotos, "\n");

    // Find published photos
    let allPublishedPhotos = await photoRepository.find({ isPublished: true });
    console.log("All published from db:\n", allPublishedPhotos, "\n");

    // Find all photos and count

    let [allPhotos2, photoCount] = await photoRepository.findAndCount();
    console.log("There are \%d photos from db:\n", photoCount, allPhotos2, "\n");



    // Close the connection
    connection.close()

})
    .catch(err => console.log(err));