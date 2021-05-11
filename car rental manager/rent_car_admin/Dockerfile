FROM endeveit/docker-jq AS deps
COPY package.json /tmp

RUN jq '{name, version, dependencies, devDependencies, engines, scripts: (.scripts | { "build-prod" , postinstall }) }' < /tmp/package.json > /tmp/deps.json

FROM node:12-alpine as builder
WORKDIR /usr/src/app/
COPY --from=deps /tmp/deps.json ./package.json
COPY package-lock.json ./
RUN npm ci --unsafe-perm
COPY . .
RUN npm run build-prod

FROM nginx:1.19-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
