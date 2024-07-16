import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToVFPage extends NavigationMixin(LightningElement) {


    navigateToVFPage(){

        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url: "/apex/navigateVfpage"
            }
        }).then(generatedUrl => {
            console.log('Generated URL: ', generatedUrl)
            window.open(generatedUrl, '_blank')
            
           
        }).catch(error => {
            console.log('Navigation error: ', error)
        })
    }
    }
            
