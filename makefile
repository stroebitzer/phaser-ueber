# https://github.com/ourcade/phaser3-typescript-vite-template
# https://www.youtube.com/watch?v=tFkMxzHwmDw

.PHONY: init
init:
	npm install

.PHONY: run
run:
	npm run start

.PHONY: build
build:
	npm run build

.PHONY: docker-build
docker-build:
	docker build -t phaser:0.0.1 .

.PHONY: docker-run
docker-run: docker-build
	docker run -it -d --rm --name phaser -p 8080:80 phaser:0.0.1
