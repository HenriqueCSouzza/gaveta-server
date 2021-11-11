import { InputType, Field } from 'type-graphql';
/**
 * CreateAccountInput{ nullable: true }
 */
@InputType()
export default class CreateAccountInput {
  @Field()
  email: string;

  @Field({ nullable: true })
  provider: string;

  @Field()
  password: string;
}
