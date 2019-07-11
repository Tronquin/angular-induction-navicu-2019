//import * as _ from 'lodash';

//implicit type
//let lucky = 23;
//Explicit type
//let lucky:number = 23;
//Back to Implicit type
//let lucky:any = 23; 
//lucky = 'this is valit'

function hello() {
    let world: string = 'world';
    console.log(world);
    //world = 8;
    //console.log(world);
}

hello();

type Style = 'bold' | 'italic' | 600;

let font: Style;

//font = 'something';
//font = 'bold';
//font = '600';


interface IPerson {
    first: string;
    last: string;
}

const person: IPerson = {
    first: 'Jeff',
    last: 'Tattum'
}

interface IPerson2 {
    first: string;
    last: string;
    [key: string]: any
}

const person2: IPerson2 = {
    first: 'Eddy',
    last: 'Ficio',
    age: 23,
}


//Arrays
const arr: number[] = [];

arr.push(1);
//arr.push('22');
//arr.push(true);

//Tuplas
type MyList = [number?, string?, boolean?];

const tupleArray: MyList = [];

tupleArray.push(1);
tupleArray.push('22');
tupleArray.push(true);
