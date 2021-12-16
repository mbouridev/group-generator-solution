

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
    <li>${participantName}</li>
    `;

    nameInputElt.value = '';

    const participantListElt = document.getElementById('participantList');

    participantListElt.innerHTML = participantListElt.innerHTML + participantElt;
}



const addNameFormElt = document.getElementById("addNameForm");
addNameFormElt.addEventListener("submit", addParticipant);




