import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Project } from '../../models/Project';
import { Create, Update } from '../inputs/Project';

@Resolver()
class ProjectResolver {
  @Query(() => [Project])
  projects() {
    return Project.find();
  }

  @Query(() => Project)
  project(@Arg('uuid') uuid: string) {
    return Project.findOne({ where: { uuid } });
  }

  @Mutation(() => Project)
  async createProject(@Arg('data') data: Create) {
    const project = Project.create(data);
    await project.save();
    return project;
  }

  @Mutation(() => Project)
  async updateProject(@Arg('uuid') uuid: string, @Arg('data') data: Update) {
    const project = await Project.findOne({ where: { uuid } });
    if (!project) throw new Error('Project not found!');
    Object.assign(project, data);
    await project.save();
    return project;
  }

  @Mutation(() => Boolean)
  async deleteProject(@Arg('uuid') uuid: string) {
    const project = await Project.findOne({ where: { uuid } });
    if (!project) throw new Error('Project not found!');
    await project.remove();
    return true;
  }
}

export default ProjectResolver;
