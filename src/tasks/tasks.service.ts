import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v1 as uuid} from 'uuid';
import { CreateTaskDTO } from './dtos/create-task.dto';
import { GetTasksFilterDTO } from './dtos/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {

	constructor(
		@InjectRepository(TaskRepository)
		private taskRepository: TaskRepository,
	){}

	
}