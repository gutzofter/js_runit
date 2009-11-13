function newMockView() {
    var View = new Object();

    View.action = null;

    View.getAction = function() {
        return this.action;
    }

    View.changeContactsDisplay = function(action) { this.action = action; }

    return View;
}

function newFakeDOM() {
    var DOM = new Object();

    DOM.innerIdName = '';
    DOM.dispIdName = '';
    DOM.htmlText = '';
    DOM.displayStyleCmd = '';

    DOM.insertInnerHTML = function(idName, htmlText) {
        this.innerIdName = idName;
        this.htmlText = htmlText;
    }

    DOM.changeDisplayStyle = function(idName, displayStyleCmd) {
        this.dispIdName = idName;
        this.displayStyleCmd = displayStyleCmd;
    }


    return DOM;
}

