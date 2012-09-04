/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      js_dist: {
        src: [
          'lib/jquery-1.7.2.js', 
          'lib/underscore.js', 
          'lib/backbone-events.js',
          'lib/bootstrap-modal.js'
        ],
        dest: 'dist/app.js'
      }
    },
    less: {
      all: {
        src: [
          'less/bootstrap.less', 
          'less/style.less'
        ],
        dest: 'css/style.css'
      }
    },
    watch: {
      files: ['less/style.less', 'js/*'],
      tasks: 'less concat'
    }
  });

  grunt.loadNpmTasks('grunt-less');

  // Default task.
  grunt.registerTask('default', 'less concat');

};
