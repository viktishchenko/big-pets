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

[code](https://github.com/utimur/online-store-full-course)
[video](https://www.youtube.com/watch?v=H2GCkRF9eko)

alt + shift + a // multiline comments

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

---

    npm i express-fileupload
    npm i uuid

---

### add/get static file to DB

![add static file(img) to DB](back/readmeAssets/add_img_to_DB.png)

[filter items by brandId & typeId →](./back/controllers/deviceController.js)

![filter item by brandId](back/readmeAssets/get_item_by_brandId.png)

[page limit with DB →](./back/controllers/deviceController.js)

![add page limit with DB](back/readmeAssets/page_limit_with_DB.png)

[page limit with DB und count →](./back/controllers/deviceController.js)

![page limit with DB and count](back/readmeAssets/page_limit_with_DB_undCount.png)

[add device info →](./back/controllers/deviceController.js)

![add device info](back/readmeAssets/device_info.png)

</details>

<details>

<summary>
Auth
</summary>

    npm i jsonwebtoken bcrypt

[get token →](./back/controllers/userController.js)
![grt token](back/readmeAssets/get_token.png)

### check userName & password

![check pass & user name](back/readmeAssets/check_userName_und_password.png)

### check login

false

![check login false](back/readmeAssets/check_login.png)

true

![check login true](back/readmeAssets/check_login_true.png)

### check user auth

false

![check user auth](back/readmeAssets/check_user_auth.png)

true

![check user auth](back/readmeAssets/auth_check.png)

### check ADMIN

false

![check ADMIN](back/readmeAssets/check_auth_false.png)

false

![check ADMIN](back/readmeAssets/check_auth_token_false.png)

add ADMIN

![add admin](back/readmeAssets/add_admin.png)

hooray ADMIN

![add admin true](back/readmeAssets/check_auth_token_true.png)

</details>

<details>

<summary>
front
</summary>

    npx create-react-app .
    npm i react-router-dom mobx mobx-react-lite
    npm install react-bootstrap bootstrap

![start front](front/readmeAssets/start_front.png)

</details>

<details>

<summary>
add routes, other stuff
</summary>

![add bootstrap](front/readmeAssets/add_bootstrap.png)

</details>
