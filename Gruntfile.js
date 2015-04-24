'use strict';

module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            js: {
                files: ['*/*.js'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['styles/main.css']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        ''
                    ]
                }
            },
            coverage: {
                options: {
                    port: 9002,
                    open: true,
                    base: ['coverage']
                }
            }
        }
    });

    grunt.registerTask('serve', function() {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
};