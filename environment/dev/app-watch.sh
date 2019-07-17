PROJECT_DIR=/var/www/{project-name};

sudo docker exec {project-name}_dev yarn --cwd=$PROJECT_DIR watch;
