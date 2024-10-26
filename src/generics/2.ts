type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<U, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

let AllTypeTop = {
  name: "John",
  color: "Aqua",
};

let AllTypeBot = {
  position: 4,
  weight: 320,
};

console.log(compare(AllTypeTop, AllTypeBot));
