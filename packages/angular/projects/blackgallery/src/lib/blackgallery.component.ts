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
}  from '@angular/platform-browser';
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
    selector: 'blackgallery',
    templateUrl: 'blackgallery.component.html',
    styleUrls: [
        './blackgallery.component.css'
    ],
    encapsulation: ViewEncapsulation.None
})

export class BlackgalleryComponent {


    imageList: any[] = [];

    constructor(private http: HttpClient) {
    fetch('/assets/config.json').then(
     (res) => res.json())
    .then((res) => this.imageList = res); 
    }


     emptyMsg:string = `		
	<h2> Please configure by inserting images and caption
		using images.js file </h2>
		
		<pre>
		 const images = [{
        		"src": "https://source.unsplash.com/featured/800x600",
        		"alt": "Beautiful scenery I "
    		},
    		{
        		"src": "https://source.unsplash.com/featured/700x500",
        		"alt": "Beautiful scenery II "
    		}
		];
		</pre>
	`;
	switchImage(idx: number) {
		for(let i = 0; i < this.imageList.length; i++) {

			this.imageList[i].isActive = false;
		}
		this.imageList[idx].isActive = true;
		console.log(idx);
		console.log("I am switching image now");
	}
}
