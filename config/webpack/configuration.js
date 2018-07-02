// Common configuration for webpacker loaded from config/webpacker.yml

const { join, resolve } = require('path')
const { env } = require('process')
const { safeLoad } = require('js-yaml')
const { readFileSync } = require('fs')

const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
const dotenv = require('dotenv')

const configPath = resolve('config', 'webpacker.yml')
const loadersDir = join(__dirname, 'loaders')
const settings = safeLoad(readFileSync(configPath), 'utf8')[env.NODE_ENV]

function removeOuterSlashes(string) {
    return string.replace(/^\/*/, '').replace(/\/*$/, '')
}

function formatPublicPath(host = '', path = '') {
    let formattedHost = removeOuterSlashes(host)
    if (formattedHost && !/^http/i.test(formattedHost)) {
        formattedHost = `//${formattedHost}`
    }
    const formattedPath = removeOuterSlashes(path)
    return `${formattedHost}/${formattedPath}/`
}

const output = {
    path: resolve('public', settings.public_output_path),
    publicPath: formatPublicPath(env.ASSET_HOST, settings.public_output_path)
}

const dotenvFiles = [
  `.env.${process.env.NODE_ENV}.local`,
  '.env.local',
  `.env.${process.env.NODE_ENV}`,
  '.env'
]
dotenvFiles.forEach((dotenvFile) => {
  dotenv.config({ path: dotenvFile, silent: true })
})

environment.plugins.prepend('Environment', new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(process.env))))

module.exports = {
    settings,
    env,
    loadersDir,
    output,
    environment
}
