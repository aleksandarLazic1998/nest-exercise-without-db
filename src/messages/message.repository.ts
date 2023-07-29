import { NotFoundException } from '@nestjs/common';
import { readFileSync, writeFile } from 'fs';

export class MessageRepository {
  findAll() {
    const response = readFileSync('db/messages.json', 'utf-8');
    return JSON.parse(response);
  }
  findOne(id: string) {
    const response = JSON.parse(readFileSync('db/messages.json', 'utf-8'));

    const data = response[id];

    if (!data) {
      throw new NotFoundException(`Message not found.`);
      return;
    }

    return data;
  }

  create(content: string) {
    const response = readFileSync('db/messages.json', 'utf-8');
    const messages = JSON.parse(response);

    const id = Object.keys(messages).length;

    writeFile(
      'db/messages.json',
      JSON.stringify({ ...messages, [`${id}`]: { id, message: content } }),
      (err) => {
        if (err) console.log('Failed to write to file');
      },
    );

    return 'Successfully added message';
  }
}
