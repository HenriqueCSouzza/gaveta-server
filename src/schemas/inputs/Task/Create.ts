import { InputType, Field } from 'type-graphql';
/**
 * CreateTaskInput{ nullable: true }
 */
@InputType()
export default class CreateTaskInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ defaultValue: false })
  status: boolean;
}
