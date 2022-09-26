//declare port and enable express to parse json 
const express = require('express');
const app = express();
const PORT = 8080;
app.use( express.json() )



/* Now I want to add a get an endpoint to the shirt urlby passing shirt as its first argument to 
automatically set up the server with that endpoint.
To handle a request to it bypassing a callback function as thesecond argument whenever a user requests 
that url it will use this callback function to handle the request the function itself provides access to
two different objects the req(uest) objectand the res(ponse) object which allows us to send a response 
back to the user that response will have a status code 200 then we can send a data payload along */
app.get('/shirt', (req, res) => 
    {
        res.status(200).send
        (   
            {
                shirt: '👕',
                size: 'large'
            }
         )
    }
);

/* the request object in express allows access to information from the request message like the url
the body the headers etc and now that information could use it to save a new record to the database*/
app.post('/shirt/:id', (req, res) => 
{
    const { id } = req.params;
    const { logo } = req.body;
    /* check to make sure that we have a logo in the request body and if no send an error if we do have 
    a valid logo send a response with a shirt that contains that logo*/
    if (!logo) {
        res.status(418).send({ message: 'logo required!'})
    }

    res.send({
        shirt: `👕 with your ${logo}`,
    });
}
);