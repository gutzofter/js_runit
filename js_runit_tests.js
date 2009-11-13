should('pass').test = function() {
    this.is(true, "A Passing Test");
}

should('isEqual').test = function() {
    this.isEqual(1, 1, "A Passing Test");
}

should('isTrue').test = function() {
    this.isTrue(true, "A Passing Test");
}


//failing tests
should('is').test = function() {
    this.is(null, "failed is");
}

should('isEqual').test = function() {
    this.isEqual(1, 2, "failed isEqual");
}

should('isTrue').test = function() {
    this.isTrue(false, "failed isTrue");
}

should('exception').test = function() {
    this.is(noFunction(), "error");
}

