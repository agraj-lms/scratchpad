const { log: l, clear: clear_scr } = console;
clear_scr();

interface Human {
  name: string;
  //   walk: () => void;
}

const human: Human = {
  name: "A",
};

type User = {
  name: string;
  age: number;
  salary: number | undefined;
};
type ExtendedUser = User & { gender: "M" | "F" };

const a: ExtendedUser = {
  gender: "M",
  name: "A",
  age: 1,
  salary: 11,
};

const u: User = { name: "B", age: 1, salary: 100 };

l;
