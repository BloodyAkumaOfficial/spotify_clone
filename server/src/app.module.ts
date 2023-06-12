import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:root@cluster0.rkwizk8.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule
    ]
})
export class AppModule {}