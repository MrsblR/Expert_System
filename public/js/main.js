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
// const diseaseDescriptions = [
//   {
//     code: 'acuteBronchitis',
//     name: 'Bronquitis Aguda', // Bronquitis aguda
//   },
//   {
//     code: 'asthma',
//     name: 'Asma', // Asma
//   },
//   {
//     code: 'bronchiectasis',
//     name: 'Bronquiectasia', // Bronquiectasia
//   },
//   {
//     code: 'bronchiolitis',
//     name: 'Bronquiolitis' // Bronquiolitis
//   },
//   {
//     code: 'copd',
//     name: 'EPOC' // EPOC
//   },
//   {
//     code: 'commonCold',
//     name: 'Resfriado común' // Resfriado común
//   },
//   {
//     code: 'covid-19',
//     name: 'COVID 19' // COVID-19
//   },
//   {
//     code: 'croup',
//     name: 'Crup', // Crup
//   },
//   {
//     code: 'cysticFibrosis',
//     name: 'Fibrosis quística' // Fibrosis quística
//   },
//   {
//     code: 'influenza',
//     name: 'Influenza' // Influenza
//   },
//   {
//     code: 'lungCancer',
//     name: 'Cáncer de pulmón' // Cáncer de pulmón
//   },
//   {
//     code: 'occupationalLungDiseases',
//     name: 'Enfermedades pulmonares ocupacionales' // Enfermedades pulmonares ocupacionales
//   },
//   {
//     code: 'pertussis',
//     name: 'Tos ferina' // Tos ferina
//   },
//   {
//     code: 'pneumonia',
//     name: 'Neumonía' // Neumonía
//   },
//   {
//     code: 'rhinosinusitis',
//     name: 'Rinosinusitis' // Rinosinusitis
//   },
//   {
//     code: 'tuberculosis',
//     name: 'Tuberculosis' // Tuberculosis
//   }
// ];



