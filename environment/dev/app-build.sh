PROJECT_DIR=/var/www/{project-name};

sudo docker exec {project-name}_dev composer --working-dir=$PROJECT_DIR dev;
sudo docker exec {project-name}_dev yarn --cwd=$PROJECT_DIR install;
sudo docker exec {project-name}_dev yarn --cwd=$PROJECT_DIR dev;
sudo docker exec {project-name}_dev chown www-data:www-data -R $PROJECT_DIR/var;
