async function getCourses() {
  const courses = await Course
    .find({ author: "Author", isPublished: true })
    .limit(10)
    .sort({ name:1 })
    .count(); //COUNTS THE NUMBER OF DOCUMENTS THAT MATCH THE FILTER
}

getCourses();