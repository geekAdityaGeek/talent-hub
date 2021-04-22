# stage 1
FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/talent-hub /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# this part is only for deployment in heroku
CMD sed -i -e 's/port/$PORT/g' /etc/nginx/nginx.conf && cat /etc/nginx/nginx.conf && nginx -g 'daemon off;'