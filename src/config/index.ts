import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
    path : path.join(process.cwd(), ".env")
})

export default {
    port : process.env.PORT,
    DATABASE_URL : process.env.DATABASE_URL,
    NODE_ENV : process.env.NODE_ENV,
    BCRYPT_SALT_ROUNDS : process.env.BCRYPT_SALT_ROUNDS,
    JWT_ACCESS_SECRET : process.env.JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRES_IN : process.env.JWT_ACCESS_EXPIRES_IN
}