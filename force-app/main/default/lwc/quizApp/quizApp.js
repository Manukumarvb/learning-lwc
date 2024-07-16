import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {} //storing answers
    correctAnswer = 0 //show result
    isSubmited =false


    myQuestion= [
        {
            
            id:"Question  1",
            question: "Which one of the Following is not a template loop ?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer: "c"
        },
        {
            
            id:"Question  2",
            question: "Which one of the file is invalid in LWC component folder ?",
            answers:{
                a:".js",
                b:".apex",
                c:".svg"
            },
            correctAnswer: "b"
        }, {
            
            id:"Question  3",
            question: "Which one of the Following is not a directive ?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer: "c"
        }
    ]

    changeHandler(event){
        console.log("name" ,event.target.name)
        console.log("Value" ,event.target.value)
        const {name,value} =event.target
        this.selected ={...this.selected,[name]:value}
    }


     //Form Submit handler
        submitHandler(event){
            event.preventDefault()
            let correct = this.myQuestion.filter(item=>this.selected[item.id]=== item.correctAnswer)
            this.isSubmited =true
            this.correctAnswer = correct.length
            

        }

        //Form reset handler
    resetHandler(event){
        this.selected ={}
        this.correctAnswer =0
        this.isSubmited =false 

    }

    //to Disable Submit button
    get allNotSelected(){
return !(Object.keys(this.selected).length === this.myQuestion.length)
    }


    //To apply Dynamic Styling
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestion.length=== this.correctAnswer? 
            'slds-text-color_success':'slds-text-color_error'}`
    }

}