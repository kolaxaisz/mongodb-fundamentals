use('mongodb-fundamentals-db');

db.ch01BlogsCollection.insertMany([
  { username: "Thaha", noOfBlogs: 200, tags: ["science", "robotics"] },
  { username: "Thayebbah", noOfBlogs: 500, tags: ["cooking", "general knowledge"] },
  { username: "Thaherah", noOfBlogs: 50, tags: ["beauty", "arts"] }
])