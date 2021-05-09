import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v1 as uuid} from 'uuid';
import { CreateTaskDTO } from './dtos/create-task.dto';
import { GetTasksFilterDTO } from './dtos/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { TaskEntity } from './task.entity';

@Injectable()
export class TasksService {

	constructor(
		@InjectRepository(TaskRepository)
		private taskRepository: TaskRepository,
	){}

	async getTaskById(id: number): Promise<TaskEntity> {
		const found = await this.taskRepository.findOne(id);

		if (!found) {
			throw new NotFoundException(`Task with ID ${id} not found.`);
		}

		return found;
	}
	
}