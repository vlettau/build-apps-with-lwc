import { LightningElement } from "lwc";

export default class HelloWorldComponent extends LightningElement {
  greeting = "Trailblazer";

  currentDate = new Date().toDateString();

  get capitalizedGreeting() {
    return `Hello ${this.greeting.toUpperCase()}`;
  }

  handleGreetingChange = (e) => {
    this.greeting = e.target.value;
  };
}