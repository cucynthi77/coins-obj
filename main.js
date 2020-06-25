let body = document.querySelector("body")

let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.round(Math.random())


        console.log(this.state)
    },
    toString: function () {
        if (this.state === 0) {
            return ("tails")
        } else {
            return ("heads")
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        let image = document.createElement('img');
        
        if (this.state === 0) {
            image.src = "https://img1.etsystatic.com/000/0/5860860/il_570xN.209815093.jpg";
        } else {
            image.src = "http://pective.com/m/half-dollar"

        }

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whehttp://pective.com/m/half-dollarther this.state is 0 or 1.*/
        return image;
    }
};

function display20Flips() {
    for (let i = 0; i < 20; i++) {
        coin.flip()
        body.append(coin.toString() + " ")
    }

}
display20Flips()

function display20Images() {
    for (let i = 0; i < 20; i++) {
        coin.flip()
        body.append(coin.toHTML())
    }
}
display20Images()