# node-api-boiler
Node CRUD api boiler for mysql and mongodb connections. Compatible with client-boiler (separate repository)

Helpful links when installing mysql:
https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-web-community-8.0.19.0.msi
https://mid.as/kb/00145/install-configure-mysql-on-windows
https://dev.mysql.com/downloads/workbench/

****If you choose the new authentication method on mysql, you will have trouble connecting from node. Run the following cmd
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''
