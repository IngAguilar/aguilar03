const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello new World 2');
})

export default {  
        data(){
            return{
                displayPodName:""
        }
    },
    mounted(){
        this.displayPodName=process.env.HOSTNAME
      app.get('/', (req, res) => {
        res.send(process.env.HOSTNAME);
})
        
     }
}

module.exports = app;
