import { LightningElement ,wire} from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi'


export default class GetNavItemDemo extends LightningElement {
    result
    @wire(getNavItems,{
        navItemNames:['standard-Account'],
        pageSize:30
    })
    navItemHandler({data}){
        if(data){
            console.log(data)
            this.result= data.navItems[0]
        }
    }
}