FROM nginx as runtime
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /dist/client-research-fe /usr/share/nginx/html
