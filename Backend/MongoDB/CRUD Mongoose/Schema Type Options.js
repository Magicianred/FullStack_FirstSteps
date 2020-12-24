const courseSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    minlength: 5,
    maxlength: 255,
    match: /regular expression/
  }, 
  category: {
    type: String,
    required: true,
    enum: ["predefined category 1", "predefined category 2", "predefined category 3"],
    lowercase: true,  //type String property
    // uppercase: true,
    trim: true
  },
  author: String,
  tags: { 
    type: Array,
    validate: { 
      isAsync: true, 
      validator: function (v, callback) {
        const result = v && v.length > 0;
        callback(result);
      },
      message: "A course should have at least one tag"
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { 
    type: Number,
    required: function(){ return this.isPublished; },
    min: 10,
    max: 200,
    get: v => Math.round(v), //gets and set the value and rounds it
    set: v => Math.round(v)
  }
});

async function createCourse() { 
  const course = new Course({ 
    name: "Course One",
    author: "Author",
    tags: ["Tag 1", "Tag 2"],
    isPublished: true
  });
  try {
    const result = await course.save();
    console.log(result);
  }
  catch (ex) { 
    console.log(ex.message);
  }
}
createCourse();