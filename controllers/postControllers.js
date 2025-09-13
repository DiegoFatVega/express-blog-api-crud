
function index (req, res){
    res.send(`Welcome to mi page`);
}

function show (req, res){
    res.send(`showing the Element`)
}

function store (req, res){
    res.send(`created a new element`);
}


function update (req, res){
    res.send(`updating the element`);
}

function modify (req, res){
    res.send(`partial update for the Element`);
}

function destroy (req, res){
    res.send(`deleting the element`);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}