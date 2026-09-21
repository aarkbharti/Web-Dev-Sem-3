const express=require("express");
const morgan=require("morgan");
const app=express();
const port=3000;

app.use(morgan("dev"));

const logMiddleware=(req,res,next)=>{
    req.name="John Doe";
    console.log("Request url:",req.url,"req method:",req.method);
    console.log("Time:",new Date().toLocaleString());
    next();
};

const apiCheckMiddleware=(req,res,next)=>{
    if(req.query.API_KEY==="12345"){
        console.log("Authenticated");
        next();
    }else{
        res.send("API Invalid")
    }
};

app.use(logMiddleware);
app.use(apiCheckMiddleware);


app.get("/",(req,res)=>{
    console.log("Request name:",req.name);
    console.log("Hello World");
    res.send("Hello World");
});

app.get("/data",(req,res)=>{
    console.log("Hello Data");
    res.json({
        city:"New York",
        country:"USA",
        temp:"25C",
        humidity:"60%"
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}); 