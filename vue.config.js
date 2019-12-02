const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const file = process.env.VUE_APP_FILE;

const buildConf = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  productionSourceMap: false,
  outputDir: file,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets'));
    config.resolve.alias
      .set('@', resolve('src'));

    // 解决 wc-async 打包之后引入路径问题
    if (file === 'dist') {
      config.resolve.alias
        .set('~root', resolve(file));
    }

    return config;
  },
};

if (file === 'site') {
  buildConf.publicPath = process.env.VUE_APP_CDN;
}

module.exports = buildConf;
