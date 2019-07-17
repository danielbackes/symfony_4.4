FROM php:7.3-apache-stretch

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
    # ---- Apache modules
    ## Enable SSL/TLS
    a2enmod ssl && \
    # ---- Apache sites
    a2dissite 000-default.conf && \
    # ---- Remove cache
    apt-get clean -y && \
    apt-get autoclean -y;

# ---- PHP config
COPY config/php.ini "$PHP_INI_DIR/conf.d/custom.ini"

# ---- Apache config
COPY config/security.conf "$APACHE_CONFDIR/conf-enabled"

# ---- Apache sites
COPY config/vhost.conf "$APACHE_CONFDIR/sites-enabled"

# ---- SSL/TLS config
COPY config/ssl/certs/ "/etc/ssl/certs/"
COPY config/ssl/private/ "/etc/ssl/private/"

WORKDIR /var/www