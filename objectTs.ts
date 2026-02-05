const chai ={
    name:"Masala Chai",
    price:23,
    isHot:true
}

let tea:{
    name:string;
    price:number;
    isHot:boolean

}

tea={
    name:"Ginger Tea",
    price:34,
    isHot:true
}

type Tea={
    name:string;
    price:number;
    ingredients:string[]
}
const adrakChai:Tea={
    name:"Adrak Chai",
    price:23,
    ingredients: ["ginger","tea leaf"]
}

type Cup={size:string}

let SmallCup:Cup ={size:"200ml"}

let bigCup={size:"500ml",material:"steel"}
SmallCup=bigCup


type Brew={brewTime:number}
const coffee={brewTime:5,beans:"Arabica"}

const chaiBrew:Brew=coffee


type Item={
    name:string,
    quantity:number
}
type Address={street:string,pin:number}

type Order={
    id:string;
    items:Item[];
    address:Address
}


type coffee ={
    name:string,
    price:number;
    isHot:boolean

}

const updateChai=(updates:Partial<coffee>)=>{
    console.log("updateing chai with",updates)
}


type ChaiOrder={
    name?:string
    quantity?:number
}

const placeOrder=(order:Required<ChaiOrder>)=>{

    console.log(order)
}

