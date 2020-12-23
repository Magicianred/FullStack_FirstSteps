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

async function createCourse() {
  //creating a class; compile the schema into a model
  const Course = mongoose.model("Course", courseSchema);
  const course = new Course({ 
    name: "Course One",
    author: "Author",
    tags: ["Tag 1", "Tag 2"],
    isPublished: true
  });
  //SAVING DOCUMENT
  const result = await course.save();//async operation, so it needs to be inside a function
}
createCourse();