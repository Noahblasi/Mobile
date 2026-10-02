/**
 * Base de datos completa del Glosario de Diseño Decolonial
 * TP5 - Tipografía e Interfaces Digitales | Tipografía 2 | Cátedra Cosgaya | FADU-UBA
 * Comisión: PATO+JUANCHO
 * Concepto asignado: 22 — Epistemologías del Sur
 */

const GLOSSARY_CONCEPTS = [
  {
    "id": 1,
    "number": "01",
    "name": "Archivo",
    "isShared": true,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "desobedecer"
    ],
    "snippet": "Todo archivo expresa relaciones de poder: legitima determinadas memorias mientras invisibiliza otras.",
    "definition": "Todo archivo expresa relaciones de poder: legitima determinadas memorias mientras invisibiliza otras. Diseñar un archivo implica asumir una posición respecto de qué voces se incluyen, bajo qué categorías se organizan y qué relatos se vuelven posibles a partir de esas decisiones. Nunca es un depósito neutral de documentos, aunque se presente así.",
    "author": "",
    "tags": [
      "Poder",
      "Memoria",
      "Legitimación",
      "Invisibilización",
      "Documentación",
      "Relato"
    ],
    "related": [
      "Memoria",
      "Representación",
      "Saber situado",
      "Visibilización"
    ]
  },
  {
    "id": 2,
    "number": "02",
    "name": "Comunidad",
    "isShared": true,
    "primaryRoute": "habitar",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "La comunidad no constituye simplemente un grupo, sino una red de relaciones, responsabilidades y saberes colectivos.",
    "definition": "La comunidad no constituye simplemente un grupo de personas que comparten un territorio o una identidad, sino una red de relaciones, responsabilidades y formas de construir conocimiento de manera colectiva. El diseño decolonial entiende que el conocimiento no pertenece exclusivamente a individuos o instituciones, sino que también emerge de prácticas compartidas, experiencias situadas y procesos colaborativos que fortalecen los vínculos entre las personas y sus contextos.",
    "author": "",
    "tags": [
      "Vínculos",
      "Colectivo",
      "Territorio",
      "Prácticas situadas",
      "Colaboración",
      "Responsabilidad"
    ],
    "related": [
      "Comunalidad",
      "Reciprocidad",
      "Territorio",
      "Buen vivir",
      "Diseño situado"
    ]
  },
  {
    "id": 3,
    "number": "03",
    "name": "Interfaz",
    "isShared": true,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "desobedecer"
    ],
    "snippet": "Toda interfaz media relaciones de poder: decide qué saberes se vuelven visibles y cuáles permanecen ocultos.",
    "definition": "La interfaz no es únicamente una superficie de interacción entre una persona y un sistema. También es un espacio de encuentro —y, muchas veces, de conflicto— entre diferentes formas de conocer, nombrar y representar el mundo. Desde una perspectiva decolonial, toda interfaz media relaciones de poder: decide qué saberes se vuelven visibles, cuáles permanecen ocultos y bajo qué categorías pueden ser comprendidos, y esas decisiones se toman antes de que alguien la use.",
    "author": "",
    "tags": [
      "Mediación",
      "Poder",
      "Visibilidad",
      "Conflicto",
      "Representación",
      "Interacción"
    ],
    "related": [
      "Representación",
      "Sistema",
      "Tecnología",
      "Traducción",
      "Visibilización"
    ]
  },
  {
    "id": 4,
    "number": "04",
    "name": "Memoria",
    "isShared": true,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "habitar"
    ],
    "snippet": "La memoria es un terreno en disputa que se transforma continuamente a partir de los relatos y prácticas colectivas.",
    "definition": "El colonialismo no se conforma con el presente: Frantz Fanon señaló que también se vuelve sobre el pasado de los pueblos que domina para desfigurarlo, devaluarlo y volverlo irrelevante. Por eso la memoria es un terreno en disputa que se transforma continuamente a partir de los relatos, las prácticas y los vínculos de una comunidad. Recuperar experiencias, saberes y narrativas históricamente desplazadas es una acción política antes que documental.",
    "author": "Frantz Fanon",
    "tags": [
      "Disputa",
      "Resistencia",
      "Narrativas",
      "Desplazamiento",
      "Comunidad",
      "Acción política"
    ],
    "related": [
      "Archivo",
      "Ancestralidad",
      "Resistencia",
      "Historia",
      "Comunidad"
    ]
  },
  {
    "id": 5,
    "number": "05",
    "name": "Representación",
    "isShared": true,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "desobedecer"
    ],
    "snippet": "Toda representación responde a marcos culturales específicos y nunca es neutral.",
    "definition": "Toda representación selecciona, interpreta y organiza aquello que considera significativo, y nunca es neutral: responde a marcos culturales específicos y puede reproducir estereotipos o habilitar otras formas de comprender el mundo. bell hooks llamó mirada opositora a la de quienes, colocadas como objeto de la imagen, aprenden a mirarla de vuelta. Representar y ser representado son dos posiciones distintas, y rara vez las ocupa la misma persona.",
    "author": "bell hooks",
    "tags": [
      "Mirada opositora",
      "Estereotipos",
      "Poder",
      "Cultura",
      "Interpretación",
      "Visibilización"
    ],
    "related": [
      "Interfaz",
      "Visibilización",
      "Identidad",
      "Lengua",
      "Justicia cognitiva"
    ]
  },
  {
    "id": 6,
    "number": "06",
    "name": "Sistema",
    "isShared": true,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "desobedecer"
    ],
    "snippet": "Los sistemas no son estructuras universales cerradas, sino configuraciones dinámicas situadas.",
    "definition": "Un sistema es un conjunto de elementos relacionados entre sí que adquieren sentido a partir de sus vínculos. Desde una mirada decolonial, los sistemas no deben entenderse como estructuras cerradas o universales, sino como configuraciones dinámicas atravesadas por contextos históricos, culturales y políticos. Diseñar sistemas supone reconocer múltiples formas de organización y evitar imponer una única lógica como modelo válido para todas las realidades.",
    "author": "",
    "tags": [
      "Vínculos",
      "Pluralidad",
      "Organización",
      "Complejidad",
      "Contexto",
      "No-universal"
    ],
    "related": [
      "Interfaz",
      "Pluriverso",
      "Tecnología",
      "Comunalidad",
      "Diseño situado"
    ]
  },
  {
    "id": 7,
    "number": "07",
    "name": "Tecnología",
    "isShared": true,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "conocer"
    ],
    "snippet": "La tecnología es expresión de saberes y modos de relacionarse con el entorno, más allá de la industria occidental.",
    "definition": "El quipu andino registraba cuentas y probablemente relatos con cuerdas y nudos, y quienes lo destruyeron no lo reconocieron como escritura porque no se parecía a la suya. La tecnología es una expresión de conocimientos, prácticas y modos de relacionarse con el entorno, además de un conjunto de herramientas. Identificarla exclusivamente con el desarrollo industrial occidental deja afuera tecnologías ancestrales, comunitarias y locales que resolvieron problemas equivalentes.",
    "author": "",
    "tags": [
      "Quipu",
      "Saberes ancestrales",
      "Herramientas",
      "Local",
      "Desobediencia",
      "Prácticas"
    ],
    "related": [
      "Desobediencia tecnológica",
      "Ancestralidad",
      "Sistema",
      "Interfaz",
      "Saber situado"
    ]
  },
  {
    "id": 8,
    "number": "08",
    "name": "Traducción",
    "isShared": true,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "conocer"
    ],
    "snippet": "Traducir no es trasladar literalmente, sino negociar significados reconociendo asimetrías.",
    "definition": "Silvia Rivera Cusicanqui advierte que la academia suele traducir el pensamiento indígena a sus propias categorías y llamar diálogo a esa operación. Traducir no es trasladar información de un lenguaje a otro de manera literal: implica negociar significados, reconocer diferencias y evitar reducir una cosmovisión a las categorías de otra. Construye puentes solo cuando no borra las particularidades ni ordena jerárquicamente los sistemas que pone en contacto.",
    "author": "Silvia Rivera Cusicanqui",
    "tags": [
      "Ch'ixi",
      "Cosmovisión",
      "Negociación",
      "Puentes",
      "Asimetría",
      "Lengua"
    ],
    "related": [
      "Lengua",
      "Interculturalidad",
      "Mestizaje",
      "Cosmovisión",
      "Hibridación cultural"
    ]
  },
  {
    "id": 9,
    "number": "09",
    "name": "Ancestralidad",
    "isShared": false,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "habitar"
    ],
    "featuredInRoute": true,
    "snippet": "Presencia activa que orienta decisiones, fortalece identidades y mantiene vivos modos de relación con el territorio.",
    "definition": "La ancestralidad se refiere al conjunto de conocimientos, prácticas y formas de habitar el mundo transmitidas entre generaciones. Más que una referencia al pasado, constituye una presencia activa que orienta decisiones, fortalece identidades y mantiene vivos modos de relación con el territorio y la comunidad. En diseño, recuperar la ancestralidad implica reconocer fuentes de conocimiento históricamente relegadas y comprender que la innovación también puede surgir del diálogo con saberes heredados.",
    "author": "",
    "tags": [
      "Saberes heredados",
      "Generaciones",
      "Territorio",
      "Identidad",
      "Innovación situada",
      "Memoria"
    ],
    "related": [
      "Memoria",
      "Comunalidad",
      "Cosmovisión",
      "Territorio",
      "Oralidad"
    ]
  },
  {
    "id": 10,
    "number": "10",
    "name": "Buen vivir",
    "isShared": false,
    "primaryRoute": "habitar",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "Concepción del bienestar basada en la reciprocidad, el cuidado y la sostenibilidad de la vida con la naturaleza.",
    "definition": "El Buen Vivir es una concepción del bienestar desarrollada por diversos pueblos indígenas de América Latina que propone una relación equilibrada entre personas, comunidad y naturaleza. A diferencia de los modelos centrados en el crecimiento económico, prioriza la reciprocidad, el cuidado y la sostenibilidad de la vida. Desde el diseño, invita a proyectar soluciones que fortalezcan los vínculos colectivos y respeten los límites ecológicos y culturales de cada territorio.",
    "author": "Pueblos indígenas de América Latina",
    "tags": [
      "Sumak Kawsay",
      "Reciprocidad",
      "Naturaleza",
      "Sostenibilidad",
      "Cuidado colectivo",
      "Comunidad"
    ],
    "related": [
      "Comunalidad",
      "Reciprocidad",
      "Cuerpo-territorio",
      "Cosmovisión",
      "Pluriverso"
    ]
  },
  {
    "id": 11,
    "number": "11",
    "name": "Colonialidad",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "conocer"
    ],
    "featuredInRoute": true,
    "snippet": "Persistencia de relaciones de dominación que operan aún después del fin del colonialismo formal.",
    "definition": "Aníbal Quijano acuñó el concepto en 1992. La colonialidad designa la persistencia de relaciones de dominación que continúan operando aun después del fin del colonialismo formal. Se manifiesta en la producción del conocimiento, las jerarquías culturales, los modelos económicos y las formas de representación. El diseño decolonial estudia cómo estas estructuras siguen condicionando qué estéticas, tecnologías y maneras de pensar son consideradas legítimas, e invita a cuestionar esos criterios para ampliar el campo de posibilidades proyectuales.",
    "author": "Aníbal Quijano",
    "tags": [
      "Poder colonial",
      "Jerarquías",
      "Modernidad",
      "Legitimidad",
      "Estética",
      "Cuestionamiento"
    ],
    "related": [
      "Colonialismo",
      "Colonialidad de género",
      "Decolonialidad",
      "Modernidad",
      "Epistemologías del Sur"
    ]
  },
  {
    "id": 12,
    "number": "12",
    "name": "Colonialidad de género",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "habitar"
    ],
    "snippet": "Imposición colonial de un sistema binario y jerárquico de género sobre las sociedades colonizadas.",
    "definition": "La colonialidad de género nombra la imposición colonial de un sistema binario y jerárquico de género sobre sociedades que organizaban de otro modo los roles, los cuerpos y el parentesco. María Lugones la formuló discutiendo con Quijano: la colonialidad del poder no puede explicarse sin ella, porque la clasificación racial y la de género se produjeron en el mismo movimiento. No hubo una identidad previa que la colonia oprimió, hubo una que la colonia inventó.",
    "author": "María Lugones",
    "tags": [
      "Género",
      "Binarismo",
      "Racialización",
      "Cuerpos",
      "Interseccionalidad",
      "Feminismo decolonial"
    ],
    "related": [
      "Colonialidad",
      "Cuerpo-territorio",
      "Identidad",
      "Pedagogías de la crueldad",
      "Decolonialidad"
    ]
  },
  {
    "id": 13,
    "number": "13",
    "name": "Colonialismo",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "conocer"
    ],
    "snippet": "Proceso histórico de ocupación y control que impuso lenguas, religiones y saberes hegemónicos.",
    "definition": "El colonialismo fue un proceso histórico de ocupación política, económica y cultural mediante el cual distintos imperios ejercieron control sobre otros territorios y poblaciones. Además de la explotación material, implicó la imposición de lenguas, religiones, sistemas de conocimiento y formas de representación. Comprender este proceso permite reconocer el origen de muchas desigualdades actuales y revisar críticamente las bases sobre las que se construyeron numerosas prácticas del diseño contemporáneo.",
    "author": "",
    "tags": [
      "Ocupación",
      "Historia",
      "Imposición",
      "Desigualdad",
      "Explotación",
      "Hegemonía"
    ],
    "related": [
      "Colonialidad",
      "Modernidad",
      "Extractivismo",
      "Reparación",
      "Resistencia"
    ]
  },
  {
    "id": 14,
    "number": "14",
    "name": "Comunalidad",
    "isShared": false,
    "primaryRoute": "habitar",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "Organización basada en tierra comunal, trabajo compartido, asamblea y fiesta como un mismo sistema.",
    "definition": "La comunalidad es una forma de organización basada en el trabajo colectivo, el cuidado mutuo y la participación. El término fue acuñado en Oaxaca por Jaime Martínez Luna, zapoteco, y Floriberto Díaz, mixe, para nombrar en castellano algo que ya existía sin palabra: la tierra comunal, el trabajo compartido, la asamblea y la fiesta como partes de un mismo sistema, no como actividades separadas. En diseño promueve metodologías donde el proyecto surge del diálogo entre distintos actores.",
    "author": "Jaime Martínez Luna y Floriberto Díaz",
    "tags": [
      "Oaxaca",
      "Zapoteco",
      "Mixe",
      "Trabajo colectivo",
      "Asamblea",
      "Tierra comunal",
      "Diálogo"
    ],
    "related": [
      "Comunidad",
      "Reciprocidad",
      "Buen vivir",
      "Territorio",
      "Diseño situado"
    ]
  },
  {
    "id": 15,
    "number": "15",
    "name": "Cosmovisión",
    "isShared": false,
    "primaryRoute": "habitar",
    "secondaryRoutes": [
      "conocer"
    ],
    "snippet": "Conjunto de creencias y valores que define las relaciones entre personas, naturaleza, tiempo y saber.",
    "definition": "Una cosmovisión es el conjunto de creencias, valores y formas de interpretar la realidad compartidas por una comunidad. Define cómo se comprenden las relaciones entre las personas, la naturaleza, el tiempo y el conocimiento. Rodolfo Kusch opuso en América profunda el ser occidental, que empuja a ser alguien y a acumular, al estar americano, que se sostiene en un lugar y en un suelo. El diseño decolonial reconoce la coexistencia de múltiples cosmovisiones y cuestiona la idea de un único modo universal de entender el mundo.",
    "author": "Rodolfo Kusch",
    "tags": [
      "Estar americano",
      "América profunda",
      "Tiempo",
      "Naturaleza",
      "Pluralidad",
      "Sentido"
    ],
    "related": [
      "Buen vivir",
      "Pluriverso",
      "Ancestralidad",
      "Territorio",
      "Traducción"
    ]
  },
  {
    "id": 16,
    "number": "16",
    "name": "Cuerpo-territorio",
    "isShared": false,
    "primaryRoute": "habitar",
    "secondaryRoutes": [
      "desobedecer"
    ],
    "snippet": "El cuerpo y el territorio no son entidades separadas sino dimensiones inseparables de la misma vida.",
    "definition": "El concepto de cuerpo-territorio entiende que el cuerpo y el territorio no constituyen entidades separadas, sino dimensiones inseparables de una misma experiencia de vida. Proviene del feminismo comunitario, y Lorena Cabnal lo formuló desde la experiencia de las mujeres xinkas de Guatemala frente al extractivismo minero: defender la montaña y defender el propio cuerpo son la misma defensa. Las transformaciones del entorno impactan sobre quienes lo habitan, y las prácticas sociales modifican el territorio. En diseño invita a considerar las consecuencias materiales y culturales de toda intervención, porque proyectar es actuar sobre relaciones vivas.",
    "author": "Lorena Cabnal (mujeres xinkas)",
    "tags": [
      "Feminismo comunitario",
      "Guatemala",
      "Defensa",
      "Extractivismo",
      "Relaciones vivas",
      "Intervención"
    ],
    "related": [
      "Territorio",
      "Extractivismo",
      "Buen vivir",
      "Pedagogías de la crueldad",
      "Colonialidad de género"
    ]
  },
  {
    "id": 17,
    "number": "17",
    "name": "Decolonialidad",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "conocer",
      "relacionar"
    ],
    "snippet": "Proceso permanente de revisión y apertura hacia otras maneras de pensar, crear y habitar el mundo.",
    "definition": "La decolonialidad es una perspectiva crítica que busca identificar y transformar las formas en que la colonialidad continúa organizando el conocimiento, las instituciones y las prácticas sociales. Más que un destino alcanzado, constituye un proceso permanente de revisión y apertura hacia otras maneras de pensar, crear y habitar el mundo. En diseño, propone ampliar el repertorio de referencias, metodologías y formas de colaboración, incorporando saberes históricamente invisibilizados y cuestionando la pretendida neutralidad de los modelos universales.",
    "author": "",
    "tags": [
      "Apertura",
      "Pluralidad",
      "Neutralidad cuestionada",
      "Metodologías",
      "Emancipación",
      "Crítica"
    ],
    "related": [
      "Colonialidad",
      "Desobediencia epistémica",
      "Epistemologías del Sur",
      "Pluriverso",
      "Diseño situado"
    ]
  },
  {
    "id": 18,
    "number": "18",
    "name": "Desobediencia epistémica",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "conocer"
    ],
    "snippet": "Cuestionar la autoridad exclusiva de los saberes universales y validar otras tradiciones intelectuales.",
    "definition": "Walter Mignolo le dio nombre en 2010, en un libro publicado en Buenos Aires. La desobediencia epistémica consiste en cuestionar la autoridad exclusiva de los sistemas de conocimiento considerados universales y abrir espacio a otras formas de producir, validar y compartir saberes. No implica rechazar el conocimiento científico, sino reconocer que convive con múltiples tradiciones intelectuales y culturales. Desde el diseño supone revisar referencias, metodologías y criterios de evaluación para favorecer procesos más plurales y situados.",
    "author": "Walter Mignolo",
    "tags": [
      "Conocimiento plural",
      "Buenos Aires",
      "Sistemas de saber",
      "Criterios de evaluación",
      "Pluralidad"
    ],
    "related": [
      "Decolonialidad",
      "Desobediencia tecnológica",
      "Justicia cognitiva",
      "Diversidad epistemológica",
      "Saber situado"
    ]
  },
  {
    "id": 19,
    "number": "19",
    "name": "Desobediencia tecnológica",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "Un objeto no se termina cuando el fabricante decide: apropiación, reparación y reasignación funcional.",
    "definition": "Ernesto Oroza llamó desobediencia tecnológica a lo que hicieron los cubanos con los objetos durante el Período Especial: abrirlos, repararlos, combinarlos y reasignarles funciones que ningún fabricante había previsto. Un ventilador armado con partes de teléfono deja de obedecer al diseño original para obedecer a la necesidad de quien lo usa. La idea discute algo central del oficio: que un objeto se termina cuando quien lo fabricó decide que se terminó.",
    "author": "Ernesto Oroza",
    "tags": [
      "Período Especial",
      "Cuba",
      "Reparación",
      "Hackeo",
      "Apropiación",
      "Objetos abiertos"
    ],
    "related": [
      "Tecnología",
      "Desobediencia epistémica",
      "Resistencia",
      "Reparación",
      "Diseño situado"
    ]
  },
  {
    "id": 20,
    "number": "20",
    "name": "Diseño situado",
    "isShared": false,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "habitar",
      "conocer"
    ],
    "snippet": "Todo proyecto surge de un contexto específico y responde a realidades históricas y sociales concretas.",
    "definition": "El diseño situado reconoce que todo proyecto surge en un contexto específico y responde a condiciones sociales, culturales, ambientales e históricas particulares. En lugar de aplicar soluciones universales, propone comprender las características del territorio, las comunidades involucradas y los saberes existentes antes de intervenir. Diseñar de manera situada implica entender que las decisiones proyectuales adquieren sentido en relación con las personas y los contextos para los que fueron concebidas.",
    "author": "",
    "tags": [
      "Contexto",
      "Territorio",
      "Soluciones situadas",
      "Comunidades",
      "No-universal",
      "Sentido proyectual"
    ],
    "related": [
      "Saber situado",
      "Epistemologías del Sur",
      "Territorio",
      "Comunalidad",
      "Interculturalidad"
    ]
  },
  {
    "id": 21,
    "number": "21",
    "name": "Diversidad epistemológica",
    "isShared": false,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "Múltiples formas legítimas de producir conocimiento: saberes populares, artesanales, indígenas y académicos.",
    "definition": "La diversidad epistemológica reconoce la existencia de múltiples formas legítimas de producir conocimiento. Además de la ciencia académica, incluye saberes indígenas, populares, comunitarios, artesanales y otros modos de comprensión desarrollados por diferentes culturas. El diseño decolonial considera esta diversidad como una fuente de aprendizaje e innovación, promoviendo proyectos capaces de dialogar con distintas maneras de entender los problemas y construir soluciones.",
    "author": "",
    "tags": [
      "Saberes populares",
      "Saberes indígenas",
      "Artesanía",
      "Innovación",
      "Diálogo",
      "Legitimidad"
    ],
    "related": [
      "Epistemologías del Sur",
      "Justicia cognitiva",
      "Desobediencia epistémica",
      "Oralidad",
      "Pluriverso"
    ]
  },
  {
    "id": 22,
    "number": "22",
    "name": "Epistemologías del Sur",
    "isShared": false,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "conocer",
      "desobedecer"
    ],
    "featuredInRoute": true,
    "isAssignedConcept": true,
    "snippet": "Visibilizar conocimientos producidos por comunidades subordinadas por procesos coloniales.",
    "definition": "Las epistemologías del Sur constituyen un conjunto de perspectivas que buscan visibilizar conocimientos producidos por comunidades históricamente subordinadas por los procesos coloniales. No hacen referencia únicamente a una ubicación geográfica, sino a experiencias sociales marcadas por la exclusión y la resistencia. En diseño, invitan a ampliar las fuentes de referencia, valorar prácticas locales y reconocer que la producción de conocimiento excede ampliamente los ámbitos académicos tradicionales.",
    "author": "Boaventura de Sousa Santos",
    "tags": [
      "Sur global",
      "Exclusión",
      "Resistencia",
      "Saberes subalternos",
      "Prácticas locales",
      "Justicia cognitiva"
    ],
    "related": [
      "Justicia cognitiva",
      "Diversidad epistemológica",
      "Diseño situado",
      "Pluriverso",
      "Saber situado",
      "Desobediencia epistémica"
    ]
  },
  {
    "id": 23,
    "number": "23",
    "name": "Extractivismo",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "habitar"
    ],
    "snippet": "Apropiación de recursos, imágenes o saberes comunitarios sin reconocimiento ni beneficio mutuo.",
    "definition": "El extractivismo es un modelo de apropiación intensiva de recursos naturales, culturales o sociales orientado principalmente a la obtención de beneficios económicos. Desde una perspectiva decolonial, también puede entenderse como la extracción de conocimientos, imágenes o prácticas comunitarias sin reconocimiento ni participación de quienes las producen. El diseño cuestiona estas lógicas cuando promueve relaciones más equitativas, procesos colaborativos y formas responsables de producir valor.",
    "author": "",
    "tags": [
      "Apropiación",
      "Despojo",
      "Recursos",
      "Imágenes",
      "Responsabilidad proyectual",
      "Equidad"
    ],
    "related": [
      "Cuerpo-territorio",
      "Territorio",
      "Reparación",
      "Colonialismo",
      "Reciprocidad"
    ]
  },
  {
    "id": 24,
    "number": "24",
    "name": "Frontera",
    "isShared": false,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "habitar"
    ],
    "snippet": "Espacio de apertura radical donde dialogan culturas, lenguas y saberes fuera de categorías rígidas.",
    "definition": "La frontera no constituye únicamente un límite geográfico. También representa un espacio donde se encuentran, negocian o confrontan distintas culturas, lenguas y formas de conocimiento. bell hooks propuso pensar el margen no solo como el lugar de la privación sino como un sitio elegido de apertura radical, desde el cual se ve lo que desde el centro no se ve. En diseño, trabajar desde la frontera implica reconocer la riqueza que surge del diálogo entre tradiciones diversas y evitar categorías rígidas o excluyentes.",
    "author": "bell hooks",
    "tags": [
      "Margen",
      "Apertura radical",
      "Límite",
      "Negociación",
      "Descentralización",
      "Encuentro"
    ],
    "related": [
      "Hibridación cultural",
      "Interculturalidad",
      "Mestizaje",
      "Traducción",
      "Representación"
    ]
  },
  {
    "id": 25,
    "number": "25",
    "name": "Hibridación cultural",
    "isShared": false,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "conocer"
    ],
    "snippet": "Convivencia de lo tradicional y lo moderno: lo ch'ixi como aquello que es dos cosas sin fundirse.",
    "definition": "Néstor García Canclini llamó hibridación a los procesos por los cuales prácticas que existían por separado se combinan para generar nuevas estructuras y objetos. Su tesis en Culturas híbridas es que en América Latina lo tradicional y lo moderno no se suceden sino que conviven y se entreveran. Silvia Rivera Cusicanqui objeta esa idea: para ella lo ch'ixi es aquello que es dos cosas a la vez sin fundirse nunca en una tercera, y la fusión es justamente la promesa colonial.",
    "author": "Néstor García Canclini y Silvia Rivera Cusicanqui",
    "tags": [
      "Ch'ixi",
      "Culturas híbridas",
      "Tensión",
      "Modernidad",
      "Tradición",
      "Coexistencia"
    ],
    "related": [
      "Mestizaje",
      "Traducción",
      "Interculturalidad",
      "Frontera",
      "Identidad"
    ]
  },
  {
    "id": 26,
    "number": "26",
    "name": "Identidad",
    "isShared": false,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "desobedecer"
    ],
    "snippet": "Relato que se construye frente a otros: el formulario y la interfaz ofrecen moldes de narración.",
    "definition": "La identidad no es una esencia que se posee sino un relato que se construye y se sostiene frente a otros. Leonor Arfuch estudió cómo las formas disponibles para contarse —la entrevista, la biografía, el testimonio, el perfil— modelan aquello que una persona puede llegar a decir de sí misma. En diseño esto es material y no metafórico: la ficha, el formulario y el perfil no registran una identidad previa, ofrecen los moldes con los que alguien va a narrarse.",
    "author": "Leonor Arfuch",
    "tags": [
      "Relato",
      "Moldes discursivos",
      "Perfil",
      "Formulario",
      "Subjetividad",
      "Construcción"
    ],
    "related": [
      "Representación",
      "Interfaz",
      "Lengua",
      "Colonialidad de género",
      "Visibilización"
    ]
  },
  {
    "id": 27,
    "number": "27",
    "name": "Interculturalidad",
    "isShared": false,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "habitar"
    ],
    "snippet": "Diálogo y aprendizaje recíproco entre culturas reconociendo diferencias sin jerarquías.",
    "definition": "La interculturalidad propone relaciones de diálogo y aprendizaje mutuo entre diferentes culturas, reconociendo sus diferencias sin establecer jerarquías entre ellas. A diferencia de la simple convivencia, supone construir espacios donde distintas formas de conocimiento puedan interactuar en condiciones de respeto y reciprocidad. En diseño, la interculturalidad favorece procesos participativos capaces de integrar perspectivas diversas durante todas las etapas del proyecto.",
    "author": "",
    "tags": [
      "Reciprocidad",
      "Diálogo",
      "Sin jerarquías",
      "Participación",
      "Convivencia",
      "Encuentro"
    ],
    "related": [
      "Traducción",
      "Reciprocidad",
      "Justicia cognitiva",
      "Diseño situado",
      "Frontera"
    ]
  },
  {
    "id": 28,
    "number": "28",
    "name": "Justicia cognitiva",
    "isShared": false,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "conocer",
      "desobedecer"
    ],
    "snippet": "Derecho de todas las comunidades a producir, conservar y transmitir sus propios conocimientos.",
    "definition": "La justicia cognitiva sostiene que todas las comunidades tienen derecho a producir, conservar y transmitir sus propios conocimientos. Cuestiona la concentración de legitimidad en unos pocos sistemas epistemológicos y promueve el reconocimiento de saberes múltiples. Desde el diseño, implica crear procesos, herramientas y representaciones que amplíen la participación de distintas voces y eviten reproducir desigualdades en la circulación del conocimiento.",
    "author": "Shiv Visvanathan / Boaventura de Sousa Santos",
    "tags": [
      "Derecho al saber",
      "Legitimidad",
      "Circulación",
      "Voces subalternas",
      "Pluralismo",
      "Democracia epistémica"
    ],
    "related": [
      "Epistemologías del Sur",
      "Diversidad epistemológica",
      "Desobediencia epistémica",
      "Saber situado",
      "Visibilización"
    ]
  },
  {
    "id": 29,
    "number": "29",
    "name": "Lengua",
    "isShared": false,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "Hablar una lengua es asumir un mundo y una cultura: evitar traducciones homogenizantes.",
    "definition": "La lengua es mucho más que un sistema de comunicación: constituye una forma de nombrar, organizar e interpretar la realidad. Cada lengua expresa una determinada manera de comprender el mundo y preserva conocimientos construidos históricamente por una comunidad. Frantz Fanon lo formuló en Piel negra, máscaras blancas: hablar una lengua es asumir un mundo y una cultura, y la imposición lingüística fue parte central de la empresa colonial. En diseño, reconocer la diversidad lingüística implica evitar traducciones que homogenicen o simplifiquen experiencias complejas.",
    "author": "Frantz Fanon",
    "tags": [
      "Piel negra máscaras blancas",
      "Nombrar el mundo",
      "Imposición lingüística",
      "Complejidad",
      "Cosmovisión"
    ],
    "related": [
      "Traducción",
      "Oralidad",
      "Cosmovisión",
      "Representación",
      "Identidad"
    ]
  },
  {
    "id": 30,
    "number": "30",
    "name": "Matriz de pensamiento",
    "isShared": false,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "desobedecer"
    ],
    "snippet": "Supuestos históricos desde donde América Latina se piensa, fuera del binarismo liberalismo-marxismo.",
    "definition": "Una matriz de pensamiento es el conjunto de supuestos, categorías y experiencias históricas desde el cual una sociedad piensa y se explica a sí misma. Alcira Argumedo sostuvo que América Latina tiene matrices propias, entre ellas la popular y nacional, distintas de las dos grandes matrices del mundo central: el liberalismo y el marxismo. Fueron silenciadas justamente por no encajar en ninguna de las dos. Reconocerlas amplía las fuentes de referencia disponibles para cualquier proyecto.",
    "author": "Alcira Argumedo",
    "tags": [
      "Matrices propias",
      "América Latina",
      "Pensamiento popular",
      "Mundo central",
      "Referencias situadas"
    ],
    "related": [
      "Epistemologías del Sur",
      "Modernidad",
      "Desobediencia epistémica",
      "Ancestralidad",
      "Saber situado"
    ]
  },
  {
    "id": 31,
    "number": "31",
    "name": "Mestizaje",
    "isShared": false,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "conocer"
    ],
    "snippet": "Lejos de una mezcla homogénea: tensiones y contradicciones de lo ch'ixi sin fundir.",
    "definition": "El mestizaje refiere a los procesos históricos y culturales de encuentro, intercambio y transformación entre diferentes pueblos y tradiciones. Lejos de entenderse como una mezcla homogénea, reconoce tensiones, conflictos y negociaciones permanentes. Silvia Rivera Cusicanqui propone en cambio lo ch'ixi, palabra aymara para el gris que de cerca son puntos blancos y negros sin fundir: algo que es las dos cosas a la vez sin volverse una tercera. En diseño invita a valorar las influencias múltiples y a evitar lecturas esencialistas.",
    "author": "Silvia Rivera Cusicanqui",
    "tags": [
      "Ch'ixi",
      "Aymara",
      "Tensiones",
      "Conflicto",
      "No-esencialista",
      "Transformación"
    ],
    "related": [
      "Hibridación cultural",
      "Traducción",
      "Interculturalidad",
      "Frontera",
      "Identidad"
    ]
  },
  {
    "id": 32,
    "number": "32",
    "name": "Modernidad",
    "isShared": false,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "desobedecer"
    ],
    "snippet": "Europa no se vuelve moderna por desarrollo interno sino por la expansión colonial iniciada en 1492.",
    "definition": "La modernidad fue un proceso histórico que impulsó profundas transformaciones científicas, tecnológicas y sociales. Enrique Dussel corre su fecha de nacimiento a 1492: Europa no se vuelve moderna por un desarrollo interno sino al constituirse como centro frente a un otro al que encubre y del que extrae. La expansión colonial no acompañó a la modernidad, la fundó. En diseño, revisar críticamente la modernidad permite reconocer que los modelos considerados universales responden a contextos históricos específicos.",
    "author": "Enrique Dussel",
    "tags": [
      "1492",
      "Eurocentrismo",
      "Encubrimiento",
      "Crítica a lo universal",
      "Fundación colonial",
      "Historia"
    ],
    "related": [
      "Colonialismo",
      "Colonialidad",
      "Decolonialidad",
      "Pedagogías de la crueldad",
      "Universalidad"
    ]
  },
  {
    "id": 33,
    "number": "33",
    "name": "Oralidad",
    "isShared": false,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "habitar"
    ],
    "snippet": "Sistema complejo de preservación de la memoria colectiva, más allá de la escritura.",
    "definition": "La oralidad comprende las formas de transmisión del conocimiento basadas en la palabra hablada, la conversación, la narración y la experiencia compartida. En numerosas comunidades constituye un sistema complejo de preservación de la memoria colectiva y no una simple ausencia de escritura. Desde el diseño decolonial, valorar la oralidad implica reconocer otros modos de documentar, aprender y construir conocimiento más allá de los soportes escritos.",
    "author": "",
    "tags": [
      "Palabra hablada",
      "Narración",
      "Memoria colectiva",
      "Soportes no escritos",
      "Escucha",
      "Transmisión"
    ],
    "related": [
      "Lengua",
      "Memoria",
      "Ancestralidad",
      "Comunidad",
      "Archivo"
    ]
  },
  {
    "id": 34,
    "number": "34",
    "name": "Pedagogías de la crueldad",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "habitar"
    ],
    "snippet": "Prácticas que enseñan a tratar lo vivo como cosa disponible: el diseño produce cosas para ser miradas.",
    "definition": "Rita Segato llama pedagogías de la crueldad a los actos y las prácticas que enseñan a tratar lo vivo como cosa disponible. No se trata de episodios excepcionales sino de un entrenamiento cotidiano, hecho de repetición y de espectáculo, que vuelve tolerable el sufrimiento ajeno hasta que deja de registrarse como sufrimiento. Todo aquello que se produce para ser mirado participa de esa pedagogía o de su contrario, y el diseño produce cosas para ser miradas.",
    "author": "Rita Segato",
    "tags": [
      "Rita Segato",
      "Cosificación",
      "Espectáculo",
      "Ética del diseño",
      "Mirada",
      "Sensibilidad"
    ],
    "related": [
      "Extractivismo",
      "Cuerpo-territorio",
      "Colonialidad de género",
      "Representación",
      "Resistencia"
    ]
  },
  {
    "id": 35,
    "number": "35",
    "name": "Pluriverso",
    "isShared": false,
    "primaryRoute": "habitar",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "Un mundo donde quepan muchos mundos: diseñar es participar en la creación de mundos posibles.",
    "definition": "El pluriverso sostiene que no existe una única manera válida de comprender, habitar o transformar el mundo, sino una multiplicidad de realidades y formas de conocimiento. La formulación zapatista lo dice en una frase: un mundo donde quepan muchos mundos. Arturo Escobar lo llevó al diseño en Autonomía y diseño: proyectar no es resolver un problema dentro de un mundo ya dado, es participar en la creación del mundo donde ese problema tiene sentido y puede formularse.",
    "author": "Zapatismo / Arturo Escobar",
    "tags": [
      "Mundos múltiples",
      "Zapatismo",
      "Autonomía y diseño",
      "Ontología",
      "Proyectar mundos",
      "Diversidad"
    ],
    "related": [
      "Buen vivir",
      "Epistemologías del Sur",
      "Cosmovisión",
      "Diseño situado",
      "Diversidad epistemológica"
    ]
  },
  {
    "id": 36,
    "number": "36",
    "name": "Reciprocidad",
    "isShared": false,
    "primaryRoute": "habitar",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "El ayni andino: deuda sostenida en el tiempo que mantiene unido al grupo a través del cuidado mutuo.",
    "definition": "La reciprocidad organiza las relaciones entre personas, comunidades y territorios a partir del intercambio y el cuidado mutuo. En los Andes tiene nombre y reglas precisas: el ayni obliga a devolver el trabajo recibido, no en dinero ni de inmediato, sino cuando la otra parte lo necesite. No es altruismo sino una deuda sostenida en el tiempo que mantiene unido al grupo. En diseño invita a procesos colaborativos donde el conocimiento, las decisiones y los beneficios sean compartidos.",
    "author": "Tradición andina (Ayni)",
    "tags": [
      "Ayni",
      "Andes",
      "Cuidado mutuo",
      "Colaboración",
      "Intercambio",
      "Deuda comunitaria"
    ],
    "related": [
      "Comunalidad",
      "Buen vivir",
      "Comunidad",
      "Territorio",
      "Interculturalidad"
    ]
  },
  {
    "id": 37,
    "number": "37",
    "name": "Reparación",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "Restitución de bienes y modificación de las reglas que produjeron el daño histórico.",
    "definition": "La reparación reúne acciones orientadas a reconocer y transformar desigualdades producidas por procesos históricos de violencia y exclusión. No se agota en la compensación económica ni en el pedido de disculpas: incluye la devolución de bienes y restos, la restitución de nombres propios y la modificación de las reglas que produjeron el daño. En diseño supone revisar quiénes participan de los proyectos y qué representaciones se siguen reproduciendo sin haberlas discutido.",
    "author": "",
    "tags": [
      "Justicia restaurativa",
      "Restitución",
      "Transformación",
      "Memoria",
      "Violencia histórica",
      "Reglas"
    ],
    "related": [
      "Colonialismo",
      "Memoria",
      "Justicia cognitiva",
      "Resistencia",
      "Extractivismo"
    ]
  },
  {
    "id": 38,
    "number": "38",
    "name": "Resistencia",
    "isShared": false,
    "primaryRoute": "desobedecer",
    "secondaryRoutes": [
      "habitar"
    ],
    "snippet": "Prácticas desde la exterioridad: ningún sistema logra absorber todo, siempre queda un resto.",
    "definition": "La resistencia comprende las prácticas mediante las cuales individuos y comunidades sostienen formas propias de vida y conocimiento frente a procesos de dominación. Enrique Dussel la piensa desde la exterioridad: ningún sistema logra absorber todo, siempre queda algo afuera, y es desde ese resto que puede pensarse otra cosa. En diseño aparece en la recuperación de técnicas locales, en los usos no previstos de los materiales y en la construcción de narrativas propias.",
    "author": "Enrique Dussel",
    "tags": [
      "Exterioridad",
      "Técnicas locales",
      "Materialidad",
      "Narrativas propias",
      "Subversión",
      "Autonomía"
    ],
    "related": [
      "Desobediencia tecnológica",
      "Desobediencia epistémica",
      "Decolonialidad",
      "Memoria",
      "Reparación"
    ]
  },
  {
    "id": 39,
    "number": "39",
    "name": "Saber situado",
    "isShared": false,
    "primaryRoute": "conocer",
    "secondaryRoutes": [
      "relacionar"
    ],
    "snippet": "Contra el truco de dios: declarar desde dónde se mira y desnaturalizar los valores por defecto.",
    "definition": "El saber situado reconoce que todo conocimiento es producido desde una posición concreta, atravesada por experiencias y contextos. Donna Haraway lo formuló contra lo que llamó el truco de dios: la pretensión de mirar todo desde ninguna parte y llamar objetividad a esa ausencia de cuerpo. La alternativa que propone no es el relativismo sino declarar desde dónde se mira. En diseño la posición se esconde en los valores por defecto: qué se da por normal sin que nadie lo haya elegido.",
    "author": "Donna Haraway",
    "tags": [
      "Donna Haraway",
      "Truco de dios",
      "Valores por defecto",
      "Posicionamiento",
      "Objetividad situada",
      "Cuerpo"
    ],
    "related": [
      "Diseño situado",
      "Epistemologías del Sur",
      "Justicia cognitiva",
      "Diversidad epistemológica",
      "Cuerpo-territorio"
    ]
  },
  {
    "id": 40,
    "number": "40",
    "name": "Territorio",
    "isShared": false,
    "primaryRoute": "habitar",
    "secondaryRoutes": [
      "conocer"
    ],
    "featuredInRoute": true,
    "snippet": "La tierra es superficie y recurso; el territorio es relación, cultura, memoria y afecto.",
    "definition": "El territorio es una construcción cultural, histórica y afectiva donde se desarrollan formas particulares de vida y conocimiento. No equivale a la tierra: la tierra es superficie y recurso, mientras que el territorio es relación, y por eso puede disputarse sin que cambie un solo metro de suelo. Diseñar con el territorio supone trabajar junto a las comunidades que lo habitan y reconocer los significados que ellas le atribuyen a ese espacio y las memorias que guardan de él.",
    "author": "",
    "tags": [
      "Relación",
      "Afecto",
      "Comunidades",
      "Espacio disputado",
      "Significados",
      "Memoria territorial"
    ],
    "related": [
      "Cuerpo-territorio",
      "Comunalidad",
      "Buen vivir",
      "Diseño situado",
      "Cosmovisión"
    ]
  },
  {
    "id": 41,
    "number": "41",
    "name": "Visibilización",
    "isShared": false,
    "primaryRoute": "relacionar",
    "secondaryRoutes": [
      "conocer",
      "desobedecer"
    ],
    "snippet": "No alcanza con aparecer: revisar qué representaciones se construyen y qué cánones se adoptan.",
    "definition": "La visibilización busca que personas, saberes y prácticas históricamente relegadas puedan ser reconocidas y participar del espacio público. Esther Pineda advierte que no alcanza con aparecer: los cánones de belleza con los que se aparece son ellos mismos racistas, admiten unos cuerpos como norma y otros como excepción o exotismo, y en América Latina se adoptaron los europeos. En diseño implica revisar qué representaciones se construyen y no solamente cuántas.",
    "author": "Esther Pineda",
    "tags": [
      "Esther Pineda",
      "Cánones racistas",
      "Espacio público",
      "Reconocimiento",
      "Representación crítica"
    ],
    "related": [
      "Representación",
      "Identidad",
      "Justicia cognitiva",
      "Epistemologías del Sur",
      "Colonialidad de género"
    ]
  }
];

