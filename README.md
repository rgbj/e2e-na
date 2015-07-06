# project creation

## install yeoman, gulp, bower

    $ npm install -g yo gulp bower

## install gulp-angular

    $ npm install -g generator-gulp-angular

## create gulp-angular sample, with maven-compatible paths

    $ yo gulp-angular --dist-path='target/dist' --tmp-path='target/tmp'

(Choose defaults for everything -- it doesn't matter)

## make sure protractor e2e tests work

    $ gulp protractor
