const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const quoteRoute = require(`./routes/quoteRoute`);
const PORT = process.env.PORT || 5000;

app.use(express.static(`server/public`));
app.use(bodyParser.urlencoded({extended:true}));
app.use(`/quote`, quoteRoute);

app.listen(PORT, ()=>{
    console.log('server up on:', PORT);
})