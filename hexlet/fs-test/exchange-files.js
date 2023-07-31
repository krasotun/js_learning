import fsp from "fs/promises";

const exchange = async (filepath1, filepath2) => {
  const reader1 = fsp.readFile(filepath1, "utf-8");
  const reader2 = fsp.readFile(filepath2, "utf-8");

  const [data1, data2] = await Promise.all([reader1, reader2]);

  await fsp.writeFile(filepath1, data2);
  await fsp.writeFile(filepath2, data1);
};

exchange("from/one_more_file.txt", "to/file.txt");
