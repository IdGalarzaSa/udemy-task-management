import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dtos/create-task.dto';
import { GetTasksFilterDTO } from './dtos/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) { }

}