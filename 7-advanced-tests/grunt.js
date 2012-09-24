/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      dist: {
        src: ['js/TodoList.js', 'js/TodoItem.js'],
        dest: 'dist/app.js'
      }
    },
    watch: {
      files: 'js/*',
      tasks: 'concat'
    }
  });

  // Default task.
  grunt.registerTask('default', 'concat');

};
