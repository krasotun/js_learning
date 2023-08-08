import fsp from "fs/promises";
import path from "path";
import _ from "lodash";

const getDirectorySize = (dirpath) => {
  let promises;
  return fsp
    .readdir(dirpath)
    .then((data) => {
      const filePaths = data.map((name) => path.join(dirpath, name));
      promises = filePaths.map((filepath) => fsp.stat(filepath));
      return Promise.all(promises);
    })
    .then((stats) => {
      return _.sumBy(
        stats.filter((stat) => stat.isFile()),
        "size"
      );
    });
};
getDirectorySize(".").then((res) => console.log(res));
