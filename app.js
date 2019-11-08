function  buscarPrecioMenor (a,b,c){
    
    menor = a;
    if(b.precio < menor.precio  ){
        menor = b;
    }
    if(c.precio  < menor.precio ){
        menor = c
    }

    return menor

}

function mostarSitioMenorPrecio(sitio){

    
    res = document.getElementById('res');
    res.innerHTML = '<span>' + sitio.nombre +'</span> <br/><h4>' + sitio.precio +'</h4>';
}
function limpiarResultados(){
    res = document.getElementById('res');
    res.innerHTML = '';
}

function coordinarLLegada(sitio1,sitio2,sitio3){
    if(sitio1.precio&&sitio2.precio&&sitio3.precio){
        sitioSeleccionado = buscarPrecioMenor(sitio1,sitio2,sitio3);
        
        mostarSitioMenorPrecio(sitioSeleccionado)
        $('#btn').attr('disabled',false);


    }
}
$(document).ready(function(){
    
    $('#btn').click(function(){
        
        limpiarResultados();
        $(this).attr('disabled',true);
        sitio1={
            url:"http://localhost:3000/site1",
            precio:undefined,
            nombre:"sitio1"
        
        };
        sitio2={
            url:"http://localhost:3000/site2",
            precio:undefined,
            nombre:"sitio2"
        
        };
        sitio3={
            url:"http://localhost:3000/site3",
            precio:undefined,
            nombre:"sitio3"
        
        };
        
        $.getJSON(sitio1.url,function(data){
            sitio1.precio=data[0].precio
            
            coordinarLLegada(sitio1,sitio2,sitio3)

        },function(err){alert("se produjo error")});
        $.getJSON(sitio2.url,function(data){
            
            sitio2.precio=data.p;
            
            coordinarLLegada(sitio1,sitio2,sitio3)

        },function(err){alert("se produjo error")});
        $.getJSON(sitio3.url,function(data){
            
            sitio3.precio=data.producto.valor;
             
            coordinarLLegada(sitio1,sitio2,sitio3)

        },function(err){alert("se produjo error")});
        
    })

});