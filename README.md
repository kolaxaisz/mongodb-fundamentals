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





## Chapter 2. - Documents and Data Types

### 2.1. - Introduction

- We want to build **lightweight and flexible** applications that can quickly 
adapt to these new requirements and ship them to production as quickly as 
possible. 
- We want our databases to become agile so that they can adapt to 
the ever-changing needs of our applications, 
  - reduce downtime,   
  - scale out easily, 
  - and perform efficiently. 

MongoDB is a perfect fit for all such needs.


### 2.2. - Introduction to JSON

JSON is a full-text, lightweight format for data representation and 
transportation. JavaScript's simple representation of objects gave birth 
to JSON.

JSON offers a human-readable, plain-text way of representing data. In 
comparison to XML, where information is wrapped inside tags, and lots of 
tags make it look bulky, JSON offers a compact and natural format where you 
can easily focus on the information.

On the other hand, JSON does not have any schema definition, and JSON 
parsers only need to deal with opening and closing brackets and colons.

When two systems, written in two different programming languages, want to 
exchange data, they need to have a mutually agreed standard for 
representing information. JSON provides that standard with its lightweight format. 

One of the major reasons for the wide acceptance of JSON is its 
language-independent format. 

- <https://jsonlint.com/>

### 2.3. - BSON

Internally, MongoDB documents are stored in a binary format called BSON.

- BSON documents are designed to be more efficient than JSON as they occupy 
  less space and provide faster traversal.
- With each document, BSON stores some meta-information, such as the length 
  of the fields or the length of the sub-documents. The meta-information 
  makes the document parsing, as well as traversing, faster.
- BSON documents have ordered arrays. Each element in an array is prefixed by 
  its index position and can be accessed using its index number.
- BSON provides many additional data types, such as dates, integers, doubles, 
  byte arrays, and more. 


### 2.4. - MongoDB Documents

A MongoDB database is composed of collections and documents.

- Collections are analogous to tables and 
- documents are analogous to rows within a table. 

However, documents are much more flexible compared with the rows in a table.

RDBMSes consist of a tabular data model that comprises rows and columns. 
However, your applications may need to support more complex data structures,
such as a nested object or a collection of objects. Tabular databases 
restrict the storage of such complex data structures. In such cases, you 
will have to split your data into multiple tables and change the 
application's object structures accordingly. On the other hand, the 
document-based data model of MongoDB allows your application to store and 
retrieve more complex object structures due to the flexible JSON-like 
format of the documents.

1.  The documents provide a flexible and natural way of representing data. 
    The data can be stored as is, without having to transform it into a 
    database structure.
   
2.  The objects, nested objects, and arrays that are within a document are 
    easily relatable to your programming language's object structure.
   
3.  With the ability of a flexible schema, the documents are agile in 
    practice. They continuously integrate with application changes and new 
    features without any major schema changes or downtimes.
   
4. Documents are self-contained pieces of data. They avoid the need to read 
   multiple relational tables and table-joins to understand a complete unit 
   of information.
   
5. The documents are extensible. You can use documents to store the entire 
   object structure, use it as a map or a dictionary, as a key-value pair 
   for quick lookup, or have a flat structure that resembles a relational 
   table.


In MongoDB documents, a non-existent field is always considered `null`.

Documents can incorporate changes on the go without any downtime.


### 2.5. - MongoDB Data Types

Using the right data types in your documents is very important as correct 
data types help you 
- use the database features more effectively, 
- avoid data corruption, and 
- improve data usability.

---

- **Strings**

  In JSON, a value that is wrapped in double quotes is considered a string. 

---

- **Numbers**

  A JSON document does not specify whether a number is an integer, a float, 
  or long.

  MongoDB supports the following types of numbers:
  - _double_: 64-bit floating point
  - _int_: 32-bit signed integer
  - _long_: 64-bit unsigned integer
  - _decimal_: 128-bit floating point – which is IEE 754-compliant

  _NumberInt_: The NumberInt constructor can be used if you want the number 
  to be saved as a 32-bit integer and not as a 64-bit float.

  ```js
  var plainNum = 1299
  var explicitInt = NumberInt("1299")
  var explicitInt_double = NumberInt(1299)
  ```
  
  _NumberLong_:

  ```js
  var explicitLong = NumberLong("777888222116643")
  var explicitLong_double = NumberLong(444333222111242)
  ```

  _NumberDecimal_:

  ```js
  var explicitDecimal = NumberDecimal("142.42")
  var explicitDecimal_double = NumberDecimal(142.42)
  ```
