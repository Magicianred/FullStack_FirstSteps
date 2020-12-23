async function updateCourse(id) {
  //Approach Query First
  //findByID()
  const course = Course.findById(id);
  if (!course) return;
  
  //Modify its properties
  course.isPublished = true;
  course.author = "Author 2";
  //Or pass through set method
  course.set({
    isPublished: true,
    author = "Author 2"
  });
  //save()
  const result = await course.save();
  //----------------------------------------------------------------

  //Approach UPDATE First DIRECTLY ON THE DATABASE
  //Update directly
  const result = await Course.update({ _id: id }, {
    //MongoDB Update operators
    $set: {
      isPublished: false,
      author = "Author 2"
    }
  });
  //Optionally get the updated document
  //------------------------------------------------
  //Getting the document that was updated
  const course = await Course.findByIdAndUpdate(id, {
    //MongoDB Update operators
    $set: {
      isPublished: true,
      author = "Author 3"
    }
  }, { new: true });//This will get the updated document
}

updateCourse();