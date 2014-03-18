module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.initConfig({
      qunit: {
          all: ['tests/index.html']
      },

      uglify: {
          dist: {
              files: {
                  'jquery-ajax-gist.min.js': ['jquery-ajax-gist.js']
              }
          }
      }
  });

  grunt.registerTask('default', ['uglify:dist', 'qunit'] );

};
