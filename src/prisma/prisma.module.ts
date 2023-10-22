import { Module } from "@nestjs/common";
import { PrsimaService } from "./prisma.service";

@Module ({
    providers: [PrsimaService],
    exports: [PrsimaService]
})
export class PrismaModule {}