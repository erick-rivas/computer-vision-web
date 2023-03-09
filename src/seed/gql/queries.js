/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const RECOGNITION = `
{
  recognition {
    id
    type
    response
    imageBase64
    processedImageBase64
    image {
      id
    }
    processedImage {
      id
    }
  }
}
`;

export const SET_RECOGNITION = `
mutation Set(
  $id: Int!,
  $type: String,
  $response: GenericScalar,
  $image: Int,
  $imageBase64: String,
  $processedImage: Int,
  $processedImageBase64: String,
)
{
  setRecognition(
    id: $id,
    type: $type,
    response: $response,
    image: $image,
    imageBase64: $imageBase64,
    processedImage: $processedImage,
    processedImageBase64: $processedImageBase64,
  ) {
    recognition {
      id
      type
      response
      imageBase64
      processedImageBase64
      image {
        id
      }
      processedImage {
        id
      }
    }
  }
}
`;

export const SAVE_RECOGNITION = `
mutation Save(
  $type: String!,
  $response: GenericScalar!,
  $image: Int!,
  $imageBase64: String!,
  $processedImage: Int!,
  $processedImageBase64: String!,
)
{
  saveRecognition(
    type: $type,
    response: $response,
    image: $image,
    imageBase64: $imageBase64,
    processedImage: $processedImage,
    processedImageBase64: $processedImageBase64,
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