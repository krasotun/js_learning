const agent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36";

const sliced = (string) => {
  const firstSpaceIndex = string.indexOf(" ");
  const result = string.substring(0, firstSpaceIndex);

  return result;
};

console.log(sliced(agent));
