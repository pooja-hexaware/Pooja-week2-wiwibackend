import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuController } from '../controllers/menu/menu.controller';
import { MenuService } from '../services/menu/menu.service';
import { MenuRepo } from '../repository/menu.repo';
import { Menu, MenuSchema } from '../schemas/menu.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }])
    ],
    controllers: [MenuController],
    providers: [MenuService, MenuRepo],
    exports: [MenuService, MenuRepo]
  })
  export class MenuModule { }