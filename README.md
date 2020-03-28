настроить craco:

npm install @craco/craco

в package.json:

  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
},

настройка craco-less

npm install craco-less
создать новый файл: craco.config.js

module.exports = {
  plugins: [
    {
      plugin: require('craco-less'),
    },
  ],
};