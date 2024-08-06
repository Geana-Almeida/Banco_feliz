import { Transform, TransformFnParams } from "class-transformer";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cartao } from "../../cartao/entities/cartao.entities";

@Entity({name: "tb_usuario"})
export class Usuario{
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'nome', type: 'varchar', length: 255 })
    nome: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsEmail()
    @IsNotEmpty()
    @Column({ name: 'usuario', type: 'varchar', length: 255 })
    usuario: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(8)
    @IsNotEmpty()
    @Column({ name: 'senha', type: 'varchar', length: 255 })
    senha: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'data_nascimento', type: 'date'})
    data_nascimento: string

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @MinLength(11)
    @IsNotEmpty()
    @Column({ name: 'cpf', type: 'varchar', length: 20})
    cpf: string;

    @Column()
    foto:string


    @OneToMany(() => Cartao, (cartao) => cartao.usuario)
    cartao: Cartao[]
}