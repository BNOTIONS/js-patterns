/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      js_dist: {
        src: [
          'lib/jquery-1.7.2.js', 
          'underscore.js', 
          'backbone-events.js'
        ],
        dest: 'dist/app.js'
      }
    },
    less: {
      src: [
        'less/bootstrap.less', 
        'less/style.less'
      ],
      dest: ['css/bootstrap.css']
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
