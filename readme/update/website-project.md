## Update website project

### 1. In devolopment environment

#### 1.1. Create new git commit
```bash
cd /{your-projects-folder}/{project-name};
git add .;
git commit -m "you commit name";
```

#### 1.2. Push commit to gitlab
```bash
git push origin master;
```

### 2. In production environment

#### 2.1. Download commit

```bash
cd /{your-projects-folder}/{project-name};
git pull origin master;
```

#### 2.2. Build app

```bash
cd /{your-projects-folder}/{project-name}/environment/prod;
sh app-build.sh;
```

### 3. Test

Open the follow link with any browser: http://{project-name}.com.br