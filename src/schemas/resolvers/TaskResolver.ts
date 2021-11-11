import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Task } from '../../models/Task';
import { Create, Update } from '../inputs/Task';

@Resolver()
class TaskResolver {
  @Query(() => [Task])
  tasks() {
    return Task.find();
  }

  @Query(() => Task)
  task(@Arg('uuid') uuid: string) {
    return Task.findOne({ where: { uuid } });
  }

  @Mutation(() => Task)
  async createTask(@Arg('data') data: Create) {
    const task = Task.create(data);
    await task.save();
    return task;
  }

  @Mutation(() => Task)
  async updateTask(@Arg('uuid') uuid: string, @Arg('data') data: Update) {
    const task = await Task.findOne({ where: { uuid } });
    if (!task) throw new Error('Task not found!');
    Object.assign(task, data);
    await task.save();
    return task;
  }

  @Mutation(() => Boolean)
  async deleteTask(@Arg('uuid') uuid: string) {
    const task = await Task.findOne({ where: { uuid } });
    if (!task) throw new Error('Task not found!');
    await task.remove();
    return true;
  }
}

export default TaskResolver;
