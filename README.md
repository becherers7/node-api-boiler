# node-api-boiler
Node CRUD api boiler for mysql and mongodb connections. Compatible with client-boiler (separate repository)

Helpful links when installing mysql:
https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-web-community-8.0.19.0.msi
https://mid.as/kb/00145/install-configure-mysql-on-windows
https://dev.mysql.com/downloads/workbench/

****If you choose the new authentication method on mysql, you will have trouble connecting from node. Run the following cmd
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'examplepassword'

Helpful links when installing mongodb:
https://www.mongodb.com/cloud/atlas/lp/general/try?utm_source=compass&utm_medium=product
https://www.mongodb.com/download-center/compass

May also want to download mongodb as a service.

# TO USE
Server.js and Route.js need to have the connection of mongo or mysql toggled if you want Mongodb set up vs. mysql set up.

On node server.js cmd run, mock data will be created in your local db. The table / collection will be dropped if it exists.
This was intentional as it is boiler plate for building functionality fast. Both mock data creation happens in the respective connectMySql, connectMongo files in resources folder.
