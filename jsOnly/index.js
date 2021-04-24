import LinkedList from "./LinkedList/LinkedList";
const pippo = new LinkedList();
pippo
  .prepend("uno")
  .append("due")
  .append("tre")
  .append("quattro")
  .append("cinque");
console.log(JSON.stringify(pippo.toString()));
