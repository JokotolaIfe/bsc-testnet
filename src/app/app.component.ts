import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Web3Service } from './web3.service';
// const Web3 = require('web3');
declare var Web3: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';
 
   provider: string = "";
   constructor(
     private web3Service: Web3Service,
   ){
    
  }
  
  ngOnInit(){
    this.provider = "https://testnet.bscscan.com/address/0xa6e6e8ed54ff4c8800044a6e56122b2186df1707"
    if (typeof Web3 !== 'undefined') {
     // Use Mist/MetaMask's provider
     this.web3Service.web3Instance = new Web3(this.provider);
     console.log(this.web3Service.initContractInstance())
     this.web3Service.initContractInstance();
     this.web3Service.getAccounts().then(res=>{
       console.log(res)
     })
   } else {
     // Handle the case where the user doesn't have web3. Probably
     // show them a message telling them to install Metamask in
     // order to use our app.
   }
  }

}
