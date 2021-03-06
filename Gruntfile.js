module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: "gm",
          sizes: [
            { name: "sm", suffix: "_1x", quality: 100, width: 600 },
            { name: "sm", suffix: "_2x", quality: 100, width: 1200 },
            { name: "md", suffix: "_1x", quality: 100, width: 900 },
            { name: "md", suffix: "_2x", quality: 100, width: 1800 },
            { name: "lg", suffix: "_1x", quality: 100, width: 1920 },
            { name: "lg", suffix: "_2x", quality: 100, width: 2880 }
          ]
        },
        files: [
          {
            expand: true,
            src: ["**/*.{jpg,png}"],
            cwd: "src/",
            dest: "dest/"
          }
        ]
      }
    },
	cwebp: {
		dynamic: {
			options: {
				q: 100
			},
			files: [
				{
					expand: true,
					cwd: "dest/",
					src: ["**/*.{jpg,png}"],
					dest: "dest/"
				}
			]	
		}
  }
  });

grunt.loadNpmTasks("grunt-responsive-images");
grunt.loadNpmTasks("grunt-cwebp");
grunt.registerTask("default", ["responsive_images", "cwebp"]);
};

