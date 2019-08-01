import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap';
// import { LoadingIconComponent } from './components/loading-icon/loading-icon.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ],
  declarations: [
    HeaderComponent
    // LoadingIconComponent
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class SharedModule {}
