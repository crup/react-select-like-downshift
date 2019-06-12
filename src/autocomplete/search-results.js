export default (keyword, dataSet) => {
  return dataSet.filter(i => !!(i.name || "").match(new RegExp(keyword, "ig")));
};
