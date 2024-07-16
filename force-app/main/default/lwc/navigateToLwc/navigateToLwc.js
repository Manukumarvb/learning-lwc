import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation'

export default class NavigateToLwc extends NavigationMixin(LightningElement) {

    navigateToLWC(){
        var definition ={
            componentDef: 'c:navigationLwcTarget',
            attributes:{
                recordId:'12321321'
            }
        }

        this[NavigationMixin.Navigate]({

            type: 'standard__webPage',
            attributes:{
                url : '/one/one.app#'+btoa(JSON.stringify(definition))
            }
            
        })
    }
    

    
}