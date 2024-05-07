function borraLineas(){
    var grupo = canvas.getObjects();
    for (var i = grupo.length - 1; i >= 0; i--) {
        var clase = grupo[i].clase;
        if (clase === 'linea' || clase === 'pared' || clase === 'rect' || clase === 'text') {
            canvas.remove(grupo[i]);
        };
    };
}


function borraTodo(){
    var grupo = canvas.getObjects();
    for (var i = grupo.length - 1; i >= 0; i--) {
        canvas.remove(grupo[i]);
    };
}


function interseccion(x1,y1,x2,y2,x3,y3,x4,y4) {
    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    if (isNaN(x)||isNaN(y)) {
        return 0;
    } else {
        if (x1>=x2) {
            if (!(x2<=x&&x<=x1)) {return 0;}
        } else {
            if (!(x1<=x&&x<=x2)) {return 0;}
        }
        if (y1>=y2) {
            if (!(y2<=y&&y<=y1)) {return 0;}
        } else {
            if (!(y1<=y&&y<=y2)) {return 0;}
        }
        if (x3>=x4) {
            if (!(x4<=x&&x<=x3)) {return 0;}
        } else {
            if (!(x3<=x&&x<=x4)) {return 0;}
        }
        if (y3>=y4) {
            if (!(y4<=y&&y<=y3)) {return 0;}
        } else {
            if (!(y3<=y&&y<=y4)) {return 0;}
        }
    }
    return 1;
}


var canvas = new fabric.Canvas('c', {
    backgroundColor: 'rgb(176, 190, 197)',
    selection: false,
    stopContextMenu: true,
    preserveObjectStacking: true,
      controlsAboveOverlay: true,
      selectionCompatibility: true
});


var config = {
    'has_controls': true,
    'border_scale_factor': 2,
    'corner_size': 20,
    'border_color': 'cyan',
    'lock_rotation': false,
    'clase': 'habitacion'
}


var standard_config = function(event){
    fabric.Image.fromURL(event.data.img_src, function(img){
        img.hasControls = event.data.config.has_controls;
        img.setControlVisible('mtr', true);
        img.borderScaleFactor = event.data.config.border_scale_factor;
        img.cornerSize = event.data.config.corner_size;
        img.borderColor = event.data.config.border_color;
        img.lockRotation = event.data.config.lock_rotation;
        img.clase = event.data.config.clase;
        img.on('modified', function() {
            borraLineas();
        });
        canvas.add(img);
    });
    borraLineas();
}

var line_config = {
    stroke: '1px',// COLOR "RED"
    strokeWidth: 4,
    hasControls: false,
    hasBorders: false,
    hoverCursor: 'default',
}


//RESIDENCIAL
$('#btnLiving').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonLiving.png'}, standard_config);
$('#btnComedor').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonComedor.png'}, standard_config);
$('#btnCocina').click({'config':config, 'img_src': 'img/Auto/CasaSimpsonCocina.png'}, standard_config);
$('#btnCocinaB').click({'config':config, 'img_src': 'img/Auto/CasaSimpsonCocina.png'}, standard_config);
$('#btnPatio').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPatio.png'}, standard_config);
$('#btnBano').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonBano.png'}, standard_config);
$('#btnGarage').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonGarage.png'}, standard_config);
$('#btnPasillo').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPasillo.png'}, standard_config);
$('#BtnSalaDeJuegos').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonSalaDeJuegos.png'}, standard_config);
$('#btnSalaEstar').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonSalaEstar.png'}, standard_config);
$('#btnCasaSimpsonPisoBBanoA').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPisoBBanoA.png'}, standard_config);
$('#btnCasaSimpsonPisoBBanoB').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPisoBBanoB.png'}, standard_config);
$('#btnCasaSimpsonPisoBPiezaA').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPisoBPiezaA.png'}, standard_config);       
$('#btnCasaSimpsonPisoBPiezaB').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPisoBPiezaB.png'}, standard_config);
$('#btnCasaSimpsonPisoBPiezaC').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPisoBPiezaC.png'}, standard_config);   
$('#btnCasaSimpsonPisoBPiezaD').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPisoBPiezaD.png'}, standard_config);   
$('#btnCasaSimpsonPisoBPiezaE').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPisoBPiezaE.png'}, standard_config); 
$('#btnCasaSimpsonPisoBPiezaF').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPisoBPiezaF.png'}, standard_config);
$('#btnCasaSimpsonPisoBPiezaG').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPisoBPiezaG.png'}, standard_config);          
$('#btnEntrePiso').click({'config': config, 'img_src': 'img/Auto/EntrePiso.png'}, standard_config); 
$('#btnSalaEstarB').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonSalaEstarB.png'}, standard_config);    
$('#btnPasilloB').click({'config': config, 'img_src': 'img/Auto/CasaSimpsonPasilloB.png'}, standard_config);    
$('#btnEntrePisoB').click({'config': config, 'img_src': 'img/Auto/EntrePisoB.png'}, standard_config);
$('#').click({'config': config, 'img_src': 'img/AutoOficina/.png'}, standard_config);
$('#btnAutoOficinaBanoA').click({'config': config, 'img_src': 'img/AutoOficina/AutoOficinaBanoA.png'}, standard_config);
$('#btnAutoOficinaBanoB').click({'config': config, 'img_src': 'img/AutoOficina/AutoOficinaBanoB.png'}, standard_config);
$('#btnAutoOficinaCubiculoA').click({'config': config, 'img_src': 'img/AutoOficina/AutoOficinaCubiculoA.png'}, standard_config);
$('#btnAutoOficinaCubiculoB').click({'config': config, 'img_src': 'img/AutoOficina/AutoOficinaCubiculoB.png'}, standard_config);
$('#btnAutoOficinaLiving').click({'config': config, 'img_src': 'img/AutoOficina/AutoOficinaLiving.png'}, standard_config);
$('#btnAutoOficinaPasillo').click({'config': config, 'img_src': 'img/AutoOficina/AutoOficinaPasillo.png'}, standard_config);
$('#btnAutoOficinaSalaDeReuniones').click({'config': config, 'img_src': 'img/AutoOficina/AutoOficinaSalaDeReuniones.png'}, standard_config);



