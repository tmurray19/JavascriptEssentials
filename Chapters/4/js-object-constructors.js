function Course(title, instructor, level, published, views) {
    // this.title = "JavaScript Essential Training";
    // this.instructor = "Morten Rand-Hendriksen";
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    }
}


var courses = [
    new Course("Taidgh Murray", "Studying JavaScript", 1, false, 0),
    new Course("Taidgh Murray", "Writing succint Python", 3, true, 3)
];

console.log(courses);
console.log(courses[0].updateViews());
console.log(courses[1]);


/*
Accesing properties in Objects

course.title = course["title"]

e.g WP:image

course.WP:image -> Will throw an error
course["wP:image"] -> legal code

*/
