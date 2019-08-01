import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ar-angular';
  isTruckVisible = false;
  @ViewChild('usfMarker') usfMarker: ElementRef;

  ngOnInit() {
    this.usfMarker.nativeElement.addEventListener('markerFound', () => {
      console.log('Marker Found!!!');
    });
  }

  ngAfterViewInit() {
  }

  onTruckClick() {
    console.log('Truck Image Clicked!');
  }
}
