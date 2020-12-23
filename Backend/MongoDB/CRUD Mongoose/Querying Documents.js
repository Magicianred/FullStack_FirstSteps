async function getCourses() {
  const courses = await Course
    .find({ author: "Author", isPublished: true })
    .limit(10)
    .sort({ name:1 })
    .select({ name:1, tags:1});
}

getCourses();

//COMPARISON QUERY OPERATORS

// eq = equal
// ne = not equal
// gt = greater than
//gte = greater than or equal to
// lt = less than
//lte = less than or equal to
// in 
//nin = not in  
// .find({ price: { $gt: 10, $lte: 20 } })
// .find({ price: { $in: [10, 15, 20] } })
//----------------------------------------------------------------

//LOGICAL QUERY OPERATORS

// or
// and

// .find()
// .or([ { author: "Author" }, { isPublished: true }])
// .and( [] ) array of filter objects
//----------------------------------------------------------------

//REGULAR EXPRESSIONS (search on JavaScript regular expressions)

// Starts with "Author"
// .find({ author: /^Author/ }) doesn't matter whats after

//Ends with
// .find({ author: /Author$/ }) CASE SENSITIVE
// .find({ author: /Author$/i }) case insensitive

//Contains
// .find({ author: /.*Author.*/ })
