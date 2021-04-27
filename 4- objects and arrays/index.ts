let person: {
  name: string;
  edad: number;
  adress: {
      number: number
  }
} = {
  name: "Ramiro",
  edad: 19,
  adress: {
      number: 5
  }
};

/* let hobbies:string[]
hobbies=["tenis", "rugby", "vehicles"] */

let hobbies:string[] = ["tenis", "rugby", "vehicles"]
let hobbiesInference = ["tenis", "rugby", "vehicles"]

let studies:any[]
studies=[5,"years", "university"]

console.log(person)