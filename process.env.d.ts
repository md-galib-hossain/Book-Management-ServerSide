declare namespace NodeJS{
    export type ProcessEnv = {
        JWT_ACCESS_EXPIRES_IN: any
        JWT_ACCESS_SECRET: any
        BCRYPT_SALT_ROUNDS: any
        PORT : number
        DATABASE_URL : string
        NODE_ENV : string

    }
}