"option strict"
class Frog{
    name;
    color;
    number;

    constructor(name,color,number){
        this.name = name;
        this.color = color;
        this.number = number;
    }
    log(){
        console.log(this.name,this.color,this.number);
    }
}
let frogs = [
    new Frog("Reed_Frog", "yellow", 8),
    new Frog("Blue_Arrow_Frog", "blue", 18),
    new Frog("Tree_Frog", "red", 80),
    new Frog("Poison_Frog", "pink", 90),
    new Frog("Common_Eastern_Frog", "brown", 50),
    new Frog("Tailed_Frog", "green", 43),
    new Frog("Wood_Frog", "yellow", 5),
    new Frog("Darwins_Frog", "purple", 33)
];
const display = () => {
let tbody = document.getElementById("tbody");
tbody.innerHTML = "";
for (let f of Frogs){
    let tr = "<tr>";
    tr += `<td>${f.name}</td>`;
     tr += `<td>${f.color}</td>`;
     tr += `<td>${f.number}</td>`;
     tr += "</tr>";
     tbody.innerHTML += tr;
       


}
const save = () => {
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let number = document.getElementById("number").value;
    let frogs = new Frog(name, color, +number); 
    frogs.push(frog);
    console.log(frogs);

}


}