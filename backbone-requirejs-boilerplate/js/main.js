/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

require.config({
  paths: {
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    mustache: 'libs/mustache/mustache',
    text: 'libs/text/text'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }

});

require(['jquery', 'underscore', 'backbone', 'mustache'], function($, _, Backbone) {
  'use strict';

  // initialize

});
