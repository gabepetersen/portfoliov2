export default class NewComponent {
  private static number = 0;
  constructor() {
    NewComponent.number++;
  }

  incNumber() {
    NewComponent.number++;
    console.log("The number incremented: ", NewComponent.number);
  }
}
