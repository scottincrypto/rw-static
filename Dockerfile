FROM nginx:alpine
COPY build /usr/share/nginx/html

# configure nginx
ARG USERNAME=user
ARG PASSWORD=password
ARG PORT=80

ENV USERNAME=$USERNAME
ENV PASSWORD=$PASSWORD
ENV PORT=$PORT

# Copy nginx config template and generate final config
COPY ./nginx.conf.template /etc/nginx/nginx.conf.template
RUN envsubst '$PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

# Copy password generation script
COPY ./gen_passwd.sh /etc/nginx/gen_passwd.sh
RUN ["chmod", "+x", "/etc/nginx/gen_passwd.sh"]

# Generate password file
RUN /etc/nginx/gen_passwd.sh

# Expose the port
EXPOSE $PORT

# Start nginx directly
CMD ["nginx", "-g", "daemon off;"]

