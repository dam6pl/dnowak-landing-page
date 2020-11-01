exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: "/",
    component: `${__dirname}/src/templates/about.js`,
  });

  createPage({
    path: "/contact/",
    component: `${__dirname}/src/templates/contact.js`,
  });
};
