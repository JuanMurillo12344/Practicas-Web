import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialMantenimientoDto } from './create-historial-mantenimiento.dto';

export class UpdateHistorialMantenimientoDto extends PartialType(CreateHistorialMantenimientoDto) {}
