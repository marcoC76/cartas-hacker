// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

var scenarios = [
  {
    hackerCard : {
      description : "Configuré una estación falsa de Wi-Fi para robar el correo electrónico de las personas y rastrearlas en línea.",
      power : 4,
    },
    playerCards : [
      {
        description : "Nunca uso redes Wi-Fi abiertas o publicas.",
        power : 5,
      },
      {
        description : "Navego por la web, pero nunca hago ningún negocio personal en una red Wi-Fi pública.",
        power : 3,
      },
      {
        description : "Me conecto a cualquier red wifi que pueda usar en público.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "Envié un correo electrónico falso de su banco solicitando los detalles de su cuenta.",
      power : 3,
    },
    playerCards : [
      {
        description : "Revisé la dirección de correo electrónico, el mensaje no vino de mi banco.",
        power : 5,
      },
      {
        description : "Nunca doy información personal en respuesta a un correo electrónico.",
        power : 4,
      },
      {
        description : "Le envié los detalles que solicitó para que pueda verificar mi cuenta.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "Descubrí dónde vives con toda la información personal que compartes en las redes sociales.",
      power : 3,
    },
    playerCards : [
      {
        description : "Nunca comparto información personal en mis cuentas de redes sociales.",
        power : 5,
      },
      {
        description : "Mantengo mis cuentas privadas para que solo mis amigos puedan verlas.",
        power : 4,
      },
      {
        description : "Lo etiqueta todo para que mis amigos siempre sepan lo que estoy haciendo.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "Te vi escribir tu contraseña y hackeado tu cuenta.",
      power : 2,
    },
    playerCards : [
      {
        description : "Utilizo diferentes contraseñas para todas mis otras cuentas.",
        power : 4,
      },
      {
        description : "Cambié mi contraseña en todas mis cuentas porque son las mismas.",
        power : 2,
      },
      {
        description : "Borré esa cuenta y comencé una nueva. ",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "Miré tu historial de navegación en tu teléfono para ver qué haces en línea.",
      power : 2,
    },
    playerCards : [
      {
        description : "Siempre uso un navegador privado que nunca guarda mi historial.",
        power : 4,
      },
      {
        description : "Configuré mi navegador para borrar mi historial cada vez que salgo. ",
        power : 3,
      },
      {
        description : "Nunca borro el historial de mi navegador porque no me gusta escribir en grandes direcciones web.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "He robado tu celular y todo lo que contiene",
      power : 2,
    },
    playerCards : [
      {
        description : "Tengo un patrón de bloqueo a base de conectar 4 puntos en pantalla.",
        power : 1,
      },
      {
        description : "Configuré mi celular para solo ser desactivado con mi cara, mi huella dactilar o mi iris. ",
        power : 3,
      },
      {
        description : "Mi celular solo se desbloquea con una contraseña de 16 caracteres alfa-numéricos.",
        power : 4,
      }
    ]
  }/* ,
  {
    hackerCard : {
      description : "Descubrí dónde vives con toda la información personal que compartes en las redes sociales.",
      power : 3,
    },
    playerCards : [
      {
        description : "Nunca comparto información personal en mis cuentas de redes sociales.",
        power : 5,
      },
      {
        description : "Mantengo mis cuentas privadas para que solo mis amigos puedan verlas.",
        power : 4,
      },
      {
        description : "Lo etiqueta todo para que mis amigos siempre sepan lo que estoy haciendo.",
        power : 1,
      }
    ]
  } */
];