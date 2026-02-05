function getChai(kind:string|number):string|number{
    if(typeof kind==='string'){
        return `Making ${kind} chai...`
    }
    return `Chai order:${kind}`
}

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}

function orderChai(size:"medium"|"small"|"large"|number){
    if(size=="small"){
        return `small cutting chai...`
    }
    if(size==="medium"||size==="large"){
        return 'make extra chai'
    }
    return `chai order #${size}`

}

class kulhadChai{
    serve(){
        return `Serving Kulhad Chai`

    }
}
class Cutting{
    serve(){
        return `Serving cutting Chai`
    }
}

function serve(chai:kulhadChai|Cutting){
    if(chai instanceof kulhadChai){
        return chai.serve()
    }
}



type ChaiOrder={
    type:string;
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj==='object'&& obj!==null&& typeof obj.type=='string'&& typeof obj.sugar=="number"
    )
}

function serveOrder(item:ChaiOrder | string):string{
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
    
}


type MasalaChai={type:"Masala";spiceLevel:number}
type GingerChai={type:"Ginger";spiceLevel:number}
type ElaichiChai={type:"Elaichi";spiceLevel:number}

type Chai = MasalaChai | GingerChai | ElaichiChai


function MakeChai(order:Chai){
    switch (order.type) {
        case "Masala":
            return `Masala Chai`
            break;
        case "Ginger":
            return "Ginger"
            break;
        
    
        default:
            return `Elaichi`
            break;
    }


}

function brew(order:MasalaChai|GingerChai){
    
}

function isStringArray(arr:unknown):arr is string[]{

 
}