import { InputType, Field } from 'type-graphql';
/**
 * CreateProjectInput{ nullable: true }
 */
@InputType()
export default class CreateProjectInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;
}
