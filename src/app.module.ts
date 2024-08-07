import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cartao } from './cartao/entities/cartao.entities';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { CartaoModule } from './cartao/cartao.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'db_bancofeliz',
      entities: [Cartao, Usuario],
      synchronize: true,
    }),
    UsuarioModule,
    CartaoModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
