import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountControler.getAccountList';

export default class ApexImperaiveDemo extends LightningElement {


    accounts

    handleClick(){
        getAccountList()
        .then(data => {
            this.accounts = data
        })
        .catch(error => {
            console.log(error);
        })
    }

}