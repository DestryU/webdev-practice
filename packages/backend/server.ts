const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {createClient} =  require('@supabase/supabase-js')

const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())

const supabase = createClient(
    "https://bwhfxnnosllijimjlnff.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3aGZ4bm5vc2xsaWppbWpsbmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5MzYxNTUsImV4cCI6MjA1MTUxMjE1NX0.g0EztNalkaXTk_LVuoX1_CbucYsp67t8MIDhf5EnzYI"
)

app.post('/add-adventure', async (req, res) => {
    const {raceName, className, description} = req.body

    const {data, error} = await supabase
    .from('adventurers')
    .insert([
        {
            raceName,
            className,
            description
        }
    ])
    if (error) {
        return res.status(500).json({message: 'Error inserting adventure', error})
    }
    return res.status(200).json({ message: 'Adventure added!', data})
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})