---

- **Boolean**

---

- **Objects**

  
### 2.6. - Exercise 2.02: Creating Nested Objects

```json
{
    "id": 14253,
    "Title": "Beauty and the Beast",
    "year": 2016,
    "language": "English",
    "genre": "Romance",
    "director": "Christophe Gans",
    "runtime": 112,
    "imdb": {
        "rating": 6.4,
        "votes": "17762"
    },
    "tomatoes": {
        "viewer": {
            "rating": 3.9,
            "votes": 238
        },
        "critic": {
            "rating": 4.2,
            "votes": 8
        },
        "fresh": 96,
        "rotten": 7
    }
}
```
---

- **Arrays**

  ```js
  var doc = {
    first_array: [4,3,2,1]
  }
  
  doc.first_array[3]
  doc.first_array[4] = 99
  doc.first_array[5] = [11,12]
  doc.first_array
  ```
  
### 2.7. - Exercise 2.03: Using Array Fields

```json
{
    "id": 14253,
    "Title": "Beauty and the Beast",
    "year": 2016,
    "language": "English",
    "genre": "Romance",
    "director": "Christophe Gans",
    "runtime": 112,
    "imdb": {
        "rating": 6.4,
        "votes": "17762"
    },
    "tomatoes": {
        "viewer": {
            "rating": 3.9,
            "votes": 238
        },
        "critic": {
            "rating": 4.2,
            "votes": 8
        },
        "fresh": 96,
        "rotten": 7
    },
    "comments": [
        {
            "name": "Talisa Maegyr",
            "email": "oona_chaplin@gameofthron.es",
            "text": "Rem itaque ad sit rem voluptatibus. Ad fugiat...",
            "date": "1998-08-22T11:45:03.000+00:00"
        },
        {
            "name": "Melisandre",
            "email": "carice_van_houten@gameofthron.es",
            "text": "Perspiciatis non debitis magnam. Voluptate...",
            "date": "1974-06-22T07:31:47.000+00:00"
        }
    ]
}
```
---

- **NULL**

Null is a special data type in a document and denotes a field that does not 
contain a value. The null field can have only null as the value.

---

- **ObjectId**

Every document in a collection must have an _`id` that contains a unique 
value. This field acts as a p*rimary key* to these documents. The primary 
keys are used to _uniquely identify the documents_, and they are always indexed. 

If you insert a document without an _`id` field, the MongoDB driver will 
autogenerate a unique ID and add it to the document. 

The `ObjectId` value is designed to generate lightweight code that is unique 
across different machines. It generates
- a unique value of 12 bytes, where
  - the first 4 bytes represent the timestamp, 
  - bytes 5 to 9 represent a random value, and 
  - the last 3 bytes are an incremental counter.

---

- **Dates**

The MongoDB dates are stored in the form of _milliseconds since the Unix 
epoch, which is January 1, 1970_. To store the millisecond's representation 
of a date, MongoDB uses a **64-bit integer (long)**. Because of this, the date 
fields have a range of around +/-290 million years since the Unix epoch. 

One thing to note is that all dates are **stored in UTC**, and there is **no time 
zone associated with them**.

While working on the mongo shell, you can create Date instances using 
- `Date()`
- `new Date()`, or 
- `new ISODate()`

---

- **Timestamps**

---

- **Binary Data**

Binary data, also called BinData, is a BSON data type for storing data that 
exists in a binary format.

### 2.8. - Limits and Restrictions on Documents

A document with too much information is bad in many ways. For this reason, 
MongoDB puts a limit of 16 MB on the size of every document in the collection.

A MongoDB BSON document supports nesting up to 100 levels, which is more 
than enough. 

### 2.9. - Exercise 2.04: Loading Data into an Atlas Cluster

...


### 2.10 - Activity 2.01: Modeling a Tweet into a JSON Document

```json
{
    "id": 1,
    "created_at": "Sun Apr 17 16:29:24 +0000 2011",
    "user": {
        "id": "Lord_Of_Winterfell",
        "name": "Office of Ned Stark",
        "profile_pic": "https://user.profile.pic",
        "isVerified": true
    },
    "text": "Tweeps in the #north. The long nights are upon us. Do stock enough warm clothes, meat and mead…",
    "hashtags": [
        "north",
        "WinterfellCares",
        "flueshots"
    ],
    "mentions": [
        "MaesterLuwin",
        "TheNedStark",
        "CatelynTheCat"
    ],
    "likes_count": 14925,
    "retweet_count": 12165,
    "comments_count": 0
}
```

### Summary

