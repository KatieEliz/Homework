var song = {  //Declares a varibale named song
    name: "Walk This Way",  //Defines name as walk this way
    artist: "Run-D.M.C",   
    minutes: 4,
    seconds: 3,
    genre: "80's",
    playing: false,  //Indicates if currenlty playing or not, it is initally set to false

    play: function() {   //
        if (!this.playing) {
            this.playing = true;
            console.log("Playing " + this.name + " by "  + this.artist);
        }
    },

    pause: function() {
        if (this.playing) {
            this.playing = false;
        }
    }


};
song.play();
song.pause();