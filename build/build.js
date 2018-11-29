'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
var shell = require('shelljs')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()


rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    //将编译后的html文件里面引入的js和css文件地址替换为cdn地址
    //console.log(chalk.cyan(path.join(assetsPath,'../')+'  Build complete.\n'))
    //replacePath(path.join(assetsPath,'../'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})

//修改外部html相关信息
const fs = require('fs');
function replacePath(folder) {
  let files = fs.readdirSync(folder);
  for (let f of files) {
    let p = path.join(folder, f);
    let stat = fs.statSync(p);
    if (!stat.isFile()) {
      continue;
    }
    if (!f.toLowerCase().endsWith('.html')) {
      continue;
    }
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/\.\/static\//g, '/m/static/');
    console.log(chalk.cyan(content+' 编译 Build complete.\n'))
    fs.writeFileSync(p, content);
  }
}