/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable ()
export class PrsimaService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close();
        })
    }

}


/* this.$on<'beforeExit'>('beforeExit', async () => {
    await app.close();
})
*/