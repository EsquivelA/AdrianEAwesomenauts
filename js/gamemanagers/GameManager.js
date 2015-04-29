game.ExperienceManager = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
        this.gameover = false;
    },
    update: function() {
        /**
         * If you  defeat the enemy base before they destroy yours, it will alert 
         * you that you have won and takee you to the Menu screen
         */
        if (game.data.win === true && !this.gameover) {
            this.gameOver(true);
            alert("YOU WIN!");
        /**
         * If they defeat your base before you destroy the enemy base, it will alert 
         * you that you have lost and takee you to the Menu screen
         */
        } else if (game.data.win === false && !this.gameover) {
            this.gameOver(false);
            alert("YOU LOSE!");
        }

        return true;
   },
    gameOver: function(win) {
        /**
         * If you win you will get 10 exp, but if you lose you will get 1 exp
         */
        if (win) {
            game.data.exp += 10;
        } else {
            game.data.exp += 1;
        }

        this.gameover = true;
        me.save.exp = game.data.exp;

        $.ajax({
            type: "POST",
            url: "php/controller/save-user.php",
            data: {
                exp: game.data.exp,
                exp1: game.data.exp1,
                exp2: game.data.exp2,
                exp3: game.data.exp3,
                exp4: game.data.exp4,
            },
            dataType: "text"
        })
                .success(function(response) {
                    if (response === "true") {
                        me.state.change(me.state.MENU);
                    } else {
                        alert(response);
                    }
                })
                .fail(function(response) {
                    alert("Fail");
                });
    }

});

