type ChaiOrder={
    type:string;sugar:number;
    strong:boolean
}

function makeChai(order:{type:string;sugar:number;strong:boolean}){
    console.log(order)
}

function serveChai (order:ChaiOrder){
    console.log(order)
}


interface TeaRecipe{
    water:number;
    milk:number

}
// class MasalaChai implements TeaRecipe{
//     water=100 
//     milk=50
// }
interface CupSize{
    size:"small"|"large";
}

class Chai implements CupSize{
    size:"small"|"large"="large"
    hello="kitty"
}

interface MyResponse {
    ok:boolean
};

class myRes implements MyResponse{
    ok:boolean=true
}



type TeaType="masala"|"ginger"|"lemon"

function orderChai(t:TeaType){
    console.log(t)

}

type BaseChai={teaLeaves:number}
type Extra={masala:number}

type MasalaChai = BaseChai & Extra


const cup:MasalaChai={
    teaLeaves:23,
    masala:1
}


type User ={
    username:string;
    bio?:string
}

const user1:User={username:"Farhan"}
const user2:User={username:"Shabana",bio:"I love you"}


type Config ={
    readonly appName:string
    version:number

}

const cfg:Config={
    appName:"MaterJi",
    version:1
}
// class Chai implements CupSize{
    
// }