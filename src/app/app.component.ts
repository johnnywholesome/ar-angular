import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ar-angular';
  isTruckVisible = false;
  @ViewChild('usfMarker') markerRef: ElementRef;
  @ViewChild('truckImage') truck: ElementRef;

  ngOnInit() {
    console.log(this.truck.nativeElement);
    this.markerRef.nativeElement.addEventListener('markerFound', () => {
      console.log('Marker Found!!!');
    });
  }

  ngAfterViewInit() {
  }

  onTruckClick() {
    console.log('Truck Clicked');
  }
}
