import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
value:any=0;
  constructor(private r:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.value=this.r.snapshot.paramMap.get('id')
  }

}
