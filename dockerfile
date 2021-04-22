# stage 1
FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/talent-hub /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD echo $PORT
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'