import { Module } from '@nestjs/common'
import { DateScalar } from 'src/common/scalars/date.scalar'
import { RecipesResolver } from './recipes.resolver'
import { RecipesService } from './recipes.service'

@Module({
  providers: [RecipesService, RecipesResolver, DateScalar]
})
export class RecipesModule {}
