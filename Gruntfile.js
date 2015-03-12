module.exports = function(grunt) {	

	grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  	
	  concat: {
	    js: {
	      src: ['js/app.js'],
	      dest: 'build/build.js',
	    },
	    css: {
	      src: ['css/application.css'],
	      dest: 'build/build.css',
	    },
	  },

	  sass: {
	    dist: {
	      files: {
	        'css/application.css': 'scss/application.scss'
	      }
	    }
	  },//end sass

	  cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'css/application.min.css': ['build/build.css']
		    }
		  }
	  },//end min

	  uglify: {
	    my_target: {
	      files: {
	        'js/app.min.js': ['build/build.js']
	      }
	    }
	  },//enduglify

	  watch: {
		  js: {
		    files: '**/*.js',
		    tasks: ['concat', 'sass'],
		  },
		  scss: {
		    files: '**/*.scss',
		    tasks: ['concat', 'sass'],
		  },
		  options: {
      		spawn: false,
    	  }
	  }
	});//end module.exports
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
}//end module.exports