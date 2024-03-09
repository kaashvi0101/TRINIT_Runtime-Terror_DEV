const express=require('express');
const app=express();

app.set("view engine","ejs");
app.use(express.static("./public"))
//middleware
app.use(function(req,res,next ){
    next();
});

app.get('/login',function(req,res){
    res.render("login");
})


app.listen(3000)