// Descripciones de enfermedades
const diseaseDescriptions = [
  {
    code: 'acuteBronchitis',
    name: 'Bronquitis Aguda', 
    description: {
      sintomas: [
        'Tos persistente',
        'Producción de esputo (flema)',
        'Fatiga',
        'Dificultad para respirar',
        'Fiebre leve'
      ],
      causas: [
        'Infección viral (la más común)',
        'Infección bacteriana',
        'Exposición a irritantes como humo de tabaco, polvo y vapores químicos'
      ],
      tratamientos: [
        'Reposo',
        'Ingesta de líquidos',
        'Uso de medicamentos para aliviar la tos y la fiebre',
        'Antibióticos (solo si se sospecha una infección bacteriana)'
      ],
      prevencion: [
        'Evitar fumar y el humo de segunda mano',
        'Lavado frecuente de manos',
        'Vacunas contra la gripe y la neumonía'
      ],
      complicaciones: [
        'Neumonía',
        'Bronquitis crónica (en casos recurrentes)'
      ]
    }
  },
  {
    code: 'asthma',
    name: 'Asma',
    description: {
      sintomas: [
        'Dificultad para respirar',
        'Opresión en el pecho',
        'Sibilancias (sonido silbante al respirar)',
        'Tos, especialmente por la noche o temprano en la mañana'
      ],
      causas: [
        'Factores genéticos',
        'Exposición a alérgenos como polvo, polen, moho y pelo de animales',
        'Infecciones respiratorias',
        'Ejercicio físico'
      ],
      tratamientos: [
        'Inhaladores de rescate (broncodilatadores de acción rápida)',
        'Medicamentos de control a largo plazo (corticosteroides inhalados)',
        'Identificación y evitación de desencadenantes'
      ],
      prevencion: [
        'Controlar los desencadenantes ambientales',
        'Uso regular de medicamentos de control',
        'Vacunación contra la gripe'
      ],
      complicaciones: [
        'Ataques de asma graves',
        'Hospitalización',
        'Disminución de la función pulmonar'
      ]
    }
  },
  {
    code: 'bronchiectasis',
    name: 'Bronquiectasia',
    description: {
      sintomas: [
        'Tos crónica con producción de esputo',
        'Dificultad para respirar',
        'Infecciones respiratorias recurrentes',
        'Fatiga'
      ],
      causas: [
        'Infecciones pulmonares graves (como la tuberculosis y la neumonía)',
        'Enfermedades genéticas (como la fibrosis quística)',
        'Problemas con el sistema inmunológico',
        'Obstrucción de las vías respiratorias'
      ],
      tratamientos: [
        'Antibióticos para infecciones',
        'Fisioterapia torácica',
        'Broncodilatadores',
        'Oxigenoterapia (en casos graves)'
      ],
      prevencion: [
        'Tratamiento adecuado y temprano de infecciones respiratorias',
        'Vacunas',
        'Evitar el tabaquismo'
      ],
      complicaciones: [
        'Insuficiencia respiratoria',
        'Hemoptisis (tos con sangre)',
        'Cor pulmonale (insuficiencia del ventrículo derecho del corazón)'
      ]
    }
  },
  {
    code: 'bronchiolitis',
    name: 'Bronquiolitis',
    description: {
      sintomas: [
        'Congestión nasal',
        'Respiración rápida y superficial',
        'Sibilancias',
        'Tos',
        'Fiebre leve'
      ],
      causas: [
        'Infección viral (generalmente por el virus sincitial respiratorio, VSR)',
        'Contagio por contacto directo con secreciones respiratorias infectadas'
      ],
      tratamientos: [
        'Manejo de la fiebre con medicamentos antipiréticos',
        'Asegurar la hidratación adecuada',
        'Apoyo respiratorio (como oxígeno en casos severos)'
      ],
      prevencion: [
        'Lavado frecuente de manos',
        'Evitar el contacto cercano con personas enfermas',
        'Vacunación contra el VSR en casos de riesgo alto'
      ],
      complicaciones: [
        'Neumonía',
        'Dificultades respiratorias graves en lactantes y niños pequeños'
      ]
    }
  },
  {
    code: 'copd',
    name: 'EPOC',
    description: {
      sintomas: [
        'Tos crónica',
        'Producción de esputo (flema)',
        'Dificultad para respirar, especialmente durante la actividad física',
        'Opresión en el pecho'
      ],
      causas: [
        'Tabaquismo (la causa más común)',
        'Exposición a humo de segunda mano, contaminantes industriales y gases',
        'Factores genéticos (en casos menos comunes)'
      ],
      tratamientos: [
        'Cese del tabaquismo y evitar exposición a otros irritantes',
        'Broncodilatadores para aliviar la obstrucción de las vías respiratorias',
        'Esteroides inhalados en casos de exacerbaciones',
        'Rehabilitación pulmonar'
      ],
      prevencion: [
        'Evitar el tabaco y el humo de segunda mano',
        'Usar equipos de protección en entornos laborales peligrosos',
        'Vacunación contra la gripe y la neumonía'
      ],
      complicaciones: [
        'Insuficiencia respiratoria',
        'Ataques agudos de EPOC',
        'Cor pulmonale (insuficiencia del ventrículo derecho del corazón)'
      ]
    }
  },
  {
    code: 'commonCold',
    name: 'Resfriado común',
    description: {
      sintomas: [
        'Congestión nasal',
        'Estornudos',
        'Dolor de garganta',
        'Tos',
        'Malestar general',
        'Fiebre baja'
      ],
      causas: [
        'Infección viral (más de 200 tipos diferentes de virus pueden causar resfriados)',
        'Contagio por contacto con gotitas respiratorias infectadas'
      ],
      tratamientos: [
        'Descanso',
        'Hidratación adecuada',
        'Medicamentos para aliviar los síntomas (analgésicos y antipiréticos)'
      ],
      prevencion: [
        'Lavado frecuente de manos',
        'Evitar el contacto cercano con personas enfermas',
        'Evitar tocarse la cara con las manos sin lavar'
      ],
      complicaciones: [
        'Sinusitis',
        'Otitis media (infección del oído)',
        'Exacerbación de condiciones respiratorias crónicas (como el asma)'
      ]
    }
  },
  {
    code: 'covid-19',
    name: 'COVID-19',
    description: {
      sintomas: [
        'Fiebre',
        'Tos seca',
        'Fatiga',
        'Dificultad para respirar',
        'Pérdida del sentido del gusto o del olfato'
      ],
      causas: [
        'Infección por el coronavirus SARS-CoV-2',
        'Contagio por contacto con gotitas respiratorias infectadas o superficies contaminadas'
      ],
      tratamientos: [
        'Manejo sintomático (descanso, hidratación, analgésicos y antipiréticos)',
        'Oxigenoterapia en casos de dificultad respiratoria',
        'Tratamientos específicos según la gravedad (como corticosteroides y antivirales)'
      ],
      prevencion: [
        'Uso de mascarillas',
        'Distanciamiento social',
        'Higiene de manos frecuente',
        'Vacunación contra COVID-19'
      ],
      complicaciones: [
        'Neumonía grave',
        'Síndrome de dificultad respiratoria aguda (SDRA)',
        'Daño multiorgánico'
      ]
    }
  },
  {
    code: 'croup',
    name: 'Crup',
    description: {
      sintomas: [
        'Tos que suena como ladridos',
        'Estridor (ruido agudo al inhalar)',
        'Dificultad para respirar',
        'Fiebre leve'
      ],
      causas: [
        'Infección viral, especialmente por el virus parainfluenza',
        'Estrechamiento de las vías respiratorias superiores (laringe y tráquea)'
      ],
      tratamientos: [
        'Ambiente húmedo (como vapor de ducha)',
        'Esteroides para reducir la inflamación de las vías respiratorias',
        'Medicamentos para aliviar la fiebre y la incomodidad'
      ],
      prevencion: [
        'Evitar el contacto con personas enfermas',
        'Prácticas de higiene adecuadas',
        'Vacunación contra el virus parainfluenza en casos de riesgo alto'
      ],
      complicaciones: [
        'Obstrucción de las vías respiratorias',
        'Respiración dificultosa severa que requiere hospitalización',
        'Neumonía (en casos graves)'
      ]
    }
  },
  {
    code: 'cysticFibrosis',
    name: 'Fibrosis quística',
    description: {
      sintomas: [
        'Producción espesa de moco (flema) que obstruye las vías respiratorias',
        'Dificultad para respirar',
        'Infecciones respiratorias frecuentes',
        'Dolor abdominal (debido a problemas digestivos)'
      ],
      causas: [
        'Mutaciones genéticas en el gen CFTR',
        'Herencia autosómica recesiva (ambos padres deben ser portadores del gen defectuoso)'
      ],
      tratamientos: [
        'Terapia de desobstrucción pulmonar (como fisioterapia torácica)',
        'Uso de medicamentos para adelgazar y facilitar la expulsión del moco',
        'Suplementos enzimáticos para mejorar la digestión'
      ],
      prevencion: [
        'Pruebas genéticas antes de la concepción para identificar portadores',
        'Atención médica especializada desde el diagnóstico temprano',
        'Vacunación contra la gripe y la neumonía'
      ],
      complicaciones: [
        'Insuficiencia respiratoria progresiva',
        'Daño pulmonar irreversible',
        'Problemas nutricionales severos debido a la mala absorción de nutrientes'
      ]
    }
  },
  {
    code: 'influenza',
    name: 'Influenza',
    description: {
      sintomas: [
        'Fiebre repentina',
        'Escalofríos',
        'Dolor de garganta',
        'Dolor muscular y articular',
        'Malestar general'
      ],
      causas: [
        'Infección por virus de la influenza (tipos A, B y ocasionalmente C)',
        'Contagio por contacto con gotitas respiratorias infectadas'
      ],
      tratamientos: [
        'Descanso',
        'Hidratación adecuada',
        'Medicamentos antivirales (como oseltamivir) para reducir la duración y gravedad de la enfermedad'
      ],
      prevencion: [
        'Vacunación anual contra la influenza',
        'Lavado frecuente de manos',
        'Evitar el contacto cercano con personas enfermas'
      ],
      complicaciones: [
        'Neumonía viral o bacteriana secundaria',
        'Exacerbación de enfermedades crónicas (como EPOC y asma)',
        'Muerte (principalmente en grupos de alto riesgo)'
      ]
    }
  },
  {
    code: 'lungCancer',
    name: 'Cáncer de pulmón',
    description: {
      sintomas: [
        'Tos persistente o que empeora',
        'Dolor en el pecho que empeora con la respiración profunda o la tos',
        'Falta de aire',
        'Pérdida de peso inexplicable',
        'Fatiga'
      ],
      causas: [
        'Tabaquismo (la causa más común)',
        'Exposición al humo de segunda mano',
        'Exposición a carcinógenos ocupacionales como asbestos y radón'
      ],
      tratamientos: [
        'Cirugía para extirpar el tumor (cuando es posible)',
        'Radioterapia y quimioterapia',
        'Inmunoterapia y terapias dirigidas a mutaciones específicas'
      ],
      prevencion: [
        'Cese del tabaquismo y evitar la exposición al humo de segunda mano',
        'Uso de equipos de protección personal en ambientes laborales riesgosos',
        'Educación sobre los riesgos y detección temprana'
      ],
      complicaciones: [
        'Diseminación del cáncer a otros órganos (metástasis)',
        'Insuficiencia respiratoria',
        'Recurrencia del cáncer después del tratamiento'
      ]
    }
  },
  {
    code: 'occupationalLungDiseases',
    name: 'Enfermedades pulmonares ocupacionales',
    description: {
      sintomas: [
        'Dificultad para respirar',
        'Tos persistente',
        'Opresión en el pecho',
        'Producción de esputo (flema)'
      ],
      causas: [
        'Exposición prolongada a contaminantes en el lugar de trabajo, como polvos, vapores, humos y gases',
        'Factores específicos dependientes del tipo de exposición (por ejemplo, sílice para la silicosis, amianto para el asbesto)'
      ],
      tratamientos: [
        'Cese de la exposición al agente causante',
        'Medicamentos para aliviar los síntomas (como broncodilatadores y corticosteroides)',
        'Rehabilitación pulmonar'
      ],
      prevencion: [
        'Uso de equipos de protección personal adecuados',
        'Controles de ingeniería y medidas administrativas para reducir la exposición',
        'Programas de vigilancia médica regular'
      ],
      complicaciones: [
        'Fibrosis pulmonar progresiva',
        'Insuficiencia respiratoria crónica',
        'Mayor riesgo de infecciones respiratorias y cáncer de pulmón'
      ]
    }
  },
  {
    code: 'pertussis',
    name: 'Tos ferina',
    description: {
      sintomas: [
        'Tos intensa y prolongada (conocida como accesos de tos)',
        'Sonido agudo al inhalar (estridor inspiratorio)',
        'Vómitos después de los accesos de tos',
        'Fatiga'
      ],
      causas: [
        'Infección bacteriana por Bordetella pertussis',
        'Contagio por contacto con gotitas respiratorias infectadas'
      ],
      tratamientos: [
        'Antibióticos (como azitromicina) para reducir la duración de la enfermedad y la transmisión',
        'Medicamentos para aliviar los síntomas (como broncodilatadores)'
      ],
      prevencion: [
        'Vacunación contra la tos ferina en la infancia y refuerzos en la adolescencia y la edad adulta',
        'Evitar el contacto cercano con personas enfermas'
      ],
      complicaciones: [
        'Neumonía',
        'Convulsiones',
        'Problemas respiratorios graves en lactantes y niños pequeños'
      ]
    }
  },
  {
    code: 'pneumonia',
    name: 'Neumonía',
    description: {
      sintomas: [
        'Fiebre alta con escalofríos',
        'Tos que puede producir esputo (flema) amarillento, verde o con sangre',
        'Dolor torácico al respirar o toser',
        'Dificultad para respirar',
        'Fatiga y debilidad'
      ],
      causas: [
        'Infección viral (como influenza y COVID-19)',
        'Infección bacteriana (como Streptococcus pneumoniae)',
        'Infección fúngica o parasitaria (en casos menos comunes)'
      ],
      tratamientos: [
        'Antibióticos (si es de origen bacteriano)',
        'Antivirales (si es de origen viral)',
        'Analgésicos y antipiréticos para controlar la fiebre y el dolor',
        'Oxigenoterapia en casos severos'
      ],
      prevencion: [
        'Vacunación contra la gripe y el neumococo',
        'Prácticas de higiene como lavado de manos',
        'Evitar el contacto cercano con personas enfermas'
      ],
      complicaciones: [
        'Insuficiencia respiratoria',
        'Sepsis (infección generalizada)',
        'Daño pulmonar permanente'
      ]
    }
  },
  {
    code: 'rhinosinusitis',
    name: 'Rinosinusitis',
    description: {
      sintomas: [
        'Congestión nasal',
        'Secreción nasal (rinorrea)',
        'Dolor facial o de cabeza, especialmente al inclinarse hacia adelante',
        'Pérdida del olfato',
        'Tos (generalmente nocturna)'
      ],
      causas: [
        'Infección viral (la más común)',
        'Infección bacteriana (en casos de rinosinusitis bacteriana aguda)'
      ],
      tratamientos: [
        'Manejo sintomático con descongestionantes nasales',
        'Irrigación nasal con soluciones salinas',
        'Antibióticos (en casos de rinosinusitis bacteriana)'
      ],
      prevencion: [
        'Evitar el contacto cercano con personas enfermas',
        'Lavado frecuente de manos',
        'Uso de pañuelos desechables y prácticas de higiene adecuadas'
      ],
      complicaciones: [
        'Diseminación de la infección a estructuras cercanas (como el oído medio)',
        'Sinusitis crónica',
        'Abscesos intracraneales (en casos graves)'
      ]
    }
  },
  {
    code: 'tuberculosis',
    name: 'Tuberculosis',
    description: {
      sintomas: [
        'Tos persistente por más de 2 semanas',
        'Producción de esputo (flema) espeso, a veces con sangre',
        'Dolor torácico',
        'Fiebre, sudores nocturnos y pérdida de peso inexplicable'
      ],
      causas: [
        'Infección bacteriana por Mycobacterium tuberculosis',
        'Contagio por inhalación de gotículas respiratorias de personas infectadas'
      ],
      tratamientos: [
        'Terapia combinada de antibióticos (como isoniazida, rifampicina, pirazinamida y etambutol)',
        'Tratamiento prolongado (generalmente de 6 a 9 meses)',
        'Aislamiento de pacientes infectados para prevenir la propagación'
      ],
      prevencion: [
        'Vacunación con BCG (en áreas donde sea recomendado)',
        'Identificación y tratamiento temprano de casos activos',
        'Medidas de control de infecciones en entornos de atención médica'
      ],
      complicaciones: [
        'Daño pulmonar irreversible (como fibrosis pulmonar)',
        'Diseminación de la infección a otros órganos (como el cerebro o los riñones)',
        'Muerte (en casos no tratados o tratados inadecuadamente)'
      ]
    }
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

// // Función para mostrar el resultado
// function displayResult(disease, percentage) {
//   let diseaseHTML = '';
//   let percentageHTML = '';

//   // Si son arrays (hay múltiples enfermedades diagnosticadas)
//   if (Array.isArray(disease)) {
//     const [d1, d2] = disease;
//     const [p1, p2] = percentage;
//     diseaseHTML = `${findDiseaseName(d1)} o ${findDiseaseName(d2)}`;
//     percentageHTML = `Confianza en el diagnóstico: ${p1}% y ${p2}%`;
//   } else if (disease) {
//     diseaseHTML = `${findDiseaseName(disease)}`;
//     percentageHTML = `Confianza en el diagnóstico: ${percentage}%`;
//   } else {
//     diseaseHTML = "";
//     percentageHTML = "";
//     document.getElementById('youhave').innerHTML = "¡estás sano!";
//   }
//   document.getElementById('username').innerHTML = answers.name;
//   document.getElementById('disease').innerHTML = diseaseHTML;
//   document.getElementById('percentage').innerHTML = percentageHTML;
//   setTimeout(() => 
//     document.querySelector('.fixed-container').style.overflow = 'auto',
//     800
//   );

//   // Mostrar / revisar las respuestas del usuario
//   for (const ans in answers) {
//     document.getElementById(`review-${ans}`).innerHTML += `${answers[ans]}`;
//   }
// }

// // Función para encontrar el nombre de la enfermedad
// function findDiseaseName(code) {
//   for (let i = 0; i < diseaseDescriptions.length; i++) {
//     if (diseaseDescriptions[i].code === code) {
//       return diseaseDescriptions[i].name;
//     }
//   }
// }




// Función para mostrar el resultado
function displayResult(disease, percentage) {
  let diseaseHTML = '';
  let percentageHTML = '';
  let descriptionHTML = '';

  // Función auxiliar para encontrar la descripción de una enfermedad
  function findDiseaseDescription(code) {
    const disease = diseaseDescriptions.find(d => d.code === code);
    if (disease) {
      const { sintomas, causas, tratamientos, prevencion, complicaciones } = disease.description;
      return `
        <strong>Síntomas:</strong> ${sintomas.join(', ')}<br>
        <strong>Causas:</strong> ${causas.join(', ')}<br>
        <strong>Tratamientos:</strong> ${tratamientos.join(', ')}<br>
        <strong>Prevención:</strong> ${prevencion.join(', ')}<br>
        <strong>Complicaciones:</strong> ${complicaciones.join(', ')}
      `;
    }
    return '';
  }

  // Si son arrays (hay múltiples enfermedades diagnosticadas)
  if (Array.isArray(disease)) {
    const [d1, d2] = disease;
    const [p1, p2] = percentage;
    diseaseHTML = `${findDiseaseName(d1)} o ${findDiseaseName(d2)}`;
    percentageHTML = `Confianza en el diagnóstico: ${p1}% y ${p2}%`;
    descriptionHTML = `${findDiseaseDescription(d1)}<br><br>${findDiseaseDescription(d2)}`;
  } else if (disease) {
    diseaseHTML = `${findDiseaseName(disease)}`;
    percentageHTML = `Confianza en el diagnóstico: ${percentage}%`;
    descriptionHTML = `${findDiseaseDescription(disease)}`;
  } else {
    diseaseHTML = "";
    percentageHTML = "";
    descriptionHTML = "";
    document.getElementById('youhave').innerHTML = "¡estás sano!";
  }
  
  // Actualización de elementos HTML
  document.getElementById('username').innerHTML = answers.name;
  document.getElementById('disease').innerHTML = diseaseHTML;
  document.getElementById('percentage').innerHTML = percentageHTML;
  document.getElementById('description').innerHTML = descriptionHTML; // Añadir la descripción

  // Aplicar estilo de overflow después de 800ms
  setTimeout(() => {
    document.querySelector('.fixed-container').style.overflow = 'auto';
  }, 800);

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

// Función para encontrar la descripción detallada de la enfermedad
function findDiseaseDescription(code) {
  for (let i = 0; i < diseaseDescriptions.length; i++) {
    if (diseaseDescriptions[i].code === code) {
      return diseaseDescriptions[i].description;
    }
  }
}
