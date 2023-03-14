import mongoose from 'mongoose'
import Recipe from '../models/recipe.js'
import recipeData from './seedData/recipes.js'
import User from '../models/user.js'
import userData from './seedData/users.js'
import dotenv from 'dotenv'
dotenv.config()


const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.set('strictQuery', false)
    console.log('DB connected to seeds')

    //drop old db
    await mongoose.connection.db.dropDatabase()
    console.log('DB dropped')

    //create users
    const users = await User.create(userData)

    //create workspacedata with added owner field
    const recipesWithUsers = recipeData.map(recipe => {
      return { ...recipe, owner: users[0]._id }
    })

    //create shows
    const recipes = await Recipe.create(recipesWithUsers)
    console.log(`DB seeds with ${recipes.length} recipes`)

    //close connection
    await mongoose.connection.close()
    console.log('Connection Closed')

  } catch (err) {
    console.log("Data not seeded", err)
    await mongoose.connection.close()

  }
}

seedDatabase()