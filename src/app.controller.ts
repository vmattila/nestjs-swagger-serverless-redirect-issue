import {CacheTTL, Controller, Get, Header, Req} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @Header('Cache-Control', 'max-age=10, s-maxage=10')
    getHello(@Req() expressReq: any): any {
        return {
            msg: this.appService.getHello(),
        };
    }
}
