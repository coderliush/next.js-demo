 module.exports = function (api) {
  api.cache(true);
  const presets = [
      ["next/babel"],
      [
          '@babel/preset-env',
          {
              modules: false,
              useBuiltIns: 'usage',
              targets: {
                  "browsers": [
                      "> 1%",
                      "last 2 versions",
                      "not ie < 8"
                  ]
              },
              corejs:2,
          }
      ],
      "@babel/preset-react"
  ];

  const plugins= [
      ["@babel/plugin-transform-runtime",{
          corejs:2,
          helpers: true,
          regenerator: true,
          useESModules: false
      }],
      "@babel/plugin-proposal-async-generator-functions",
    //   ["import", {"libraryName": "antd", "libraryDirectory": "es", "style": true}],
      ["@babel/plugin-proposal-decorators", {"legacy": true}],
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import"
  ];
  return {
      presets,
      plugins
  }
}





