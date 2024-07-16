import { LightningElement ,api} from 'lwc';

export default class LecAuraCommunication extends LightningElement {

    @api title
    callAura(){
      const event =  new CustomEvent('sendMsg',{
            detail:{
                "msg":"Hello From LWC01"
            }
        })
        this.dispatchEvent(event)
    }
}