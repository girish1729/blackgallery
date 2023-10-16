import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackgalleryComponent } from './blackgallery.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlackgalleryComponent,  
  ],
  exports: [
    BlackgalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,	
  ],
})

export class BlackgalleryModule { }
