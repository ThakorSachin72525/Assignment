const express = require("express")
const app = express()
const PORT = 3000;

app.get('/', (req, res)=> {
    res.json({msg: "I am homepage"})
})
app.get('/about', (req, res)=> {
    res.json({msg: "I am aboutpage"})
})
app.get('/contact', (req, res)=> {
    res.json({msg: "support@pwskills.com"})
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})