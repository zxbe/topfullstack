import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Recipe {
  @Field(type => ID)
  _id: string

  @Field()
  title: string

  @Field()
  description: string

  // @Field()
  // creationDate: Date

  // @Field(type => [String])
  // ingredients: string[]
}
