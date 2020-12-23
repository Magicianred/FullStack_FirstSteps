async function removeCourses(id) {
  const result = await Course.deleteOne({ _id:id });
  //OR
  const result = await Course.deleteMany({ _id:id });//returns a result with the number os documents that were deleted
  //To get the document that was deleted
  const course = awaitCourse.findByIdAndRemove(id);
}

removeCourses();