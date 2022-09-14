const fs = require("fs");
module.exports = function (fileInfo, api, options) {
  const jscodeshift = api.jscodeshift;
  const source = jscodeshift(fileInfo.source)
    .find(jscodeshift.JSXElement)
    .forEach(() => {
      const file = fs.renameSync(
        fileInfo.path,
        fileInfo.path.replace(".js", ".jsx")
      );
    });
};
