function presentarGrupos() {
    $.ajax({
        url: 'https://sica.utpl.edu.ec/rest/groups/',
        type: 'GET',
        dataType: 'jsonp',
        data: {
            'token': '4g570LuKrVnHByHa',
            'filters':'true',
            'area':'biologica'

        },
        success: function (data) {
            console.log(data);
            console.log(data.items);
            var items = data.items;
            
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                console.log(item.name);
                var div  = '<div class="col-6 group bg-dark">';
                div += '<h3>' + item.name + '</h3>';
                div += '<img src="'+item.image+'"class = "imggrupo" alt="">';
                div += '<h4>Descripcion:</h4>';
                div += '<p>' + item.description+ '</p>';
                div += '<h4>Actividades:</h4>';
                div += '<p>' + item.activities + '</p>';
                div += '<h5> Página: ' + item.link + '</h5>';
                div += '</div>';
                $(div).appendTo('.gruposu');
                
            }
            
                
            
            
            /**/
        }

       
        //$("#grupos").html(div);

    }
    );

};
presentarGrupos();

