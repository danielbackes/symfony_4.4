SCRIPT=$(readlink -f "$0")

BASEDIR=$(dirname "$SCRIPT")

sudo docker run --detach --interactive --tty \
    --publish 80:80 \
    --name {project-name} \
    --volume $BASEDIR/../../:/var/www/{project-name} \
    --volume $BASEDIR/log/apache:/var/log/apache2 \
    --volume $BASEDIR/log/php:/var/log/php \
    {docker-hub-username}/{project-name}:latest;