import { Controller, Get } from "@nestjs/common";

@Controller('/tracks')
export class TrackController {
    create () {

    }

    @Get()
    getAll () {
        return 'Work on path /tracks'
    }

    getOne () {
        
    }

    delete () {
        
    }
}