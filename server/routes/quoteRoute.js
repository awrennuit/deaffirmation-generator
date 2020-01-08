const quoteRoute = require(`express`).Router();
const pool = require(`../modules/pool`);

quoteRoute.get(`/`, (req, res)=>{
    let SQLquery = `SELECT * FROM quotes ORDER BY random() LIMIT 1;`;
    pool.query(SQLquery)
    .then(result=>{
        res.send(result.rows);
    })
    .catch(error=>{
        console.log('ERROR GETTING QUOTE ------------------->', error);
        res.sendStatus(500);
    });
});

quoteRoute.get(`/bg`, (req, res)=>{
    let SQLquery = `SELECT * FROM images ORDER BY random() LIMIT 1;`;
    pool.query(SQLquery)
    .then(result=>{
        res.send(result.rows);
    })
    .catch(error=>{
        console.log('ERROR GETTING QUOTE ------------------->', error);
        res.sendStatus(500);
    });
});

module.exports = quoteRoute;