//NEGOCIO
$('#btnCoworkCOWORK1H1').click({'config': config, 'img_src': 'img/Cowork/COWORK1/COWORK1H1.png'}, standard_config);
$('#btnCoworkCOWORK1H2').click({'config': config, 'img_src': 'img/Cowork/COWORK1/COWORK1H2.png'}, standard_config);
$('#btnCoworkCOWORK1H3').click({'config': config, 'img_src': 'img/Cowork/COWORK1/COWORK1H3.png'}, standard_config);
$('#btnCoworkCOWORK1H4').click({'config': config, 'img_src': 'img/Cowork/COWORK1/COWORK1H4.png'}, standard_config);
$('#btnCoworkCOWORK1H5').click({'config': config, 'img_src': 'img/Cowork/COWORK1/COWORK1H5.png'}, standard_config);
$('#btnCoworkCOWORK1H6').click({'config': config, 'img_src': 'img/Cowork/COWORK1/COWORK1H6.png'}, standard_config);
$('#btnCoworkCOWORK1H7').click({'config': config, 'img_src': 'img/Cowork/COWORK1/COWORK1H7.png'}, standard_config);
$('#btnCoworkCOWORK1H8').click({'config': config, 'img_src': 'img/Cowork/COWORK1/COWORK1H8.png'}, standard_config);
$('#btnCoworkCOWORK1H9').click({'config': config, 'img_src': 'img/Cowork/COWORK1/COWORK1H9.png'}, standard_config);
$('#btnCowork2COWORK2H0').click({'config': config, 'img_src': 'img/Cowork/COWORK2/COWORK2H0.png'}, standard_config);
$('#btnCowork2COWORK2H1').click({'config': config, 'img_src': 'img/Cowork/COWORK2/COWORK2H1.png'}, standard_config);
$('#btnCowork2COWORK2H2').click({'config': config, 'img_src': 'img/Cowork/COWORK2/COWORK2H2.png'}, standard_config);
$('#btnCowork2COWORK2H3').click({'config': config, 'img_src': 'img/Cowork/COWORK2/COWORK2H3.png'}, standard_config);
$('#btnCowork2COWORK2H4').click({'config': config, 'img_src': 'img/Cowork/COWORK2/COWORK2H4.png'}, standard_config);
$('#btnCowork2COWORK2H5').click({'config': config, 'img_src': 'img/Cowork/COWORK2/COWORK2H5.png'}, standard_config);
$('#btnCowork2COWORK2H6').click({'config': config, 'img_src': 'img/Cowork/COWORK2/COWORK2H6.png'}, standard_config);
$('#btnCowork2COWORK2H7').click({'config': config, 'img_src': 'img/Cowork/COWORK2/COWORK2H7.png'}, standard_config);
$('#btnCowork3COWORK3H1').click({'config': config, 'img_src': 'img/Cowork/COWORK3/COWORK3H1.png'}, standard_config);
$('#btnCowork3COWORK3H2').click({'config': config, 'img_src': 'img/Cowork/COWORK3/COWORK3H2.png'}, standard_config);
$('#btnCowork3COWORK3H3').click({'config': config, 'img_src': 'img/Cowork/COWORK3/COWORK3H3.png'}, standard_config);
$('#btnCowork3COWORK3H4').click({'config': config, 'img_src': 'img/Cowork/COWORK3/COWORK3H4.png'}, standard_config);

