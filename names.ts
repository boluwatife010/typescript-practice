/*
const names = ["Alice", "Bob", "Eve"];
 
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
names.forEach((s) => {
  console.log(s.toUpperCase());
});
*/

function printName(obj: { first: string; last?: string }) {

  console.log(obj.last.toUpperCase());

  if (obj.last !== undefined) {
    
    console.log(obj.last.toUpperCase());
  }

  console.log(obj.last?.toUpperCase());
}