// will this update?
function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    }
    else {
        no()
    }
}

function showYes() {
    alert('Agreed!')
}

function showNo() {
     alert('No!')
}

ask('Do you agree?', showYes, showNo);

// 
function ask2(q, y, n) {
    if (confirm(q)) {
        y()
    }
    else {
        n()
    }
}

// function declared in ask - anon
ask2(
    'You work?',
    function () {alert('Yes!')},
    function () {alert('No!')}
)