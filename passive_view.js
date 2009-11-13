var controller;

function newView() {
    var View = new Object();

    View.insertInnerHTML = function(id, html) {
        document.getElementById(id).innerHTML = html;
    }

    View.changeDisplayStyle = function(id, style) {
        document.getElementById(id).style.display = style;
    }

    return View;
}

var linkHTML = function(label) {
    return '<a href="#" onclick = "controller.click(); return false;">' + label + '</a>';
}

function newBBOM_ContactsViewController(dom) {
    var Controller = new Object();

    Controller.dom = dom;
    Controller.isShow = true;

    Controller.click = function() {
        if(this.isShow){
            this.changeContactsDisplay(actions.show);
            this.isShow = false;
        }
        else {
            this.changeContactsDisplay(actions.hide);
            this.isShow = true;
        }
    }

    Controller.changeContactsDisplay = function(action) {
        this.dom.insertInnerHTML(action.control, linkHTML(action.label));
        this.dom.changeDisplayStyle(action.list, action.style);
    }

    Controller.click();

    return Controller;
}

var control = 'contacts-toggle';
var list = 'contacts';

var actions =
    {
        hide: {
            label: 'show',
            control: control,
            list: list,
            style: 'none'
    },
        show: {
            label: 'hide',
            control: control,
            list: list,
            style: 'block'
    }
};

function init() {

    controller = newBBOM_ContactsViewController(newView());
}

window.onload = init;
