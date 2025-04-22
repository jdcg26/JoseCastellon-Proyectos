var panorama, viewer, container, infospot;

container=document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('imagenes/oficina.jpg');

var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(0,-100,-500);
infospot1.addHoverText('Área de recepción',-60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0,106,234,0.8); color:#fff; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Área de Recepción</h3><p>Bienvenido a Farmacia LPC. En nuestra recepción nuestro personal calificado le atenderá y guiará según sus necesidades de salud.</p><img src="imagenes/recepcion.jpg" alt="Área de recepción" style="max-width: 100%; height: auto; border-radius: 5px;"><p>Contamos con un sistema de turnos digitales para agilizar su atención.</p></div>';
panorama.add(infospot1);

var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(150,-200,-400);
infospot2.addHoverText('Medicamentos',-60);
infospot2.element.innerHTML = '<div style="background-color: rgba(255,193,7,0.8); color:#000; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Estantería de Medicamentos</h3><p>Ofrecemos una amplia gama de medicamentos de prescripción y venta libre, organizados por categorías para facilitar su búsqueda.</p><video width="100%" height="auto" controls><source src="imagenes/medicamentos-info.mp4" type="video/mp4">Tu navegador no soporta el elemento de video.</video><p>Nuestro personal farmacéutico está siempre disponible para resolver sus dudas sobre medicamentos.</p></div>';
panorama.add(infospot2);

var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(0,500,0);
infospot3.addHoverText('Cosméticos y cuidado personal',-60);
infospot3.element.innerHTML = '<div style="background-color: rgba(111,66,193,0.8); color:#fff; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Cosméticos y Cuidado Personal</h3><p>Descubra nuestra selección de productos de belleza, higiene y cuidado personal de las mejores marcas.</p><img src="imagenes/recepcion.jpg" alt="Cosméticos" style="max-width: 100%; height: auto; border-radius: 5px;"><p>Ofrecemos asesoría personalizada para ayudarle a elegir los productos adecuados según su tipo de piel.</p><button onclick="alert(\'¡Gracias por su interés en nuestros productos cosméticos!\')" style="background-color: #6f42c1; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-top: 10px;">Más información</button></div>';
panorama.add(infospot3);

var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot4.position.set(0,100,500);
infospot4.addHoverText('Productos naturales',-60);
infospot4.element.innerHTML = '<div style="background-color: rgba(32,164,61,0.8); color:#fff; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Productos Naturales</h3><p>En Farmacia LPC apostamos por la medicina alternativa con una sección dedicada a productos naturales, suplementos y hierbas medicinales.</p><img src="imagenes/productos-naturales.jpg" alt="Productos naturales" style="max-width: 100%; height: auto; border-radius: 5px;"><p>Todos nuestros productos naturales cuentan con certificaciones que garantizan su calidad y procedencia.</p></div>';
panorama.add(infospot4);

var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(500,0,0);
infospot5.addHoverText('Consultorio farmacéutico',-60);
infospot5.element.innerHTML = '<div style="background-color: rgba(220,53,69,0.8); color:#fff; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Consultorio Farmacéutico</h3><p>Ofrecemos servicio de consulta farmacéutica en un espacio privado donde podrá recibir asesoramiento profesional sobre sus medicamentos.</p><iframe width="100%" height="160" src="https://www.youtube.com/embed/Gyl8HJOOpLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Consultas disponibles de lunes a viernes de 9:00 AM a 5:00 PM.</p></div>';
panorama.add(infospot5);

var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-400,-150,300);
infospot6.addHoverText('Productos infantiles',-60);
infospot6.element.innerHTML = '<div style="background-color: rgba(32,164,61,0.8); color:#fff; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Productos Infantiles</h3><p>Contamos con una sección especializada en productos para bebés y niños: pañales, fórmulas, alimentación, higiene y más.</p><div id="infant-content" style="height: 100px; overflow-y: auto; background-color: rgba(255,255,255,0.2); padding: 10px; border-radius: 5px; margin: 10px 0;"><p>Nuestra sección infantil ofrece:</p><ul><li>Fórmulas infantiles</li><li>Pañales y toallitas</li><li>Artículos de higiene</li><li>Alimentos para bebés</li><li>Accesorios de alimentación</li><li>Juguetes educativos</li></ul></div><button onclick="document.getElementById(\'infant-content\').style.height = (document.getElementById(\'infant-content\').style.height === \'100px\' ? \'auto\' : \'100px\')" style="background-color: #20a43d; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-top: 10px;">Ver más/menos</button></div>';
panorama.add(infospot6);

