# MongoDB Fundamentals

## Chapter 1. - Introduction to MongoDB

### 1.1. - Introduction

---

MongoDB is one of the most established NoSQL databases, with features such
as:

- data aggregation,
- ACID (Atomicity, Consistency, Isolation, Durability)
- transactions,
- horizontal scaling, and
- Charts

---

### 1.2. - Database Management Systems

A **Database Management System (DBMS)** provides the ability to store and
retrieve data. It uses query languages to create, update, delete, and retrieve
data.

- **Relational Database Management Systems (RDBMS)** are used to store
  structured data. The data is stored in the form of tables that consist of rows
  and columns. The tables can have relationships with other tables to depict the
  actual data relationships.
- **NoSQL Database Management Systems** were invented to solve the problem
  of storing unstructured and semi-structured data. NoSQL databases allow you to
  store the data without a schema and also support dynamic schema, which
  decouples the clients from a rigid schema

#### Comparision

> **Figure 1.1**: Differences between relational databases and NoSQL

|            Feature             |                                                                                                                  Relational Database                                                                                                                   |                                                                                                                                   NoSQL Database                                                                                                                                    |
|:------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|             Schema             |                               Follows a rigid schema.  The database tables should have a definition of all the desired columns and their types. Any data manipulation that deviates from the schema generates an error.                                |                                                                  Does not impose a rigid schema and allows you to store the unstructured data with dynamiy structures. This allows an evolving database structure.                                                                  |
| Data model / Storage Structure |                                      The data is stored in tables. Each record is stored as a row that contains information about all the columns. Changing a table can affect the other tables and applications.                                      | The data is stored in different formats, depending on the provider. The standard storage structures are documents, graphs, key-values, and wide columns. There is no alteration required as the database adapts to the dynamic nature of data and the application works seamlessly. |
|         Normalization          | Normalization is the process used to remove duplicate data and avoid data anomalies. A relational database prevents data anomalies, using normalization. It requires the data to be stored in different tables and to create relationships among them. |                                                                                                NoSQL databases focus more on fast data retrieval, and the data can be denormalized.                                                                                                 |
|            Scaling             |               Scaling is the ability of a database to grow or reduce in size, depending on the need. Relational databases are hard to scale and are generally scaled vertically, which means increasing the machine compute and storage.               |                                                                NoSQL databases provide both vertical and horizontal scaling. In horizontal scaling, the data can be distributed across different machines/clusters.                                                                 |

### 1.3. - Introduction to MongoDB

- **Flexible and Dynamic Schema**: MongoDB allows a flexible schema for your
  database. A flexible schema allows variance in fields in different documents.
  In simple terms, each record in the database may or may not have the same
  number of attributes. It addresses the need for storing evolving data without
  making any changes to the schema itself.
- **Rich Query Language**: MongoDB supports intuitive and rich query language,
  which means simple yet powerful queries. It comes with a rich aggregation
  framework that allows you to group and filter data as required. It also has
  built-in support for general-purpose text search and specific purposes like
  geospatial searches.
- **Multi-Document ACID Transactions**: **Atomicity, Consistency, Integrity, and
  Durability (ACID)** are features that allow your data to be stored and updated
  to maintain its accuracy. Transactions are used to combine operations that are
  required to be executed together. MongoDB supports ACID in a single document
  and multi-document transactions.
- **Atomicity** means all or nothing, which means either all operations are
  a part of a transaction as it happens or none of them are. This means that
  if one of the operations fails, then all the executed operations are
  rolled back to leave the data affected by transaction operation in the  
  state it was in before the transaction started.
- **Consistency** in a transaction means keeping the data consistent as per
  the rules defined for the database. If a transaction breaks any database  
  consistency rules, then it must be rolled back.
- **Isolation** enforces running transactions in isolation, which means that
  the transactions do not partially commit the data and any values outside
  the transactions change only after all the operations are executed and are
  fully committed.
- **Durability** ensures that the changes are committed by the transaction.  
  So, if a transaction has executed then the database will ensure the
  changes are committed even if there is a system crash.
- **High Performance**: MongoDB provides high performance using embedded
  data models to reduce disk I/O usage. Also, extensive support for
  indexing on different kinds of data makes queries faster. Indexing is a
  mechanism to maintain relevant data pointers in an index just like an
  index in a book.
- **High Availability**: MongoDB supports distributed clusters with a
  minimum of three nodes. A cluster refers to a database deployment that
  uses multiple nodes/machines for data storage and retrieval. Failovers
  are automatic, and data is replicated on secondary nodes asynchronously.
- **Scalability**: MongoDB provides a way to scale your databases
  horizontally across hundreds of nodes. So, for all your big data needs,
  MongoDB is the perfect solution.

### 1.4. - The MongoDB Deployment Model

