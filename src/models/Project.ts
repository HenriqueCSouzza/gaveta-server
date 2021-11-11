import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Filter } from 'type-graphql-filter';

@Entity('projects')
@ObjectType()
export class Project extends BaseEntity {
  @Field(() => ID)
  @Filter(['eq', 'ne', 'like', 'likeAny', 'in'])
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Field(() => String)
  @Filter(['eq', 'ne', 'like', 'likeAny', 'in'])
  @Column()
  name: string;

  @Field(() => String)
  @Filter(['eq', 'ne', 'like', 'likeAny', 'in'])
  @Column()
  description: string;
}
