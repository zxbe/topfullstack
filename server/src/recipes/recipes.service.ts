import { Injectable } from '@nestjs/common'
import { NewRecipeInput } from './dto/new-recipe.input'
import { RecipesArgs } from './dto/recipes.args'
import { Recipe } from './models/recipe.model'

@Injectable()
export class RecipesService {
  async create(date: NewRecipeInput): Promise<Recipe> {
    return {} as any
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[]
  }

  async remove(id: string): Promise<boolean> {
    return true
  }
}
