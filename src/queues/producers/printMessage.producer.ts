import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

export class PrintMessageProducer {
  constructor(@InjectQueue('printMessage') private printMessageQueue: Queue) {}

  async printMessage(message: string): Promise<void> {
    await this.printMessageQueue.add(
      'printMessage',
      {
        print: message,
      },
      { delay: 2000 },
    );
  }
}
