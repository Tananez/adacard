import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  data: any = [];

  constructor(private crudService: CrudService,    private router: Router) { }



    
  ngOnInit(): void {

    const data = {
      token:this.crudService.getToken()
    };  

    this.crudService.post('user.php', data).subscribe((data:any) => {
      
      this.data = data
    
    },
      
    error => {
      
      if(error.allow == 0){
        this.router.navigate(['/index/login']);
      }
      }
    );

  }

}
