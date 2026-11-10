// Ejemplos de demostración: imagen, crédito y licencia de cada caso.
const SAMPLES = [
  {
    "img": "s/e0.jpg",
    "sector": "construccion",
    "credit": "Kanyakumari construction workers · ruffin_ready · CC BY 2.0",
    "link": "https://www.flickr.com/photos/51668926@N00/5213835620",
    "ms": 12487,
    "items": [
      [
        "casco",
        "casco de seguridad"
      ],
      [
        "chaleco",
        "chaleco o ropa reflectante"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "guantes",
        "guantes de trabajo"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "arnes",
        "arnés con línea de vida (solo si trabaja a más de 1,8 m o en borde abierto)"
      ]
    ],
    "result": {
      "resumen": "Ninguno de los trabajadores usa EPP básico (casco, chaleco, calzado, guantes, lentes) ni protección contra caídas, a pesar de trabajar en andamio de bambú a varios metros de altura. El nivel de cumplimiento es crítico y se requiere intervención inmediata.",
      "nivel": "critico",
      "personas": [
        {
          "n": 1,
          "caja": [
            35,
            70,
            130,
            340
          ],
          "actividad": "trabaja sentado en poste alto del andamio",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "no usa casco de seguridad"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco reflectante"
            },
            "calzado": {
              "estado": "falta",
              "nota": "no se ve calzado de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no usa guantes de trabajo"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes de seguridad"
            },
            "arnes": {
              "estado": "falta",
              "nota": "trabaja en altura sin arnés ni línea de vida"
            }
          },
          "riesgo": "alto",
          "accion": "detener trabajo, entregar casco, chaleco, calzado, guantes, lentes y arnés con línea de vida"
        },
        {
          "n": 2,
          "caja": [
            185,
            330,
            280,
            610
          ],
          "actividad": "sube por postes del andamio",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "no usa casco"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco reflectante"
            },
            "calzado": {
              "estado": "falta",
              "nota": "no se ve calzado de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no usa guantes"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes"
            },
            "arnes": {
              "estado": "falta",
              "nota": "trabaja en altura sin protección contra caídas"
            }
          },
          "riesgo": "alto",
          "accion": "prohibir ascenso sin EPP y arnés con línea de vida"
        },
        {
          "n": 3,
          "caja": [
            330,
            220,
            435,
            470
          ],
          "actividad": "camina sobre viga horizontal del andamio",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "no usa casco"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco reflectante"
            },
            "calzado": {
              "estado": "falta",
              "nota": "no se ve calzado de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no usa guantes"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes"
            },
            "arnes": {
              "estado": "falta",
              "nota": "trabaja en altura sin arnés"
            }
          },
          "riesgo": "alto",
          "accion": "bajar al trabajador y exigir EPP completo antes de reanudar"
        },
        {
          "n": 4,
          "caja": [
            435,
            435,
            500,
            630
          ],
          "actividad": "se apoya en postes del andamio",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "no usa casco"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco reflectante"
            },
            "calzado": {
              "estado": "falta",
              "nota": "no se ve calzado de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no usa guantes"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes"
            },
            "arnes": {
              "estado": "falta",
              "nota": "trabaja en altura sin arnés"
            }
          },
          "riesgo": "alto",
          "accion": "exigir uso de EPP y protección contra caídas"
        },
        {
          "n": 5,
          "caja": [
            505,
            495,
            570,
            670
          ],
          "actividad": "se sienta sobre viga del andamio",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "no usa casco"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco reflectante"
            },
            "calzado": {
              "estado": "falta",
              "nota": "no se ve calzado de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no usa guantes"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes"
            },
            "arnes": {
              "estado": "falta",
              "nota": "trabaja en altura sin arnés"
            }
          },
          "riesgo": "alto",
          "accion": "retirar del lugar y capacitar en uso de EPP"
        },
        {
          "n": 6,
          "caja": [
            600,
            625,
            660,
            760
          ],
          "actividad": "trabaja en nivel intermedio del andamio",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "no usa casco"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco reflectante"
            },
            "calzado": {
              "estado": "falta",
              "nota": "no se ve calzado de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no usa guantes"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes"
            },
            "arnes": {
              "estado": "falta",
              "nota": "trabaja en altura sin arnés"
            }
          },
          "riesgo": "alto",
          "accion": "detener actividad y entregar EPP completo"
        },
        {
          "n": 7,
          "caja": [
            650,
            675,
            730,
            850
          ],
          "actividad": "trabaja en andamio con brazos en alto",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "no usa casco"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco reflectante"
            },
            "calzado": {
              "estado": "falta",
              "nota": "no se ve calzado de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no usa guantes"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes"
            },
            "arnes": {
              "estado": "falta",
              "nota": "trabaja en altura sin arnés"
            }
          },
          "riesgo": "alto",
          "accion": "exigir EPP y arnés con línea de vida antes de continuar"
        },
        {
          "n": 8,
          "caja": [
            715,
            745,
            760,
            880
          ],
          "actividad": "trabaja en nivel inferior del andamio",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "no usa casco"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco reflectante"
            },
            "calzado": {
              "estado": "falta",
              "nota": "no se ve calzado de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no usa guantes"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no se confirma trabajo sobre 1,8 m o borde abierto"
            }
          },
          "riesgo": "medio",
          "accion": "entregar casco, chaleco, calzado, guantes y lentes"
        }
      ],
      "condiciones": [
        {
          "titulo": "andamio de bambú sin protección colectiva",
          "detalle": "estructura artesanal sin barandas, tablones seguros ni sistema contra caídas",
          "severidad": "alta",
          "caja": [
            0,
            0,
            1000,
            1000
          ]
        },
        {
          "titulo": "trabajo en altura sin arnés ni línea de vida",
          "detalle": "varios trabajadores sobre vigas y postes a más de 1,8 m sin sistema de detención de caídas",
          "severidad": "alta",
          "caja": [
            35,
            70,
            760,
            880
          ]
        },
        {
          "titulo": "ausencia total de EPP básico",
          "detalle": "ningún trabajador visible usa casco, chaleco, calzado, guantes ni lentes de seguridad",
          "severidad": "alta",
          "caja": [
            35,
            70,
            760,
            880
          ]
        },
        {
          "titulo": "orden y aseo deficiente en andamio",
          "detalle": "amarras y materiales sueltos que pueden generar tropezón o caída de objetos",
          "severidad": "media",
          "caja": [
            0,
            300,
            1000,
            1000
          ]
        }
      ],
      "no_se_puede_evaluar": "no se confirma si el andamio cumple con cálculo estructural, anclajes ni si hay persona competente supervisando; tampoco se puede verificar el estado del calzado por la distancia y resolución de la imagen"
    }
  },
  {
    "img": "s/e1.jpg",
    "sector": "construccion",
    "credit": "Obreros · Daquella manera · CC0",
    "link": "https://www.flickr.com/photos/62518311@N00/428896110",
    "ms": 7898,
    "items": [
      [
        "casco",
        "casco de seguridad"
      ],
      [
        "chaleco",
        "chaleco o ropa reflectante"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "guantes",
        "guantes de trabajo"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "arnes",
        "arnés con línea de vida (solo si trabaja a más de 1,8 m o en borde abierto)"
      ]
    ],
    "result": {
      "resumen": "Se observa cumplimiento parcial de EPP; faltan lentes y calzado visible en varios trabajadores, y se usa disco de corte sin protección ocular adecuada.",
      "nivel": "observaciones",
      "personas": [
        {
          "n": 1,
          "caja": [
            40,
            45,
            330,
            1000
          ],
          "actividad": "supervisa o asiste en corte de losa",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco amarillo puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante puesto"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "no se ve el calzado"
            },
            "guantes": {
              "estado": "ok",
              "nota": "guantes blancos puestos"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no se observan lentes de seguridad"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "trabaja a nivel de suelo"
            }
          },
          "riesgo": "medio",
          "accion": "usar lentes de seguridad y verificar calzado de seguridad"
        },
        {
          "n": 2,
          "caja": [
            260,
            300,
            570,
            1000
          ],
          "actividad": "sostiene losa mientras se corta",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco amarillo puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco naranja reflectante puesto"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "no se ve el calzado"
            },
            "guantes": {
              "estado": "ok",
              "nota": "guantes blancos puestos"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no se observan lentes de seguridad"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "trabaja a nivel de suelo"
            }
          },
          "riesgo": "alto",
          "accion": "usar lentes de seguridad obligatoriamente al asistir en corte con disco"
        },
        {
          "n": 3,
          "caja": [
            590,
            240,
            1000,
            1000
          ],
          "actividad": "corta losa con disco abrasivo",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco blanco puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante puesto"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "no se ve el calzado"
            },
            "guantes": {
              "estado": "ok",
              "nota": "guantes blancos puestos"
            },
            "lentes": {
              "estado": "ok",
              "nota": "lentes de seguridad puestos"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "trabaja a nivel de suelo"
            }
          },
          "riesgo": "medio",
          "accion": "verificar uso de calzado de seguridad y resguardo del disco"
        },
        {
          "n": 4,
          "caja": [
            390,
            60,
            590,
            500
          ],
          "actividad": "trabaja sobre estructura metálica",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco tipo minero puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante puesto"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "no se ve el calzado"
            },
            "guantes": {
              "estado": "no_visible",
              "nota": "no se ven las manos"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "distancia impide confirmar"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no se evidencia trabajo sobre 1,8 m"
            }
          },
          "riesgo": "medio",
          "accion": "confirmar uso de calzado y guantes según tarea"
        },
        {
          "n": 5,
          "caja": [
            700,
            80,
            820,
            410
          ],
          "actividad": "observa desde atrás de la obra",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco blanco puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante puesto"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "no se ve el calzado"
            },
            "guantes": {
              "estado": "no_visible",
              "nota": "no se ven las manos"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "distancia impide confirmar"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no se evidencia trabajo en altura"
            }
          },
          "riesgo": "bajo",
          "accion": "mantener uso de EPP básico al ingresar al área"
        },
        {
          "n": 6,
          "caja": [
            240,
            90,
            320,
            360
          ],
          "actividad": "observa la labor de corte",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco amarillo puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante puesto"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "no se ve el calzado"
            },
            "guantes": {
              "estado": "no_visible",
              "nota": "no se ven las manos"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "distancia impide confirmar"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no se evidencia trabajo en altura"
            }
          },
          "riesgo": "bajo",
          "accion": "verificar uso de calzado de seguridad"
        }
      ],
      "condiciones": [
        {
          "titulo": "corte con disco abrasivo",
          "detalle": "trabajador corta losa con disco expuesto y chispas posibles",
          "severidad": "alta",
          "caja": [
            500,
            700,
            820,
            1000
          ]
        },
        {
          "titulo": "falta de protección ocular",
          "detalle": "dos trabajadores sin lentes cerca de operación de corte",
          "severidad": "alta",
          "caja": [
            40,
            45,
            570,
            1000
          ]
        },
        {
          "titulo": "calzado no visible",
          "detalle": "no se confirma uso de calzado de seguridad en trabajadores",
          "severidad": "media",
          "caja": [
            40,
            45,
            1000,
            1000
          ]
        }
      ],
      "no_se_puede_evaluar": "marca y certificación de los EPP, estado del resguardo del disco, y calzado de todas las personas por ángulo de la foto"
    }
  },
  {
    "img": "s/e2.jpg",
    "sector": "soldadura",
    "credit": "Modern Alchemist · Black_Claw · CC BY 2.0",
    "link": "https://www.flickr.com/photos/24833567@N03/6467618557",
    "ms": 4176,
    "items": [
      [
        "careta",
        "careta de soldar o protector facial"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "guantes",
        "guantes de cuero"
      ],
      [
        "ropa",
        "ropa ignífuga, coleto o delantal de cuero"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "auditiva",
        "protección auditiva (si esmerila o corta)"
      ]
    ],
    "result": {
      "resumen": "El trabajador realiza soldadura sin los EPP críticos exigidos por el DS 594, exponiéndose a radiación, chispas y quemaduras.",
      "nivel": "critico",
      "personas": [
        {
          "n": 1,
          "caja": [
            0,
            0,
            755,
            920
          ],
          "actividad": "soldadura manual con chispas visibles",
          "epp": {
            "careta": {
              "estado": "falta",
              "nota": "no usa careta ni protector facial durante soldadura"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no lleva lentes de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "soldadura a mano descubierta"
            },
            "ropa": {
              "estado": "incorrecto",
              "nota": "usa polera y pantalón común, no ropa ignífuga ni delantal de cuero"
            },
            "calzado": {
              "estado": "incorrecto",
              "nota": "usa chancletas, no calzado de seguridad"
            },
            "auditiva": {
              "estado": "no_visible",
              "nota": "no se confirma uso de protección auditiva"
            }
          },
          "riesgo": "alto",
          "accion": "Detener la tarea y usar careta de soldar, lentes de seguridad, guantes de cuero, ropa ignífuga o delantal de cuero y calzado de seguridad antes de continuar."
        }
      ],
      "condiciones": [
        {
          "titulo": "Chispas sin resguardo",
          "detalle": "Soldadura en piso sin pantalla ni resguardo que contenga chispas y material fundido.",
          "severidad": "alta",
          "caja": [
            300,
            600,
            1000,
            1000
          ]
        },
        {
          "titulo": "Calzado inadecuado",
          "detalle": "Trabajador usa chancletas en zona de soldadura y metalmecánica.",
          "severidad": "alta",
          "caja": [
            0,
            820,
            220,
            930
          ]
        },
        {
          "titulo": "Orden y aseo",
          "detalle": "Cables y escombros en el piso que pueden generar tropiezos o contacto con chispas.",
          "severidad": "media",
          "caja": [
            250,
            300,
            1000,
            750
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si el área está delimitada ni si existe protección auditiva disponible."
    }
  },
  {
    "img": "s/e3.jpg",
    "sector": "electrico",
    "credit": "2015 Lineman's Rodeo 05012015 017 · City of Marietta, GA · CC BY 2.0",
    "link": "https://www.flickr.com/photos/32370233@N05/17193879599",
    "ms": 15952,
    "items": [
      [
        "casco",
        "casco dieléctrico"
      ],
      [
        "guantes",
        "guantes dieléctricos o de cuero según tarea"
      ],
      [
        "careta",
        "lentes o careta facial contra arco"
      ],
      [
        "ropa",
        "ropa ignífuga de manga larga"
      ],
      [
        "calzado",
        "calzado dieléctrico"
      ],
      [
        "arnes",
        "arnés (solo si trabaja en altura o en poste)"
      ]
    ],
    "result": {
      "resumen": "El trabajador en altura usa casco y arnés, pero carece de guantes dieléctricos y calzado visible, exponiéndose a contacto eléctrico y caída.",
      "nivel": "observaciones",
      "personas": [
        {
          "n": 1,
          "caja": [
            85,
            250,
            820,
            1000
          ],
          "actividad": "trabaja en poste de energía eléctrica sujetando herramienta con barra aislante",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco amarillo puesto y sujeto"
            },
            "guantes": {
              "estado": "falta",
              "nota": "manos desnudas al manipular herramienta eléctrica"
            },
            "careta": {
              "estado": "no_visible",
              "nota": "no se observa protección facial contra arco"
            },
            "ropa": {
              "estado": "incorrecto",
              "nota": "manga larga azul, pero no se confirma que sea ignífuga"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "calzado no visible por ángulo y equipo"
            },
            "arnes": {
              "estado": "ok",
              "nota": "arnés de cuerpo completo puesto y anclado al poste"
            }
          },
          "riesgo": "alto",
          "accion": "Usar guantes dieléctricos, verificar ropa ignífuga y calzado dieléctrico; usar careta facial contra arco eléctrico."
        }
      ],
      "condiciones": [
        {
          "titulo": "trabajo en altura sin protección colectiva",
          "detalle": "trabajador suspendido en poste solo con arnés, sin barandilla ni plataforma",
          "severidad": "alta",
          "caja": [
            0,
            150,
            1000,
            1000
          ]
        },
        {
          "titulo": "manipulación eléctrica sin guantes dieléctricos",
          "detalle": "manos expuestas al contacto con herramienta y elementos energizados",
          "severidad": "alta",
          "caja": [
            550,
            250,
            660,
            420
          ]
        }
      ],
      "no_se_puede_evaluar": "No se confirma si la ropa es ignífuga ni si el calzado es dieléctrico por no verse en la imagen."
    }
  },
  {
    "img": "s/e4.jpg",
    "sector": "agro",
    "credit": "IMG_1082 · dpu-ucl · CC BY 2.0",
    "link": "https://www.flickr.com/photos/75746135@N03/34926558253",
    "ms": 7972,
    "items": [
      [
        "guantes",
        "guantes"
      ],
      [
        "respirador",
        "respirador o mascarilla (si aplica agroquímicos)"
      ],
      [
        "lentes",
        "lentes (si aplica agroquímicos)"
      ],
      [
        "ropa",
        "ropa de manga larga"
      ],
      [
        "calzado",
        "botas o calzado cerrado"
      ],
      [
        "sombrero",
        "protección solar (sombrero o legionario)"
      ]
    ],
    "result": {
      "resumen": "Tres trabajadores aplican agroquímicos con mochilas rociadoras; dos usan EPP parcial y uno va sin protección, lo que genera riesgo alto por exposición a químicos y radiación solar.",
      "nivel": "critico",
      "personas": [
        {
          "n": 1,
          "caja": [
            280,
            395,
            365,
            665
          ],
          "actividad": "rociando cultivo con mochila",
          "epp": {
            "guantes": {
              "estado": "no_visible",
              "nota": "manos ocultas por vegetación"
            },
            "respirador": {
              "estado": "ok",
              "nota": "cubre nariz y boca"
            },
            "lentes": {
              "estado": "ok",
              "nota": "protección ocular visible"
            },
            "ropa": {
              "estado": "ok",
              "nota": "manga larga azul"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "pies ocultos por pasto"
            },
            "sombrero": {
              "estado": "ok",
              "nota": "usa sombrero de ala ancha"
            }
          },
          "riesgo": "alto",
          "accion": "verificar uso de guantes resistentes a químicos y calzado cerrado impermeable"
        },
        {
          "n": 2,
          "caja": [
            720,
            360,
            805,
            655
          ],
          "actividad": "rociando cultivo con mochila",
          "epp": {
            "guantes": {
              "estado": "no_visible",
              "nota": "manos ocultas por vegetación"
            },
            "respirador": {
              "estado": "falta",
              "nota": "no usa protección respiratoria"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "no se confirma uso"
            },
            "ropa": {
              "estado": "ok",
              "nota": "manga larga verde"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "pies ocultos por pasto"
            },
            "sombrero": {
              "estado": "ok",
              "nota": "usa pañuelo o cobertura en cabeza"
            }
          },
          "riesgo": "alto",
          "accion": "proveer respirador, lentes de protección y guantes para manipulación de agroquímicos"
        },
        {
          "n": 3,
          "caja": [
            910,
            280,
            995,
            600
          ],
          "actividad": "caminando con recipiente amarillo",
          "epp": {
            "guantes": {
              "estado": "falta",
              "nota": "no lleva guantes"
            },
            "respirador": {
              "estado": "falta",
              "nota": "no usa protección respiratoria"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa protección ocular"
            },
            "ropa": {
              "estado": "incorrecto",
              "nota": "camisa de manga corta"
            },
            "calzado": {
              "estado": "falta",
              "nota": "camina descalzo"
            },
            "sombrero": {
              "estado": "falta",
              "nota": "sin protección solar"
            }
          },
          "riesgo": "alto",
          "accion": "prohibir ingreso sin EPP completo: calzado cerrado, ropa manga larga, guantes, lentes, respirador y protección solar"
        }
      ],
      "condiciones": [
        {
          "titulo": "exposición a agroquímicos",
          "detalle": "trabajadores rociando sin EPP respiratorio completo y sin guantes visibles",
          "severidad": "alta",
          "caja": [
            270,
            360,
            830,
            680
          ]
        },
        {
          "titulo": "trabajo descalzo",
          "detalle": "tercero camina sin calzado en campo con posible contacto con químicos",
          "severidad": "alta",
          "caja": [
            905,
            280,
            995,
            600
          ]
        },
        {
          "titulo": "ropa inadecuada",
          "detalle": "camisa de manga corta expone piel a radiación solar y posibles salpicaduras",
          "severidad": "media",
          "caja": [
            930,
            320,
            990,
            480
          ]
        }
      ],
      "no_se_puede_evaluar": "no se confirma si el recipiente del tercer trabajador contiene agroquímico; estado de calzado de los dos primeros oculto por el pasto"
    }
  },
  {
    "img": "s/e5.jpg",
    "sector": "mineria",
    "credit": "Montague Tube · MTAPhotos · CC BY 2.0",
    "link": "https://www.flickr.com/photos/61135621@N03/8696562754",
    "ms": 3706,
    "items": [
      [
        "casco",
        "casco de seguridad (con lámpara en subterránea)"
      ],
      [
        "chaleco",
        "chaleco o ropa reflectante"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "guantes",
        "guantes de trabajo"
      ],
      [
        "auditiva",
        "protección auditiva (si hay equipos ruidosos)"
      ],
      [
        "respirador",
        "respirador (si hay polvo o gases)"
      ]
    ],
    "result": {
      "resumen": "El trabajador visible cumple con la mayoría del EPP básico, pero no se puede confirmar protección auditiva ni respirador, y el calzado no está visible.",
      "nivel": "observaciones",
      "personas": [
        {
          "n": 1,
          "caja": [
            335,
            155,
            965,
            1000
          ],
          "actividad": "inspección o recorrido subterráneo con linterna",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco blanco puesto correctamente"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante puesto"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "no se ve el calzado en la imagen"
            },
            "lentes": {
              "estado": "ok",
              "nota": "lentes de seguridad puestos"
            },
            "guantes": {
              "estado": "ok",
              "nota": "guantes de trabajo puestos"
            },
            "auditiva": {
              "estado": "no_visible",
              "nota": "no se confirma uso de protección auditiva"
            },
            "respirador": {
              "estado": "no_visible",
              "nota": "no se confirma uso de respirador"
            }
          },
          "riesgo": "medio",
          "accion": "Verificar uso de protección auditiva y respirador según contaminantes y ruido del sector; confirmar calzado de seguridad."
        }
      ],
      "condiciones": [
        {
          "titulo": "entorno subterráneo",
          "detalle": "paredes de roca y tuberías expuestas, posible ruido y polvo",
          "severidad": "media",
          "caja": [
            0,
            0,
            1000,
            1000
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si hay equipos ruidosos, polvo o gases que exijan protección auditiva o respirador; tampoco se ve el calzado."
    }
  },
  {
    "img": "s/e6.jpg",
    "sector": "construccion",
    "credit": "Office building construction worker · runneralan2004 · CC BY 2.0",
    "link": "https://www.flickr.com/photos/90029322@N00/10092757714",
    "ms": 3835,
    "items": [
      [
        "casco",
        "casco de seguridad"
      ],
      [
        "chaleco",
        "chaleco o ropa reflectante"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "guantes",
        "guantes de trabajo"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "arnes",
        "arnés con línea de vida (solo si trabaja a más de 1,8 m o en borde abierto)"
      ]
    ],
    "result": {
      "resumen": "El trabajador cumple con la mayoría del EPP obligatorio, pero no se observan lentes de seguridad ni protección ocular adecuada para soldadura, exponiéndolo a chispas y radiación.",
      "nivel": "observaciones",
      "personas": [
        {
          "n": 1,
          "caja": [
            360,
            80,
            655,
            960
          ],
          "actividad": "corta metal con amoladora generando chispas en altura",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco de seguridad puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante puesto"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "calzado no visible por ángulo y altura"
            },
            "guantes": {
              "estado": "ok",
              "nota": "guantes de trabajo puestos"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no se observan lentes de seguridad ni careta para soldadura"
            },
            "arnes": {
              "estado": "ok",
              "nota": "arnés con línea de vida visible"
            }
          },
          "riesgo": "alto",
          "accion": "proveer y exigir uso de lentes de seguridad o careta de soldadura adecuada para trabajo con amoladora"
        }
      ],
      "condiciones": [
        {
          "titulo": "trabajo en altura sin protección colectiva",
          "detalle": "trabajador expuesto a caída sin baranda ni red de seguridad",
          "severidad": "alta",
          "caja": [
            380,
            400,
            650,
            960
          ]
        },
        {
          "titulo": "chispas sin resguardo",
          "detalle": "amoladora genera chispas sin pantalla ni resguardo para terceros",
          "severidad": "alta",
          "caja": [
            40,
            300,
            620,
            550
          ]
        }
      ],
      "no_se_puede_evaluar": "calzado de seguridad no visible por ángulo de la foto"
    }
  },
  {
    "img": "s/e7.jpg",
    "sector": "soldadura",
    "credit": "Alfred Palmer: Phosphate smelting furnace worker, Muscle Sho · trialsanderrors · CC BY 2.0",
    "link": "https://www.flickr.com/photos/76204898@N00/2895382484",
    "ms": 4156,
    "items": [
      [
        "careta",
        "careta de soldar o protector facial"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "guantes",
        "guantes de cuero"
      ],
      [
        "ropa",
        "ropa ignífuga, coleto o delantal de cuero"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "auditiva",
        "protección auditiva (si esmerila o corta)"
      ]
    ],
    "result": {
      "resumen": "El trabajador no cumple con el EPP requerido para soldadura y metalmecánica; carece de protección ocular, facial, auditiva y calzado de seguridad, exponiéndose a riesgos críticos.",
      "nivel": "critico",
      "personas": [
        {
          "n": 1,
          "caja": [
            85,
            195,
            390,
            870
          ],
          "actividad": "soldando o cortando metal con chispas intensas",
          "epp": {
            "careta": {
              "estado": "falta",
              "nota": "no usa careta ni protector facial"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes de seguridad"
            },
            "guantes": {
              "estado": "ok",
              "nota": "usa guantes de cuero"
            },
            "ropa": {
              "estado": "incorrecto",
              "nota": "ropa de trabajo común, no ignífuga ni delantal de cuero"
            },
            "calzado": {
              "estado": "falta",
              "nota": "calzado común, no calzado de seguridad"
            },
            "auditiva": {
              "estado": "falta",
              "nota": "no usa protección auditiva"
            }
          },
          "riesgo": "alto",
          "accion": "Entregar y exigir uso de careta de soldar, lentes de seguridad, ropa ignífuga o delantal de cuero, calzado de seguridad y protectores auditivos."
        }
      ],
      "condiciones": [
        {
          "titulo": "Chispas sin resguardo",
          "detalle": "Trabajo con soldadura/corte genera chispas y material incandescente sin pantalla ni resguardo para terceros",
          "severidad": "alta",
          "caja": [
            300,
            480,
            1000,
            730
          ]
        },
        {
          "titulo": "Trabajo en altura sin protección colectiva",
          "detalle": "Trabaja sobre plataforma metálica elevada sin barandilla ni arnés de seguridad",
          "severidad": "alta",
          "caja": [
            0,
            700,
            1000,
            1000
          ]
        }
      ],
      "no_se_puede_evaluar": "No se puede confirmar si existen otros trabajadores cercanos expuestos a las chispas ni si hay ventilación local adecuada."
    }
  },
  {
    "img": "s/e8.jpg",
    "sector": "construccion",
    "credit": "construction workers (2) · Paul Keller · CC BY 2.0",
    "link": "https://www.flickr.com/photos/18259771@N00/307442102",
    "ms": 6589,
    "items": [
      [
        "casco",
        "casco de seguridad"
      ],
      [
        "chaleco",
        "chaleco o ropa reflectante"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "guantes",
        "guantes de trabajo"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "arnes",
        "arnés con línea de vida (solo si trabaja a más de 1,8 m o en borde abierto)"
      ]
    ],
    "result": {
      "resumen": "Dos trabajadores en obra sin la mayoría del EPP obligatorio; solo usan casco y calzado básico, faltando chaleco reflectante, guantes, lentes y protección auditiva.",
      "nivel": "critico",
      "personas": [
        {
          "n": 1,
          "caja": [
            58,
            238,
            255,
            986
          ],
          "actividad": "caminando en obra",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco de seguridad azul puesto"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco ni ropa reflectante"
            },
            "calzado": {
              "estado": "ok",
              "nota": "calzado cerrado visible"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no lleva guantes de trabajo"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes de seguridad"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no trabaja a más de 1,8 m ni en borde abierto"
            }
          },
          "riesgo": "alto",
          "accion": "Entregar y exigir uso de chaleco reflectante, guantes y lentes de seguridad; verificar calzado de seguridad con puntera."
        },
        {
          "n": 2,
          "caja": [
            190,
            303,
            402,
            1000
          ],
          "actividad": "caminando sosteniendo casco",
          "epp": {
            "casco": {
              "estado": "incorrecto",
              "nota": "sostiene el casco en la mano, no lo usa en la cabeza"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco ni ropa reflectante"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "pies fuera de encuadre"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no lleva guantes de trabajo"
            },
            "lentes": {
              "estado": "falta",
              "nota": "no usa lentes de seguridad"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no trabaja a más de 1,8 m ni en borde abierto"
            }
          },
          "riesgo": "alto",
          "accion": "Obligar uso correcto de casco en cabeza y entregar chaleco reflectante, guantes y lentes de seguridad."
        },
        {
          "n": 3,
          "caja": [
            715,
            350,
            745,
            535
          ],
          "actividad": "de pie cerca de señal",
          "epp": {
            "casco": {
              "estado": "no_visible",
              "nota": "cabeza fuera de encuadre"
            },
            "chaleco": {
              "estado": "no_visible",
              "nota": "torso parcialmente oculto"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "cuerpo fuera de encuadre"
            },
            "guantes": {
              "estado": "no_visible",
              "nota": "manos no visibles"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "rostro no visible"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no se evidencia trabajo en altura"
            }
          },
          "riesgo": "medio",
          "accion": "Verificar uso completo de EPP obligatorio al trabajador cercano a la señal."
        }
      ],
      "condiciones": [
        {
          "titulo": "Falta de EPP obligatorio",
          "detalle": "Trabajadores sin chaleco reflectante, guantes ni lentes de seguridad en zona de construcción.",
          "severidad": "alta",
          "caja": [
            58,
            238,
            402,
            1000
          ]
        },
        {
          "titulo": "Casco no usado correctamente",
          "detalle": "Trabajador sostiene el casco en la mano en lugar de usarlo en la cabeza.",
          "severidad": "alta",
          "caja": [
            190,
            303,
            402,
            1000
          ]
        },
        {
          "titulo": "Orden y aseo",
          "detalle": "Escombros y materiales sueltos en zona de tránsito cerca de los trabajadores.",
          "severidad": "media",
          "caja": [
            450,
            430,
            720,
            590
          ]
        }
      ],
      "no_se_puede_evaluar": "Calzado del segundo trabajador y estado completo del tercero por encuadre limitado."
    }
  },
  {
    "img": "s/e9.jpg",
    "sector": "construccion",
    "credit": "Construction Worker Houston Texas 1 · billjacobus1 · CC BY 2.0",
    "link": "https://www.flickr.com/photos/67513462@N00/122497422",
    "ms": 5076,
    "items": [
      [
        "casco",
        "casco de seguridad"
      ],
      [
        "chaleco",
        "chaleco o ropa reflectante"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "guantes",
        "guantes de trabajo"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "arnes",
        "arnés con línea de vida (solo si trabaja a más de 1,8 m o en borde abierto)"
      ]
    ],
    "result": {
      "resumen": "Dos trabajadores en altura sobre estructura de acero y refuerzo; ambos usan casco y arnés, pero falta chaleco reflectante y no se confirma calzado ni lentes, con riesgo de caída sin protección colectiva visible.",
      "nivel": "observaciones",
      "personas": [
        {
          "n": 1,
          "caja": [
            380,
            350,
            580,
            620
          ],
          "actividad": "guía carga suspendida con grúa",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco blanco puesto"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "no usa chaleco reflectante"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "pies ocultos por estructura"
            },
            "guantes": {
              "estado": "ok",
              "nota": "guantes al manipular cable"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "no se confirma uso"
            },
            "arnes": {
              "estado": "ok",
              "nota": "arnés visible sujeto a línea de vida"
            }
          },
          "riesgo": "alto",
          "accion": "usar chaleco reflectante y verificar calzado de seguridad y lentes"
        },
        {
          "n": 2,
          "caja": [
            560,
            385,
            795,
            970
          ],
          "actividad": "señala y controla carga en borde abierto",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco café puesto"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "camisa blanca sin chaleco reflectante"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "pies ocultos por encofrado"
            },
            "guantes": {
              "estado": "ok",
              "nota": "guantes de trabajo puestos"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "no se confirma uso"
            },
            "arnes": {
              "estado": "ok",
              "nota": "arnés con línea de vida en altura"
            }
          },
          "riesgo": "alto",
          "accion": "usar chaleco reflectante y verificar calzado de seguridad y lentes"
        }
      ],
      "condiciones": [
        {
          "titulo": "trabajo en borde abierto",
          "detalle": "trabajadores sobre estructura sin baranda ni red de seguridad colectiva",
          "severidad": "alta",
          "caja": [
            320,
            440,
            750,
            990
          ]
        },
        {
          "titulo": "carga suspendida sobre personas",
          "detalle": "grúa mueve elemento pesado directamente sobre zona de trabajo",
          "severidad": "alta",
          "caja": [
            440,
            0,
            540,
            360
          ]
        }
      ],
      "no_se_puede_evaluar": "calzado de seguridad de ambos trabajadores y uso de lentes de seguridad"
    }
  },
  {
    "img": "s/e10.jpg",
    "sector": "industrial",
    "credit": "You Can See Who Loves Who From Miles Around in This NCDOT Wa · NCDOTcommunications · CC BY 2.0",
    "link": "https://www.flickr.com/photos/39320593@N03/16458407463",
    "ms": 5609,
    "items": [
      [
        "casco",
        "casco de seguridad"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "guantes",
        "guantes de trabajo"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "chaleco",
        "chaleco o ropa reflectante"
      ],
      [
        "auditiva",
        "protección auditiva (si hay ruido)"
      ]
    ],
    "result": {
      "resumen": "Dos trabajadores en planta industrial sin EPP básico visible; solo uno usa guantes, faltando casco, lentes, calzado y chaleco reflectante, lo que constituye incumplimiento grave al DS 594.",
      "nivel": "critico",
      "personas": [
        {
          "n": 1,
          "caja": [
            280,
            120,
            480,
            780
          ],
          "actividad": "observa trabajo con cadena y herramienta",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "usa gorra, no casco de seguridad"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "no se observan lentes de seguridad"
            },
            "guantes": {
              "estado": "falta",
              "nota": "manos desprotegidas cerca de cadena"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "parte inferior del cuerpo fuera de encuadre"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "usa polera sin prenda reflectante"
            },
            "auditiva": {
              "estado": "no_visible",
              "nota": "no se observa protección auditiva"
            }
          },
          "riesgo": "alto",
          "accion": "Entregar y exigir uso de casco, lentes, guantes, calzado de seguridad y chaleco reflectante antes de continuar labor."
        },
        {
          "n": 2,
          "caja": [
            600,
            75,
            950,
            760
          ],
          "actividad": "sostiene herramienta y guantes de trabajo",
          "epp": {
            "casco": {
              "estado": "falta",
              "nota": "usa gorra camuflada, no casco de seguridad"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "no se observan lentes de seguridad"
            },
            "guantes": {
              "estado": "ok",
              "nota": "usa guantes de trabajo amarillos"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "parte inferior del cuerpo fuera de encuadre"
            },
            "chaleco": {
              "estado": "falta",
              "nota": "usa sobretodo sin prenda reflectante"
            },
            "auditiva": {
              "estado": "no_visible",
              "nota": "no se observa protección auditiva"
            }
          },
          "riesgo": "alto",
          "accion": "Sustituir gorra por casco, agregar lentes y chaleco reflectante; verificar calzado y protección auditiva según ruido ambiental."
        }
      ],
      "condiciones": [
        {
          "titulo": "Falta de EPP básico",
          "detalle": "Ambos trabajadores carecen de casco, lentes y chaleco reflectante en zona industrial",
          "severidad": "alta",
          "caja": [
            280,
            75,
            950,
            780
          ]
        },
        {
          "titulo": "Manejo de cadena sin guantes",
          "detalle": "Trabajador de polera naranja manipula o está cerca de cadena de acero sin guantes de trabajo",
          "severidad": "alta",
          "caja": [
            230,
            760,
            610,
            850
          ]
        }
      ],
      "no_se_puede_evaluar": "Calzado de seguridad de ambas personas (cortado por encuadre), nivel de ruido para exigir protección auditiva, y estado de abrochado de EPP no visible."
    }
  },
  {
    "img": "s/e11.jpg",
    "sector": "construccion",
    "credit": "Engineering work at Cardiff Central railway station · Dai Lygad · CC BY 2.0",
    "link": "https://www.flickr.com/photos/126337928@N05/20219037724",
    "ms": 11175,
    "items": [
      [
        "casco",
        "casco de seguridad"
      ],
      [
        "chaleco",
        "chaleco o ropa reflectante"
      ],
      [
        "calzado",
        "calzado de seguridad"
      ],
      [
        "guantes",
        "guantes de trabajo"
      ],
      [
        "lentes",
        "lentes de seguridad"
      ],
      [
        "arnes",
        "arnés con línea de vida (solo si trabaja a más de 1,8 m o en borde abierto)"
      ]
    ],
    "result": {
      "resumen": "Los trabajadores usan casco y chaleco reflectante, pero faltan otros EPP básicos como calzado visible, guantes y lentes; el operador de máquina está dentro de la cabina.",
      "nivel": "observaciones",
      "personas": [
        {
          "n": 1,
          "caja": [
            400,
            545,
            535,
            895
          ],
          "actividad": "trabaja junto a vía férrea",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco blanco puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante naranja"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "calzado oculto por el pantalón"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no se observan guantes"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "no se observan lentes"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no trabaja a más de 1,8 m ni borde abierto"
            }
          },
          "riesgo": "medio",
          "accion": "verificar uso de calzado de seguridad, guantes y lentes de protección"
        },
        {
          "n": 2,
          "caja": [
            280,
            545,
            420,
            735
          ],
          "actividad": "trabaja junto a vía férrea",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco blanco puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante naranja"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "calzado oculto"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no se observan guantes"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "no se observan lentes"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no trabaja en altura"
            }
          },
          "riesgo": "medio",
          "accion": "verificar uso de calzado de seguridad, guantes y lentes de protección"
        },
        {
          "n": 3,
          "caja": [
            205,
            530,
            295,
            730
          ],
          "actividad": "trabaja junto a vía férrea",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco blanco puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante naranja"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "calzado oculto"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no se observan guantes"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "no se observan lentes"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no trabaja en altura"
            }
          },
          "riesgo": "medio",
          "accion": "verificar uso de calzado de seguridad, guantes y lentes de protección"
        },
        {
          "n": 4,
          "caja": [
            435,
            515,
            555,
            865
          ],
          "actividad": "trabaja junto a vía férrea",
          "epp": {
            "casco": {
              "estado": "ok",
              "nota": "casco blanco puesto"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante naranja"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "calzado oculto"
            },
            "guantes": {
              "estado": "falta",
              "nota": "no se observan guantes"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "no se observan lentes"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "no trabaja en altura"
            }
          },
          "riesgo": "medio",
          "accion": "verificar uso de calzado de seguridad, guantes y lentes de protección"
        },
        {
          "n": 5,
          "caja": [
            745,
            255,
            830,
            480
          ],
          "actividad": "opera maquinaria amarilla",
          "epp": {
            "casco": {
              "estado": "no_visible",
              "nota": "dentro de cabina, no se confirma casco"
            },
            "chaleco": {
              "estado": "ok",
              "nota": "chaleco reflectante naranja visible"
            },
            "calzado": {
              "estado": "no_visible",
              "nota": "dentro de cabina"
            },
            "guantes": {
              "estado": "no_visible",
              "nota": "dentro de cabina"
            },
            "lentes": {
              "estado": "no_visible",
              "nota": "dentro de cabina"
            },
            "arnes": {
              "estado": "no_aplica",
              "nota": "dentro de cabina cerrada"
            }
          },
          "riesgo": "bajo",
          "accion": "confirmar uso de EPP al descender de la máquina"
        }
      ],
      "condiciones": [
        {
          "titulo": "vía férrea mojada",
          "detalle": "superficie resbaladiza junto a rieles y balasto",
          "severidad": "media",
          "caja": [
            0,
            720,
            620,
            1000
          ]
        },
        {
          "titulo": "maquinaria en movimiento cerca de personas",
          "detalle": "excavadora operando junto a trabajadores a pie",
          "severidad": "media",
          "caja": [
            280,
            155,
            950,
            850
          ]
        }
      ],
      "no_se_puede_evaluar": "calzado, guantes y lentes de los trabajadores a pie por ocultamiento; EPP del operador dentro de cabina"
    }
  }
];
