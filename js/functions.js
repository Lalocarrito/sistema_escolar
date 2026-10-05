
        const apellidosMexico = [
        "Hernández", "García", "Martínez", "López", "González",
        "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
        "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
        "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
        "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
        "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
        "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
        "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
        "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva",
        "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
        "León", "Ríos", "Estrada", "Bautista", "Meza",
        "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
        "Lara", "Pacheco", "Soto", "Cervantes", "Robledo",
        "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
        "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza",
        "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
        "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara",
        "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
        "Parra", "Villalobos", "Duarte", "Serrano", "Ávila",
        "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
        ];
 
        const apellidosRusos = [
        "NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov",
        "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov",
        "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev",
        "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov",
        "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev",
        "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin",
        "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov",
        "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov",
        "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin",
        "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"
        ];
        
        const nombresMexicanos = [
        "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
        "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
        "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
        "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
        "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
        "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
        "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
        "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
        "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
        "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
        ];
        
        const nombresFranceses = [
        "Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard",
        "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent",
        "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc",
        "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric",
        "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline",
        "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique",
        "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès",
        "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance",
        "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott",
        "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"
        ];
        
        var salida = "";
        var alertaTimeout = null;

        function mostrarAlerta(tipo, mensaje){
            var contenedor = document.getElementById("alerta");
            if (!contenedor) return;

            var estilos = {
                exito: "border-emerald-200 bg-emerald-50 text-emerald-800",
                error: "border-red-200 bg-red-50 text-red-800",
                info: "border-blue-200 bg-blue-50 text-blue-800"
            };

            var estilo = estilos[tipo] || estilos.info;

            contenedor.classList.remove("hidden");
            contenedor.classList.add("pointer-events-auto");
            contenedor.innerHTML = `
                <div class="rounded-lg border p-3 shadow-md ${estilo}">
                    <div class="flex items-start justify-between gap-3">
                        <p class="text-sm font-medium">${mensaje}</p>
                        <button type="button" onclick="cerrarAlerta()" class="rounded p-1 text-xs font-bold transition hover:bg-black/10">✕</button>
                    </div>
                </div>
            `;

            if (alertaTimeout) {
                clearTimeout(alertaTimeout);
            }

            alertaTimeout = setTimeout(function(){
                cerrarAlerta();
            }, 3500);
        }

        function cerrarAlerta(){
            var contenedor = document.getElementById("alerta");
            if (!contenedor) return;
            contenedor.classList.add("hidden");
            contenedor.classList.remove("pointer-events-auto");
            contenedor.innerHTML = "";
        }


        function validarRegistros(){
            var inputRegistros = document.getElementById("registros");
            var valor = inputRegistros.value.trim();
            var numero = Number(valor);

            if (!Number.isInteger(numero) || numero < 1 || numero > 50000) {
                mostrarAlerta("error", "El número de registros debe ser un entero entre 1 y 50000.");
                inputRegistros.focus();
                document.getElementById("salida").innerHTML = "Ingrese un número de registros válido (1 a 50000).";
                return null;
            }

            inputRegistros.value = numero;
            return numero;
        }


        function generar(){
           var opcion = document.getElementById("opcion").value;
           var registros = validarRegistros();

           if (registros === null) {
               return;
           }

           switch(opcion){
            case "1": generarSQL(registros); break;
            case "2": generarSQL(registros);break;
            case "3": generarCSV(registros);break;
            case "4": generarJSON(registros);break;

           }
    
        }

        function generarSQL(registros){
            salida="INSERT INTO alumnos VALUES <br>";
            var matricula=224250000;
            var nombre =""
            var nombreFrances = ""
            for (let i=0;i<registros;i++){
                let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
                let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
 
                let tieneSegundoNombre = Math.random() < 0.5;
 
                console.log(tieneSegundoNombre)
                let segundoApellido;
                if (apellidoRuso === "NULL") {
                    segundoApellido = "NULL";  
                } else {
                    segundoApellido = `UPPER('${apellidoRuso}')`;
                }
 
                nombre = ""
                nombreFrances = ""
                if (tieneSegundoNombre==0){
                    nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
                }else{
                    nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
                    nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
                    nombre += ` ${nombreFrances}`
                }
                
                salida += `(${matricula + i},UPPER('${apellidoMex}'),${segundoApellido},'${nombre}','a${matricula + i}@unison.mx'),<br>`;
 
            }
            salida = salida.slice(0, -5) + ";";
            document.getElementById("salida").innerHTML = salida;
        }

       
        function generarCSV(registros){
            salida="expediente,apellido1,apellido2,nombre,email<br>";
            var matricula=224250000;
            var nombre =""
            var nombreFrances = ""
            for (let i=0;i<registros;i++){
                let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
                let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
 
                let tieneSegundoNombre = Math.random() < 0.5;
 
                console.log(tieneSegundoNombre)
                let segundoApellido;
                if (apellidoRuso === "NULL") {
                    segundoApellido = "NULL";  
                } else {
                    segundoApellido = `${apellidoRuso}`;
                }
 
                nombre = ""
                nombreFrances = ""
                if (tieneSegundoNombre==0){
                    nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
                }else{
                    nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
                    nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
                    nombre += ` ${nombreFrances}`
                }
                
                salida += `${matricula + i},${apellidoMex},${segundoApellido},${nombre},a${matricula + i}@unison.mx<br>`; 
               
 
            }
            document.getElementById("salida").innerHTML = salida;
        }

        function generarJSON(registros){
            salida = "[";
            var matricula = 224250000;
            var nombre = "";
            var nombreFrances = "";
            for (let i = 0; i < registros; i++) {
                let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
                let apellidoRuso = apellidosRusos[Math.floor(Math.random() * apellidosRusos.length)];
                let tieneSegundoNombre = Math.random() < 0.5;
                console.log(tieneSegundoNombre);
                let segundoApellido;
                if (apellidoRuso === "NULL") {
                    segundoApellido = "NULL";
                } else {
                    segundoApellido = `${apellidoRuso}`;
                }
                nombre = "";
                nombreFrances = "";
                if (tieneSegundoNombre == 0) {
                    nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
                } else {
                    nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
                    nombreFrances = nombresFranceses[Math.floor(Math.random() * nombresFranceses.length)];
                    nombre += ` ${nombreFrances}`;
                }
                salida += `
                <br>{"matricula": ${matricula + i},
                "apellido1": "${apellidoMex}",
                "apellido2": "${segundoApellido}",
                "nombre": "${nombre}",
                "correojson": "a${matricula + i}@unison.mx"},`;
           
            }
             salida = salida.slice(0, -2);
            salida += `}<br>]`;
            document.getElementById("salida").innerHTML = salida;
        }   



        function guardarArchivo() {
        
            if(salida==""){
                mostrarAlerta("error", "No hay datos para guardar. Primero genera los datos.");
                return;
            }

            var var1 = document.createElement("a");
            salida = salida.replaceAll("<br>", "\n");
            var1.setAttribute("href","data:text/plain;charset=UTF-8," + encodeURIComponent(salida));

            var opcion = document.getElementById("opcion").value;

            switch(opcion){
                case "1": mostrarAlerta("exito", "Generando archivo SQL");var1.setAttribute("download", "sistema_escolar.sql"); break;
                case "2": mostrarAlerta("exito", "Generando archivo PostgreSQL");var1.setAttribute("download", "sistema_escolar_postgres.sql"); break;
                case "3": mostrarAlerta("exito", "Generando archivo CSV");var1.setAttribute("download", "sistema_escolar.csv"); break;
                case "4": mostrarAlerta("exito", "Generando archivo JSON");var1.setAttribute("download", "sistema_escolar.json"); break;

            }

            var1.style.display = "none";
            document.body.appendChild(var1);
            var1.click();
            document.body.removeChild(var1);
        }