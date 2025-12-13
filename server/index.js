require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { v4: uuidv4 } = require('uuid')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// Mock data
let users = [
  { id: '1', name: 'Alice', email: 'alice@example.com' },
  { id: '2', name: 'Bob', email: 'bob@example.com' }
]

let posts = [
  { id: '1', title: 'Hello World', content: 'First post', userId: '1' },
  { id: '2', title: 'WeChat Demo', content: 'Mini program demo', userId: '2' }
]

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok', env: process.env.NODE_ENV }))

// Users API
app.get('/api/users', (req, res) => res.json(users))
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id)
  user ? res.json(user) : res.status(404).json({ error: 'Not found' })
})
app.post('/api/users', (req, res) => {
  const user = { id: uuidv4(), ...req.body }
  users.push(user)
  res.status(201).json(user)
})

// Posts API
app.get('/api/posts', (req, res) => res.json(posts))
app.get('/api/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id)
  post ? res.json(post) : res.status(404).json({ error: 'Not found' })
})
app.post('/api/posts', (req, res) => {
  const post = { id: uuidv4(), ...req.body }
  posts.push(post)
  res.status(201).json(post)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT} [${process.env.NODE_ENV}]`))
