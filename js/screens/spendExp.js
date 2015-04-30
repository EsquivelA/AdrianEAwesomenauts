game.SpendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('exp-screen')), -10); // TODO
                /**
                 * These binds the buttons  
                 */
                me.input.bindKey(me.input.KEY.F1, "F1");
                me.input.bindKey(me.input.KEY.F2, "F2");
                me.input.bindKey(me.input.KEY.F3, "F3");
                me.input.bindKey(me.input.KEY.F4, "F4");
                me.input.bindKey(me.input.KEY.F5, "F5");
                /**
                 * This is for the cost for exp skills and adds 10 after evrytime 
                 * you level up
                 */
                console.log(game.data.exp1);
                console.log(Number(game.data.exp1) + 1);
                var exp1cost = ((Number(game.data.exp1) + 1) * 10);
                
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.Font("Arial", 26, "white");
                    }, 
                    /**
                     * This for the text on the spend exp page
                     */
                    draw: function(renderer){
                        this.font.draw(renderer.getContext(), "PRESS F1-F4 TO BUY, F5 TO SKIP", this.pos.x, this.pos.y);
                        this.font.draw(renderer.getContext(), "CURRENT EXP: "  + game.data.exp.toString(), this.pos.x + 100, this.pos.y + 50);
                        this.font.draw(renderer.getContext(), "F1: INCREASE GOLD PRODUCTION! CURRENT LEVEL: " +  game.data.exp1.toString() + " COST: " + exp1cost, this.pos.x, this.pos.y + 100);
                        this.font.draw(renderer.getContext(), "F2: ADD STARTING GOLD ", this.pos.x, this.pos.y + 150);
                        this.font.draw(renderer.getContext(), "F3: INCREASE ATTACK DAMAGE ", this.pos.x, this.pos.y + 200);
                        this.font.draw(renderer.getContext(), "F4: INCREASING STARTING HEALTH ", this.pos.x, this.pos.y + 250);
                    }

                })));
                
                this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
                    /**
                     * this says if F1 is pressed and we have more exp than the cost
                     * then it will subtract the cost from your exp and take you to
                     * the PLAY screen
                     */
                    if(action === "F1"){
                        if(game.data.exp >= exp1cost){
                            game.data.exp1 +=1;
                            game.data.exp -= exp1cost;
                            me.state.change(me.state.PLAY);
                        }else{
                            console.log("not enough experience");
                        }
                    }else if(action === "F2"){
                        
                    }else if(action === "F3"){
                        
                    }else if(action === "F4"){
                        
                    }else if(action === "F5"){
                        me.state.change(me.state.PLAY);
                    }
                });
                
        },
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
                /**
                 * This unbinds the buttons when you leave the spend exp page
                 */
		me.input.unbindKey(me.input.KEY.F1, "F1");
                me.input.unbindKey(me.input.KEY.F2, "F2");
                me.input.unbindKey(me.input.KEY.F3, "F3");
                me.input.unbindKey(me.input.KEY.F4, "F4");
                me.input.unbindKey(me.input.KEY.F5, "F5");
                me.event.unsubscribe(this.handler);
	}
});


