document.getElementById("id_departamento").onchange=function(){
               
    var departamento = document.getElementById("id_departamento");
    var municipio = document.getElementById("id_municipio");
    municipio.innerHTML=""
    switch(departamento.value){
        case "Ahuachapán":
        var optionArray = [
            "",
            "Ahuachapán",
            "Apaneca",
            "Atiquizaya",
            "Concepción de Ataco",
            "El Refugio",
            "Guaymango",
            "Jujutla",
            "San Francisco Menéndez",
            "San Lorenzo",
            "San Pedro Puxtla",
            "Tacuba",
            "Turín",
            ];
            break;
            case "Cabañas":
        var optionArray = [
            "",
            "Sensuntepeque",
            "Cinquera",
            "Dolores",
            "Guacotecti",
            "Ilobasco",
            "Jutiapa",
            "SanIsidro",
            "Tejutepeque",
            "Victoria"
        ];
        break;
        case "Chalatenango":
            var optionArray=[
                "",
                "Chalatenango",
                "Agua Caliente",
                "Arcatao",
                "Azacualpa",
                "Cancasque",
                "Citalá",
                "Comalapa",
                "Concepción Quezaltepeque",
                "Dulce NombredeMaría",
                "El Carrizal",
                "El Paraíso",
                "La Laguna",
                "La Palma",
                "La Reina",
                "Las Flores",
                "Las Vueltas",
                "Nombre de Jesús",
                "Nueva Concepción",
                "Nueva Trinidad",
                "Ojos de Agua",
                "Potonico",
                "San Antonio de la Cruz",
                "San Antonio Los Ranchos",
                "San Fernando",
                "San FranciscoLempa",
                "San FranciscoMorazán",
                "San Ignacio",
                "San Isidro Labrador",
                "San Luis del Carmen",
                "San Miguel de Mercedes",
                "San Rafael",
                "SantaRita",
                "Tejutla",
            ]
            break;
            case "Cuscatlán":
                var optionArray=[
                    "",
                    "Cojutepeque",
                    "Candelaria",
                    "El Carmen",
                    "El Rosario",
                    "Monte San Juan",
                    "Oratorio de Concepción",
                    "SanBartolomé Perulapía",
                    "San Cristóbal",
                    "San José Guayabal",
                    "San Pedro Perulapán",
                    "San Rafael Cedros",
                    "San Ramón",
                    "Santa Cruz Analquito",
                    "Santa Cruz Michapa",
                    "Suchitoto",
                    "Tenancingo"
                 ]
                 break;
            case "La Libertad":
                var optionArray=[
                    "",
                    "Santa Tecla",
                    "Antiguo Cuscatlán",
                    "Chiltiupán",
                    "Ciudad Arce",
                    "Colón",
                    "Comasagua",
                    "Huizúcar",
                    "Jayaque",
                    "Jicalapa",
                    "La Libertad",
                    "Nuevo Cuscatlán",
                    "Quezaltepeque",
                    "San Juan Opico",
                    "Sacacoyo",
                    "San José Villanueva",
                    "San Matías",
                    "San Pablo Tacachico",
                    "Talnique",
                    "Tamanique",
                    "Teotepeque",
                    "Tepecoyo",
                    "Zaragoza",
                ]
                break
                case "La Paz":
                    var optionArray=[
                    "",
                    "Zacatecoluca",
                    "Cuyultitán",
                    "El Rosario",
                    "Jerusalén",
                    "Mercedes La Ceiba",
                    "Olocuilta",
                    "Paraíso de Osorio",
                    "SanAntonio Masahuat",
                    "San Emigdio",
                    "San Francisco Chinameca",
                    "San Pedro Masahuat",
                    "San Juan Nonualco",
                    "San Juan Talpa",
                    "San Juan Tepezontes",
                    "San Luis LaHerradura",
                    "San Luis Talpa",
                    "San Miguel Tepezontes",
                    "San Pedro Nonualco",
                    "San Rafael Obrajuelo",
                    "Santa María Ostuma",
                    "Santiago Nonualco",
                    "Tapalhuaca",
                    "LaUnión",
                 ]
                 break;
                case "La Unión":
                    var optionArray=[
                        "",
                        "Anamorós",
                        "Bolívar",
                        "Concepción de Oriente",
                        "Conchagua",
                        "El Carmen",
                        "El Sauce",
                        "Intipucá",
                        "Lislique",
                        "Meanguera del Golfo",
                        "Nueva Esparta",
                        "Pasaquina",
                        "Polorós",
                        "San Alejo",
                        "San José",
                        "Santa Rosa de Lima",
                        "Yayantique",
                        "Yucuaiquín",
                    ]
                break;
                case "Morazán":
                    var optionArray=[
                        "",
                        "San Francisco Gotera",
                        "Arambala",
                        "Cacaopera",
                        "Chilanga",
                        "Corinto",
                        "Delicias de Concepción",
                        "El Divisadero",
                        "El Rosario",
                        "Gualococti",
                        "Guatajiagua",
                        "Joateca",
                        "Jocoaitique",
                        "Jocoro",
                        "Lolotiquillo",
                        "Meanguera",
                        "Osicala",
                        "Perquín",
                        "San Carlos",
                        "San Fernando",
                        "San Isidro",
                        "San Simón",
                        "Sensembra",
                        "Sociedad",
                        "Torola",
                        "Yamabal",
                        "Yoloaiquín",
                    ]
                break;
                case "San Miguel":
                    var optionArray=[
                        "",
                        "San Miguel",
                        "Carolina",
                        "Chapeltique",
                        "Chinameca",
                        "Chirilagua",
                        "Ciudad Barrios",
                        "Comacarán",
                        "El Tránsito",
                        "Lolotique",
                        "Moncagua",
                        "Nueva Guadalupe",
                        "Nuevo Edén de San Juan",
                        "Quelepa",
                        "San Antonio",
                        "San Gerardo",
                        "San Jorge",
                        "San Luis de la Reina",
                        "San Rafael Oriente",
                        "Sesori",
                        "Uluazapa",
                    ]
                break;
                case "San Salvador":
                    var optionArray=[
                        "",
                        "San Salvador",
                        "Aguilares",
                        "Apopa",
                        "Ayutuxtepeque",
                        "Ciudad Delgado",
                        "Cuscatancingo",
                        "El Paisnal",
                        "Guazapa",
                        "Ilopango",
                        "Mejicanos",
                        "Nejapa",
                        "Panchimalco",
                        "Rosario de Mora",
                        "San Marcos",
                        "San Martín",
                        "Santiago Texacuangos",
                        "Santo Tomás",
                        "Soyapango",
                        "Tonacatepeque",
                    ]
                break;
                case "San Vicente":
                    var optionArray=[
                        "",
                        "San Vicente",
                        "Apastepeque",
                        "Guadalupe",
                        "San Cayetano Istepeque",
                        "San Esteban Catarina",
                        "San Ildefonso",
                        "San Lorenzo",
                        "San Sebastián",
                        "Santa Clara",
                        "Santo Domingo",
                        "Tecoluca",
                        "Tepetitán",
                        "Verapaz",
                    ]
                break;
                case "Santa Ana":
                    var optionArray=[
                        "",
                        "Santa Ana",
                        "Candelaria de la Frontera",
                        "Chalchuapa",
                        "Coatepeque",
                        "El Congo",
                        "El Porvenir",
                        "Masahuat",
                        "Metapán",
                        "San Antonio Pajonal",
                        "San Sebastián Salitrillo",
                        "Santa Rosa Guachipilín",
                        "Santiago de la Frontera",
                        "Texistepeque",

                    ]
                break;
                case "Sonsonate":
                    var optionArray=[
                        "",
                        "Sonsonate", 
                        "Acajutla",
                        "Armenia",
                        "Caluco",
                        "Cuisnahuat",
                        "Izalco",
                        "Juayúa",
                        "Nahuizalco",
                        "Nahulingo",
                        "Salcoatitán",
                        "San Antonio del Monte",
                        "San Julián",
                        "Santa Catarina Masahuat",
                        "Santa Isabel Ishuatán",
                        "Santo Domingo de Guzmán",
                        "Sonzacate",
                    ]
                break;
                case "Usulután":
                    var optionArray=[
                        "",
                        "Usulután", 
                        "Alegría",
                        "Berlín",
                        "California",
                        "Concepción Batres",
                        "El Triunfo",
                        "Ereguayquín",
                        "Estanzuelas",
                        "Jiquilisco",
                        "Jucuapa",
                        "Jucuarán",
                        "Mercedes Umaña",
                        "Nueva Granada",
                        "Ozatlán",
                        "Puerto El Triunfo",
                        "San Agustín",
                        "San Buenaventura",
                        "San Dionisio",
                        "San Francisco Javier",
                        "Santa Elena",
                        "Santa María",
                        "Santiago de María",
                        "Tecapán",
                    ]
                break;
}
    for(let i=0;i<optionArray.length;i++){
        var newOption = document.createElement("option");
        newOption.value = optionArray[i];
        newOption.innerHTML = optionArray[i];
        municipio.options.add(newOption);
    }
}