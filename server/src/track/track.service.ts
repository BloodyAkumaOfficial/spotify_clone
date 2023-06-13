import { Injectable } from "@nestjs/common";
import { Track, TrackDocument } from "./schemas/track.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";

@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
    ) {}

    async create (dto: CreateTrackDto): Promise<Track> {
        return await this.trackModel.create({...dto, listens: 0});
        
    }

    async getAll (): Promise<Track[]> {
        return await this.trackModel.find();
        
    }

    async getOne (id: ObjectId): Promise<Track> {
        return await this.trackModel.findById(id);
    }

    async delete (id: ObjectId): Promise<ObjectId> {
        return (await this.trackModel.findByIdAndDelete(id))._id;
    }
}