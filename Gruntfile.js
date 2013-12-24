module.exports = function (grunt) {

  	grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

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
      }
  	});

  	grunt.registerTask('test', ['mocha']);
    grunt.registerTask('opt', ['concat','uglify']);
  	grunt.registerTask('default', ['test','concat']);
};