//QUERY PERFORMANCE vs CONSISTENCY

//Using References (Normalization) --> CONSISTENCY
let author = {
  name: "Author 1"
}

let course = {
  author: "id"
}

//Using Embedded Documents (Denormalization) --> PERFORMANCE
let course = {
  author: {
    name: "Author 1"
  }
}

//HYBRID Approach --> Useful for snapshot of data, like in e-commerce
let author = {
  name: "Author 1"
  //50 other properties
}

let course = {
  author: { //Can choose to store only some properties
    id: "ref to author document",
    name: "Author 1"
  }
}