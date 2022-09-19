# Deploy Composer
FROM composer:2.1.9 as vendor
WORKDIR /sandbox
COPY ./composer.json /sandbox/composer.json
COPY ./composer.lock /sandbox/composer.lock
RUN composer install --ignore-platform-reqs --no-interaction --no-plugins --no-scripts --prefer-dist

# Deploy NPM
FROM node:14.17.0-alpine3.13 as frontend
WORKDIR /sandbox
COPY ./package.json package-lock.json webpack.mix.js /sandbox/
COPY ./resources/ /sandbox/resources/
RUN npm install

# Deploy Apache
FROM php:7.2.34-apache
WORKDIR /sandbox

# Deploy Sandbox
COPY . /sandbox
COPY --from=vendor /sandbox/vendor/ /sandbox/vendor/
COPY --from=frontend /sandbox/node_modules/ /sandbox/node_modules

EXPOSE 80 443 

CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]