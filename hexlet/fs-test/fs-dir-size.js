import fs from "fs";
import async from "async";
import _ from "lodash";

const getDirectorySize = (path, callBack) => {
  function getFileSizeInBytes(file, intCallBack) {
    fs.stat(file, function (err, stat) {
      if (err) {
        return callBack(err);
      }
      intCallBack(null, stat.size);
    });
  }

  fs.readdir(path, (_error, data) => {
    if (_error) {
      callBack(_error);
      return;
    }

    async.map(data, getFileSizeInBytes, (_error, result) => {
      if (_error) {
        callBack(_error);
        return;
      }

      callBack(null, _.sumBy(result));
    });
  });
};

// getDirectorySize(".", (_error, data) => console.log(data));
getDirectorySize("from", (_error, data) => console.log(_error, data));
