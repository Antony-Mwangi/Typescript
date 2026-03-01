import {Task } from "./types";

//generic Logger 

export function logData<T>(data: T): void {
    console.log("LOG:" , data);
}

//Type narrowing with type guards
export function printId(id:string | number): void {
    if (typeof id === "string") {
        console.log("String ID:", id.toUpperCase());
    } else {
        console.log("Numeric ID:", id.toFixed(0));
    }}

    //keyofexample
    export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {return obj[key];}