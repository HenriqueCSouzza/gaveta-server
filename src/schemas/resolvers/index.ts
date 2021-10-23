import { NonEmptyArray } from "type-graphql";
import { AccountResolver } from "./AccountResolver";

export const resolvers = [
  AccountResolver,
] as NonEmptyArray<Function>;
