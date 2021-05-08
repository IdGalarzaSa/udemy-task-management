import { title } from "node:process";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { TaskStatus } from './tasks.model';

@Entity()
export class TaskEntity extends BaseEntity {

    // Define la comluman del key
    @PrimaryGeneratedColumn() 
    id: number;

    // Define una columna
    @Column()
    title: string;
    
    @Column()
    description: string;

    @Column()
    // Podemos definir como tipo de columna a un enum
    status: TaskStatus; 
}