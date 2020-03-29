module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/`;
  const coursesPath = themeOptions.coursesPath || `content/courses`;
  const authorsPath = themeOptions.authorsPath || `content/authors`;

  return {
    basePath,
    coursesPath,
    authorsPath
  };
};
