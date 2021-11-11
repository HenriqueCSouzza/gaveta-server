import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Filter } from 'type-graphql-filter';

@Entity('tasks')
@ObjectType()
export class Task extends BaseEntity {
  @Field(() => ID)
  @Filter(['eq', 'ne', 'like', 'likeAny', 'in'])
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Field(() => String)
  @Filter(['eq', 'ne', 'like', 'likeAny', 'in'])
  @Column()
  title: string;

  @Field(() => String)
  @Filter(['eq', 'ne', 'like', 'likeAny', 'in'])
  @Column()
  description: string;

  @Field(() => Boolean)
  @Filter(['eq', 'ne', 'like', 'likeAny', 'in'])
  @Column()
  status: boolean;
}
