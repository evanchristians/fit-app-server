import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./user/user.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      installSubscriptionHandlers: true,
      subscriptions: {
        keepAlive: 5000
      }
    }),
    TypeOrmModule.forRoot(),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
