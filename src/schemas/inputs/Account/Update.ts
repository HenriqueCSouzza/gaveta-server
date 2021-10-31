import { InputType, Field } from 'type-graphql';
/**
 * UpdateAccountInput
 */
@InputType()
export default class UpdateAccountInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  password: string;
}
