// присваваем src возможн gulp ,теперь эта переменная рабоает в функциях
const { src,dest, watch, parallel, series } = require('gulp');
// задаем слову scss(прозвольое слово,дальше будем его подключать когда надо) все фукции галп-sass...
const scss         = require('gulp-sass');
// позволяет обьединять файлы в один(неск-ко js в общий js)
const concat       = require('gulp-concat');
// позволяет подстраиваться под разные браузеры
const autoprefixer = require('gulp-autoprefixer');
// плагин позвол сжмать файлы js
const uglify       = require('gulp-uglify');
// плагин для сжатия изображения
const imagemin = require('gulp-imagemin');
// удаляет папку(форматирует),прежде чем пересаписать данные для нее
const del       =require('del');
const browserSync  = require('browser-sync').create();
// 
const addSrc = require('gulp-add-src');





function browsersync (){
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify:false
  })
}




// styles назван функц которое будет отвечать за преобраз из scss в css
function styles() {
  return src([
    'node_modules/slick-carousel/slick/slick.scss',
    'app/scss/style.scss',
    ])
  // compressed(все написано слитно и без пробелов(.min.css)),,,expaded(все написано красиво класс под классом(.css))---типы преобразования из scss в css 
    .pipe(scss({ outputStyle: 'compressed'}))
    .pipe(addSrc([
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
    ]))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid:true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}


// функции для скриптов
function scripts(){
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    'node_modules/mixitup/dist/mixitup.js',
    'app/js/main.js',
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

// для изображений
function images (){
  return src('app/image**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(dest('dist/images'))
}


function build (){
  return src ([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js',
  ], {base:'app'})
  .pipe(dest('dist'))
}

function cleanDist(){
  return del('dist')
}



// следим за файлом,что он сам оновлял scss
function watching () {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js' , '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change',browserSync.reload);
}


exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
// series--выполн последоват очередность
exports.build = series(cleanDist,images,build);
// параллельно выполяет действия
exports.default = parallel(styles, scripts, browsersync, watching);