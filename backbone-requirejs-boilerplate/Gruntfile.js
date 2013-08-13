/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, module: false, */

module.exports = function(grunt) {
  'use strict';

  var jsSrc = [
    'js/*.js'
    // 'js/collections/**/*.js',
    // 'js/utils/**/*.js',
    // 'js/views/**/*.js',
    // 'js/models/**/*.js',
    // 'js/test/specs/**/*.js',
    // 'js/test/main.js'
  ];
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // exec
    exec: {
      testjs: {
        command: 'mocha-phantomjs js/test/spec_runner.html'
      }
    },

    // requirejs
    requirejs: {
      compile: {
        options: {
          out: 'js/main-build.js',
          almond: true,
          baseUrl: 'js/',
          name: 'libs/almond/almond',
          include: ['main'],
          insertRequire: ['main'],
          preserveLicenseComments: true,
          paths: {
            text: 'libs/text/text',
            jquery: 'libs/jquery/jquery',
            underscore: 'libs/underscore-amd/underscore',
            backbone: 'libs/backbone-amd/backbone',
            mustache: 'libs/mustache/mustache'
          }
        }
      }
    },

    // docco
    docco: {
      dist: {
        src: jsSrc,
        options: {
          output: 'js/docs/'
        }
      }
    },

    // optimize images
    img: {
      task: {
        src: 'imgs/src',
        dest: 'imgs'
      }
    },

    // jade
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          'index.html': '_jade/index.jade'
        }
      }
    },

    // watch
    watch: {
      js: {
        files: jsSrc,
        tasks: ['docco', 'exec:testjs']
      },
      jstest: {
        files: jsSrc,
        tasks: ['exec:testjs']
      },
      docco: {
        files: jsSrc,
        tasks: ['docco']
      },
      jade: {
        files: ['_jade/**/*.jade'],
        tasks: ['jade']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-img');
  grunt.loadNpmTasks('grunt-docco');

  // tasks for optimize(minify)
  grunt.registerTask('minify:js',  ['requirejs']);
};
