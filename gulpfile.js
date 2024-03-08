const gulp =  required('gulp');

function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

function dizOi(callback) {
    console.log("Olá Gulp");
    diztchau();
    callback();
}

function diztchau() {
    console.log("Tchau Gulp");
}

exports.default = gulp.series(funcaoPadrao,);
exports.dizOi = dizOi;