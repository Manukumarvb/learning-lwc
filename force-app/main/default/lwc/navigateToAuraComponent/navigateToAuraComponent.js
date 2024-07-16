import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) {

    navigateToaura(){

        this[NavigationMixin.Navigate]({

            type:'standard__component',
            attributes:{
                componentName:"c__AuraNavigation"
            },
            state: {
                c__id: '12321321'
            }


        })
    }

}