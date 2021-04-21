# stage 1
FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/talent-hub /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
