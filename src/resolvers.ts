import {
  Query,
  Resolver,
  Arg,
  Mutation,
  FieldResolver,
  Root,
} from "type-graphql";
import { Data } from "./types";

@Resolver()
export class ResolverProvider {
  @Query(() => Data, { description: "Query for get Data by its ID" })
  Data(@Arg("id") id: string) {
    return { id, value: "hello" };
  }
  @Query(() => [Data], { description: "Query for getting all data" })
  allData() {
    return [{ id: "1", value: "hello" }];
  }
  @Mutation(() => Data, { description: "Post new Data" })
  postData(@Arg("value") value: string, @Arg("userId") userId: string) {
    console.log("postData", value, userId);
    return { id: "1", value: "hello" };
  }
  @Mutation(() => Boolean, { description: "Delete Data by ID" })
  deleteData(@Arg("id") id: string) {
    return true;
  }
}

@Resolver((of) => Data)
export class DataResolver {
  @FieldResolver({ description: "Status check of ID of Data" })
  status(@Root() { id }: Data) {
    return id ? "ok" : "error";
  }
}
