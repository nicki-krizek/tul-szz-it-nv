var gulp = require('gulp');
var concat = require('gulp-concat');
var markdownpdf = require('gulp-markdown-pdf');

var paths = {
  md: ['./*/*.md', '!./node_modules/**/*.md'],
  dest: './',
  allmd: './pdf/tul_szz_it_nv_15_16.md',
  pdfout: './pdf'
};

gulp.task('concat-md', function() {
  return gulp.src(paths.md)
    .pipe(concat(paths.allmd))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('md-to-pdf', ['concat-md'], function() {
  return gulp.src(paths.allmd)
    .pipe(markdownpdf())
    .pipe(gulp.dest(paths.pdfout));
});

gulp.task('watch', function() {
  gulp.watch(paths.docs, ['md-to-pdf']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'concat-md', 'md-to-pdf']);