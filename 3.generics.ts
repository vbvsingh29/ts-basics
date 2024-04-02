function myFunc<T>(input) {
  return input;
}

const result = myFunc<{ name: string }>({
  name: "Devin",
});

const resultTwo = myFunc<string[]>(["Devin"]);
