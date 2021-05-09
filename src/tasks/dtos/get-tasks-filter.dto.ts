import { Optional } from '@nestjs/common';
import { IsIn, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task.entity';
export class GetTasksFilterDTO {
 
    @Optional()
    @IsIn([TaskStatus.OPEN, TaskStatus.CLOSE, TaskStatus.IN_PROGRESS])
    status: TaskStatus;

    @Optional()
    @IsNotEmpty()
    search: string;
}
