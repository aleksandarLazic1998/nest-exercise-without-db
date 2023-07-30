import { Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';

@Injectable()
export class MessageService {
  constructor(public messageRepos: MessageRepository) {}

  async findAll() {
    return this.messageRepos.findAll();
  }
  async findOne(id: string) {
    return this.messageRepos.findOne(id);
  }

  async create(content: string) {
    return this.messageRepos.create(content);
  }
}
