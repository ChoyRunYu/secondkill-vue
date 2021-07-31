FROM nginx
COPY ./dist /secondkill-vue
RUN rm /etc/nginx/conf.d/default.conf
ADD secondkill-vue.conf /etc/nginx/conf.d
