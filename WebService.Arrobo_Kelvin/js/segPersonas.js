function presentarTodos() {
    $.ajax({
        url: 'https://sica.utpl.edu.ec/api/persons/',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            'token': '4g570LuKrVnHByHa',
            'filters': 'true',
            'status': 'activo'
        },
        success: function (data, textStatus, xhr) {
            console.log("Listo");
            $(".fa-spin").hide(1000);
            console.log(data.data);
            var datos = data.data;
            $("tbody").remove(".infop");
            var td = '<tr class="infop">';
            for (var i = 0; i < datos.length; i++) {

                var dato = datos[i];
                console.log(dato.id);
                td += '<th scope="row">' + dato.id + '</th>';
                td += '<td>' + dato.name + '</td>';
                td += '<td>' + dato.status + '</td>';
                td += '<td>' + dato.email + '</td>';
                td += '<td >' + '<button type="button" class="btn btn-link vrm">Ver mas</button>' + '</td>';
                td += '</tr>';

                

            }


            $(td).appendTo('#tablaPersonas');
            $("#tablaPersonas").html(td);
            $('.vrm').click(function () {
                hola(dato);
            });
            //$("#tablaPersonas").load(" #tablaPersonas");
            //
            
            /*$('.vrm').click(function () {
                hola(dato);
            });*/


        }
    });//end ajax
}

function segmentarAreaAdministrativa() {
    $.ajax({
        url: 'https://sica.utpl.edu.ec/api/persons/',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            'token': '4g570LuKrVnHByHa',
            'start': '0',
            'pagination': '100',
            'filters': 'true',
            'area': 'administrativa',
            'status': 'activo'
        },
        success: function (data, textStatus, xhr) {
            console.log("EXITO!!!");
            console.log(data.data);
            var datos = data.data;
            $("tbody").remove(".infop");
            //$('.table').load(' #tablaPersonas');
            var td = '<tr class="infop">';
            for (var i = 0; i < datos.length; i++) {

                var dato = datos[i];
                console.log(dato.id);
                td += '<th scope="row">' + dato.id + '</th>';
                td += '<td>' + dato.name + '</td>';
                td += '<td>' + dato.status + '</td>';
                td += '<td>' + dato.email + '</td>';
                td += '</tr>';

            }
            //$(td).load(" #tablaPersonas");
            $(td).appendTo('#tablaPersonas');
            $("#tablaPersonas").html(td);


        }
    });//end ajax


}
//end ajax


function segmentarAreaBiologica() {
    $.ajax({
        url: 'https://sica.utpl.edu.ec/api/persons/',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            'token': '4g570LuKrVnHByHa',
            'start': '0',
            'pagination': '100',
            'filters': 'true',
            'area': 'biologica',
            'status': 'activo'
        },
        success: function (data, textStatus, xhr) {
            console.log("EXITO!!!");
            console.log(data.data);
            var datos = data.data;
            $("tbody").remove(".infop");
            var td = '<tr class="infop">';
            for (var i = 0; i < datos.length; i++) {

                var dato = datos[i];
                console.log(dato.id);
                td += '<th scope="row">' + dato.id + '</th>';
                td += '<td>' + dato.name + '</td>';
                td += '<td>' + dato.status + '</td>';
                td += '<td>' + dato.email + '</td>';
                td += '</tr>';

            }

            $(td).appendTo('#tablaPersonas');
            $("#tablaPersonas").html(td);
        }
    });//end ajax


}
//end ajax

