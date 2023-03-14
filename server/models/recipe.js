import mongoose from "mongoose"

const ratingSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
})

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  image: { type: String, required: true },
  prepTime: { type: String, required: true },
  cookTime: { type: String, required: true },
  textDescription: { type: String, required: true, unique: true, maxlength: 1000 },
  normalIngredients: { type: Array, required: true },
  normalInstructions: { type: Array, required: true },
  normalNutrition: { type: Array, required: true }, 
  lowSaltIngredients: { type: Array, required: true },
  lowSaltInstructions: { type: Array, required: true },
  lowSaltNutrition: { type: Array, required: true },
  lowSugarIngredients: { type: Array, required: true },
  lowSugarInstructions: { type: Array, required: true },
  lowSugarNutrition: { type: Array, required: true },
  lowSaltAndSugarIngredients: { type: Array, required: true }, 
  lowSaltAndSugarDirections: { type: Array, required: true },
  lowSaltAndSugarNutirtion: { type: Array, required: true },
  authenticIngredients: { type: Array, required: true },
  authenticInstructions: { type: Array, required: true },
  authenticNutrition: { type: Array, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  ratings: [ratingSchema],
})

ratingSchema.virtual("avgRating").get(function () {
  if (!this.ratings) return "Not yet rated"
  const sum = this.ratings.reduce((acc, curr) => {
    return acc + curr
  }, 0)
  return (sum / this.ratings).toFixed(1)
})

ratingSchema.set("toJSON", {
  virtuals: true,
})

export default mongoose.model("Recipe", recipeSchema)
