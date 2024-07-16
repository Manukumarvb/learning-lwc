import { LightningElement ,track} from 'lwc';

export default class HelloWorld3 extends LightningElement {

    fullname="Salesforce india"
    title="Salesforce Developer"

    //method

    changeHandler(event){

        //perform my logic
        this.title=event.target.value

    }

    @track address={
        city:"Banglore",
        country:"India",
        postcode:460058
    }

    trackHandler(event){
       this.address.city=event.target.value

       // object is re-rendered with out @track
       //this.address={...this.address,"city":event.target.value }
    

    }

    users=["john","nick","max"]

    num1=10
    num2=20

    get firstUser(){
        return this.users[0]
    }
    get product(){
        return this.num1*this.num2
    }

    get isActive(){
        return true
    }

    get isDisable(){
        return false
    }
}