function presentarTodos(){
    $.ajax({
        url: 'https://sica.utpl.edu.ec/api/books/',
        type: 'GET', 
        dataType: 'jsonp',
        data:{
            'token':'4g570LuKrVnHByHa'
        },
        success: function(data, textStatus, xhr){
            console.log("Listo");
            console.log(data.data);
            var datos = data.data;
            
            var td = '<tr class="infop">';
            for(var i = 0;i<datos.length;i++){
                
                var dato = datos[i];
                console.log(dato.id);
                td +='<th scope="row">'+dato.id+'</th>';
                td +='<td>'+dato.title+'</td>';
                td +='<td>'+dato.type+'</td>';
                td +='<td>'+dato.status+'</td>';
                td +='</tr>';

            }
            
            
            $(td).appendTo('#tablaLibros');
        }
    });//end ajax
}
presentarTodos();