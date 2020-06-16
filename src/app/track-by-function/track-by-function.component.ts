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
      id: 2,
      name: 'Phạm Anh Tuấn',
      phone: '0987654321',
      address: 'Nước Ngầm'
    },
    {
      id: 3,
      name: 'Đàm Xuân Lập',
      phone: '0969969996',
      address: 'Khâm Thiên'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  addMember(): void {
    let currentData = JSON.parse(JSON.stringify(this.megaadsTechnical));
    this.megaadsTechnical = [
      {
        id: this.megaadsTechnical.length + 1,
        name: 'Kiều Tuấn Anh',
        phone: '0364697377',
        address: 'Định Công'
      },
      ...currentData
    ];
  }

  removeMember(index: number): void {
    let currentData = JSON.parse(JSON.stringify(this.megaadsTechnical));
    currentData.splice(index, 1);
    this.megaadsTechnical = currentData;
  }

  trackById(index: number, item): any {
    return item.id;
  }

}
