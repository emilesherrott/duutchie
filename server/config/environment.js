import dotenv from 'dotenv'
dotenv.config()

export const port = process.env.PORT || 3000
export const dbURI = 'mongodb+srv://emilesherrott:gingerBeer1988@duutchie.0lzxynw.mongodb.net/general'
export const secret = process.env.SECRET || 'griot'