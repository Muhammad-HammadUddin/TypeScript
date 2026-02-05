let response:any="42"
let numericLength :Number= (response as string) .length
console.log(numericLength)


type Book={
    name:string
}
let bookString='{"name":"who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book


const inputElements= document.getElementById("username") as HTMLInputElement


let value:any
value="chai"
value=[1,2,3]
value=2.5
value.toUpperCase()

let newValue:unknown
newValue="chai"
newValue=[1,2,34,5,6,]
newValue=2.3
if (typeof newValue==="string"){

    newValue.toUpperCase()
}


try {
    
} catch (error:any) {
    if(error instanceof Error){

        console.log(error.message)
    }
    console.log("Error",error)
    
}
const data:unknown= "chai aur code "
const strData:string=data as string

type Role="admin"|"user"|"superadmin"
function redirectBasedOnRole(role:Role):void{
    if(role==='admin'){
        console.log("Redirecting to admin Dashboard")
        return
    }
    if(role=="user"){
    console.log("Redirecting to user Dashboard")
    return
    }

}

function neveReturn():never{
    while(true){}
}