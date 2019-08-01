import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlockUIModule } from 'primeng/blockui';
import { AppComponent } from './app.component';
import { LoadingIconComponent } from '@ar-angular/shared/components';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from '@ar-angular/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoadingIconComponent
  ],
  imports: [
    BrowserModule,
    BlockUIModule,
    SharedModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {
  }
}
