function valider() {


        const answers = document.querySelectorAll('.answer');
        var results = new Array();

        for (let i = 0; i <= 9; i++) {
                if (answers[i].checked) {
                        newResults = results.push(1);
                } else {
                        newResults = results.push(2);
                }
        }

        console.log(results);

        let correct = 0;
        let incorrect = 0;

        results.forEach(e => {
                if (e === 1)
                        correct += 1;
                else if (e === 2)
                        incorrect += 1;
        })

    const json = {
        "0": "Qui est le personnage principale de Dragon Ball Z ? ",
        "1": "Qui est la femme de Songoku ?",
        "2": "Quel est la race de Songoku ?",
        "3": "Qui est le personnage principale de One piece ?",
        "4": "Quel est le pouvoir de Luffy ? ",
        "5": "Quelle est le nom du bâteau de Luffy ? ",
        "6": "Combien d'épisode compte l'animer One piece ? ",
        "7": "Quel est le nom de l'ancien roi des pirates ? ",
        "8": "Qui est le cuisinier de l'équipage de Luffy ",
        "9": "Quel est le meilleur animé ? ",
    };
    document.write(`<link rel="stylesheet" type="text/css" href="index.css">`);
        document.write(`Correction<br><br>`);
        for (let i = 0; i <= results.length - 1; i++) {
                document.write(` ${json[i]} <li>La réponse est ${results[i] == 1 ? 'correct' : 'incorrect'}</li>` + "<br>");
        }
        document.write(`${correct} bonnes réponses <br>${incorrect} mauvaises réponses `);
   }