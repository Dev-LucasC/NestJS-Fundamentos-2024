/* eslint-disable prettier/prettier */
import {  Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable ()
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }

    async onApplicationShutdown(signal?: string) {
        if (signal) console.log(`Received signal to shut down: ${signal}`);

        await this.$disconnect();
    }

}


