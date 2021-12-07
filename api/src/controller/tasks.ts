import { AbstractController, Http } from '@symbux/turbo';
import { PrismaClient } from '@prisma/client';
import { Inject } from '@symbux/injector';

@Http.Controller('/api/tasks')
export class TasksController extends AbstractController {

	@Inject() private prisma!: PrismaClient;

	@Http.Get('/')
	public async getTasks(): Promise<Http.Response> {
		const tasks = await this.prisma.task.findMany();
		return new Http.Response(200, tasks);
	}

	@Http.Post('/')
	public async createTask(context: Http.Context): Promise<Http.Response> {
		console.log(context);
		return new Http.Response(204);
	}
}
