import gql from "graphql-tag";

export default gql`
  query SingQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;