function segmentarAreaSin_asignar() {
    $.ajax({
        url: 'https://sica.utpl.edu.ec/api/persons/',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            'token': '4g570LuKrVnHByHa',
            'start': '0',
            'pagination': '100',
            'filters': 'true',
            'area': 'sin_asignar',
            'status': 'activo'
        },
        success: function (data, textStatus, xhr) {
            console.log("EXITO!!!");
            console.log(data.data);
            var datos = data.data;
            $("tbody").remove(".infop");
            var td = '<tr class="infop">';
            for (var i = 0; i < datos.length; i++) {
                var dato = datos[i];
                console.log(dato.id);
                td += '<th scope="row">' + dato.id + '</th>';
                td += '<td>' + dato.name + '</td>';
                td += '<td>' + dato.status + '</td>';
                td += '<td>' + dato.email + '</td>';
                td += '</tr>';

            }

            $(td).appendTo('#tablaPersonas');
            $("#tablaPersonas").html(td);

        }
    });//end ajax


}
//end ajax


function segmentarAreaSocioHumanistica() {
    $.ajax({
        url: 'https://sica.utpl.edu.ec/api/persons/',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            'token': '4g570LuKrVnHByHa',
            'start': '0',
            'pagination': '100',
            'filters': 'true',
            'area': 'sociohumanistica',
            'status': 'activo'
        },
        success: function (data, textStatus, hola) {
            console.log("EXITO!!!");
            console.log(data.data);
            var datos = data.data;
            $("tbody").remove(".infop");
            var td = '<tr class="infop">';
            for (var i = 0; i < datos.length; i++) {

                var dato = datos[i];
                console.log(dato.id);
                td += '<th scope="row">' + dato.id + '</th>';
                td += '<td>' + dato.name + '</td>';
                td += '<td>' + dato.status + '</td>';
                td += '<td>' + dato.email + '</td>';
                td += '</tr>';

            }

            $(td).appendTo('#tablaPersonas');
            $("#tablaPersonas").html(td);
        }
    });//end ajax


}
//end ajax

function segmentarAreaTecnica() {
    $.ajax({
        url: 'https://sica.utpl.edu.ec/api/persons/',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            'token': '4g570LuKrVnHByHa',
            'start': '0',
            'pagination': '100',
            'filters': 'true',
            'area': 'tecnica',
            'status': 'activo'
        },
        success: function (data, textStatus, xhr) {
            console.log("EXITO!!!");
            console.log(data.data);
            var datos = data.data;
            $("tbody").remove(".infop");
            var td = '<tr class="infop">';
            for (var i = 0; i < datos.length; i++) {

                var dato = datos[i];
                console.log(dato.id);
                td += '<th scope="row">' + dato.id + '</th>';
                td += '<td>' + dato.name + '</td>';
                td += '<td>' + dato.status + '</td>';
                td += '<td>' + dato.email + '</td>';
                td += '</tr>';

            }

            $(td).appendTo('#tablaPersonas');
            $("#tablaPersonas").html(td);
            $("#loading_indicator")

                .ajaxStart(function () {
                    $(this).show();
                })
                .ajaxStop(function () {
                    $(this).hide();
                });
        }
    });//end ajax


}
//end ajax


/*
var contents = $("#administrativa")[0];
contents.on("click", segmentarAreaAdministrativa());*/
presentarTodos();
$('#todos').click(function () {
    presentarTodos();
});

$('#administrativa').click(function () {
    1
    //$( "tbody" ).remove( "tr" );
    segmentarAreaAdministrativa();
});

$('#biologica').click(function () {
    segmentarAreaBiologica();
});

$('#sin_asignar').click(function () {
    segmentarAreaSin_asignar();
});
$('#sociohumanistica').click(function () {
    segmentarAreaSocioHumanistica();
});
$('#tecnica').click(function () {
    segmentarAreaTecnica();
});

function hola(data) {
    $.ajax({
        url: "https://sica.utpl.edu.ec/api/persons/"+data.id,
     
        // The name of the callback parameter, as specified by the YQL service
        jsonp: "callback",
     
        // Tell jQuery we're expecting JSONP
        dataType: "jsonp",
     
        // Tell YQL what we want and that we want JSON
        data: {
            'token': '4g570LuKrVnHByHa'
        },
     
        // Work with the response
        success: function(info) {
            console.log(info); // server response
            for(var i = 0; i<info.length;i++){
                var obj = info[i];
            }
        }
    });
   
};