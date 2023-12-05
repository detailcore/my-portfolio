module.exports = {
  name: "Portfolio",
  port: 3005,
  // exec_mode: "cluster",
  // instances: 3, // 'max' or a number of instances
  script: "./.output/server/index.mjs",
  args: "start",
};
