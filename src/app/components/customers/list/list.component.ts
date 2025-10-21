import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { Traffic } from '../../../interfaces/traffic';
import { ApiRes } from '../../../interfaces/apires';

@Component({
  selector: 'app-customerslist',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class CustomersListComponent {
  constructor(private api:ApiService){}
  
  traffic: Traffic[] = []
  
  async ngOnInit() {
    this.getAllTraffic()
  }
  
  getAllTraffic() {
    this.api.selectAll('traffic').then((res: ApiRes) => {
      if (res.status == 200) {
        this.traffic = res.data
      } else {
        alert(res.message)
      }
    })
  }
}
