import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GalleryComponent,  
  ],
  exports: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,	
  ],
})

export class GalleryModule { }
