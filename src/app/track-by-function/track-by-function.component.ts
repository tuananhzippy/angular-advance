import { Component, OnInit } from '@angular/core';

interface Technical {
  id: number,
  name: string,
  phone: string,
  address: string
}

@Component({
  selector: 'app-track-by-function',
  templateUrl: './track-by-function.component.html',
  styleUrls: ['./track-by-function.component.css']
})

export class TrackByFunctionComponent implements OnInit {

  megaadsTechnical: Technical[] = [
    {
      id: 1,
      name: 'Lương Trọng Phú',
      phone: '0123456789',
      address: 'Kim Giang'
    },
    {
      id: 1,
      name: 'Phạm Anh Tuấn',
      phone: '0987654321',
      address: 'Nước Ngầm'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
