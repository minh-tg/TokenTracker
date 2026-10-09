const limits = require("../../src/lib/usage-limits");

// A temporary home does not isolate the desktop keyring. Tests must opt in to
// keyring fixtures rather than read the developer's signed-in account.
function withoutHostKeyring(fn) {
  return (options = {}) => fn({
    secretToolRunner: () => ({ status: 1, stdout: "" }),
    ...options,
  });
}

module.exports = {
  ...limits,
  getUsageLimits: withoutHostKeyring(limits.getUsageLimits),
  fetchAntigravityLimits: withoutHostKeyring(limits.fetchAntigravityLimits),
  loadAntigravityCredentials: withoutHostKeyring(limits.loadAntigravityCredentials),
};
