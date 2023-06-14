import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: join(__dirname, 'static')}),
        MongooseModule.forRoot('mongodb+srv://admin:root@cluster0.rkwizk8.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}