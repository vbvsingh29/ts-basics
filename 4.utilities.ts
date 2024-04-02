interface MyInterface {
  prop1: string;
  prop2: string;
  prop3: string;
}

const obj: Partial<MyInterface> = {};

const objectTwo: Omit<MyInterface, "prop1" | "prop3"> = {
  prop2: "ABCD",
};
