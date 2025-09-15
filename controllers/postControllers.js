const posts = require(`../data/posts`);

function index (req, res){
    //res.send(`Welcome to mi page`);
 console.log(req.query.id)
    let filtered_post = posts;

    if(req.query.id){
        filtered_post = posts.filter( post => post.id === parseInt(req.query.id));
    }
    res.json(filtered_post); 
}

function show (req, res){
    //res.send(`showing the Element`)
    // devo cercare un elemento e visualizzarlo, possom usare il find per trovarlo
    const {id} = req.params
    const post = posts.find(item => item.id === parseInt(id));
    
    if(!post){
        return res.status(404).json({
            error: true,
            message: 'Resource not found'
            
        })
    }
    res.json(post);
}

function store (req, res){
    //res.send(`created a new element`);
    console.log(req.body)

    const newId = posts[posts.length - 1].id + 1; //incremento l`id per poter aggiungere un oggetto

    const newPost ={
        id: newId,
        title: req.body.title,
        content: req.body.content,
        img: req.body.img,
        tags: req.body.tags
    }
    
    posts.push(newPost);
    console.log(posts);

    res.status(201);
    res.json(newPost)
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
        return res.status(404).json({ //usa il return per far si che non compaia un errore in console, dato che senza il return, il programma segue il flusso e invia due risposte
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