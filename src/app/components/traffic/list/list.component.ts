import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';
import { Traffic } from '../../../interfaces/traffic';
import { ApiService } from '../../../services/api.service';
import { ApiRes } from '../../../interfaces/apires';

@Component({
  selector: 'app-trafficlist',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TrafficListComponent {
  constructor(private api:ApiService){}

  traffic: Traffic[] = []

  async ngOnInit() {
    this.api.selectAll('traffic').then((res: ApiRes) => {
        if (res.status == 200) {
          this.traffic = res.data
        } else {
          alert(res.message)
        }
      }
    )
  }
}
