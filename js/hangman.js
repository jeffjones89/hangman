var hangman = {
        //gs = gamestate
        gs: {
          guesses: [],
          remaining: 7,
          key: [],
          solved: [],
          announcement: ''
        },

  initialize: function(){
      $('#give-up').on('click', function(){
            console.log('give up')}.bind(this))
      $('#new-game').on('click', function(){
           this.newGame();
           this.updateDisplay();
         }.bind(this))
      $('#letter').on('keyup', function(){
        var letter = $('#letter').val();
        $('#letter').val('');
        this.guess(letter);
      }.bind(this))
    },

  newGame: function() {
      var gameWord = 'test'  //var gameWord = window.prompt('Player 1: Enter a word')
      this.gs.key = gameWord.split('')
      for (var i = 0; i < gameWord.length; i++){
        this.gs.solved.push('_');
      }

    },
   updateDisplay: function(){
      var gameWord = this.gs.solved.join('')
      $('.game-word').text(gameWord);
      $('#remaining').text(this.gs.remaining);
      $('.game-result').text(this.gs.announcement);
   },

   guess: function(letter){
     //if(letter === '' || guesses.indexOf(letter) != -1){
       //return;
     //}
     var found = 0
     for(var i = 0; i < this.gs.key.length; i++){
        if (this.gs.key [i] === letter){
          found = true
          this.gs.solved [i] = letter
        }}

       if (!found) {
         this.gs.remaining--
         this.gs.guesses.push(letter);
       }
       if (this.gs.remaining===0){
         this.gs.announcement = "You lose!"

       }
       this.updateDisplay();

     }
}
 hangman.initialize();
