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

# Main
FROM php:7.2.34-apache
WORKDIR /sandbox

RUN apt update && apt install -y \
    supervisor
ENV NVM_DIR /usr/local/lib/nvm
ENV NODE_VERSION 16.14.2
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default
COPY ./sandbox.conf /etc/apache2/sites-available/
RUN a2enmod rewrite headers && service apache2 restart
RUN a2dissite 000-default.conf && a2ensite sandbox.conf

# Deploy Sandbox
COPY . /sandbox
COPY --from=vendor /sandbox/vendor/ /sandbox/vendor/
COPY --from=frontend /sandbox/node_modules/ /sandbox/node_modules
COPY supervisord.dev.sandbox.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 80 443 

# CMD ["/usr/sbin/apache2ctl", "-DFOREGROUND"]
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
