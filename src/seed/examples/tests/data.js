const GQL_RECOGNITION_ = {
    type: "ATTRIBUTES",
    response: "{}",
    image: { url: "" },
    imageBase64: "",
    processedImage: { url: "" },
    processedImageBase64: "",
}
export const GQL_RECOGNITION = {
    recognition: GQL_RECOGNITION_
}
export const GQL_RECOGNITIONS = {
    recognitions: [ GQL_RECOGNITION_ ]
}
export const GQL_RECOGNITION_PAGINATION = {
    recognitionPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        recognitions: [ GQL_RECOGNITION_ ]
    }
}

export const API_RECOGNITION = {
    type: "ATTRIBUTES",
    response: "{}",
    image_id: 1,
    image_base64: "",
    processed_image_id: 1,
    processed_image_base_64: "",
}
export const API_RECOGNITIONS = [API_RECOGNITION]

const GQL_USER_ = {
    username: "email@test.com",
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    isActive: true,
}
export const GQL_USER = {
    user: GQL_USER_
}
export const GQL_USERS = {
    users: [ GQL_USER_ ]
}
export const GQL_USER_PAGINATION = {
    userPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        users: [ GQL_USER_ ]
    }
}

export const API_USER = {
    username: "email_1@test.com",
    first_name: "FirstName",
    last_name: "LastName",
    email: "email_1@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    is_active: false,
}
export const API_USERS = [API_USER]