const GLOSSARY_ROUTES = {
  "conocer": {
    "id": "conocer",
    "number": "01",
    "title": "CONOCER",
    "colorKey": "yellow",
    "accentColor": "#E9A800",
    "description": "Conceptos que cuestionan las categorías heredadas de la modernidad y abren paso a otros saberes.",
    "featuredConceptId": 9,
    "conceptIds": [
      9,   // Ancestralidad
      21,  // Diversidad epistemológica
      26,  // Identidad
      29,  // Lengua
      30,  // Matriz de pensamiento
      32,  // Modernidad
      33,  // Oralidad
      39,  // Saber situado
      1,   // Archivo [Concepto Puente]
      4,   // Memoria [Concepto Puente]
      5    // Representación [Concepto Puente]
    ]
  },
  "habitar": {
    "id": "habitar",
    "number": "02",
    "title": "HABITAR",
    "colorKey": "red",
    "accentColor": "#E5241C",
    "description": "Formas de vincularse con el territorio, el cuerpo y el cuidado de la vida comunitaria.",
    "featuredConceptId": 40,
    "conceptIds": [
      40,  // Territorio
      16,  // Cuerpo-territorio
      10,  // Buen vivir
      14,  // Comunalidad
      15,  // Cosmovisión
      35,  // Pluriverso
      36,  // Reciprocidad
      2    // Comunidad [Concepto Puente]
    ]
  },
  "desobedecer": {
    "id": "desobedecer",
    "number": "03",
    "title": "DESOBEDECER",
    "colorKey": "blue",
    "accentColor": "#1A56DB",
    "description": "Conceptos que desafían las estructuras de dominación y abren alternativas proyectuales.",
    "featuredConceptId": 11,
    "conceptIds": [
      11,  // Colonialidad
      12,  // Colonialidad de género
      13,  // Colonialismo
      17,  // Decolonialidad
      18,  // Desobediencia epistémica
      19,  // Desobediencia tecnológica
      23,  // Extractivismo
      34,  // Pedagogías de la crueldad
      37,  // Reparación
      38,  // Resistencia
      7    // Tecnología [Concepto Puente]
    ]
  },
  "relacionar": {
    "id": "relacionar",
    "number": "04",
    "title": "RELACIONAR",
    "colorKey": "triad",
    "accentColor": "#E9A800",
    "description": "Espacio de encuentro entre Conocer, Habitar y Desobedecer: articular saberes diversos y habilitar el pluriverso.",
    "isConvergence": true,
    "featuredConceptId": 22,
    "conceptIds": [
      22,  // Epistemologías del Sur (tarjeta 2 columnas)
      20,  // Diseño situado
      24,  // Frontera
      25,  // Hibridación cultural
      27,  // Interculturalidad
      28,  // Justicia cognitiva
      31,  // Mestizaje
      41,  // Visibilización
      3,   // Interfaz [Concepto Puente]
      6,   // Sistema [Concepto Puente]
      8    // Traducción [Concepto Puente]
    ]
  }
};

