import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cartao } from "./entities/cartao.entities";
import { Usuario } from "../usuario/entities/usuario.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Cartao]), Usuario],
    providers: [],
    controllers: [],
    exports: []
})
export class CartaoModule {}