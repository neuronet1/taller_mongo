module.exports = function(grunt) {
    var appfiles = ['*.js'];

    grunt.initConfig({
        jshint: {
            files: appfiles
        },
        watch: {
            files: appfiles,
            tasks: ['jshint','exec']
        },
        exec: {
            run_script: './run.sh'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
};