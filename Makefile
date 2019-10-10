DOCKER := docker
DOCKER_COMPOSE_DEV := docker-compose -f docker-compose.yml -f docker-compose.dev.yml


default: clean build start logs

clean:
	@$(DOCKER_COMPOSE_DEV) down
.PHONY: clean

build:
	@$(DOCKER_COMPOSE_DEV) build
.PHONY: build

start:
	@$(DOCKER_COMPOSE_DEV) up -d
.PHONY: start

logs:
	@$(DOCKER_COMPOSE_DEV) logs -f
.PHONY: logs
