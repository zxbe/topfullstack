import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { RecipeDb, RecipeSchema } from 'src/db/models/recipe.db.model'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RecipeDb.name, schema: RecipeSchema }])
  ],
  // providers: [RecipesService, RecipesResolver, DateScalar]
  providers: [RecipesService, RecipesResolver]
})
export class RecipesModule {}
