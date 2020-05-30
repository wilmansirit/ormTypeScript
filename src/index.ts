import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";

createConnection().then(async connection => {

    /* Using EntityManager */

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Wilman";
    // user.lastName = "Sirit";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");


    // New Photo
    // console.log("Inserting a new photo...");
    // const photo = new Photo();
    // photo.name = "SpaceX";
    // photo.description = "The Dragon has arrived...";
    // photo.filename = "https://i.insider.com/5e220ea524306a016e4f2012?width=1100&format=jpeg&auto=webp";
    // photo.views = 0;
    // photo.isPublished = true;
    // await connection.manager.save(photo);
    // console.log(`The ${photo.name} photo was inserted with success..!`);

    // console.log("Loading photos from the database...");
    // const photos = await connection.manager.find(Photo)
    // console.log("Loaded photos: ", photos);


    /* Using Repository */

    let photo = new Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.views = 1;
    photo.isPublished = true;

    let photoRepository = connection.getRepository(Photo);
    await photoRepository.save(photo);
    console.log("Photo has been saved");

    let savedPhotos = await photoRepository.find();
    console.log("All photos from he db: ", savedPhotos);


    connection.close();

}).catch(error => console.log(error));

