import { Http } from '@symbux/turbo';
import { TaskItem } from '../types/general';
import { v4 as uuid } from 'uuid';

@Http.Controller('/api/task')
export default class TaskApiController {
	private tasks: TaskItem[] = [
		{ id: '33fc1c1a-d89c-4a8e-8dee-e731f5e05eba', name: 'Daily scrum', description: 'Complete and participate in the dailu scrum.', completed: false },
		{ id: 'eaeffa02-49b9-4f36-8e85-4aaa6d0bab04', name: 'Read through tasks', description: 'Read through my tasks, and sort by importance.', completed: false },
		{ id: 'fd7143e8-5324-45ab-a3be-ab0b3d8bc224', name: 'Work on tasks', description: 'Start working on the tasks in order of importance.', completed: false },
		{ id: '1c1e1215-5c9d-4b4f-b39d-64bc0132432e', name: 'Note time', description: 'Notify to our time tracker how long I spent on each task.', completed: false },
	];

	@Http.Get('/')
	public async getTasks(): Promise<Http.Response> {
		return new Http.Response(200, this.tasks);
	}

	@Http.Post('/')
	public async createTask(context: Http.Context): Promise<Http.Response> {
		const { name, description, completed } = context.getBody();
		const newTask = { id: uuid(), name, description, completed: completed || false };
		this.tasks.push(newTask);
		return new Http.Response(201, newTask);
	}

	@Http.Delete('/:id')
	public async deleteTask(context: Http.Context): Promise<Http.Response> {
		const { id } = context.getParams();
		const task = this.tasks.find(t => t.id === id);
		if (!task) return new Http.Response(404, 'Task not found.');
		this.tasks = this.tasks.filter(t => t.id !== id);
		return new Http.Response(204);
	}

	@Http.Patch('/:id')
	public async updateTask(context: Http.Context): Promise<Http.Response> {
		const { id } = context.getParams();
		const task = this.tasks.find(t => t.id === id);
		if (!task) return new Http.Response(404, 'Task not found.');
		const { name, description, completed } = context.getBody();
		task.name = typeof name !== 'undefined' ? name : task.name;
		task.description = typeof description !== 'undefined' ? description : task.description;
		task.completed = typeof completed !== 'undefined' ? completed : task.completed;
		return new Http.Response(200, task);
	}
}
