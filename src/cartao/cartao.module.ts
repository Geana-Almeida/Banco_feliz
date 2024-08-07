import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cartao } from "./entities/cartao.entities";
import { Usuario } from "../usuario/entities/usuario.entity";
import { CartaoService } from "./service/cartao.service";
import { CartaoController } from "./controller/cartao.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Cartao])],
    providers: [CartaoService],
    controllers: [CartaoController],
    exports: [TypeOrmModule]
})
export class CartaoModule {}