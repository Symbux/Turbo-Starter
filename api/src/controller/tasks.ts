import { AbstractController, Http, Task } from '@symbux/turbo';
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

		// Create new task.
		const task = context.getBody();
		await this.prisma.task.create({
			data: {
				title: task.title,
				content: task.content,
				due: task.due,
				completed: task.completed,
			},
		}).then((value: any) => {
			console.log(value);
		}).catch((error: any) => {
			console.log(error);
		});

		// Response with success.
		return new Http.Response(201, { status: true });
	}
}
