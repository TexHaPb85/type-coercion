# Local setup

## Setup local DNS

Add local domain to the end of the `/etc/hosts` file:
```
127.0.0.1   itstep.loc
```

## Use nginx server via Docker

### Start server

Run docker container with the latest _alpine_ version of nginx in detached mode:
```bash
docker run --name boilerplate -v $(pwd)/public:/usr/share/nginx/html:ro -d -p 80:80 nginx:1.15.7-alpine
```

### Stop server

Stop and remove container by the name:
```bash
docker rm -f boilerplate
```

# Development team

* Marianna Henyk
* Oleksandr Bodnia
* Valeriy Tkachuk
