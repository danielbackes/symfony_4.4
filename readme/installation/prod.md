## Production environment on Linux Debian operational system.

![linux](../assets/linux.jpg)

### 1. Git install

```bash
apt-get install git;
```
    
### 2. Docker install

Execute the [official guide](https://docs.docker.com/install/linux/docker-ce/debian/). 

### 3. Project clone

```bash
cd /{your-projects-folder};
git clone {symfony4-project-git-path} {project-name};
cd {project-name}/environment/prod;
```

### 4. Create environment

#### 4.1. Autenticate in DockerHub
```bash
sudo docker login --username {docker-hub-username}
```

#### 4.2. Run
```bash
sh env-run.sh;
```

### 5. Create app

```bash
sh app-build.sh;
```

### 6. Host config

Config your DNS server for rediret to your Apache server.

### 7. Test

Open the follow link with any browser: http://{project-name}.com.br
