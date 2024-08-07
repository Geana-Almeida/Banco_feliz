import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cartao } from "../entities/cartao.entities";
import { DeleteResult, Repository } from "typeorm";


@Injectable()
export class CartaoService {

    constructor(
        @InjectRepository(Cartao)
        private cartaoRepository: Repository<Cartao>,

    ) { }

    async findAll(): Promise<Cartao[]>{
        return await this.cartaoRepository.find({

        })
    }

    async findById(id:number): Promise<Cartao>{
        let buscaCartao = await this.cartaoRepository.findOne({
            where:{
                id
            },

        })

        if(!buscaCartao){
            throw new HttpException("Cartão não encontrado!", HttpStatus.NOT_FOUND);
        }

        return buscaCartao;
    }

    async create(cartao: Cartao): Promise<Cartao>{
        if(cartao.id){
            throw new HttpException("Não informe o ID!", HttpStatus.BAD_REQUEST)
        }
        return await this.cartaoRepository.save(cartao)
    }

    async update(cartao: Cartao): Promise<Cartao>{
        await this.findById(cartao.id)

        await this.cartaoRepository.createQueryBuilder().update(cartao).where(`id = ${cartao.id}`).execute()

        return cartao;
    }

    async delete(id: number): Promise<DeleteResult>{
        let buscaCartao = await this.findById(id);

        if(!buscaCartao){
            throw new HttpException("Cartao não encontrado!", HttpStatus.NOT_FOUND)
        }

        return await this.cartaoRepository.delete(id);
    }
}