var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(-300,-50,-450);
infospot7.addHoverText('Equipos médicos',-60);
infospot7.element.innerHTML = '<div style="background-color: rgba(0,106,234,0.8); color:#fff; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Equipos Médicos</h3><p>Disponemos de una variedad de equipos médicos para el hogar: tensiómetros, glucómetros, termómetros, nebulizadores y más.</p><img src="imagenes/equipos-medicos.jpg" alt="Equipos médicos" style="max-width: 100%; height: auto; border-radius: 5px;"><p>Ofrecemos servicio de alquiler de equipos especializados como sillas de ruedas, muletas y andaderas.</p></div>';
panorama.add(infospot7);

var infospot8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot8.position.set(250,-100,-450);
infospot8.addHoverText('Nutrición especializada',-60);
infospot8.element.innerHTML = '<div style="background-color: rgba(111,66,193,0.8); color:#fff; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Nutrición Especializada</h3><p>Sección de suplementos nutricionales, productos para deportistas y alimentación especializada para condiciones médicas específicas.</p><div style="display: flex; justify-content: space-between; margin: 15px 0;"><div onclick="showContent(\'deportiva\')" style="background-color: #8257d1; padding: 5px; border-radius: 5px; cursor: pointer; width: 48%;">Deportiva</div><div onclick="showContent(\'clinica\')" style="background-color: #8257d1; padding: 5px; border-radius: 5px; cursor: pointer; width: 48%;">Clínica</div></div><div id="deportiva" style="display: none; background-color: rgba(255,255,255,0.2); padding: 10px; border-radius: 5px; margin-bottom: 10px;">Suplementos para deportistas, proteínas, aminoácidos, creatina y más.</div><div id="clinica" style="display: none; background-color: rgba(255,255,255,0.2); padding: 10px; border-radius: 5px;">Alimentación especial para diabetes, hipertensión, enfermedad celíaca y más.</div></div>';
panorama.add(infospot8);

var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot9.position.set(400,100,200);
infospot9.addHoverText('Punto de venta',-60);
infospot9.element.innerHTML = '<div style="background-color: rgba(0,106,234,0.8); color:#fff; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Sistema de Punto de Venta</h3><p>Contamos con tecnología de última generación para agilizar el proceso de compra y garantizar una experiencia rápida y segura.</p><img src="imagenes/punto-venta.jpg" alt="Sistema de punto de venta" style="max-width: 100%; height: auto; border-radius: 5px;"><p>Aceptamos todas las tarjetas de crédito y débito, además de pagos móviles.</p><button onclick="window.open(\'https://www.farmacialpc.com/pagos\', \'_blank\')" style="background-color: #0d6efd; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer; margin-top: 10px;">Métodos de pago</button></div>';
panorama.add(infospot9);

var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot10.position.set(-450,100,-100);
infospot10.addHoverText('Servicio a domicilio',-60);
infospot10.element.innerHTML = '<div style="background-color: rgba(255,193,7,0.8); color:#000; border-radius: 5px; padding:10px; font-size:14px; width: 250px;"><h3>Servicio a Domicilio</h3><p>Entregamos sus medicamentos y productos farmacéuticos directamente en su hogar. Cobertura en toda la ciudad y alrededores.</p><iframe width="100%" height="160" src="https://www.youtube.com/embed/V9K1oJtRc3s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>Llame al 8446-5505 o use nuestra app para solicitar su entrega.</p></div>';
panorama.add(infospot10);

function showContent(id) {
    var element = document.getElementById(id);
    if (element) {
        document.getElementById('deportiva').style.display = 'none';
        document.getElementById('clinica').style.display = 'none';
        element.style.display = 'block';
    }
}

viewer = new PANOLENS.Viewer({
    container: container,
    output: 'console',
    autoHideInfospot: false
});

viewer.add(panorama);

document.getElementById('fullscreen-btn').addEventListener('click', function() {
    if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => {
            alert(`Error al intentar activar el modo pantalla completa: ${err.message}`);
        });
        container.classList.add('fullscreen');
        document.body.classList.add('fullscreen-active');
    } else {
        document.exitFullscreen();
        container.classList.remove('fullscreen');
        document.body.classList.remove('fullscreen-active');
    }
});

document.getElementById('zoom-in').addEventListener('click', function() {
    viewer.setCameraFov(viewer.camera.fov - 10);
});

document.getElementById('zoom-out').addEventListener('click', function() {
    viewer.setCameraFov(viewer.camera.fov + 10);
});

document.getElementById('autorotate-toggle').addEventListener('click', function() {
    var isAutoRotating = !viewer.getAutoRotateStatus();
    viewer.setAutoRotate(isAutoRotating);
    this.classList.toggle('active');
});