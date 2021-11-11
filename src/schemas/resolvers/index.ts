import { NonEmptyArray } from 'type-graphql';
import AccountResolver from './AccountResolver';
import ProjectResolver from './ProjectResolver';
import TaskResolver from './TaskResolver';

export const resolvers = [
  AccountResolver,
  ProjectResolver,
  TaskResolver,
] as NonEmptyArray<any>;
