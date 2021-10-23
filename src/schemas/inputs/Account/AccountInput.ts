import { InputType, Field } from "type-graphql";
/**
 * CreateAccountInput
 */
@InputType()
export class CreateAccountInput {
  @Field()
  name: string;

  @Field()
  email: string;
}
/**
 * UpdateAccountInput
 */
@InputType()
export class UpdateAccountInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

}
