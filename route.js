var express = require('express');
var movie = require('./model/movie')
var route = express.Router();


route.get('/movie',async(req,res)=>{
  var imovie = await movie.find();
  res.send(imovie);

})
route.post("/movie",async(req,res)=>{
  const imovie = new movie({
    name:req.body.name,
    rating:req.body.rating
  })
  console.log(imovie)
  await imovie.save((err,msg)=>{
    if(err){
      res.status(500).json({
          "error":err
      })
  }
  else{
      res.status(200).json({
          "My-message":msg
      })
  }
  })
})
module.exports = route;