### redis 
###### 将redis和webServer拆分为两个单独服务
###### 双方都是独立的,都是可扩建的

#### 为何session适合用redis
##### session 访问频繁,对性能要求极高
#####  session 可考虑断电丢失数据的问题
##### session 数据量不会太大

#### 为何网址数据不适合用redis
##### 操作频率不是太高
##### 断电数据不能丢失
##### 数据量太大, 内存成本高

### cookie 和 session



