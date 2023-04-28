import { Herviboro, Carnivoro, Omnivoro } from "./mamifero";

const miHerviboro = new Herviboro();
const miCarnivoro = new Carnivoro();
const miOmnivoro = new Omnivoro();

miHerviboro.Comer(); // El hervíboro está comiendo plantas.
miCarnivoro.Comer(); // El carnívoro está comiendo carne.
miOmnivoro.Comer(); // El omnívoro está comiendo tanto plantas como carne.
