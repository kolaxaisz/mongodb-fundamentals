use('mongodb-fundamentals-db');

db.ch01BlogsCollection.insertOne(
  {
    username: "Zakaria",
    noOfBlogs: 100,
    tags: ["science", "fiction"]
  }
)