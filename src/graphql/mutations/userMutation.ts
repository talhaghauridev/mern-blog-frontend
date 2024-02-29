import { gql } from "@apollo/client";



const LOGIN_USER = gql`
mutation LoginUser($userData: LoginInput!) {
  user:loginUser(userData: $userData) {
  name
  email  
  token
  }
}


`

const SIGNUP_USER = gql`
mutation SignupUser($userData: SignupInput!) {
  signupUser(userData: $userData) {
  email
  name
  token
  _id  
  }
}
`

export {LOGIN_USER,SIGNUP_USER}