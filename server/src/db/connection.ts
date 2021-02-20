import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "../entity/User";
import { Post } from "../entity/Post"

const connection = async (query: string) => {

    let returnValue: any = "A"

    await createConnection().then(async connection => {

        let postRepository = connection.getRepository(Post);
        let userRepository = connection.getRepository(User);
        
        if(query == "getPosts") {

            let posts = await postRepository.find();
            console.log("All posts from the db: ", posts);
            returnValue = posts;
            console.log("HHH", returnValue)
        }
        else if(query == "getUsers") {

            let users = await userRepository.find();
            console.log("All users from the db: ", users);
            returnValue =  users;
        }
        else {
            console.log(query)
            console.log("Inserting a new user into the database...");
            const user = new User();
            user.username = "Timbersaw"
            user.password = "waves"
            
            await connection.manager.save(user);
            console.log("Saved a new user with id: " + user.id);
        
            console.log("Loading users from the database...");
            const users = await connection.manager.find(User);
            console.log("Loaded users: ", users);

            returnValue = users
        }

        

        connection.close()
        
        
        
    
        
    
    }).catch(error => console.log(error));

    console.log("HEY", returnValue)
    return returnValue
}

export default connection

    


