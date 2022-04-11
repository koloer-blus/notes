# `KAFKA`操作

> Kafka是一个分布式的流平台
>
> `Topic`：消息的分类，每一类的消息被称为一个主题（Topic）
>
> `Producer`：发布消息的对象称之为主题生产者
>
> `Consumer`：订阅消息并处理发布的消息对象称之为主题消费者
>
> `Broker`：已发布的消息保存在一组服务器中，称之为Kafka。集群中的每一个服务器都是一个代理，消费者可以订阅或消费多个主题，并从Broker拉数据，从而消费这些已发布的消息。

## 1. 什么是`Kafka`?

- 简介：
  - `kafka`作为一个集群运行在一个或多个服务器上。
  - `kafka`集群存储的消息是以topic为类别记录的。
  - 每个消息是由一个key，一个value和时间戳构成。
  
- 核心`Api`
  - `Producer API`：发布消息到1个或多个topic（主题）中。
  - `Consumer API` ：订阅一个或多个`topic`，并处理产生的消息。
  - `Streams API`：充当流处理器，从1个或多个topic消费输入流，并生产一个输出流到一个或多个输出topic，有效地将输入流转换为输出流。
  - `Connector API`：可构建或运行可重用的生产者或消费者，将topic连接到现有的应用程序或数据系统。
  
- 主题和日志（Topic和Log）

  - Topic是发布的消息的类别名，一个topic可以有零个，一个或多个消费者订阅该主题的消息。

  - 对于每个Topic，Kafka集群都会维护一个分区Log

    <div style="text-align:center;"><img src="https://img.orchome.com/group1/M00/00/01/KmCudlf7DsaAVF0WAABMe0J0lv4158.png" /></div>
    
  - 每一个分区都是一个顺序的、不可变的消息队列， 并且可以持续的添加。分区中的消息都被分了一个序列号，称之为偏移量(offset)，在每个分区中此偏移量都是唯一的。
  
    Kafka集群保持所有的消息，直到它们过期（无论消息是否被消费）。实际上消费者所持有的仅有的元数据就是这个offset（偏移量），也就是说offset由消费者来控制：正常情况当消费者消费消息的时候，偏移量也线性的的增加。但是实际偏移量由消费者控制，消费者可以将偏移量重置为更早的位置，重新读取消息。可以看到这种设计对消费者来说操作自如，一个消费者的操作不会影响其它消费者对此log的处理。
  
  - Kafka中采用分区的设计目的：
  
    - 可以处理更多的消息，不受单台服务器的限制
    - 分区可以作为并行处理的单元

## 2. 使用`Kafka`

- 安装`Kafuka`

  - 预先安装`JAVA`

    - `find / -name 'java'`（查看java安装路径）

  - 修改配置

    - ```
          1.打开config目录下的server.properties文件
          2.修改log.dirs=C:\lib\kafka\kafka-logs
          3.打开config目录下的zookeeper.properties文件
          4.修改dataDir=C:\lib\kafka\zookeeper-data
      ```

- 启动`kafka`

   ```shell
   //启动kafka内置的zookeeper
   bin\windows\zookeeper-server-start.bat config\zookeeper.properties
   -daemon 静默启动
   
   //kafka服务启动 ，成功不关闭页面
   .\bin\windows\kafka-server-start.bat .\config\server.properties
   ```
   
- 使用`kafka`

   ```
   # 创建topic测试主题kafka，成功不关闭页面
   .\bin\windows\kafka-topics.bat –create –zookeeper localhost:2181 –replication-factor 1 –partitions 1 –topic test
   
   [[创建生产者产生消息，不关闭页面]]
   .\bin\windows\kafka-console-producer.bat –broker-list localhost:9092 –topic test
   
   # 创建消费者接收消息，不关闭页面
   .\bin\windows\kafka-console-consumer.bat –bootstrap-server localhost:9092 –topic test –from-beginning
   ```
## 3. 它可以做什么

- 发布和订阅消息(流)，在这方面，它类似于一个消息队列。
- 以容错(故障转移)的方式存储消息(流)。
- 在消息流发生时处理它们。

## 4. `kafka`保证

生产者发送到一个特定的Topic的分区上，消息将会按照它们发送的顺序依次加入，也就是说，如果一个消息M1和M2使用相同的producer发送，M1先发送，那么M1将比M2的offset低，并且优先的出现在日志中。

消费者收到的消息也是此顺序。

如果一个Topic配置了复制因子（replication factor）为N， 那么可以允许N-1服务器宕机而不丢失任何已经提交（committed）的消息。

## 5. `Kafka`的优势？

- 构建实时流数据管道，可靠的获取系统和应用程序之间的数据。
- 构建实时流的应用程序，对数据流进行转换或反应。