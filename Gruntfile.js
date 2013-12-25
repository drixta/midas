module.exports = function (grunt) {

  	grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-livereload');

	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	mocha: {
    		test: {
    			src: ['test/test.html']
    		}
    	},
      concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: ['app/bower_components/angular/*.min.js'],
          dest: 'app/scripts/vendor.js'
        }
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
          files: {
            'app/scripts/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
          }
        }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            base: 'app'
          }
        },
        livereload: {
          options: {
            open: true,
            base: [
              'app'
            ]
          }
        },
      },
      watch: {
        options: {
          livereload: true
        },
        js: {
          files: ['app/**/*.js'],
        },
        css: {
          files: ['app/styles/*.css'],
        },
        livereload: {
          options: {
              livereload: '<%= connect.livereload %>'
          },
          files: [
              'app/{,*/}*.html',
              'app/styles/{,*/}*.css',
          ]
        }
      }
  	});

  	grunt.registerTask('test', ['mocha']);
    grunt.registerTask('opt', ['concat','uglify']);
  	grunt.registerTask('default', ['test','concat','connect','watch']);
};