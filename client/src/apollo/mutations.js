import gql from 'graphql-tag'

export const LOGIN_USER = gql`
  mutation Login {
    login(email: "arun@gmail.com")
  }
`
