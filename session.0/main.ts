const { log, clear } = console;
clear();

interface User {
  name: string;
  age: number;
}

const user: User = {
  age: 10,
  name: "Sam",
};

log(user);
