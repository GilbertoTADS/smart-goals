import { Component, Input, OnInit } from '@angular/core';
import { HeaderConfig } from './header.config';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @Input() config!:HeaderConfig
 

  ngOnInit(): void {
    this.checkConfig()

  }
  private checkConfig():void{
    if(!this.config) this.config = { title:'Not defined',brand:'Not defined' }
    
  }



}
