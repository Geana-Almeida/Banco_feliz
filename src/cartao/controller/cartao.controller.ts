import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CartaoService } from "../service/cartao.service";
import { Cartao } from "../entities/cartao.entities";

@Controller("/cartao")
export class CartaoController{

    constructor(private readonly cartaoService: CartaoService) { }

    @Get("/all")
    @HttpCode(HttpStatus.OK)
    findAll():Promise<Cartao[]>{
        return this.cartaoService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number):Promise<Cartao>{
        return this.cartaoService.findById(id);
    }

    @Post("/cadastrar")
    @HttpCode(HttpStatus.CREATED)
    create(@Body() cartao: Cartao): Promise<Cartao> {
        return this.cartaoService.create(cartao);
    }

    @Put("/atualizar")
    @HttpCode(HttpStatus.OK)
    update(@Body() cartao: Cartao): Promise<Cartao>{
        return this.cartaoService.update(cartao);
    }

    @Delete("/deletar/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param("id", ParseIntPipe) id: number){
        return this.cartaoService.delete(id);
    }

}