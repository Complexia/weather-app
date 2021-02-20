import { Post } from './entity/Post';
import { User } from './entity/User';

export const resolvers = {
    Query: {
        hello: (_: any, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || 'World'}`,
      

        getAllPosts: async () => {
            
            const allPosts = await Post.find()
            return allPosts
        },

        getAllUsers: async () => {
            
            const allUsers = await User.find()
            return allUsers
        },

        
    },

    Mutation: {
        register: async (_: any, { username, password }: GQL.IRegisterOnMutationArguments) => {
            const user = User.create({
                username,
                password
            })
            await user.save()
            return user
        },

        login: async (_: any, { username, password }: GQL.ILoginOnMutationArguments) => {
            
            const user = await User.findOne({ username: username });
            
            if(!user) {
                return {
                    errors: [{
                        field: "username",
                        message: "no such user"
                    }]
                }
            }

            if(user.password != password) {
                return {
                    errors: [{
                        field: "password",
                        message: "wrong password"
                    }]
                }
            }
            return user
            
        },

        savePost: async (_: any, { username, city, temperature, weather, description }: GQL.ISavePostOnMutationArguments) => {

            let user = await User.findOne({ username: username });
            if (!user) {
                user = User.create({
                    username: "Unknown",
                    password: ""
                })
            }
            const post = Post.create({               
                city,
                temperature,
                weather,
                description,
                user
            })
            await post.save()
            return true
        }

      },

      

    
    
};



