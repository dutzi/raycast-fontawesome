'use strict';

var util = require('util');

module.exports = {
  src: './assets/pngs/regular/*.{png}',
  destImage: './assets/sprites/regular.png',
  destCSS: './assets/sprites/regular.css',
  imgPath: './assets/sprites/regular.img.png',
  padding: 2,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  engine: 'gmsmith',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ic-%s:before', item.name);
    },
  },
};
