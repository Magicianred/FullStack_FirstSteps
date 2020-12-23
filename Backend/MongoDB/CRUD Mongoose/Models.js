const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/nameOfDatabase")//this returns a promisse
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

  const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
  });

//creating a class; compile the schema into a model
const Course = mongoose.model("Course", courseSchema);//Singular name of the collection and the schema that forms the collection
const course = new Course({ //creating object based on the class
  name: "Course One",
  author: "Author",
  tags: ["Tag 1", "Tag 2"],
  isPublished: true
});