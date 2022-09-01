import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  data: any = [];
  constructor(private crudService: CrudService) { }

  ngOnInit() {


    this.crudService.get('index.php?mode=lostpassword').subscribe((data:any) => {this.data = data},
    error => {console.log(error.error);}
    );

  }
}
