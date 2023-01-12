import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  menu: string = "hidden";

  toggle(val: string){
    if(val === 'hidden'){
      this.menu = "block sm:fixed sm:w-60 sm:bg-white-20 sm:top-20 sm:boxShadow sm:rounded-lg sm:p-5 sm:z-40"
    }else{
      this.menu = "hidden"
    }
  }
}
