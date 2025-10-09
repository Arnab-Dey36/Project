

/*bind() ek method hai jo JavaScript mein functions ke saath use hoti hai. 
Iska kaam hota hai function ke this value ko fix karna.*/

class React{

    constructor(){
        this.library = 'React';
        this.server = 'https://localhost:300';


        //requirment-1)button ka reference mil jaya, 2) button ko click karne main kuch print ho jaya
        document.querySelector('button').addEventListener('click',this.handelClick.bind(this))
    }


    handelClick(){
        console.log('Button clicked !!')
        console.log(this.server);
        console.log(this);
    }
}
const app = new React()