1. **Standalone**,

   - mainly for development or experimental purposes

2. **Replica Set**,

   - group of processes or servers that work together to provide
     data redundancy and high availability.
   - The data copies are stored on multiple servers.
   - It requires at least three servers in a cluster.
   - These servers are configured as the _primary_, _secondaries_, or
     _arbiters_.

3. **Sharded**,

   - allow you to store the data in a distributed way.
   - They are required for applications that manage massive data and expect high
     throughput.
   - A shard contains a subset of the data, and each shard must use a replica set
     to provide redundancy of the data that it holds.
   - Multiple shards working together provide a distributed and replicated
     dataset.

### 1.5. - Managing MongoDB

1. Self-Managed
2. Managed Service: Database as a Service
   

### 1.6. - MongoDB Atlas

It allows you to provision a database on the cloud as a service, which can 
be used for your applications from anywhere.

1. Simple Setup
2. Guaranteed Availability
3. Global Presence
4. Optimal Performance
5. Highly Secured
6. Automated Backups

### 1.7.- Exercise 1.01: Setting Up a MongoDB Atlas Account

### 1.8.- Exercise 1.02: Setting Up a MongoDB Atlas Organization

A MongoDB Atlas organization is the top-level entity in your account, containing other elements such as projects, clusters, and users. You need to set up an organization first before any other resources.

### 1.9.- Exercise 1.03: Creating a MongoDB Atlas Project

A project provides a grouping of clusters and users for a specific purpose;  
for example, you would like to segregate your lab, demo, and production 
environments. Similarly, you may like a different network, region, and user 
setup for different environments. Projects allow you to do this grouping as 
per your own organizational needs. 

### 1.10. - Exercise 1.04: Setting Up Your First Free MongoDB Cluster on Atlas

<https://cloud.mongodb.com/v2#/clusters>

A MongoDB cluster is the term used for a database replica set or shared 
deployments in MongoDB Atlas. A cluster is a distributed set of servers 
used for data storage and retrieval. A MongoDB cluster, at the minimum 
level, is a three-node replica set. In a sharded environment, a single 
cluster may contain hundreds of nodes/servers containing different replica 
sets with each replica set comprised of at least three nodes/servers.

### 1.11. - Connecting to Your MongoDB Atlas Cluster

- <https://account.mongodb.com/account/login>

### 1.12. - MongoDB Elements

Databases are basically aggregations of collections, which in turn, are 
made up of documents. A document is the basic building block in MongoDB 
and contains information about the various fields in a key-value format.

1. **Documents**

    A document is a collection of field names and values, structured in a 
    JavaScript Object Notation (JSON)-like format.

1. **Collections**

    Documents are stored in collections. Collections are analogous to tables 
    in relational databases. You need to use the collection name in your 
    queries for operations such as insert, retrieve, delete, and so on.  A 
    database is a container for collections grouped together.

### 1.13. - Creating a Database

- <https://www.mongodb.com/docs/v5.0/reference/method/db.createCollection/>
 
```shell
use myDatabase
```

### 1.14. - Creating a Collection

```shell
db.createCollection( 'myCappedCollection',
{
     capped: true,
     size: 256,
     max: 5
})


// ---

db.createCollection('myFirstCollection')
```

You do not need to create a collection before inserting documents. MongoDB 
creates a collection if it does not exist on the first document insertion. 

```shell
use ('mongodb-fundamentals-db');

db.ch01Collection.insertOne({
    "name" : "Yahya A", 
    "company" : "Sony"
    });
```

- <https://www.mongodb.com/docs/v5.0/reference/method/db.collection.insertOne/>

The `insertOne` command is used to insert one document at a time, as in the 
following syntax:

```shell
db.ch01BlogsCollection.insertOne(
  {
    username: "Zakaria", 
    noOfBlogs: 100, 
    tags: ["science","fiction"]
  }
)
```

Inserting multiple documents:

- <https://www.mongodb.com/docs/v5.0/reference/method/db.collection.insertMany/>

```shell
db.ch01BlogsCollection.insertMany([
  { username: "Thaha", noOfBlogs: 200, tags: ["science", "robotics"]},
  { username: "Thayebbah", noOfBlogs: 500, tags: ["cooking", "general knowledge"]},
  { username: "Thaherah", noOfBlogs: 50, tags: ["beauty", "arts"]}
])
```

Fetching Documents from MongoDB:

- <https://www.mongodb.com/docs/v5.0/reference/method/db.collection.find/>

`db.collection.find(query, projection)`

db.ch01BlogsCollection.find()

Formatting the find Output Using the `pretty()` method:

- <https://www.mongodb.com/docs/v5.0/reference/method/cursor.pretty/#mongodb-method-cursor.pretty>

`db.records.find().pretty()`

### Activity 1.01: Setting Up a Movies Database



