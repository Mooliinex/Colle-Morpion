jQuery.fn.morpion = function () {
    $('#replay').click(function () {
        $("#grid").removeClass('won');
        $('.cell').empty();
        game = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    });
    var game = new Array();
        game = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    function game_array(game, i, value) {
        game[i] = value;
    }
    function game_condition(game, event) {
        total = 0;
    
        for (i = 3; i <= 5; i++) {
            if (event == game[i]) {
                total++;
            }
        }
        if (total == 3) {
            return true;
        } else {
            total = 0;
        }
        for (i = 0; i < 3; i++) {
            if (event == game[i]) {
                total++;
            }
        }
        if (total == 3) {
            return true;
        } else {
            total = 0;
        }

        for (i = 0; i <= 6; i = i + 3) {
            if (event == game[i]) {
                total++;
            }
        }
        if (total == 3) {
            return true;
        } else {
            total = 0;
        }
        for (i = 1; i <= 7; i = i + 3) {
            if (event == game[i]) {
                total++;
            }
        }
        if (total == 3) {
            return true;
        } else {
            total = 0;
        }
        for (i = 6; i <= 9; i++) {
            if (event == game[i]) {
                total++;
            }
        }
        if (total == 3) {
            return true;
        } else {
            total = 0;
        }
        for (i = 2; i <= 8; i = i + 3) {
            if (event == game[i]) {
                total++;
            }
        }
        if (total == 3) {
            return true;
        } else {
            total = 0;
        }

        for (i = 2; i <= 6; i = i + 2) {
            if (event == game[i]) {
                total++;
            }
        }
        if (total == 3) {
            return true;
        } else {
            total = 0;
        }
        for (i = 0; i <= 8; i = i + 4) {
            if (event == game[i]) {
                total++;
            }
        }
        if (total == 3) {
            return true;
        } else {
            total = 0;
        }
    
    }

    function game_full(game) {
        if (game.indexOf(0) == -1) {
            return true;
        } else {
            return false
        }
    }
    var put_array = 1;
    player1 = "Joueur1"
    total_P1 = 0;
    total_P2 = 0;
    $("#currentPlayer").text(player1);
    player2 = "Joueur2";
    $(".cell").click(function () {
        if (put_array & 1) {
            if ($(this).text() == "") {
                var i = $(".cell").index(this);
                game_array(game, i, "x");
                if (game_condition(game, "x")) {
                    $("#grid").addClass("won");
                    $(".win-display").text("Winner is Player 1 ! GG !!!");
                    total_P1++;
                    $("#playerOne").text(total_P1);
                } else {
                    if (game_full(game)) {
                        $("#grid").addClass("won");
                        $(".win-display").text("Ex aequo ! Veuillez rejouer !");

                    }
                }
                $("#currentPlayer").text(total_P2);
                $(this).text("x");
                put_array++;
            }
        }
        else {
            if ($(this).text() == "") {
                var i = $(".cell").index(this);
                game_array(game, i, "o");
                if (game_condition(game, "o")) {
                    $("#grid").addClass("won");
                    $(".win-display").text("Winner is Player 2 ! GG !!!");
                    total_P2++;
                    $("#playerTwo").text(total_P2);
                }
                else {
                    if (game_full(game)) {
                        $("#grid").addClass("won");
                        $(".win-display").text("Ex aequo ! Veuillez rejouer !");
                    }
                }
                $("#currentPlayer").text(total_P1);
                $(this).text("o");
                put_array++;
            }
        }
    })

}
$('#grid').morpion();

