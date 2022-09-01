import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-index-layout',
  templateUrl: './index-layout.component.html',
  styleUrls: ['./index-layout.component.css']
})
export class IndexLayoutComponent implements OnInit {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); 
   }

  ngOnInit(): void {



  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
  
}
