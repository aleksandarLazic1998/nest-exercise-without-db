import { MessageRepository } from './message.repository';

export class MessageService {
  messageRepos: MessageRepository;

  constructor() {
    // Todo: Do it with dependency injection
    this.messageRepos = new MessageRepository();
  }

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