$('#btnMesh').click(function(){
    fabric.Image.fromURL('img/Mesh.png', function(img){
        img.hasControls = true;
        img.borderScaleFactor = 2;
        img.borderColor = 'Magenta';
        img.perPixelTargetFind = false;
        img.clase = 'Mesh' /// modificar a propia mesh
        img.on('modified', function() {
            borraLineas();
        });
        canvas.add(img);
    });
    borraLineas();
});

$('#btnZona').click(function(){
    fabric.Image.fromURL('img/ap2b.png', function(img){
        img.hasControls = true;
        img.borderScaleFactor = 2;
        img.borderColor = 'Magenta';
        img.perPixelTargetFind = false;
        img.clase = 'ap'
        img.on('modified', function() {
            borraLineas();
        });
        canvas.add(img);
    });
    borraLineas();
});

$('#btnZona5').click(function(){
    fabric.Image.fromURL('img/ap5b.png', function(img){
        img.hasControls = true;
        img.borderScaleFactor = 2;
        img.borderColor = 'Magenta';
        img.perPixelTargetFind = false;
        img.clase = 'ap5'
        img.on('modified', function() {
            borraLineas();
        });
        canvas.add(img);
    });
    borraLineas();
});
//
$('#btnBorrar').click(function(){
    canvas.getActiveObject().remove();
    borraLineas();
});
//
$('#btnBorrarTodo').click(function(){
    borraTodo();
});
$('#btnGuardar').click(function(){
    canvas.deactivateAll().renderAll();
    $('#c').get(0).toBlob(function(blob){
        saveAs(blob,"imagen_plano.png");
    });
});
//
$('#selTabique').change(function(){
    borraLineas();
});


$('#selTipo').change(function(){
    borraTodo();
    var tipo = document.getElementById('selTipo').value;
    
    //Copiar código exportado
if (tipo == '12'){ 
    
fabric.Image.fromURL('undefined', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 428; 
                img.top = 210; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('undefined', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 460; 
                img.top = 325; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCD.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 414; 
                img.top = 243; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCE.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 322; 
                img.top = 336; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCC.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 158; 
                img.top = 242; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCG.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 157; 
                img.top = 1; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCB.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 4; 
                img.top = 367; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCA.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 1; 
                img.top = 0; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/Cowork/COWORK1/COWORK1H3.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 2; 
                img.borderColor = 'cyan'; 
                img.lockRotation = false; 
                img.left = 958.7465224111284; 
                img.top = 18.253477588871704; 
                img.scaleX = 0.5425038639876353; 
                img.scaleY = 0.5425038639876353 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/Auto/CasaSimpsonPisoBBanoA.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 2; 
                img.borderColor = 'cyan'; 
                img.lockRotation = false; 
                img.left = 955.273642091433; 
                img.top = 421.5464480874316; 
                img.scaleX = 0.45690375944339934; 
                img.scaleY = 0.33833384885039713 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/Auto/CasaSimpsonPisoBPiezaA.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 2; 
                img.borderColor = 'cyan'; 
                img.lockRotation = false; 
                img.left = 817.026063100137; 
                img.top = 231.48148148148124; 
                img.scaleX = 0.609857622629015; 
                img.scaleY = 0.609857622629015 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/Mesh.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', true); 
                img.borderScaleFactor = 2; 
                img.borderColor = 'Magenta'; 
                img.lockRotation = false; 
                img.left = 995; 
                img.top = 335; 
                img.scaleX = 1; 
                img.scaleY = 1; 
                img.clase = 'Mesh'; 
                canvas.add(img); 
                canvas.bringToFront(img); 
            });
fabric.Image.fromURL('img/ap2b.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', true); 
                img.borderScaleFactor = 2; 
                img.borderColor = 'Magenta'; 
                img.lockRotation = false; 
                img.left = 378; 
                img.top = 116; 
                img.scaleX = 1; 
                img.scaleY = 1; 
                img.clase = 'ap'; 
                canvas.add(img); 
                canvas.bringToFront(img); 
            });

}

