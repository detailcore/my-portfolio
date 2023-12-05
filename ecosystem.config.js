module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '3005',
      exec_mode: 'cluster',
      instances: 2,
      script: './.output/server/index.mjs'
    }
  ]
}