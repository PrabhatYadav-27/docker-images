import  Express  from "express";

const app = Express();

app.get('/', (req, res) => {
    res.json({ message: 'get endpoint' });

})

app.post('/', (req, res) => {
    res.json({ message: 'post endpoint' });
})


 app.listen(3000);