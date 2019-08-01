import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ar-angular';
  isTruckVisible = false;
  @ViewChild('usfMarker') usfMarker: ElementRef;
  @ViewChild('usfMarker1') usfMarker1: ElementRef;
 constructor(private router: Router) {

 }
  ngOnInit() {
    this.usfMarker.nativeElement.addEventListener('markerFound', () => {
      console.log('Marker Found!!!');
    });

    this.usfMarker1.nativeElement.addEventListener('markerFound', () => {
      console.log('Marker Found!!!');
    });
  }

  ngAfterViewInit() {
  }

  onDeskClick() {
    console.log('Desk Image Clicked!');
    window.location.href = 'http://localhost:8080/MailApi/TroubleShoot.html';
  }

  onAccessoriesClick() {
    console.log('Accessories Image Clicked!');
  }

  onPhoneClick() {
    console.log('Phone Image Clicked!');
  }

  onMonitorClick() {
    console.log('Monitor Image Clicked!');
  }

  onChairClick() {
    console.log('Chair Image Clicked!');
  }
}
