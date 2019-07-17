PROJECT_DIR=/var/www/{project-name};

docker exec {project-name} composer --working-dir=$PROJECT_DIR build;
docker exec {project-name} yarn --cwd=$PROJECT_DIR install --prod;
docker exec {project-name} yarn --cwd=$PROJECT_DIR build;
docker exec {project-name} chown www-data:www-data -R $PROJECT_DIR/var;