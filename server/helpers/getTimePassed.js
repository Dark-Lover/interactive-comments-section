exports.timePassed = () => {
  const timeDiff = Date.now() - process.env.DATE_START;
  const converter = 1000 * 3600 * 24;
  const val = timeDiff / converter;
  if (val > 365) return `More than ${Math.floor(val / 365)} years`;
  if (val > 30) return `More than ${Math.floor(val / 30)} Months`;
  if (val >= 7) return `More than ${Math.floor(val / 7)} Weeks`;
  if (val < 7 && val > 1) return `${Math.floor(val)} days ago`;
  if (val <= 1) return `Today`;
};
