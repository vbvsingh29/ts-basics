interface Inputs {
  name: string;
  pop: boolean;
}
function myFunn(props: Inputs) {
  return props;
}

myFunn({ name: "Devin", pop: true });
