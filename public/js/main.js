/* * * * * * Inicializar hechos y respuestas * * * * * */
// El objeto facts inicializado con valores aleatorios
const facts = {
  ageGroup: "children", // Grupo de edad
  gender: "male", // Género
  familyHistory: "N", // Historia familiar
  smokingHistory: "N", // Historia de fumar
  duration: ">1 week, <4weeks", // Duración de los síntomas
  chestPain: "Y", // Dolor en el pecho
  cough: "productive", // Tipo de tos
  coughingUpBlood: "N", // Toser sangre
  fever: "N", // Fiebre
  rapidBreathing: "N", // Respiración rápida
  rapidHeartbeat: "N", // Latidos rápidos
  shortnessOfBreath: "Y", // Dificultad para respirar
  wheezing: "Y", // Sibilancias
};

// Inicializar respuestas
const answers = {
  name: undefined, // Nombre
  age: undefined, // Edad
  gender: undefined, // Género
  familyHistory: undefined, // Historia familiar
  smokingHistory: undefined, // Historia de fumar
  chestPain: undefined, // Dolor en el pecho
  cough: undefined, // Tos
  coughingUpBlood: undefined, // Toser sangre
  fever: undefined, // Fiebre
  rapidBreathing: undefined, // Respiración rápida
  shortnessOfBreath: undefined, // Dificultad para respirar
  rapidHeartbeat: undefined, // Latidos rápidos
  wheezing: undefined, // Sibilancias
  duration: undefined // Duración de los síntomas
};

// Descripciones de enfermedades
const diseaseDescriptions = [
  {
    code: 'acuteBronchitis',
    name: 'Bronquitis Aguda', // Bronquitis aguda
  },
  {
    code: 'asthma',
    name: 'Asma', // Asma
  },
  {
    code: 'bronchiectasis',
    name: 'Bronquiectasia', // Bronquiectasia
  },
  {
    code: 'bronchiolitis',
    name: 'Bronquiolitis' // Bronquiolitis
  },
  {
    code: 'copd',
    name: 'EPOC' // EPOC
  },
  {
    code: 'commonCold',
    name: 'Resfriado común' // Resfriado común
  },
  {
    code: 'covid-19',
    name: 'COVID 19' // COVID-19
  },
  {
    code: 'croup',
    name: 'Crup', // Crup
  },
  {
    code: 'cysticFibrosis',
    name: 'Fibrosis quística' // Fibrosis quística
  },
  {
    code: 'influenza',
    name: 'Influenza' // Influenza
  },
  {
    code: 'lungCancer',
    name: 'Cáncer de pulmón' // Cáncer de pulmón
  },
  {
    code: 'occupationalLungDiseases',
    name: 'Enfermedades pulmonares ocupacionales' // Enfermedades pulmonares ocupacionales
  },
  {
    code: 'pertussis',
    name: 'Tos ferina' // Tos ferina
  },
  {
    code: 'pneumonia',
    name: 'Neumonía' // Neumonía
  },
  {
    code: 'rhinosinusitis',
    name: 'Rinosinusitis' // Rinosinusitis
  },
  {
    code: 'tuberculosis',
    name: 'Tuberculosis' // Tuberculosis
  }
];

/* * * * * * Adjuntar event listeners a todos los botones de envío * * * * * */
const nameInputEl = document.getElementById('nameInput');
document.querySelector('button[data-answer-type="text"]').addEventListener('click', (e) => {
  if (nameInputEl.value === "")
    document.getElementById("nameInputReminder").style.display = "block";
  else {
    answers.name = nameInputEl.value;
    // Ir a la siguiente pregunta y reproducir animaciones
    questionEls[1].classList.add("question-container--slide-out");
    // Deslizar hacia la siguiente pregunta
    questionEls[2].classList.remove("question-container--on-standby");
    questionEls[2].classList.add("question-container--slide-in");
  }
})

