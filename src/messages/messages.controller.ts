import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message-dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessageService;

  constructor() {
    // Todo: Do it with dependency injection
    this.messageService = new MessageService();
  }
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
