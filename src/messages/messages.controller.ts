import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message-dto';
import { MessageService } from './messages.service';

@Injectable()
@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessageService) {}

  @Get()
  getAllMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  getSingleMessage(@Param() id: string) {
    return this.messageService.findOne(id);
  }
}
