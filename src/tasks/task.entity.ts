import { title } from "node:process";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("Tasks")
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


export enum TaskStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    CLOSE = "CLOSE",
}