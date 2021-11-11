import { InputType, Field } from 'type-graphql';
/**
 * UpdateAccountInput
 */
@InputType()
export default class UpdateAccountInput {
  @Field({ nullable: true })
  email?: string;

  @Field()
  provider: string;

  @Field()
  password: string;
}
