// ------------------------------------------------------------------------------
// Import Nest libs
// ------------------------------------------------------------------------------
import { Module } from '@nestjs/common';

// ------------------------------------------------------------------------------
// Import controllers
// ------------------------------------------------------------------------------
import { AppController } from './app.controller';

@Module({
  imports: [
    
  ],
  controllers: [
    AppController
  ],
})
export class AppModule {}