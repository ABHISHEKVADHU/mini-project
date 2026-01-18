FROM httpd:2.4

# Copy html folder content to Apache web root
COPY html/ /usr/local/apache2/htdocs/

EXPOSE 80

# Start Apache in foreground
CMD ["httpd-foreground"]

