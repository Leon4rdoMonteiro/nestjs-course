import { Processor, Process, OnQueueActive } from '@nestjs/bull';

import { Job } from 'bull';

@Processor('printMessage')
export class PrintMessageConsumer {
  @Process('printMessage')
  transcode(job: Job<unknown>): void {
    console.log(job.data);
  }

  @OnQueueActive()
  onActive(job: Job): void {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }
}
