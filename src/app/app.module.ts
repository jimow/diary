import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryComponent } from './diary/diary.component';
import { HighlightDirective } from './highlight.directive';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { DateCtPipe } from './date-ct.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DiaryComponent,
    HighlightDirective,
    DiaryFormComponent,
    DateCtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
