const postsDb = require('../db/db')


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

function show(req, res){
    res.format({
        html: ()=>{

        },
        json: ()=>{
            res.send()
        } 
    })
}

module.exports = {
    index,
    show
  }