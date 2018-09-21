var pkg = require('./package.json')

module.exports = {
  root: './content',
  output: './book',
  title: 'test search plus plugin',
  plugins: ['-lunr', '-search', 'search-plus-mod', 'fontsettings'],

  variables: {
    version: pkg.version
  }
}