const SHARED_CONCEPTS = [
  {
    "id": 1,
    "name": "ARCHIVO",
    "color": "red"
  },
  {
    "id": 2,
    "name": "COMUNIDAD",
    "color": "blue"
  },
  {
    "id": 3,
    "name": "INTERFAZ",
    "color": "yellow"
  },
  {
    "id": 4,
    "name": "MEMORIA",
    "color": "red"
  },
  {
    "id": 5,
    "name": "REPRESENTACIÓN",
    "color": "blue"
  },
  {
    "id": 6,
    "name": "SISTEMA",
    "color": "yellow"
  },
  {
    "id": 7,
    "name": "TECNOLOGÍA",
    "color": "red"
  },
  {
    "id": 8,
    "name": "TRADUCCIÓN",
    "color": "blue"
  }
];

const DETAIL_EPISTEMOLOGIAS = {
  "conceptId": 22,
  "number": "22",
  "name": "EPISTEMOLOGÍAS DEL SUR",
  "subtitle": "Una mirada que amplía quiénes pueden producir, transmitir y validar conocimiento.",
  "kicker": "22 / CONCEPTO ASIGNADO",
  "quotes": [
    {
      "text": "¿QUÉ SABERES QUEDARON FUERA?",
      "bg": "red",
      "tilt": "rotate(3deg)"
    },
    {
      "text": "SUR ≠ SOLO UN LUGAR",
      "bg": "yellow",
      "tilt": "rotate(-4deg)"
    },
    {
      "text": "OTRAS VOCES. OTROS SABERES.",
      "bg": "blue",
      "tilt": "rotate(2deg)"
    }
  ],
  "sections": [
    {
      "id": "que-son",
      "number": "01",
      "title": "¿QUÉ SON?",
      "heading": "CONOCER TAMBIÉN ES UNA FORMA DE HACER VISIBLE.",
      "sticker": "MÚLTIPLES SABERES",
      "text": "Las epistemologías del Sur constituyen un conjunto de perspectivas que buscan visibilizar conocimientos producidos por comunidades históricamente subordinadas por los procesos coloniales. No hacen referencia únicamente a una ubicación geográfica, sino a experiencias sociales marcadas por la exclusión y la resistencia. En diseño, invitan a ampliar las fuentes de referencia, valorar prácticas locales y reconocer que la producción de conocimiento excede ampliamente los ámbitos académicos tradicionales.",
      "tags": [
        "CONOCER",
        "RECONOCER",
        "DESCOLONIZAR"
      ],
      "next": {
        "label": "02 MÁS ALLÁ DEL MAPA →",
        "target": "mas-alla-del-mapa",
        "pillColor": "blue"
      }
    },
    {
      "id": "mas-alla-del-mapa",
      "number": "02",
      "title": "MÁS ALLÁ DEL MAPA",
      "heading": "¿DÓNDE ESTÁ EL SUR?",
      "text": "Cuando hablamos del “Sur” no hablamos únicamente de una ubicación geográfica. El Sur también nombra experiencias, historias y formas de producir conocimiento que fueron subordinadas por la mirada colonial.",
      "tags": [
        "TERRITORIO",
        "EXPERIENCIA",
        "MEMORIA",
        "SABER"
      ],
      "cards": [
        {
          "text": "EL SUR NO ES SOLO GEOGRAFÍA.",
          "bg": "blue",
          "tilt": "rotate(3deg)"
        },
        {
          "text": "PENSAR DESDE OTROS LUGARES.",
          "bg": "yellow",
          "tilt": "rotate(-2deg)"
        },
        {
          "text": "HAY MUCHOS SURES.",
          "bg": "red",
          "tilt": "rotate(5deg)"
        }
      ],
      "next": {
        "label": "03 EN DISEÑO →",
        "target": "en-diseno",
        "pillColor": "yellow"
      }
    },
    {
      "id": "en-diseno",
      "number": "03",
      "title": "EN DISEÑO",
      "heading": "DEL CONOCIMIENTO A LA PRÁCTICA",
      "intro": "En diseño, esta perspectiva invita a revisar desde dónde miramos, a quién escuchamos y qué saberes incorporamos.",
      "columns": [
        {
          "title": "AMPLIAR",
          "text": "Incluir otras voces, experiencias y formas de transmisión.",
          "bg": "yellow"
        },
        {
          "title": "VALORAR",
          "text": "Reconocer que el conocimiento no se produce desde un único lugar.",
          "bg": "red"
        },
        {
          "title": "RECONOCER",
          "text": "Hacer visibles sus contextos, memorias y territorios.",
          "bg": "blue"
        }
      ],
      "tags": [
        "PENSAR DESDE OTROS LUGARES"
      ],
      "next": {
        "label": "04 RELACIONADOS →",
        "target": "relacionados",
        "pillColor": "red"
      }
    },
    {
      "id": "relacionados",
      "number": "04",
      "title": "RELACIONADOS",
      "heading": "NINGÚN CONCEPTO ESTÁ AISLADO.",
      "intro": "Explorá otras entradas del universo de Diseño Decolonial. Cada una abre una relación distinta.",
      "networkNodes": [
        {
          "id": 20,
          "name": "DISEÑO DECOLONIAL",
          "bg": "yellow"
        },
        {
          "id": 39,
          "name": "SABER SITUADO",
          "bg": "blue"
        },
        {
          "id": 35,
          "name": "PLURIVERSO",
          "bg": "red"
        }
      ],
      "tags": [
        "COLONIALISMO",
        "TERRITORIO",
        "MEMORIA",
        "SABERES SITUADOS"
      ]
    }
  ]
};
