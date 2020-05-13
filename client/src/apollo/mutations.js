import gql from 'graphql-tag'

export const LOGIN_USER = gql`
  mutation Login($email: String) {
    login(email: $email)
  }
`
