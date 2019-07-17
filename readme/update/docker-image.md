## Update docker image

If you make any change in you environment, so you need update your docker image.

### 1. In devolopment environment

#### 1.1. Create new dev image
```bash
cd /{your-projects-folder}/{project-name}/environment/dev;
sh env-build.sh;
```

#### 1.2. Create new prod image
```bash
cd /{your-projects-folder}/{project-name}/environment/prod;
sh env-build.sh;
```

#### 1.2. Autenticate in DockerHub
```bash
sudo docker login --username {docker-hub-username}
```

#### 1.3. Push docker images to DockerHub
```bash
sudo docker push {docker-hub-username}/{project-name}:latest;
sudo docker push {docker-hub-username}/{project-name}:dev;
```

### 2. In production environment

#### 2.1. Stop and remove docker container

```bash
sudo docker container stop {project-name};
sudo docker container rm {project-name};
```

#### 2.2 Remove local docker image

```bash
sudo docker image rm {docker-hub-username}/{project-name}:latest;
```

#### 2.3. Download and run the new docker image

```bash
cd /{your-projects-folder}/{project-name}/environment/prod;
sh env-run.sh;
```

### 3. Test

Open the follow link with any browser: http://{project-name}.com.br