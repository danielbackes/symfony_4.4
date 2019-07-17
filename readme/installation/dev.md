## Development environment on Linux Debian operational system. 

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
cd {project-name}/environment/dev;
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

### 6. If you wanna work in frontend

It will watch js and sass changes and then build this assets inside the public folder:
```bash
sh app-watch.sh;
```

### 7. Host config

Edit the `/etc/hosts` file and add the follow line:
```text
127.0.1.1       {project-name}-dev.com.br
```

### 8. Test

Open the follow link with any browser: http://{project-name}-dev.com.br

