import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Traffic } from '../../../interfaces/traffic';
import { ApiService } from '../../../services/api.service';
import { ApiRes } from '../../../interfaces/apires';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trafficform',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TrafficFormComponent {
  id:number | null = null

  newTraffic: Traffic = {
    id: 0,
    termek: '',
    vevo: '',
    kategoriaNev: '',
    kategoriaId: 0,
    egyseg: '',
    nettoar: 0,
    mennyiseg: 0,
    kiadva: false
  }

  allTraffic:Traffic[] = []

  constructor(
    private api:ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    console.log('ID:', this.id)
  
    if (this.id) {
      this.api.select('traffic', this.id).then((res:ApiRes) => {
        this.newTraffic = res.data[0]
      })
    }
  
    this.getAllTraffic()
  }
  
  getAllTraffic() {
    this.api.selectAll('traffic').then((res: ApiRes) => {
      this.allTraffic = res.data
    })  
  }

  save() {
    if (this.newTraffic.kategoriaId == 0) {
      alert('Nem adtál meg kategória nevet')
      return
    }

    let idx = this.allTraffic.findIndex(item => item.termek.toLocaleLowerCase() == this.newTraffic.termek.toLocaleLowerCase())

    if (idx <  -1) {
      console.log(idx)
      alert('már van ilyen izé')
      return
    }

    if (!this.id) {
      this.api.insert('traffic', this.newTraffic).then((res:ApiRes) => {
        if (res.status == 200) {
          alert(res.message)
          this.newTraffic = {
            id: 0,
            termek: '',
            vevo: '',
            kategoriaNev: '',
            kategoriaId: 0,
            egyseg: '',
            nettoar: 0,
            mennyiseg: 0,
            kiadva: false
          }
          this.getAllTraffic()
        } else {
          alert(res.message)
        }
      })
    } else {
      this.api.update('traffic', this.id, this.newTraffic).then((res:ApiRes) => {
        if (res.status == 200) {
          alert(res.message)
          this.router.navigate(['/traffic'])
          this.getAllTraffic()
        } else {
          alert(res.message)
        }
      })
    }
  }
}