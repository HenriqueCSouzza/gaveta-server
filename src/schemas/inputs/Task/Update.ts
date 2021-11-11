import { InputType, Field } from 'type-graphql';
/**
 * UpdateTaskInput
 */
@InputType()
export default class UpdateTaskInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ defaultValue: false })
  status: boolean;
}
