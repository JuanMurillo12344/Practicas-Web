import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class HistorialMantenimiento {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  descripcion: string;

  @Field()
  @Column()
  fecha: string;

  @Field(() => Int)
  @Column()
  costo: number;
}
