FROM php:7.3-apache-stretch

RUN apt-get update && apt-get install -y git zip unzip && \
    # ---- Composer install
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');" && \
    mv composer.phar /usr/local/bin/composer && \
    # ---- NodeJS install
    apt-get update && apt-get install -y gnupg2 && \
    curl -sL https://deb.nodesource.com/setup_11.x | bash - && \
    apt-get update && apt-get install -y nodejs && \
    # ---- Yarn install
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn && \
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
COPY config/ssl/certs/* "/etc/ssl/certs"
COPY config/ssl/private/* "/etc/ssl/private"

WORKDIR /var/www