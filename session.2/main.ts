type User = { name: string; age: number; gender: "M" | "F" };

const users: User[] = [];

users.push({ name: "A", age: 10, gender: "F" });
users.push({ name: "B", age: 20, gender: "M" });

const temp_var = {
  f: "2",
  fn: (n: number): number => {
    return n * n;
  },
};

interface Admin {
  mobile: number;
}

type Key = keyof User;

const log = (key: Key, users: User[]) => {
  return users[0][key];
};

console.log(log("name", users));
console.log();
