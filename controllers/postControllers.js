const posts = require(`../data/posts`);

function index (req, res){
    res.send(`Welcome to mi page`);
}

function show (req, res){
    //res.send(`showing the Element`)
    // devo cercare un elemento e visualizzarlo, possom usare il find per trovarlo
    const {id} = req.params
    const post = posts.find(item => item.id === parseInt(id));
    
    if(!post){
        res.status(404).json({
            error: true,
            message: 'Resource not found'
            
        })
    }
    res.json(post);
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
    //res.send(`deleting the element`);
    const {id} = req.params
    const post = posts.find(item => item.id === parseInt(id));

     if(!post){
        res.status(404).json({
            error: true,
            message: 'Resource not found'
            
        })
    }
    posts.splice(posts.indexOf(post),1);
    res.sendStatus(204);
    console.log(posts);

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}