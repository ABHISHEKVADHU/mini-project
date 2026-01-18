# Base image: Apache official
FROM httpd:2.4

# Agar html folder khali hai to use default Apache root
# Optional: Agar chahe to later me index.html add kar sakte ho
# COPY html/ /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80

# Start Apache in foreground (default for httpd image)
CMD ["httpd-foreground"]

