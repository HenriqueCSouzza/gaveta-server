import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity('accounts')
@ObjectType()
export class Account extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  provider: string;

  @Field(() => String)
  @Column()
  password: string;
}
