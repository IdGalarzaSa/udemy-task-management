import { Injectable } from '@nestjs/common';
import { TaskModel, TaskStatus } from './tasks.model';
import { v1 as uuid} from 'uuid';
import { CreateTaskDTO } from './dtos/create-task.dto';
import { GetTasksFilterDTO } from './dtos/get-tasks-filter.dto';

@Injectable()
export class TasksService {
	private tasks: TaskModel[] = [];

	gelAllTasks(): TaskModel[] {
		return this.tasks;
	}

	getFilteredTasks(query: GetTasksFilterDTO): TaskModel[] {

		const {status, search} = query;

		let filteredTasks = this.tasks;

		if (status) {
			filteredTasks = filteredTasks.filter(task => task.status === status);
		}

		if (search) {
			filteredTasks = filteredTasks.filter(task => task.description.includes(search) || task.title.includes(search))
		}

		return filteredTasks;
	}

	getTaskById(id: String): TaskModel {
		return this.tasks.find(task=> task.id === id);
	}

	createTask(createTaskDTO: CreateTaskDTO) {
		const {title, description} = createTaskDTO;

		const newTask: TaskModel = {
			id: uuid(), 
			title,
			description,
			status: TaskStatus.OPEN
		}

		this.tasks.push(newTask);
		return newTask;
	}

	deleteTaskById(id: String) : void {
		this.tasks = this.tasks.filter(task => task.id !== id);
	}

	updateStatus(id: String, status: TaskStatus): TaskModel{
		const task = this.getTaskById(id);
		task.status = status;
		return task;
	}

}