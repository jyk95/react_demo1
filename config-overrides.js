// 1.npm 安装  react-app-rewired
// 2.修改package.json中的start、build等启动项
// 3.项目根目录新建config-overrides.js
// 4.安装 babel-plugin-import按需加载
// 5.修改config-overrides.js
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override (config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  return config;
};
