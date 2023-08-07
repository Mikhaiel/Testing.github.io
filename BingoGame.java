import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class BingoGame {
    private int[][] card;
    private List<Integer> calledNumbers;
    
    public BingoGame() {
        card = new int[5][5];
        calledNumbers = new ArrayList<>();
        initializeCard();
    }
    
    private void initializeCard() {
        // Implement logic to initialize the Bingo card with unique numbers
        // Remember to mark the center square as "FREE"
    }
    
    public int[][] getCard() {
        return card;
    }
    
    public int callNumber() {
        // Implement logic to call a random number that hasn't been called before
        return 0;
    }
    
    public boolean checkWin() {
        // Implement logic to check for a win (e.g., five in a row, column, or diagonal)
        return false;
    }
}
