
// *** AJOUTER ***
function addParticipant(event)
{
    event.preventDefault();

    const nameInputElt = document.getElementById("nameInput");
    const participantName = nameInputElt.value.trim();

    if (participantName === '') {
        alert('Veuillez saisir un prénom');
        return;
    }

    const participantElt = `
    <li class="participant"><i class="bi bi-trash-fill delete"></i> ${participantName}</li>
    `;

    nameInputElt.value = '';

    const participantListElt = document.getElementById('participantList');

    participantListElt.innerHTML = participantListElt.innerHTML + participantElt;
}



const addNameFormElt = document.getElementById("addNameForm");
addNameFormElt.addEventListener("submit", addParticipant);



// *** SUPPRIMER ***
function deleteParticipant(event)
{
    var elementClique = event.target;

    if (elementClique.classList.contains("delete")) {
       elementClique.parentNode.remove();
    }
}

const deleteNameFormElt = document.getElementById("participantList");
deleteNameFormElt.addEventListener("click", deleteParticipant);



// GÉNÉRATION DES GROUPES
function generateGroups(participants, numberGroups) {
    var sorted = triBulle(participants);
    const groupsArr = [];

    for (let i = 0; i < numberGroups; i++) {
        groupsArr.push([]);
    }

    var groupsArrIndex = 0;

    while(sorted.length > 0) {
        groupsArr[groupsArrIndex].push(sorted.pop());
        groupsArrIndex++;

        if (groupsArrIndex >= groupsArr.length) {
            groupsArrIndex = 0;
        }
    }


    // AFFICHAGE
    const groupListElt = document.getElementById('groupList');
    groupListElt.innerHTML = '';

    for(let groupIndex = 0; groupIndex < groupsArr.length; groupIndex++)
    {
        let groupElt = `
        <div class="card bg-light mb-3" style="max-width: 20rem;">
        <div class="card-header">Groupe ${groupIndex + 1}</div>
        <div class="card-body">
        <ul>`;
        
        
        for(let participantIndex = 0; participantIndex < groupsArr[groupIndex].length; participantIndex++) {
            groupElt += `<li>${groupsArr[groupIndex][participantIndex]}</li>`
        }

        
        groupElt += `
        </ul>
        </div>
        </div>`;

        groupListElt.innerHTML += groupElt;
    }
}


const generateForm = document.getElementById('generateGroup');

generateForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const numberGroups = Number(document.getElementById('groupNumber').value);

    const participants = [];
    const participantsElt = document.querySelectorAll('.participant');

    participantsElt.forEach(element =>
        participants.push(element.textContent)
    );



    if (Number.isNaN(numberGroups)) {
        alert("Le nombre de groupes doit être un nombre.");
        return;
    }
    else if (numberGroups < 1) {
        alert("Le nombre de groupes doit être supérieur à 1.");
        return;
    }
    else if (numberGroups > participants.length) {
        alert("Le nombre de groupe doit être inférieur ou égal au nombre de participants");
        return;
    }

    
    generateGroups(participants, numberGroups);
});



function triBulle(t) {

    // Ajoute un nombre aléatoire à chaque élément du tableau
    t = t.map((value) => ({ value, rand: Math.random()}));

    // Tri à bulle
    for(i = t.length - 1; i >= 1; i--) {
        for(j = 0; j <= i - 1; j++) {
            if (t[j + 1]['rand'] < t[j]['rand']) {
                valeurJ = t[j];
                t[j] = t[j + 1];
                t[j + 1] = valeurJ;
            }
        }
    }

    // Retourne le tableau initial trié aléatoirement
    return t.map(({ value }) => value);
}


function melanger(tableau) {
    return tableau.sort((a, b) => Math.random() - 0.5);
}


function shuffle(tableau) {
    return tableau.map((value) => ({ value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


