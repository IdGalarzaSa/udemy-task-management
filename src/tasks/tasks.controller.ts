import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dtos/create-task.dto';
import { GetTasksFilterDTO } from './dtos/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TaskEntity } from './task.entity';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) { }

	@Get('/:id')
	getTaskByID(@Param('id', ParseIntPipe) id:number): Promise<TaskEntity> {
	 	return this.tasksService.getTaskById(id);
	}
}