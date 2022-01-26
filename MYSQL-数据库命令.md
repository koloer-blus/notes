# SQL

> Structure Query Language

- 连接数据库：`mysql -uroot -p`
  - `-u`：用户
  - `-p`：输入密码
- 默认创建的数据库：
  - `infomationn_schema`：存储数据库对象信息，比如用户信息、权限信息、分区信息；
  - `performannce_schema`：收集数据库服务器性能参数；
  - `sys`：存储过程，自定义函数、视图；

## DDL

> 数据定义语言(Data Definition Language)

- 创建数据库：`create database dbname;`

- 查询已有数据库：`show databases;`

- 选择要操作的数据库：`use dbname;`

- 查看当前数据库下的表：`show tables;`

- 删除数据库：`drop database dbname;`

- 创建表

  ```sql
  create table tablename (
  	field1 datatype scoped
      ……
  );
  
  --demo
  create table user (
  	name varchar(20),
      age int,
      address longtext
  );
  ```

- 查看创建表的语句：`show create table user \G;`

- 删除表

  - `drop user;`：带日志的删除，可恢复
  - `truncate user;`：带日志的不可恢复删除

- 修改表(Alter)

  - 修改列数据类型：`alert table user modify name varchar(45);`
  - 删除列：`alter table user drop column age;`
  - 添加列：`alter table user add tel varchar(11);`
  - 列重命名：`alter table user change tel phone decimal(10,2);`
  - 表名重命名：`alter table user rename member;`

## DML

> 数据操作语言(Data Manipulation Language)

- 插入：
  - `insert into tablename (field1,field2) values(value1,value2);`
  - `insert into tablename values(value1, value2);`
  - `insert into tablename (field1,field2) values (value1,value2), (value3,value4);`
- 

## DCL

> 数据控制语言(Data Control Language)

## DQL

> 数据查询语言(Data Query Language)