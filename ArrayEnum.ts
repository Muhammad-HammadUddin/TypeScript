// const chaiFlavours:string[]=["Masala","Adrak"]
// const chaiPrice:number[]=[10,20]

const rating:Array<number>=[2.5,6,8]

type Bhai ={
    name:string
    price:number

}

const menu:Array<Bhai>=[{
    name:"Masala",price:15
}]

const cities:readonly string[]=["Delhi","Jaipur"]
const table:number[][]=[
    [1,2,3],
    [4,5,6]
]

const location:readonly [number,number]=[1,2,3,4,5,6]

 


enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size=cupSize.LARGE


enum typeChai{
    MASALA="masala",
    GINGER="ginger"

}

function makeChai(type:typeChai){
    console.log(`Making ${type}`)

}