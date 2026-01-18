FROM httpd:2.4

COPY html/ /usr/local/apache/htdocs

EXPOSE 80