if (tipo == '10'){ 

fabric.Image.fromURL('img/DEPTOC/DEPTOCA.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 1; 
                img.top = 0; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCB.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 4; 
                img.top = 367; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCG.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 157; 
                img.top = 1; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCC.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 158; 
                img.top = 242; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCE.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 322; 
                img.top = 336; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/DEPTOC/DEPTOCD.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 414; 
                img.top = 243; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('undefined', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 460; 
                img.top = 325; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('undefined', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', false); 
                img.borderScaleFactor = 5; 
                img.borderColor = 'blue'; 
                img.lockRotation = true; 
                img.left = 428; 
                img.top = 210; 
                img.scaleX = 1; 
                img.scaleY = 1 
                img.clase = 'habitacion'; 
                img.angle = 0; 
                canvas.add(img); 
                canvas.sendToBack(img); 
            });
fabric.Image.fromURL('img/Mesh.png', function(img){ 
                img.hasControls = true; 
                img.setControlVisible('mtr', true); 
                img.borderScaleFactor = 2; 
                img.borderColor = 'Magenta'; 
                img.lockRotation = false; 
                img.left = 319; 
                img.top = 236; 
                img.scaleX = 1; 
                img.scaleY = 1; 
                img.clase = 'Mesh'; 
                canvas.add(img); 
                canvas.bringToFront(img); 
            });


}


    if (tipo == '9') {
        fabric.Image.fromURL('img/DEPTOD/DEPTOD9.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 0;
            img.top = 84;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOD/DEPTOD4.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 270;
            img.top = 84;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOD/DEPTOD3.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 478;
            img.top = 0;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOD/DEPTOD2.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 479;
            img.top = 87;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOD/DEPTOD8.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 0;
            img.top = 304;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOD/DEPTOD5.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 270;
                img.top = 291;
                img.scaleX = 1;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/DEPTOD/DEPTOD6.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 270;
                img.top = 340;
                img.scaleX = 1;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/DEPTOD/DEPTODX.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 460;
                img.top = 325;
                img.scaleX = 1;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });
    };

    if (tipo == '8') {
        fabric.Image.fromURL('img/DEPTOC/DEPTOCA.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 1;
            img.top = 0;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOC/DEPTOCB.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 4;
            img.top = 367;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOC/DEPTOCG.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 157;
            img.top = 1;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOC/DEPTOCC.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 158;
            img.top = 242;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOC/DEPTOCE.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 322;
            img.top = 336;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOC/DEPTOCD.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 414;
                img.top = 243;
                img.scaleX = 1;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/DEPTOC/DEPTOCx.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 428;
                img.top = 210;
                img.scaleX = 1;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/DEPTOC/DEPTOCx.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 460;
                img.top = 325;
                img.scaleX = 1;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });
    };

    if (tipo == '7') {
        fabric.Image.fromURL('img/DEPTOB/DEPTOB1.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 0;
            img.top = 0;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOB/DEPTOB2.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 0;
            img.top = 104;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOB/DEPTOB3.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 165;
            img.top = 104;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });


        fabric.Image.fromURL('img/DEPTOB/DEPTOB4.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 165;
            img.top = 323;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOB/DEPTOB5.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 400;
            img.top = 323;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOB/DEPTOB6.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 461;
                img.top = 0;
                img.scaleX = 1;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/DEPTOB/DEPTOB7.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 530;
                img.top = 252;
                img.scaleX = 1;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/OFICINAB/OFICINABbanoB.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 610;
                img.top = 420;
                img.scaleX = 1;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });
    };

    if (tipo == '6') {
        fabric.Image.fromURL('img/DEPTOA/DEPTOA1.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 100;
            img.top = 0;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });


        fabric.Image.fromURL('img/DEPTOA/DEPTOA2.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 173
            img.top = 0;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOA/DEPTOA3.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 173;
            img.top = 240;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/DEPTOA/DEPTOA4.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 385;
            img.top = 0;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });



        fabric.Image.fromURL('img/DEPTOA/DEPTOA6.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 427;
            img.top = 240;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });
    };

    if (tipo == '5') {
        fabric.Image.fromURL('img/CasaAutoD/CASA41.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 169;
            img.top = 77;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoD/CASA42.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 168;
            img.top = 208;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoD/CASA43.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 168;
            img.top = 325;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoD/CASA44.png', function(img){
                    img.hasControls = true;
                    img.setControlVisible('mtr', false);
                    img.borderScaleFactor = 5;
                    img.borderColor = 'blue';
                    img.lockRotation = true;
                    img.left = 354;
                    img.top = 77;
                    img.scaleX = 1;
                    img.clase = 'habitacion';
                    img.on('modified', function() {
                        borraLineas();
                    });
                    canvas.add(img);
                });

        fabric.Image.fromURL('img/CasaAutoD/CASA45.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 354;
            img.top = 208;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoD/CASA46.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 472;
            img.top = 0;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoD/CASA47.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 578;
            img.top = 147;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoD/CASA48.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 639;
            img.top = 147;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoD/CASA49.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 577;
            img.top = 269;
            img.scaleX = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });        
    };

    if (tipo == '4') {

        fabric.Image.fromURL('img/CasaAutoC/CASA31.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 0;
            img.top = 0;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoC/CASA32.png', function(img){
                    img.hasControls = true;
                    img.setControlVisible('mtr', false);
                    img.borderScaleFactor = 5;
                    img.borderColor = 'blue';
                    img.lockRotation = true;
                    img.left = 168;
                    img.top = 0;
                    img.clase = 'habitacion';
                    img.on('modified', function() {
                        borraLineas();
                    });
                    canvas.add(img);
                });

        fabric.Image.fromURL('img/CasaAutoC/CASA33.png', function(img){
                    img.hasControls = true;
                    img.setControlVisible('mtr', false);
                    img.borderScaleFactor = 5;
                    img.borderColor = 'blue';
                    img.lockRotation = true;
                    img.left = 0;
                    img.top = 219;
                    img.clase = 'habitacion';
                    img.on('modified', function() {
                        borraLineas();
                    });
                    canvas.add(img);
                });

        fabric.Image.fromURL('img/CasaAutoC/CASA34.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 168;
                img.top = 219;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/CasaAutoC/CASA35.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 327;
                img.top = 0;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/CasaAutoC/CASA36.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 168;
                img.top = 162;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/CasaAutoC/CASA37.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 271;
                img.top = 219;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/CasaAutoC/CASA38.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 471;
                img.top = 0;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });
    };

    if (tipo == '3') {
        fabric.Image.fromURL('img/CasaAutoB/CASA2A.PNG', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 5;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 100;
            img.top = 0;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoB/CASA2B.PNG', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 100;
                img.top = 201;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/CasaAutoB/CASA2C.PNG', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 349;
                img.top = 0;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });

        fabric.Image.fromURL('img/CasaAutoB/CASA2D.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 5;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 353;
                img.top = 164;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });
    };

    if (tipo == '2') {
        fabric.Image.fromURL('img/CasaAutoA/CASAAA1.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 0;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 100;
            img.top = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoA/CASAAA2.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 0;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 314;
            img.top = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoA/CASAAA3.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 0;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left =435;
            img.top = 1;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });



        fabric.Image.fromURL('img/CasaAutoA/CASAAA4.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 0;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 101;
            img.top = 201
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });


        fabric.Image.fromURL('img/CasaAutoA/CASAAA5.png', function(img){
            img.hasControls = true;
            img.setControlVisible('mtr', false);
            img.borderScaleFactor = 0;
            img.borderColor = 'blue';
            img.lockRotation = true;
            img.left = 315;
            img.top = 143;
            img.clase = 'habitacion';
            img.on('modified', function() {
                borraLineas();
            });
            canvas.add(img);
        });

        fabric.Image.fromURL('img/CasaAutoA/CASAAA6.png', function(img){
                img.hasControls = true;
                img.setControlVisible('mtr', false);
                img.borderScaleFactor = 0;
                img.borderColor = 'blue';
                img.lockRotation = true;
                img.left = 435;
                img.top = 201;
                img.clase = 'habitacion';
                img.on('modified', function() {
                    borraLineas();
                });
                canvas.add(img);
            });
    };

});
        //
