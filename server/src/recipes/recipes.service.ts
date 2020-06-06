import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { RecipeDb } from '../db/models/recipe.db.model'
import { NewRecipeInput } from './dto/new-recipe.input'
import { RecipesArgs } from './dto/recipes.args'
import { Recipe } from './recipe.graphql.model'

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(RecipeDb.name) private recipeDbModel: Model<RecipeDb>
  ) {}

  async create(newRecipeInput: NewRecipeInput): Promise<Recipe> {
    return new this.recipeDbModel(newRecipeInput).save()
  }

  async findOneById(id: string): Promise<Recipe> {
    let recipe
    try {
      recipe = await this.recipeDbModel.findById(id)
    } catch (ExceptionsHandler) {
      throw new BadRequestException(`${id} is not a valid id.`)
    }
    if (!recipe) {
      throw new NotFoundException(`${id} is not found.`)
    }
    return recipe
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipeDbModel.find({ ...recipesArgs })
  }

  async remove(id: string): Promise<boolean> {
    const removeRecipe = this.recipeDbModel.findByIdAndRemove(id)
    if (removeRecipe) return true
    return false
  }
}
