import {
    Input,
    ChangeDetectorRef,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {
    Component,
    OnInit,
    ElementRef,
    Renderer2,
    Inject
} from '@angular/core';
import {
    Pipe,
    PipeTransform,
    SecurityContext
} from '@angular/core';
import {
    DomSanitizer,
    SafeHtml,
    SafeStyle,
    SafeScript,
    SafeUrl,
    SafeResourceUrl
} from '@angular/platform-browser';
import {
    catchError
} from 'rxjs/operators';
import {
    DOCUMENT
} from '@angular/common';
import {
    HttpEvent,
    HttpEventType,
    HttpErrorResponse,
    HttpResponse,
    HttpClient
} from '@angular/common/http';
import {
    Observable
} from 'rxjs';


@Component({
    selector: 'progress-up',
    templateUrl: 'progress-up.component.html',
    styleUrls: [
        './progress-up.component.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class ProgressUpComponent {


    darkControls = `
    <span class="hidden dark:inline">&#127774;</span>
    <span class="inline dark:hidden">&#127769; </span>
  `;

    configVals1 = '&#128202; Progress type';
   uploadFileList: File[] = [];
    uploadFileInfos: fileInfo[] = [];
    errInfos: errInfo[] = [];
    disableUpload = true;
    thumbNailsDone = false;
    isDragged = false;

    progressBars: any[] = [];
    details = '';
    statsTable: statsTableType[] = [];

    constructor(private http: HttpClient) {}

    darkMode() {
        document.body.classList.toggle('dark');
    }

imageGallery() {
    var gallery_nav_li = document.getElementsByTagName("li");
    var gallery_img = document.getElementsByTagName("img");
    
    for(x = 0; x < gallery_nav_li.length; x++) {
        gallery_nav_li[x].onclick = function() {
            
            var myid = this.getAttribute("id");
            
            for(z = 0; z < gallery_nav_li.length; z++) {
                gallery_nav_li[z].removeAttribute("class", "g-n-active");
            };
            
            this.setAttribute("class", "g-n-active");
            
            for(y = 0; y < gallery_img.length; y++) {
                gallery_img[y].removeAttribute("class", "g-active");
                var the_image = document.getElementById(myid + "-img");
                the_image.setAttribute("class", "g-active");
            };
        };
    };
};

imageGallery();

}