$('#btnCalcular').click(function(){
    canvas.deactivateAll().renderAll();
    borraLineas();
    var xap = 0;
    var yap = 0;
    var arrayParedes = new Array();
    var arrayCentros = new Array();
    var arrayAPs = new Array();
    var frente = document.getElementById('txtFrente').value;
    var xMayor = 0;
    var xMenor = 5000;
    var yMayor = 0;
    var yMenor = 5000;
    // Calcula posicion de los AP
    canvas.forEachObject(function(obj){
        if(obj.clase === 'Mesh') {
            xap = Math.round((obj.left + obj.left + obj.width)/2);
            yap = Math.round((obj.top + obj.top + obj.height)/2);
            arrayAPs.push([xap,yap,2]); 
        }
        if(obj.clase === 'ap') {
            xap = Math.round((obj.left + obj.left + obj.width)/2);
            yap = Math.round((obj.top + obj.top + obj.height)/2);
            arrayAPs.push([xap,yap,2]); 
        }
        if(obj.clase === 'ap5') {
            xap = Math.round((obj.left + obj.left + obj.width)/2);
            yap = Math.round((obj.top + obj.top + obj.height)/2);
            arrayAPs.push([xap,yap,5]); 
        }
    });


    // Ciclo de habitaciones
    canvas.forEachObject(function(obj){
        if(obj.clase === 'habitacion') {
            // Coordenadas del centro de cada imagen
            arrayCentros.push([obj.getCenterPoint().x, obj.getCenterPoint().y, {'img-width': (obj.width*obj.scaleX), 'img-height': (obj.height*obj.scaleY), 'img-angle': obj.angle}])
            /**
            *   obj.oCoords: entrega coordenadas de cada esquina del objeto
            *   Cada linea (pared) se debe dibujar según las coordenadas de cada objeto
            *   Se deben respetar las posiciones de cada esquina del objeto para no tener problemas al rotar
            *   tl = top-left, bl = bottom-left, tr = top-right y br = bottom.right
            **/
            
            var x1 = obj.left;
            var y1 = obj.top;
            var x2 = obj.left + obj.getWidth(); //obj.width
            var y2 = obj.top + obj.getHeight(); //obj.height

            // Calcula las esquinas de la casa
            if (x1 < xMenor) {
                xMenor = x1;
            };
            if (x2 > xMayor) {
                xMayor = x2;
            };
            if (y1 < yMenor) {
                yMenor = y1;
            };
            if (y2 > yMayor) {
                yMayor = y2;
            };

            // Paredes
            var pared1 = new fabric.Line([obj.oCoords.tl.x, obj.oCoords.tl.y, obj.oCoords.bl.x, obj.oCoords.bl.y], line_config);
            pared1.clase = 'pared';
            arrayParedes.push([obj.oCoords.tl.x, obj.oCoords.tl.y, obj.oCoords.bl.x, obj.oCoords.bl.y]);

            var pared2 = new fabric.Line([obj.oCoords.tl.x, obj.oCoords.tl.y, obj.oCoords.tr.x, obj.oCoords.tr.y], line_config);
            pared2.clase = 'pared';
            arrayParedes.push([obj.oCoords.tl.x, obj.oCoords.tl.y, obj.oCoords.tr.x, obj.oCoords.tr.y]);

            var pared3 = new fabric.Line([obj.oCoords.tr.x, obj.oCoords.tr.y, obj.oCoords.br.x, obj.oCoords.br.y], line_config);
            pared3.clase = 'pared';
            arrayParedes.push([obj.oCoords.tr.x, obj.oCoords.tr.y, obj.oCoords.br.x, obj.oCoords.br.y]);

            var pared4 = new fabric.Line([obj.oCoords.bl.x, obj.oCoords.bl.y, obj.oCoords.br.x, obj.oCoords.br.y], line_config);
            pared4.clase = 'pared';
            arrayParedes.push([obj.oCoords.bl.x, obj.oCoords.bl.y, obj.oCoords.br.x, obj.oCoords.br.y]);

            if(xap > 0 && frente != ""){
                canvas.add(pared1,pared2,pared3,pared4);
            }
        } // each habitacion
    });
    
    // Calcula proporcion de distancias (mts/px)
    var frentePix = Math.round(Math.sqrt(Math.pow((xMayor-xMenor),2)));
    var frenteMts = frente/frentePix;
    var centro, xCen, yCen, xCenAP, yCenAP, tipoAP, xMenorAP, yMenorAP, atPared, atTotal, color, dist, lambda, img_dimen;
    for (var i = arrayCentros.length - 1; i >= 0; i--) {
        centro = arrayCentros[i];
        xCen = centro[0];
        yCen = centro[1];
        img_dimen = centro[2];

        var menor = 1000;
        var menorAtTotal = -1000;
        var pared;
        // Calculo interseccion de paredes y LV por cada AP
        for (var k = arrayAPs.length - 1; k >= 0; k--) {
            centroAP = arrayAPs[k];
            xCenAP = centroAP[0];
            yCenAP = centroAP[1];
            tipoAP = centroAP[2];
            var acumulador = 0;
            // Paredes
            for (var j = arrayParedes.length - 1; j >= 0; j--) {
                pared = arrayParedes[j];
                var x1Par = pared[0];
                var y1Par = pared[1];
                var x2Par = pared[2];
                var y2Par = pared[3];
                var resultado = interseccion(xCenAP,yCenAP,xCen,yCen,x1Par,y1Par,x2Par,y2Par);
                acumulador = acumulador + resultado;
            };
            // Distancia
            dist = Math.round(Math.sqrt(Math.pow((xCen-xCenAP),2)+Math.pow((yCen-yCenAP),2)));
            // Potencia
            var tabique = document.getElementById('selTabique').value;
            // concreto 15, ladrillo 8, ventanal 6, tabique 5
            // long onda 2.4Ghz 0.13mts, 5GHz 0.06mts
            if (tabique == 'a') { atPared = 4 * (acumulador/2)};
            if (tabique == 'b') { atPared = 8 * (acumulador/2)};
            if (tabique == 'c') { atPared = 15 * (acumulador/2)};
            if (tipoAP == 2) {
                lambda=0.13;
            } else {
                lambda=0.06;
            };
            atTotal = Math.round(20+5-(20*Math.log(4*Math.PI*dist*frenteMts/lambda)/Math.log(10))-atPared,1);
            if (atTotal > menorAtTotal) {
                menorAtTotal = atTotal;
                xMenorAP = xCenAP;
                yMenorAP = yCenAP;
            };
        };

        var linea = new fabric.Line([xCen, yCen, xMenorAP, yMenorAP], {
            stroke: '#f1f1f1',
            strokeDashArray: [5, 5],
            strokeWidth: 4,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true,
            hoverCursor: 'default'
        });

        linea.clase = 'linea';
        //Calculo atenuacion
        if (xap > 0 && frente != "") {
            canvas.add(linea);
            if (menorAtTotal > -60) {
                color = '0,200,0, 0.4';
            } else {
                if (menorAtTotal > -75) {
                    color = '240,245,20, 0.4';
                } else {
                    color = '175,175,175, 0.4';
                }
            }
            var rect = new fabric.Rect({
                left:0+xCen,
                top:0+yCen,
                fill: 'rgba('+color+')',
                width: img_dimen['img-width'],
                height: img_dimen['img-height'],
                angle: img_dimen['img-angle'],
                originX: 'center',
                originY: 'center',
                hasControls: false,
                hasBorders: false,
            });

            var text = new fabric.Text(String(menorAtTotal),{
                        fontSize: 20,
                        fontFamily: 'Arial',
                        textAlign: 'center',
                        originX: 'center',
                        originY: 'center',
                        left: 0+xCen,
                        top: 0+yCen
                    });

            rect.clase = "rect";
            text.clase = "text";
            canvas.add(rect);
            canvas.add(text);
        };
    }; // fin for


    canvas.forEachObject(function(obj){
        var clase = obj.clase;
        if(clase === 'ap' || clase === 'ap5' || clase === 'Mesh') {
            canvas.bringForward(obj);
        }
    });
});// calcular

