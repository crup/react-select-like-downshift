import escapeRegExp from "escape-string-regexp";
export default (keyword, dataSet) => {
  return dataSet.filter(
    i => !!(i.name || "").match(new RegExp(escapeRegExp(keyword), "ig"))
  );
};
