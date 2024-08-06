import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity,  ManyToOne,  OneToMany,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_cartao"})
export class Cartao {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'numero', type: 'varchar', length: 255 })
    numero: string

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'codigo_seguranca', type: 'varchar', length: 255 })
    codigo_seguranca: string

    @UpdateDateColumn()
    @Column({ name: 'data_vencimento', type: 'date'})
    data_vencimento: Date;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty()
    @Column({ name: 'bandeira', type: 'varchar', length: 255 })
    bandeira: string

    @ManyToOne(() => Usuario, (usuario) => usuario.cartao, {
        onDelete: "CASCADE"
    })
    usuario: Usuario
}