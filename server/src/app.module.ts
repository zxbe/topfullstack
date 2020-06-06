import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { DbModule } from './db/db.module'
import { RecipesModule } from './recipes/recipes.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    RecipesModule,
    DbModule
  ]
})
export class AppModule {}
