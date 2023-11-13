const postsDb = require('../db/db')
const path = require("path");

//index
function index(req, res){
    res.format({
        html: ()=>{
            let htmlPost ='<ul>'
            
            for(elem of postsDb){
                htmlPost+= `
                    <li>${elem.title}</li>
                ` 
            }

            htmlPost+='</ul>'
            res.type('html').send(htmlPost)
        },
        json: () =>{
            res.send(postsDb)
        },
        default: ()=>{
            res.status(404).send('Richiesta formato non previto')
        }
    })
}

//show
function show(req, res){
    res.format({
        html: ()=>{
            const post = postsDb.find((post) =>post.slug == req.params.slug)
            let htmlPost = `
            <h1>${post.title}</h1>
            <p>${post.content}</p>
            <img src="/${post.image}">
            <ul>`
                for(let element of post.tags){

                    htmlPost+= `<li>#${element}</li>`
                }
            htmlPost+= `</ul>`
            
             
            res.send(htmlPost)
        },
        json: ()=>{
            const post = postsDb.find((posts) =>posts.slug == req.params.slug)
            res.send(post)
        },
        default: ()=>{
            res.status(404).send('Richiesta formato non previto')
        } 
    })
}

//create
function create(req, res){
    res.format({
        html: ()=>{
            res.send('<h1>Creazione nuovo post</h1>')
        },
        default: ()=>{
            res.status(406).send('Richiesta formato non previto')
        } 
    })
}

function downloadImage(req, res){
    res.download(__dirname + '/../public/' + req.params.slug + '.jpeg')
    
}

module.exports = {
    index,
    show,
    create,
    downloadImage
  }