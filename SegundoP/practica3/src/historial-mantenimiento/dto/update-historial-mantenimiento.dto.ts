import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialDto } from './create-historial-mantenimiento.dto';

export class UpdateHistorialDto extends PartialType(CreateHistorialDto) {}
