import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskModel, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dtos/create-task.dto';
import { GetTasksFilterDTO } from './dtos/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';

@Controller('tasks')
export class TasksController {
	constructor(private tasksService: TasksService) { }

	@Get()
	getTasks(@Query(ValidationPipe) query:GetTasksFilterDTO) {
		// Revisamos si el query tiene elementos para realizar una busqueda con filtros.
		if (Object.keys(query).length > 0 ) {
			return this.tasksService.getFilteredTasks(query);
		} else {
			return this.tasksService.gelAllTasks();
		}
	}

	@Get('/:id')
	getTaskById(@Param('id') id: String): TaskModel {
		return this.tasksService.getTaskById(id);
	}

	@Post()
	@UsePipes(ValidationPipe)
	async createTask(@Body() createTaskDTO: CreateTaskDTO) : Promise<TaskModel> {
		return this.tasksService.createTask(createTaskDTO);
	}

	@Delete('/:id')
	deleteTaskById(@Param('id') id : String) {
		this.tasksService.deleteTaskById(id);
	}

	@Patch('/:id/status')
	updateStatus(
		@Param('id') id:String,
		@Body('status', TaskStatusValidationPipe) status: TaskStatus): TaskModel{
		return this.tasksService.updateStatus(id,status);
	}

}