const requireAllFiles = function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
};

requireAllFiles(require.context('./', true, /^\.\/.*\.(scss|js)$/));