const ageInputEl = document.getElementById('ageInput');
document.querySelector('button[data-answer-type="number"]').addEventListener('click', (e) => {
  const age = parseInt(ageInputEl.value);
  if (Number.isInteger(age) && age > 0 && age < 150) {
    answers.age = age;
    if (answers.age <= 1)
      facts.ageGroup = 'infants';
    else if (answers.age <= 13)
      facts.ageGroup = 'children';
    else if (answers.age <= 35)
      facts.ageGroup = 'youngAdults';
    else if (answers.age <= 55)
      facts.ageGroup = 'middleAged';
    else
      facts.ageGroup = 'elderly';
    
    // Ir a la siguiente pregunta y reproducir animaciones
    questionEls[2].classList.add("question-container--slide-out");
    // Deslizar hacia la siguiente pregunta
    questionEls[3].classList.remove("question-container--on-standby");
    questionEls[3].classList.add("question-container--slide-in");
  } else
    document.getElementById("ageInputReminder").style.display = "block";
})

const questionEls = Array.from(document.querySelectorAll(".question-container"));

for (let i = 1; i < questionEls.length; i++) {
  questionEls[i].classList.add("question-container--on-standby");
}

// Función para obtener la pregunta actual: https://stackoverflow.com/questions/22119673/find-the-closest-ancestor-element-that-has-a-specific-class
function findAncestor (el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
}

// Event listeners para los botones de envío de preguntas de opción
const choiceBtns = Array.from(document.querySelectorAll('button[data-answer-type="choice"]'));
choiceBtns.forEach((btn, i) => {
  btn.addEventListener('click', (e) => {
    // Omitir el primer botón porque está en la Introducción, no es una pregunta
    if (i != 0) {
      const question = btn.dataset.question;
      const answer = btn.dataset.choice;
      facts[question] = answer;
      answers[question] = answer;
    }

    // Reproducir animaciones
    const currentQuestion = findAncestor(btn, "question-container");
    const currentCardNumber = parseInt(currentQuestion.dataset.number);
    const nextQuestion = document.querySelector(`div[data-number="${currentCardNumber + 1}"]`);
    currentQuestion.classList.add("question-container--slide-out");
    // Deslizar hacia la siguiente pregunta
    nextQuestion.classList.remove("question-container--on-standby");
    nextQuestion.classList.add("question-container--slide-in");

    // Si es el último botón de envío:
    // Obtener diagnóstico y actualizar el estado
    if (currentCardNumber === 14) {
      const esUrl = 'diagnosis/';
      const requestUrl = `${esUrl}${JSON.stringify(facts)}`;
      fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
          displayResult(data.disease, data.percentage)
        });
    }
  })
})

// Función para mostrar el resultado
function displayResult(disease, percentage) {
  let diseaseHTML = '';
  let percentageHTML = '';
  // Si son arrays (hay múltiples enfermedades diagnosticadas)
  if (Array.isArray(disease)) {
    const [d1, d2] = disease;
    const [p1, p2] = percentage;
    diseaseHTML = `${findDiseaseName(d1)} o ${findDiseaseName(d2)}`;
    percentageHTML = `Confianza en el diagnóstico: ${p1}% y ${p2}%`;
  } else if (disease) {
    diseaseHTML = `${findDiseaseName(disease)}`;
    percentageHTML = `Confianza en el diagnóstico: ${percentage}%`;
  } else {
    diseaseHTML = "";
    percentageHTML = "";
    document.getElementById('youhave').innerHTML = "¡estás sano!";
  }
  document.getElementById('username').innerHTML = answers.name;
  document.getElementById('disease').innerHTML = diseaseHTML;
  document.getElementById('percentage').innerHTML = percentageHTML;
  setTimeout(() => 
    document.querySelector('.fixed-container').style.overflow = 'auto',
    800
  );

  // Mostrar / revisar las respuestas del usuario
  for (const ans in answers) {
    document.getElementById(`review-${ans}`).innerHTML += `${answers[ans]}`;
  }
}

// Función para encontrar el nombre de la enfermedad
function findDiseaseName(code) {
  for (let i = 0; i < diseaseDescriptions.length; i++) {
    if (diseaseDescriptions[i].code === code) {
      return diseaseDescriptions[i].name;
    }
  }
}
