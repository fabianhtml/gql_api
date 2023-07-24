const adjetivos = [
  "admirable",
  "alegre",
  "apasionada",
  "apasionado",
  "asombrosa",
  "asombroso",
  "audaz",
  "autentica",
  "autentico",
  "bendita",
  "bendito",
  "beneficiosa",
  "beneficioso",
  "brillante",
  "calmada",
  "calmado",
  "carismatica",
  "carismatico",
  "cautivador",
  "cautivadora",
  "competente",
  "comprometida",
  "comprometido",
  "confiable",
  "considerada",
  "considerado",
  "cooperativa",
  "cooperativo",
  "creativa",
  "creativo",
  "curiosa",
  "curioso",
  "decidida",
  "decidido",
  "delicada",
  "delicado",
  "deslumbrante",
  "determinada",
  "determinado",
  "devota",
  "devoto",
  "diligente",
  "dinamica",
  "dinamico",
  "disciplinada",
  "disciplinado",
  "divertida",
  "divertido",
  "eficiente",
  "elegante",
  "encantador",
  "encantadora",
  "encomiable",
  "energetica",
  "energetico",
  "entusiasta",
  "esplendida",
  "esplendido",
  "estupenda",
  "estupendo",
  "excelente",
  "exquisita",
  "exquisito",
  "extraordinaria",
  "extraordinario",
  "fabulosa",
  "fabuloso",
  "ferviente",
  "fiel",
  "fuerte",
  "gallarda",
  "gallardo",
  "generosa",
  "generoso",
  "genial",
  "gloriosa",
  "glorioso",
  "graciosa",
  "gracioso",
  "grandiosa",
  "grandioso",
  "heroica",
  "heroico",
  "honesta",
  "honesto",
  "ilustre",
  "increible",
  "ingeniosa",
  "ingenioso",
  "inspirador",
  "inspiradora",
  "insuperable",
  "integra",
  "integro",
  "inteligente",
  "intrepida",
  "intrepido",
  "invicta",
  "invicto",
  "jugueton",
  "juguetona",
  "justa",
  "justo",
  "leal",
  "libre",
  "luminosa",
  "luminoso",
  "magnifica",
  "magnifico",
  "maravillosa",
  "maravilloso",
  "noble",
  "nobleza",
  "notable",
  "ocurrente",
  "optimista",
  "poderosa",
  "poderoso",
  "positiva",
  "positivo",
  "preciosa",
  "precioso",
  "proactiva",
  "proactivo",
  "prodigiosa",
  "prodigioso",
  "radiante",
  "receptiva",
  "receptivo",
  "renovador",
  "renovadora",
  "resiliente",
  "respetuosa",
  "respetuoso",
  "sabia",
  "sabio",
  "sensacional",
  "serena",
  "sereno",
  "sincera",
  "sincero",
  "soñador",
  "soñadora",
  "sorprendente",
  "sublime",
  "talentosa",
  "talentoso",
  "tenaz",
  "tranquila",
  "tranquilo",
  "unica",
  "unico",
  "valiente",
  "valiosa",
  "valioso",
  "vencedor",
  "vencedora",
  "versatil",
  "visionaria",
  "visionario",
  "vivaz",
  "zalamera",
  "zalamero",
];

const sustantivos = [
  "perrito",
  "gatito",
  "pajarillo",
  "conejito",
  "pollito",
  "cachorro",
  "elefantito",
  "leoncito",
  "tigrecito",
  "ratita",
  "caballito",
  "zorrito",
  "cerdito",
  "buitrecito",
  "lobito",
  "osito",
  "vaca",
  "mono",
  "pecesito",
  "pinguinito",
  "tortuguita",
  "lagartija",
  "abejita",
  "mariposita",
  "mosquito",
  "aranita",
  "hormiguita",
  "cangrejito",
  "delfincito",
  "ballenita",
  "pulpo",
  "pececito",
  "cocodrilito",
  "serpiente",
  "camellito",
  "hipopotamo",
  "rinocerontito",
  "jirafita",
  "cheetah",
  "panda",
  "kanguro",
  "koalita",
  "pinguino",
  "gorilita",
  "chimpancé",
  "lemurcito",
  "llamita",
  "alpacita",
  "ciervito",
  "corderito",
  "zorrillo",
  "tejoncito",
  "mapachito",
  "armadillito",
  "murcielaguito",
  "erizito",
  "topillo",
  "comadrejita",
  "nutria",
  "castorcito",
  "mofeta",
  "tejon",
  "liebrecita",
  "focita",
  "nutria",
  "dromedario",
  "quokkita",
  "capibarita",
  "mandril",
  "tamarin",
  "suricata",
  "civeta",
  "mangosta",
  "huroncito",
  "ferret",
  "comadreja",
  "martita",
  "zorrocilla",
  "coati",
  "puercoespin",
  "zarigueyita",
  "petaurista",
  "cuscus",
  "fenec",
  "galaguito",
  "lemming",
  "mangosta",
  "mara",
  "marmota",
  "musarana",
  "liron",
  "cuy",
  "viscachita",
  "jerbo",
  "lemur",
  "musguito",
  "okapito",
  "orangutancito",
  "quokkita",
  "wombatito",
];

const randomArrayItem = (array: string[]) => {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
};

export const getUsername = () => {
  return `${randomArrayItem(adjetivos)}-${randomArrayItem(
    sustantivos,
  )}-${Date.now()}`;
};
