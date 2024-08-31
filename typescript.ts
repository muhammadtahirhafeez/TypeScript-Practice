interface computer {
    name: string | number,
    price: string | number,
    ram: number | string,
    hardDisk: number | string,
    screenSize: number | string,
    touch: boolean,
    graphicCard: boolean,
    gaming: boolean,
    speaker: boolean,
    camera: boolean,
    color: number | string,

}

interface laptop extends computer {
    name: string | number,
    price: string | number,
    ram: number | string,
    hardDisk: number | string,
    screenSize: number | string,
    touch: boolean,
    graphicCard: boolean,
    gaming: boolean,
    speaker: boolean,
    camera: boolean,
    color: number | string,

}

const dellLaptop: laptop = {
    name: 'Inspiron Series',
    price: 50000,
    ram: '8GB',
    hardDisk: '256GB',
    screenSize: '17 Inches',
    touch: false,
    graphicCard: true,
    gaming: true,
    speaker: true,
    camera: true,
    color: 'Light Grey',
}

const hpLaptop: laptop = {
    name: 'HP Series',
    price: 60000,
    ram: '4GB',
    hardDisk: '128GB',
    screenSize: '14 Inches',
    touch: false,
    graphicCard: false,
    gaming: false,
    speaker: true,
    camera: true,
    color: 'Light Grey',
}

const lenovo: laptop = {
    name: 'Lenovo',
    price: 40000,
    ram: '12GB',
    hardDisk: '256GB',
    screenSize: '14 Inches',
    touch: true,
    graphicCard: false,
    gaming: false,
    speaker: true,
    camera: true,
    color: 'black',
}

interface vehical{
    color:string,
    carName:string,
    carCompany: string,
    engine?:string,
    automatic:boolean,
    carPower: string,
}

const kia:vehical={
    color:'black',
    carName:'KIA Sportage',
    carCompany: 'KIA',
    automatic:true,
    carPower: '2000cc',
}

interface residence{
    rooms:number,
    floors:number,
    kitchen:number | string,
    bath:number,
    electricityAvail:boolean,
    gasAvail:boolean,
    landSize: number | string,
}

const myHome:residence={
    rooms:5,
    floors:3,
    kitchen:2,
    bath:3,
    electricityAvail:true,
    gasAvail:true,
    landSize: '200 meter square',
}
