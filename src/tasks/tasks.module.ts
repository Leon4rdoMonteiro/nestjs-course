import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { PrintMessageProducer } from 'src/queues/producers/printMessage.producer';
import { PrintMessageConsumer } from 'src/queues/consumers/printMessage.consumer';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository]),
    BullModule.registerQueue({
      name: 'printMessage',
      redis: {
        host: 'localhost',
        port: 6300,
      },
    }),
  ],
  controllers: [TasksController],
  providers: [TasksService, PrintMessageProducer, PrintMessageConsumer],
})
export class TasksModule {}