$('#btnLeeCoordenadas').click(function(){
    var tabique = document.getElementById('selTabique').value;
    var frente = document.getElementById('txtFrente').value;
    var cadena = 'fr-'+frente+'-tb-'+tabique;
    canvas.forEachObject(function(obj){

        var clase = obj.clase;
        var xap, yap;
        // se agrega Mesh
        if(clase === 'Mesh') {
            xap = Math.round((obj.left + obj.left + obj.width)/2);
            yap = Math.round((obj.top + obj.top + obj.height)/2);
            cadena = cadena+'-Mesh-'+xap+'-'+yap;
        }
        if(clase === 'ap') {
            xap = Math.round((obj.left + obj.left + obj.width)/2);
            yap = Math.round((obj.top + obj.top + obj.height)/2);
            cadena = cadena+'-ap-'+xap+'-'+yap;
        }
        if(clase === 'ap5') {
            xap = Math.round((obj.left + obj.left + obj.width)/2);
            yap = Math.round((obj.top + obj.top + obj.height)/2);
            cadena = cadena+'-ap5-'+xap+'-'+yap;
        }
        if(clase === 'habitacion') {
        }
    });
});

responsive();
window.addEventListener('resize', responsive);

function responsive(e) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    var wid = $(".main-content .div-main").width()-width;
    var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    var widthn = width + wid;
    var heightn = height - 100; //100 es la altura desde el principio de la pagina (vista) hasta que empieza el canvas
    canvas.setDimensions({
        width: widthn,
        height: heightn
    });
}

