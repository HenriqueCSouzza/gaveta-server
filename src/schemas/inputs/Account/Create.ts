import { InputType, Field } from 'type-graphql';
/**
 * CreateAccountInput
 */
@InputType()
export default class CreateAccountInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
