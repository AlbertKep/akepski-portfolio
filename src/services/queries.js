import { gql } from "@apollo/client";

export const PAGES = gql`
  query GetPages {
    pages {
      data {
        id
        attributes {
          title
          subtitle
          description
          technologies {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          nextTechnologies {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const PROJECTS = gql`
  query GetProjects {
    projects {
      data {
        attributes {
          title
          description
          image {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
