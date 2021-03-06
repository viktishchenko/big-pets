# online store

<details>
<summary>
stack
</summary>

Back

- node
- express
- postgresql
- sequelize

диаграмма баз данных(8таблиц)
авторизация JWT
Rest API

Front

- react
- react bootstrap
- axios (зпросы к серверу)
- react-router-dom (навигация)
- mobx (стейт менеджер)

endpoint methods
![server endpoint](back/readmeAssets/server_endpoint.png)
server endpoint func
![server endpoint func](back/readmeAssets/server_endpoint_func.png)
client query
![client query](back/readmeAssets/server_endpoint_query.png)

</details>

<details>
<summary>
init
</summary>

    npm init -y
    npm i express pg pg-hstore sequelize cors dotenv
    npm i -D nodemon

install postgresql/create db

</details>

<details>
<summary>
add diagrams
</summary>

---

[draw.io](https://app.diagrams.net/)

---

![schema database](back/readmeAssets/tables_graph.png)

### add tables

![add tables](back/readmeAssets/add_tables.png)

### test request

![test request](back/readmeAssets/test_request.png)

### check router

![check router](back/readmeAssets/router_check.png)

### check controllers

![check controllers](back/readmeAssets/check_controllers.png)

### check middleware

![check middleware](back/readmeAssets/check_middleware.png)

</details>

<details>
<summary>
add obj to DB
</summary>

![add object to DB](back/readmeAssets/add_to_DB.png)
![add object to DB2](back/readmeAssets/add_to_DB2.png)

---

[this commit](https://github.com/viktishchenko/big-pets/commit/f4391c06bc0317ef118b674d00ff11ac470008dd)

</details>

<details>
<summary>
get from to DB
</summary>

![get from DB](back/readmeAssets/get_from_DB.png)

---

[this file](./back/controllers/typeController.js)

![add object to DB](back/readmeAssets/add_obj_to_DB.png)
![get obj from DB](back/readmeAssets/get_from_DB2.png)

</details>
