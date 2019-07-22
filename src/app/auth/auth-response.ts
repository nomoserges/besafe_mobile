export interface AuthResponse {
    user: {
        userid: number,
        firstname: string,
        lastname: string,
        access_token: string,
        expires_in: number
    }
}
