/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, browser: true, */
/*global _:false, $:false, define:false, require:false, */

require.config({
  paths: {
    jquery: '../libs/jquery/jquery.min',
    underscore: '../libs/underscore/underscore-min',
    backbone: '../libs/backbone/backbone-min',
    mustache: '../libs/mustache/mustache',
    text: '../libs/text/text',
    mocha: 'node_modules/mocha/mocha',
    sinon: 'node_modules/sinon/pkg/sinon',
    chai: 'node_modules/chai/chai',
    schai: 'node_modules/sinon-chai/lib/sinon-chai'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    mocha: {
      exports: 'mocha'
    },
    sinon: {
      exports: 'sinon'
    }
  }
});

require([
  'jquery', 'underscore', 'backbone', 'mocha', 'sinon', 'chai', 'schai'
], function($, _, Backbone, mocha, sinon, chai, schai, model) {
  'use strict';

  mocha.ui('bdd');
  mocha.reporter('html');
  chai.should();
  window.expect = chai.expect;

  require([
    // '../test/spec/model',
    // '../test/spec/view'
  ], function(
    // model,
    // view
  ) {
    if (window.mochaPhantomJS) {
      window.mochaPhantomJS.run();
    }
    else {
      mocha.run();
    }
  });
});
