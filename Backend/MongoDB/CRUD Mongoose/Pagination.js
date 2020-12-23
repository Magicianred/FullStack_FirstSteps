async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course
    .find({ author: "Author", isPublished: true })
    .skip((pageNumber - 1) * pageSize)//Need to skip all the documents of the previous page
    .limit(pageSize)
    .sort({ name:1 })
    .select({ name:1, tags:1});
}

getCourses();