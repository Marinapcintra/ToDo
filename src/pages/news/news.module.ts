import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';

@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    ComponentsModule
  ],
})
export class NewsPageModule {}
