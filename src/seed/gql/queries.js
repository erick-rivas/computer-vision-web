/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const RECOGNITION = `
{
  recognition {
    id
    image1
    image2
    response
    type
  }
}
`;

export const SET_RECOGNITION = `
mutation Set(
  $id: Int!,
  $image1: String,
  $image2: String,
  $response: GenericScalar,
  $type: String,
)
{
  setRecognition(
    id: $id,
    image1: $image1,
    image2: $image2,
    response: $response,
    type: $type,
  ) {
    recognition {
      id
      image1
      image2
      response
      type
    }
  }
}
`;

export const SAVE_RECOGNITION = `
mutation Save(
  $image1: String!,
  $image2: String,
  $response: GenericScalar!,
  $type: String!,
)
{
  saveRecognition(
    image1: $image1,
    image2: $image2,
    response: $response,
    type: $type,
  ) {
    recognition {
      id
    }
  }
}
`;

export const DELETE_RECOGNITION = `
mutation Delete($id: Int!)
{
  deleteRecognition(id: $id)
  {
    id
  }
}
`;

export const USER = `
{
  user {
    id
    username
    firstName
    lastName
    email
    isActive
  }
}
`;

export const SET_USER = `
mutation Set(
  $id: Int!,
  $username: String,
  $firstName: String,
  $lastName: String,
  $email: String,
  $isActive: Boolean,
  $password: String,
)
{
  setUser(
    id: $id,
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
    }
  }
}
`;

export const SAVE_USER = `
mutation Save(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
)
{
  saveUser(
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
  ) {
    user {
      id
    }
  }
}
`;

export const DELETE_USER = `
mutation Delete($id: Int!)
{
  deleteUser(id: $id)
  {
    id
  }
}
`;