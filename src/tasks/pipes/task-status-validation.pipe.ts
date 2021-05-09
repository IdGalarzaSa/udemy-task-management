import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task.entity";

export class TaskStatusValidationPipe implements PipeTransform{

    // Un array con el valor de todos los enums
    readonly allowedStatuses = Object.keys(TaskStatus).map(function(type) {
        return TaskStatus[type];
    });

    // Metodo forzado a implementar 
    transform(value: any) {
        value = value.toUpperCase();
        if (!this.isValidEnum(value)) {
            throw new BadRequestException(`${value} is an invalid status`);
        }
        return value;
    }

    
    private isValidEnum(value: any): boolean {
        // Busca la posicion de valor deseado dentro del array de status permitidos
        const idx = this.allowedStatuses.indexOf(value);
        // En caso de no encontrar el valor buscado en el array, el idx sera igual a -1
        return idx !== -1;
    }

}