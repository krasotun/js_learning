type Nullable<T> = T | null;

const text: Nullable<HTMLDivElement> = document.getElementById(
  "text"
) as HTMLDivElement;
const input: Nullable<HTMLInputElement> = document.getElementById(
  "input"
) as HTMLInputElement;

if (!text || !input) {
  throw new Error("нет полей");
}

const data = {
  title: "",
};

input.addEventListener("keyup", () => {
  text.textContent = input.value;
});
Object.defineProperty(data, "title", {});

export default Nullable;
