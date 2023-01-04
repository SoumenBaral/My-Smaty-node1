const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello from node node node mode  personal js with auto restart')
})
const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888889' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01788888889' },
    { id: 3, name: 'Moushumi', email: 'Moushumi@gmail.com', phone: '01788888889' },
    { id: 4, name: 'Porimoni', email: 'Porimoni@gmail.com', phone: '01788888889' },
    { id: 5, name: 'Dilder', email: 'Dilder@gmail.com', phone: '01788888889' },
    { id: 6, name: 'Joshim', email: 'Joshim@gmail.com', phone: '01788888889' },
    { id: 7, name: 'bappaRaj', email: 'bappaRaj@gmail.com', phone: '01788888889' },
]
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})
app.get('/users', (req, res) => {
    //filter By Search Query Para meter
    if (req.query.name) {
        const Search = req.query.name.toLowerCase()
        const Matched = users.filter(user => user?.name.toLowerCase().includes(Search))
        res.send(Matched)
    }
    else {
        res.send(users)
    }

    console.log(req.query);
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange', 'Banana', 'pineapple', 'guava'])
})
app.listen(port, () => {
    console.log('is it Worked listening to port ', port);
})
