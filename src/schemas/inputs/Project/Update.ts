import { InputType, Field } from 'type-graphql';
/**
 * UpdateProjectInput
 */
@InputType()
export default class UpdateProjectInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;
}
