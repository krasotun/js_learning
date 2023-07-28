import fs from "fs";
import path from "path";
import async from "async";
import _ from "lodash";

const getDirectorySize = (dirpath, callBack) => {
  fs.readdir(dirpath, (_error, data) => {
    if (_error) {
      callBack(_error);
      return;
    }

    const filePaths = data.map((name) => path.join(dirpath, name));

    async.map(filePaths, fs.stat, (_error, stats) => {
      if (_error) {
        callBack(_error);
        return;
      }
      const result = _.sumBy(
        stats.filter((stat) => stat.isFile()),
        "size"
      );
      callBack(null, result);
    });
  });
};

getDirectorySize(".", (_error, data) => console.log(data));
// getDirectorySize("from", (_error, data) => console.log(_error, data));
