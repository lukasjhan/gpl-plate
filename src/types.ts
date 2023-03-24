import { ID, ObjectType, Field } from "type-graphql";

@ObjectType()
export class Data {
  @Field((type) => ID, { description: "The id of the data" })
  id!: string;

  @Field({ description: "The value of the data" })
  value!: string;

  @Field({ description: "The status of the data" })
  status!: string;
}
