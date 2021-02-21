// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
hello: string;
getAllUsers: Array<IUser | null> | null;
getAllPosts: Array<IPost | null> | null;
}

interface IHelloOnQueryArguments {
name?: string | null;
}

interface IUser {
__typename: "User";
username: string | null;
password: string | null;
}

interface IPost {
__typename: "Post";
city: string | null;
temperature: string | null;
weather: string | null;
description: string | null;
}

interface IMutation {
__typename: "Mutation";
register: IUser | null;
login: IUser | null;
savePost: boolean | null;
}

interface IRegisterOnMutationArguments {
username: string;
password?: string | null;
}

interface ILoginOnMutationArguments {
username: string;
password?: string | null;
}

interface ISavePostOnMutationArguments {
username: string;
city: string;
temperature: string;
weather: string;
description: string;
}
}

// tslint:enable
