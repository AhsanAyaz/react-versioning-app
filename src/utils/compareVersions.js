const compareVersions = (newVersion, oldVersion) => {
  const newVer = newVersion.split('.');
  const oldVer = oldVersion.split('.');
  const isNotEqual = newVer.find((digit, index) => {
    return digit !== oldVer[index];
  });
  if (isNotEqual === undefined) {
    return 0;
  }
  return newVer > oldVer ? 1 : -1;
};

export default compareVersions;
