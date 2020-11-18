FROM nginx
LABEL PROJECT="test" \
      VERSION="0.0.1"        \
      AUTHOR="admin"    \
      COMPANY="Hotmaxx"
WORKDIR /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/*
ADD dist/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/nginx.conf
