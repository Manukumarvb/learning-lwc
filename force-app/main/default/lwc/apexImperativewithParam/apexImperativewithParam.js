import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountControler.findAccounts';

export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchKey=''
    accounts
    timer


    searchHandler(event){
        if(!event.target.value){
            window.clearTimeout(this.timer)
            this.searchKey = event.target.value
            this.timer = setTimeout(()=>{
                this.callApex()
            }, 1000)

        }
       
    }

   

    callApex(){
        findAccounts({searchKey:this.searchKey})
        .then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }
}