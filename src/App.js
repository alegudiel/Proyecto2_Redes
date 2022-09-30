import './App.css';

function App() {
  return (
    <div>
      <header>
      <h1>Love Letter</h1>
      </header>

      <body>
        <p>
        <b>Goal of the Game</b>
            <br/>In the wake of the arrest of Queen Marianna for high treason,     
                none was more heartbroken than her daughter, Princess Annette.    
                Suitors throughout the City-State of Tempest sought to ease       
                Annette's sorrow by courting her to bring some joy into her life. 
                                                                              
                You are one of these suitors, trying to get your love letter      
                to the princess. Unfortunately, she has locked herself in the     
                palace, so you must rely on intermediaries to carry your message. 
                During the game, you hold one secret card in your hand. This is   
                who currently carries your message of love for the princess.  
        </p>
        <p>
        <b>Game Play</b>
            <br/>Love Letter is played in a series of rounds. Each round           
                represents one day. At the end of each round, one player's        
                letter reaches Princess Annette, and she reads it.                
                When she reads enough letters from one suitor, she becomes        
                enamored and grants that suitor permission to court her.          
                That player wins the princess's heart and the game.
              <br/>
              <br/>
              <b>Each game has many round until one player wins</b>
                <br/>2 players - 7 tokens to win
                <br/>3 players - 5 tokens to win
                <br/>4 players - 4 tokens to win
        </p>
        <p>
        <b>Card/Deck</b>
              <br/> - 5 Guards
              <br/> - 2 Priest
              <br/> - 2 Baron
              <br/> - 2 Handmaid
              <br/> - 2 Prince
              <br/> - 1 King
              <br/> - 1 Countess
              <br/> - 1 Princess
        </p>
        <p>
        <b>How to use the game?</b>
            <br/> - Download the project from <a href="https://github.com/majomr/Proyecto2Redes">here</a>
            <br/> - Open the project in 2 terminals
            <br/> - Run: Server.py 
            <br/> - Run: Client.py -n name
            <br/> - Here's our <a href="https://www.youtube.com/watch?v=xhSYfc4JRhU">video</a>
            <br/>If you need another tutorial, please visit <a href="https://www.youtube.com/watch?v=WAiI7G3QdOU">gameplay</a> in 3 minutes
        </p>
      </body>
      
    </div>
      
    );
}

export default App;