//var width_gauge = $(".bar-right").width();

var width_gauge = 200;
var offset = 40;

var plomoGauge = gauge('#gris-gauge', {
    size: width_gauge-offset,
    clipWidth: width_gauge-offset,
    clipHeight: 103,
    ringWidth: 15,
    maxValue: -40,
});
plomoGauge.render();
plomoGauge.update(-55);

var amarilloGauge = gauge('#amarillo-gauge', {
    size: width_gauge-offset,
    clipWidth: width_gauge-offset,
    clipHeight: 103,
    ringWidth: 15,
    maxValue: -40,
});
amarilloGauge.render();
amarilloGauge.update(-1);

var verdeGauge = gauge('#verde-gauge', {
    size: width_gauge-offset,
    clipWidth: width_gauge-offset,
    clipHeight: 103,
    ringWidth: 15,
    maxValue: -40,
});
verdeGauge.render();
verdeGauge.update(55);


$("#export-canvas").click(function(){
    $('#modalCanvas').modal('show');
    var arrobject = canvas.getObjects();

    var sel = $("#selTipo option");
    var arr_obj = [];
    var arr_option = [];
     $("#main_canvas_export").empty();

    for (var i=0; i < sel.length; i++) {
        arr_option.push(sel[i].value);
    }


    var option_id = parseInt(arr_option[arr_option.length-1])+2;
    //Genera la opción con el id
    var option = "<option value='"+option_id+"'>Nombre opción</option>";

    $("#main_canvas_export").append("<div class='tooltip_copy'><a class='btn_copy' onmouseout=reset_span('code_html_area') onclick=copy_code('code_html_area')>\
                                        <span class='tooltiptext' id='code_html_area_span'>Copiar código</span>\
                                        <b>Copiar</b></a></div>\
                                    <b>en archivo index.html:linea 154.</b>\
                                    <textarea class='code_copy' id='code_html_area'></textarea><pre><code id='code_html'></code></pre>\
                                    <div class='tooltip_copy'><a class='btn_copy' onmouseout=reset_span('code_js') onclick=copy_code('code_js')>\
                                        <span class='tooltiptext' id='code_js_span'>Copiar código</span>\
                                        <b>Copiar</b></a></div>\
                                        <b>en archivo main.js:linea 225.</b>\
                                    <textarea class='code_copy' id='code_js'>if (tipo == '"+option_id+"') { }</textarea>\
                                    <pre><code>if (tipo == '"+option_id+"')<b>{ }</b></code></pre>\
                                    <div class='tooltip_copy'><a class='btn_copy' onmouseout=reset_span('code_js_main') onclick=copy_code('code_js_main')>\
                                        <span class='tooltiptext' id='code_js_main_span'>Copiar código</span>\
                                        <b>Copiar</b></a></div>\
                                        <b>dentro de las llaves <b>{ }</b>");
    $("#code_html").text(option);
    $("#code_html_area").text(option);

    var mak = "";
    for(var i=0; i < arrobject.length; i++){
        if (arrobject[i].clase == "habitacion"){
            mak += "fabric.Image.fromURL('"+$(arrobject[i]._element).attr('src')+"', function(img){ \n\
                img.hasControls = "+arrobject[i].hasControls+"; \n\
                img.setControlVisible('mtr', false); \n\
                img.borderScaleFactor = "+arrobject[i].borderScaleFactor+"; \n\
                img.borderColor = '"+arrobject[i].borderColor+"'; \n\
                img.lockRotation = "+arrobject[i].lockRotation+"; \n\
                img.left = "+arrobject[i].left+"; \n\
                img.top = "+arrobject[i].top+"; \n\
                img.scaleX = "+arrobject[i].scaleX+"; \n\
                img.scaleY = "+arrobject[i].scaleY+" \n\
                img.clase = '"+arrobject[i].clase+"'; \n\
                img.angle = "+arrobject[i].angle+"; \n\
                canvas.add(img); \n\
                canvas.sendToBack(img); \n\
            });\n"
        }
        
        else if(arrobject[i].clase === 'ap' || arrobject[i].clase === 'ap5' || arrobject[i].clase === 'Mesh'){
            mak += "fabric.Image.fromURL('"+$(arrobject[i]._element).attr('src')+"', function(img){ \n\
                img.hasControls = "+arrobject[i].hasControls+"; \n\
                img.setControlVisible('mtr', true); \n\
                img.borderScaleFactor = "+arrobject[i].borderScaleFactor+"; \n\
                img.borderColor = '"+arrobject[i].borderColor+"'; \n\
                img.lockRotation = "+arrobject[i].lockRotation+"; \n\
                img.left = "+arrobject[i].left+"; \n\
                img.top = "+arrobject[i].top+"; \n\
                img.scaleX = "+arrobject[i].scaleX+"; \n\
                img.scaleY = "+arrobject[i].scaleY+"; \n\
                img.clase = '"+arrobject[i].clase+"'; \n\
                canvas.add(img); \n\
                canvas.bringToFront(img); \n\
            });\n"
        }
        mak.concat(mak)
    }

    $("#main_canvas_export").append("<textarea class='code_copy' id='code_js_main'>"+mak+"</textarea><pre><code>"+mak+"</code></pre>");

});



var copy_code = function(ele_id){
    var copyText = document.getElementById(ele_id);
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");

    var tooltip = document.getElementById(ele_id+"_span");
    tooltip.innerHTML = "Copiado";
};

var reset_span = function(ele_id) {
    var tooltip = document.getElementById(ele_id+"_span");
    tooltip.innerHTML = "Copiar código";
}


