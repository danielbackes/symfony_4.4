FROM php:7.3-apache-stretch

# ---- tools
RUN apt-get update && apt-get install -y git zip unzip && \
    # ---- Composer install
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --version=1.8.6 && \
    php -r "unlink('composer-setup.php');" && \
    mv composer.phar /usr/local/bin/composer && \
    # ---- NodeJS install
    apt-get update && apt-get install -y gnupg2 && \
    curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get update && apt-get install -y nodejs && \
    # ---- Yarn install
    curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.17.3 && \
    ln -s /root/.yarn/bin/yarn /usr/local/bin/yarn && \
    # ---- Apache sites
    a2dissite 000-default.conf && \
    # ---- Apache modules
    ## In this docker image the deflate module already is enable to compress assets files
    ## Enable SSL/TLS
    a2enmod ssl && \
    ## Enable mod_expires to control cache expiration date
    a2enmod expires && \
    ## Enable mod_headers to disable ETag, because mod_deflate put 'gzip' as sufix inside ETag response header,
    ## then the next request send this ETag as If-None-Match request header, that no match with next ETag
    ## and thus cache, enable by mod_expires, don't work.
    a2enmod headers && \
    # ---- Remove cache
    apt-get clean -y && \
    apt-get autoclean -y;

# ---- PHP config
COPY config/php.ini "$PHP_INI_DIR/conf.d/custom.ini"

# ---- PHP extensions
RUN docker-php-ext-install opcache

# ---- Apache config
COPY config/security.conf "$APACHE_CONFDIR/conf-enabled"

# ---- Apache sites
COPY config/vhost.conf "$APACHE_CONFDIR/sites-enabled"

# ---- SSL/TLS config
COPY config/ssl/certs/ "/etc/ssl/certs/"
COPY config/ssl/private/ "/etc/ssl/private/"

WORKDIR /var/www