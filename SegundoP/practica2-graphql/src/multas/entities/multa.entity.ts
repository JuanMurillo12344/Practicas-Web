import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Multa {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  motivo: string;

  @Field(() => Int)
  @Column()
  valor: number;

  @Field()
  @Column()
  fecha: string;
}
