import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    RecipesModule
  ]
})
export class AppModule {}
