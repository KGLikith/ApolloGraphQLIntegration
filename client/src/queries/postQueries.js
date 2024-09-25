import { gql } from "@apollo/client";


const GET_POSTS = gql`
    query getposts{
        posts{
            id
            title
            body
            user{
                id
                name
                email
                phone
            }
        }
    }
`;

const GET_POST=gql`
    query getpost($id:ID){
        post(id:$id){
            title
            body
            id
            user{
                name
                email
                id
                phone
            }
        }
    }
`

export { GET_POSTS,GET_POST };
