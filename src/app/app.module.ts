import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { WindowContentOneComponent } from './content/window-content-one/window-content-one.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TextBoxModule, InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    WindowContentOneComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonsModule,
    WindowModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    TextBoxModule,
    InputsModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WindowContentOneComponent]
})
export class AppModule { }
