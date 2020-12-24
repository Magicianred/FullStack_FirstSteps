const courseSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, //Requiring Name Built in validator
    minlength: 5,//Built in validator
    maxlength: 255,//Built in validator
    match: /regular expression/ //Built in validator
  }, 
  category: {
    type: String,
    required: true, //Built in validator
    enum: ["predefined category 1", "predefined category 2", "predefined category 3"]//Built in validator
  },
  author: String,
  tags: { 
    type: Array,
    validate: { //CUSTOM VALIDATOR
      isAsync: true, //ASYNC VALIDATOR Property
      validator: function (v, callback) { //For async also add a callback
        const result = v && v.length > 0; //if value sent has a value or has at least one item
        callback(result);
      },
      message: "A course should have at least one tag"
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { 
    type: Number,
    required: function(){ return this.isPublished; } //Built in validator
  }
});

async function createCourse() { 
  const course = new Course({ 
    // name: "Course One",
    author: "Author",
    tags: ["Tag 1", "Tag 2"],
    isPublished: true
  });
  //ERROR HANDLER for the requirement/validation for name required
  try {
    const result = await course.save();
    console.log(result);
  }
  catch (ex) { //exception
    console.log(ex.message);
  }
}
createCourse();