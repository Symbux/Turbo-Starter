import { AbstractController, Http } from '@symbux/turbo';
import { PrismaClient } from '@prisma/client';
import { Inject } from '@symbux/injector';

@Http.Controller('/api/tasks')
export class TasksController extends AbstractController {

	@Inject() private prisma!: PrismaClient;

	@Http.Get('/')
	public async getTasks(): Promise<Http.Response> {
		return new Http.Response(200, {});
	}
}
