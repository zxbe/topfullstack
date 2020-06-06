import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'apollo-server-express'
import { NewRecipeInput } from './dto/new-recipe.input'
import { RecipesArgs } from './dto/recipes.args'
import { Recipe } from './recipe.graphql.model'
import { RecipesService } from './recipes.service'

const pubSub = new PubSub()

@Resolver(of => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(returns => Recipe)
  async recipe(@Args('id') id: string): Promise<Recipe> {
    return await this.recipesService.findOneById(id)
  }

  @Query(returns => [Recipe])
  recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return this.recipesService.findAll(recipesArgs)
  }

  @Mutation(returns => Recipe)
  async addRecipe(
    @Args('newRecipeInput') newRecipeInput: NewRecipeInput
  ): Promise<Recipe> {
    const recipe = await this.recipesService.create(newRecipeInput)
    pubSub.publish('recipeAdd', { recipeAdd: recipe })
    return recipe
  }

  @Mutation(returns => Boolean)
  async removeRecipe(@Args('id') id: string) {
    return this.recipesService.remove(id)
  }

  @Subscription(returns => Recipe)
  recipeAdd() {
    return pubSub.asyncIterator('recipeAdd')
  }
}
