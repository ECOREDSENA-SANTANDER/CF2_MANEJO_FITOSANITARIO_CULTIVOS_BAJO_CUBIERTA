<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Uso seguro y responsable de productos fitosanitarios

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El uso de productos fitosanitarios constituye un componente esencial dentro del manejo integrado de plagas y enfermedades en la agricultura contemporánea. Estos insumos, cuando se aplican de acuerdo con criterios técnicos y siguiendo las recomendaciones establecidas por la normativa vigente, permiten proteger los cultivos, preservar la calidad de la producción y reducir pérdidas ocasionadas por agentes bióticos que afectan el desarrollo vegetal. En este sentido, los fitosanitarios representan una herramienta valiosa para mantener la sostenibilidad y competitividad de los sistemas agrícolas.

    p Sin embargo, su aplicación inadecuada puede generar múltiples riesgos, tanto para la salud humana como para el ambiente y los recursos naturales. La exposición indebida, la contaminación del suelo y el agua, la afectación a organismos no objetivo y la resistencia de plagas son algunas de las consecuencias derivadas de un manejo ineficiente o irresponsable. Por ello, el uso seguro y responsable implica la adopción de prácticas orientadas a garantizar la eficacia del control, minimizar riesgos y promover condiciones de protección para el operador, el consumidor y el entorno. Este enfoque contribuye a una producción agrícola más segura, sostenible y alineada con los principios de la gestión ambiental.

      
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Clasificación y tipos de productos fitosanitarios

    p.mb-4 Los productos fitosanitarios son sustancias o mezclas destinadas a prevenir, destruir o controlar organismos nocivos que afectan a los vegetales o productos vegetales.

    .subt.mb-4(data-aos="fade-right")
      img(src="@/assets/curso/temas/t3/subt.png")
      h3.mb-0.p-2.pe-lg-5 Clasificación según su función

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg2" data-aos="fade-down")
      .row.justify-content-center(titulo="a) Insecticidas")
        .col-md-11
          p Son productos químicos o biológicos que se utilizan para controlar, repeler o eliminar insectos que afectan los cultivos, animales o ambientes domésticos.
        .col-lg-5.col-md-7.mb-4
          img(src='@/assets/curso/temas/t2/acord1-1.png', alt='')
        .col-lg-6.col-md-11.mb-4
          h5.color-adic-1 Modo de acción.
          ul.lista-ul--color.fa-lista.color-adicional-1
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Por contacto:] actúan al tocar el cuerpo del insecto, dañando su cutícula o interfiriendo en sus sistemas nervioso o respiratorio. #[br]
                span.mb-0 #[b Ejemplo:] piretroides (cipermetrina, permetrina).
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Por ingestión:] el insecto debe consumir el producto al alimentarse de la planta tratada. #[br]
                span.mb-0 #[b Ejemplo:] neonicotinoides (imidacloprid, acetamiprid).
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Por inhalación o fumigación:] el insecto absorbe el insecticida en forma de gas o vapor. #[br]
                span.mb-0 #[b Ejemplo:] fosfina, diclorvos.
        .col-md-11.col-lg-9
          h5.color-adic-1 Principales grupos químicos.
          ul.lista-ul--color.fa-lista.color-adicional-1
            li.mb-0
              i.fas.fa-angle-right
              span.mb-0 #[b Piretroides:] derivados sintéticos de las piretrinas naturales; alta eficacia y baja toxicidad para mamíferos.
            li.mb-0
              i.fas.fa-angle-right
              span.mb-0 #[b Organofosforados:] inhiben la enzima acetilcolinesterasa; alta toxicidad. Ejemplo: malatión, clorpirifos.
            li.mb-0
              i.fas.fa-angle-right
              span.mb-0 #[b Carbamatos:] acción similar a los organofosforados. Ejemplo: carbaryl, metomil.
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Neonicotinoides:] afectan el sistema nervioso central de los insectos; alta eficacia sistémica.
        .col-md-11 
          p Se aplican para control de plagas en cultivos agrícolas, granos almacenados, salud pública (mosquitos, cucarachas, etc.).
      .row.justify-content-center(titulo="b) Fungicidas")
        .col-md-11
          p Combaten hongos patógenos. Se utilizan para prevenir o controlar enfermedades causadas por hongos patógenos que atacan raíces, hojas, tallos o frutos.
        .col-lg-5.col-md-7.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t2/acord1-2.png', alt='')
        .col-lg-6.col-md-11
          h5.color-adic-1 Tipos según su modo de acción
          ul.lista-ul--color.fa-lista.color-adicional-1.mb-4
            li
              i.fas.fa-angle-right
              span.mb-0 #[b De contacto:] Permanecen en la superficie del tejido vegetal, evitando la germinación de esporas. No penetran la planta. #[br]
                span.mb-0 #[b Ejemplo:] cobre (oxicloruro de cobre, sulfato de cobre), mancozeb.
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Sistémicos:] Se absorben y translocan dentro de la planta, protegiendo tejidos nuevos. #[br]
                span.mb-0 #[b Ejemplo:] triazoles (tebuconazol, propiconazol), benzimidazoles (carbendazim).
          h5.color-adic-1 Clasificación adicional.
          ul.lista-ul--color.fa-lista.color-adicional-1
            li.mb-1
              i.fas.fa-angle-right
              span.mb-0 #[b Curativos:] eliminan infecciones ya establecidas.
            li.mb-1
              i.fas.fa-angle-right
              span.mb-0 #[b Preventivos:] impiden la infección inicial.
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Erradicantes:] destruyen el patógeno después de que ha infectado.
          p Se aplican para el control de mildiu, roya, tizón, oídio y otros hongos en cultivos como cereales, frutales, vid, hortalizas.
      .row.justify-content-center(titulo="c) Herbicidas")
        .col-md-11
          p Eliminan o inhiben malezas. Son sustancias destinadas a eliminar o inhibir el crecimiento de malezas (plantas indeseables que compiten por luz, agua y nutrientes ).
        .col-lg-5.col-md-7.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t2/acord1-3.png', alt='')
        .col-lg-6.col-md-11
          h5.color-adic-1 Tipos según su acción.
          ul.lista-ul--color.fa-lista.color-adicional-1
            li.mb-1
              i.fas.fa-angle-right
              span.mb-0 #[b De contacto:] destruyen solo la parte aérea de la planta que entra en contacto con el producto. #[br]
                span.mb-0 #[b Ejemplo:] paraquat, glufosinato.
            li.mb-1
              i.fas.fa-angle-right
              span.mb-0 #[b Sistémicos:] se absorben por hojas o raíces y se distribuyen por toda la planta. #[br]
                span.mb-0 #[b Ejemplo:] glifosato, 2,4-D.
            li.mb-1
              i.fas.fa-angle-right
              span.mb-0 #[b Residuales:] permanecen activos en el suelo durante un tiempo, evitando la germinación de nuevas malezas. #[br]
                span.mb-0 #[b Ejemplo:] atrazina, simazina.
            li.mb-1
              i.fas.fa-angle-right
              span.mb-0 #[b Selectivos:] afectan solo ciertos tipos de plantas (por ejemplo, malezas de hoja ancha en cultivos de gramíneas).
            li
              i.fas.fa-angle-right
              span.mb-0 #[b No selectivos:] destruyen toda vegetación con la que entran en contacto.
          p Se aplican en el manejo de malezas en cultivos agrícolas, áreas no cultivadas, y control de vegetación en caminos o canales.
      .row.justify-content-center(titulo="d)	Acaricidas, nematicidas, bactericidas y rodenticidas")
        .col-lg-5.col-md-11.mb-3.mb-lg-0
          p Controlan plagas específicas distintas de los insectos o malezas.
          img(src='@/assets/curso/temas/t2/acord1-4.png', alt='')
        .col-lg-6.col-md-11
          ul.lista-ul--color.fa-lista.color-adicional-1
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Acaricidas:] eliminan ácaros (como arañitas rojas). #[br]
                span.mb-0 #[b Ejemplo:] abamectina, propargita.
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Nematicidas:] combaten nematodos (gusanos microscópicos del suelo que dañan raíces). #[br]
                span.mb-0 #[b Ejemplo:] oxamil, fenamifos.
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Bactericidas:] destruyen bacterias patógenas de las plantas. #[br] 
                span.mb-0 #[b Ejemplo:] compuestos cúpricos, estreptomicina.
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Rodenticidas:] controlan roedores (ratas, ratones). #[br]
                span.mb-0 #[b Ejemplo:] bromadiolona, warfarina.
          p Es importante tener en cuenta que estos productos se usan cuando las plagas específicas generan daños severos en cultivos o infraestructuras agrícolas.
      .row.justify-content-center(titulo="e)	Reguladores de crecimiento")
        .col-md-11
          p Son sustancias que modifican los procesos fisiológicos de las plantas, como la maduración, la floración y el enraizamiento, sin causar daño a los tejidos. Actúan como hormonas vegetales o interfieren en su acción natural.
        .col-lg-5.col-md-7.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t2/acord1-5.png', alt='')
        .col-lg-6.col-md-11
          h5.color-adic-1 Funciones principales.
          ul.lista-ul--color.fa-lista.color-adicional-1
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Estimular el enraizamiento:] ácido indolbutírico (AIB), ácido naftalenacético (ANA).
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Favorecer la floración o fructificación:] ácido giberélico (GA₃).
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Retrasar la maduración o caída de frutos:] auxinas sintéticas.
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Acelerar la maduración:] etileno y liberadores de etileno (etefón).
            li
              i.fas.fa-angle-right
              span.mb-0 #[b Reducir el crecimiento vegetativo:] reguladores como el paclobutrazol (inhibidor de giberelinas).
          p Se aplica para mejorar rendimientos, sincronizar cosechas, inducir floración, evitar caída de frutos, o controlar el tamaño de plantas ornamentales.


    .subt.mb-4(data-aos="fade-right")
      img(src="@/assets/curso/temas/t3/subt.png")
      h3.mb-0.p-2.pe-lg-5 Clasificación según el riesgo toxicológico (Organización Mundial de la Salud - OMS)

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade")
      .col-lg-3.col-md-5.col-7.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t2/2.png', alt='')
      .col-lg-3.mb-4.mb-lg-0
        .tarjeta.bg5.p-4.py-lg-5
          p Esta clasificación agrupa los plaguicidas de acuerdo con el grado de peligro que representan para la salud humana, considerando principalmente su toxicidad aguda (la dosis necesaria para causar la muerte o efectos graves en animales de laboratorio).
          p.mb-0 Se determina en base al valor DL₅₀ (dosis letal 50 %), que indica la cantidad del producto (en mg/kg de peso corporal) capaz de causar la muerte al 50 % de una población de animales de prueba (generalmente ratas).
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 11. 
          span Clasificación de plaguicidas
        figure
          img.mb-2(src='@/assets/curso/temas/t2/fig11.svg', alt='Tabla que muestra la clasificación toxicológica de plaguicidas según la OMS y el SGA, con colores y pictogramas que indican niveles de peligro.')
        figcaption Fuente: CropLife Latin America (s.f.).

    .bg-color-adicional-1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-3
          img(src="@/assets/curso/temas/t2/3.svg")
        .col-lg-9.col-md-10.col-9
          p.text-white.mb-0 #[b Nota:] es obligatorio leer la etiqueta del producto para identificar la clase toxicológica indicada por el color de la franja. Rojo: muy peligroso; amarillo: moderado; azul: leve; verde: poco peligroso. También se deben considerar las siguientes siglas y su significado: SGA, sistema globalmente armonizado de clasificación y etiquetado de productos químicos; GHS, globally harmonized system of classification and labelling of chemicals.

    .subt2.mb-4(data-aos="fade-right")
      h4.mb-0.p-2.pe-lg-5 Importancia de esta clasificación

    .row.justify-content-center
      .col-lg-5.pe-lg-0
        .bg6.h-100
          img.px-lg-4.px-5(src='@/assets/curso/temas/t2/4.svg', alt='')
      .col-lg-7.ps-lg-0
        .bg1.p-4.p-lg-5.h-100
          ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
            li
              i.fas.fa-angle-right
              span.mb-0 Permite evaluar el riesgo para la salud humana (aplicadores, agricultores, consumidores).
            li
              i.fas.fa-angle-right
              span.mb-0 Facilita la regulación y el control del uso de plaguicidas por las autoridades sanitarias.
            li
              i.fas.fa-angle-right
              span.mb-0 Promueve el uso responsable y seguro de productos fitosanitarios.
            li
              i.fas.fa-angle-right
              span.mb-0 Ayuda en la selección de alternativas menos peligrosas para el medio ambiente y las personas.


    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Principios de uso responsable

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        p El uso responsable de productos fitosanitarios se fundamenta en los principios del Manejo Integrado de Plagas (MIP) y en las Buenas Prácticas Agrícolas (BPA), enfoques que promueven una agricultura sostenible, eficiente y respetuosa con el ambiente. Estos principios priorizan la prevención, la vigilancia permanente del cultivo y la selección de métodos de control que reduzcan la necesidad de intervención química, privilegiando alternativas biológicas, culturales y mecánicas siempre que sea posible.
      .col-lg-6
        img(src='@/assets/curso/temas/t2/5.png', alt='')  

    .tarjeta.bg-color-secundario.p-4.mb-5
      p.text-white.mb-0 Asimismo, el uso responsable implica que, cuando se requiera la aplicación de fitosanitarios, esta se realice de manera técnica, segura y racional. Esto incluye la correcta elección del producto, la interpretación adecuada de la etiqueta, la aplicación en el momento oportuno, el uso de equipos de protección personal y la implementación de medidas que eviten la contaminación del suelo, el agua, el aire y la fauna benéfica. De esta manera, los principios de uso responsable buscan preservar la salud humana, proteger el entorno y garantizar la sostenibilidad del sistema productivo.

    .subt.mb-4(data-aos="fade-right")
      img(src="@/assets/curso/temas/t3/subt.png")
      h3.mb-0.p-2.pe-lg-5 Principios fundamentales

    SlyderF(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-1.svg' alt='')
        h4.text-center a) Diagnóstico correcto
        p.text-center Identificar la plaga o enfermedad con precisión antes de aplicar cualquier producto.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-2.svg' alt='')
        h4.text-center b) Selección adecuada del producto
        p.text-center Usar productos registrados y autorizados por la autoridad competente por ejemplo, el Instituto Colombiano Agropecuario (ICA) y escoger el producto más específico y menos tóxico posible.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-3.svg' alt='')
        h4.text-center c) Lectura y cumplimiento de la etiqueta
        p.text-center La etiqueta contiene instrucciones de uso, dosis, periodo de carencia, compatibilidad, toxicidad y medidas de seguridad.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-4.svg' alt='')
        h4.text-center d) Calibración del equipo de aplicación
        p.text-center Garantiza que se aplique la dosis correcta, evitando sobredosificación o deficiencia.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-5.svg' alt='')
        h4.text-center e) Evitar la contaminación ambiental
        p.text-center No aplicar con viento fuerte, lluvias inminentes o cerca de cuerpos de agua y no lavar equipos en ríos, acequias o pozos.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-6.svg' alt='')
        h4.text-center f) Rotación de ingredientes activos
        p.text-center Evita la resistencia de plagas y mantiene la efectividad de los productos.
      .tarjeta.bg2.p-4
        .row.justify-content-center.mb-3
          .col-5.col-md-7.col-lg-6
            img(src='@/assets/curso/temas/t2/tarj1-7.svg' alt='')
        h4.text-center g) Respeto al periodo de carencia o reingreso
        p.text-center Periodo que debe pasar entre la aplicación y la cosecha o el ingreso a la zona tratada.


    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3.  Equipos de Protección Personal (EPP)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/6.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p Los Equipos de Protección Personal (EPP) constituyen un elemento esencial dentro de las medidas de seguridad en las actividades relacionadas con la manipulación, preparación y aplicación de productos fitosanitarios. Su función principal es actuar como una barrera de protección entre el trabajador y los agentes químicos, reduciendo significativamente el riesgo de intoxicaciones, irritaciones cutáneas, afectaciones respiratorias y otros daños a la salud derivados de la exposición directa o indirecta a agroquímicos.
        .tarjeta.bg5.p-4
          p.mb-0 El uso adecuado del EPP no solo protege la integridad física del operario, sino que también forma parte de las buenas prácticas agrícolas y del cumplimiento de la normativa en seguridad y salud en el trabajo. La selección correcta de los equipos, su uso permanente durante las labores, el mantenimiento adecuado y la reposición oportuna son aspectos fundamentales para garantizar condiciones seguras de trabajo. De esta manera, el EPP se consolida como una herramienta preventiva indispensable para una gestión fitosanitaria responsable y sostenible.

    .row.justify-content-center.tarjeta--container(data-aos="fade-down")
      .col-11.col-md-6.col-lg-5.tarjeta.color-primario.p-4.p-md-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-4
            img(src='@/assets/curso/temas/t2/tarj2-1.svg', alt='')
        h3.text-center a)	Equipos básicos recomendados
        ul.lista-ul--color.fa-lista.color-secundario.mb-0
          li
            i.fas.fa-angle-right
            span.mb-0 Ropa de trabajo impermeable o de manga larga.
          li
            i.fas.fa-angle-right
            span.mb-0 Guantes de nitrilo o neopreno (no de algodón o látex, ya que absorben el producto).
          li
            i.fas.fa-angle-right
            span.mb-0 Mascarilla o respirador con filtro químico (tipo A1P2 o equivalente).
          li
            i.fas.fa-angle-right
            span.mb-0 Gafas o careta facial protectora.
          li
            i.fas.fa-angle-right
            span.mb-0 Botas de goma.
          li.mb-0
            i.fas.fa-angle-right
            span.mb-0 Sombrero o capucha impermeable.
      .col-11.col-md-6.col-lg-5.tarjeta.color-secundario.p-4.p-md-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-4
            img(src='@/assets/curso/temas/t2/tarj2-2.svg', alt='')
        h3.text-white.text-center b)	Normas de uso
        ul.lista-ul--color.fa-lista.color-primario.mb-0
          li
            i.fas.fa-angle-right
            span.text-white.mb-0 Colocar el EPP antes de manipular el producto.
          li
            i.fas.fa-angle-right
            span.text-white.mb-0 No comer, beber ni fumar durante la aplicación.
          li
            i.fas.fa-angle-right
            span.text-white.mb-0 Lavar y almacenar el EPP en un lugar limpio y ventilado.
          li.mb-0
            i.fas.fa-angle-right
            span.text-white.mb-0 Nunca reutilizar envases vacíos como recipientes personales.


    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4. Almacenamiento, transporte y eliminación de productos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/7.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p Un manejo inadecuado de los productos fitosanitarios puede provocar accidentes, incendios, intoxicaciones o la contaminación del suelo y las fuentes de agua, afectando la salud humana y los ecosistemas. Por esta razón, el almacenamiento de estos insumos debe realizarse en lugares exclusivos, ventilados, señalizados, con acceso restringido y protegidos de la luz solar, la humedad y temperaturas extremas. Los productos deben permanecer en sus envases originales, debidamente rotulados y organizados según su nivel de peligrosidad y compatibilidad química.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t2/8.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 El transporte de productos fitosanitarios debe efectuarse cumpliendo las normas de seguridad establecidas, evitando el contacto con alimentos, personas o animales, y asegurando correctamente los envases para prevenir derrames o rupturas. 
        p Asimismo, la eliminación de envases vacíos, productos vencidos o residuos de preparación debe realizarse conforme a la normativa ambiental vigente, mediante procesos como el triple lavado, la perforación de envases y su disposición en sistemas autorizados de recolección. Estas prácticas garantizan la protección del ambiente, la seguridad del trabajador y el cumplimiento de los principios del uso responsable de agroquímicos.

    .row.justify-content-center(data-aos="fade")
      .col-lg-8.mb-3.mb-lg-0
        TabsD.color-acento-botones(data-aos="fade-down")
          .tarjeta.bg2.p-4(titulo="a) Almacenamiento")
            h4 a) Almacenamiento
            ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
              li
                i.fas.fa-angle-right
                span.mb-0 Mantener en un almacén exclusivo, ventilado, seco y con piso impermeable.
              li
                i.fas.fa-angle-right
                span.mb-0 Organizar los productos por tipo y toxicidad.
              li
                i.fas.fa-angle-right
                span.mb-0 Colocar letreros de advertencia y prohibición de entrada a personas no autorizadas.
              li
                i.fas.fa-angle-right
                span.mb-0 Mantener los productos en su envase original, con etiqueta visible.
              li
                i.fas.fa-angle-right
                span.mb-0 Contar con kit de emergencia (absorbentes, cal, arena, jabón neutro). 
          .tarjeta.bg2.p-4(titulo="b) Transporte")
            h4.mb-4 b) Transporte
            ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
              li
                i.fas.fa-angle-right
                span.mb-0 Transportar los productos en vehículos cerrados, separados de alimentos o personas.
              li
                i.fas.fa-angle-right
                span.mb-0 Asegurar los envases para evitar derrames.
              li
                i.fas.fa-angle-right
                span.mb-0 Llevar hoja de seguridad y equipo de contención.
          .tarjeta.bg2.p-4(titulo="c) Eliminación de envases y residuos")
            h4.mb-4 c) Eliminación de envases y residuos
            ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
              li
                i.fas.fa-angle-right
                span.mb-0 Triple lavado de envases antes de su eliminación o entrega en centros de acopio autorizados.
              li
                i.fas.fa-angle-right
                span.mb-0 No quemar ni enterrar los envases.
              li
                i.fas.fa-angle-right
                span.mb-0 Disponer los residuos líquidos o sólidos según las normas ambientales locales.
      .col-lg-4.col-md-7
        img(src='@/assets/curso/temas/t2/9.png', alt='')


    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.5. Señalización y medidas de seguridad durante la aplicación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/10.png', alt='')
      .col-lg-6(data-aos="fade-left")
        p Durante las labores de aplicación de productos fitosanitarios, la seguridad del operario, de otros trabajadores y del ambiente constituye una prioridad fundamental. Estas actividades implican la manipulación de sustancias químicas que, si no se manejan bajo condiciones controladas, pueden generar riesgos de intoxicación, contaminación ambiental y accidentes laborales. Por ello, la implementación de señalización adecuada y de medidas de seguridad estrictas es indispensable para prevenir exposiciones involuntarias y proteger la integridad de las personas involucradas en el proceso productivo.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t2/11.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 La señalización cumple la función de advertir, informar y restringir el acceso a las áreas en las que se realizan aplicaciones, permitiendo que los trabajadores identifiquen zonas de peligro y adopten las precauciones necesarias. 

    p.mb-4 De igual manera, las medidas de seguridad incluyen el uso obligatorio de equipos de protección personal, el establecimiento de zonas de exclusión, el respeto por los tiempos de reingreso al cultivo y la correcta disposición de residuos. La adecuada aplicación de estas disposiciones contribuye a reducir los riesgos operativos, garantizar condiciones seguras de trabajo y fortalecer una cultura de prevención en las actividades fitosanitarias.

    .row.justify-content-center(data-aos="fade")
      .col-lg-5.col-md-6.mb-3.mb-lg-0
        .bg2.p-4.h-100
          img.w-75.m-auto.mb-4(src='@/assets/curso/temas/t2/tarj3-1.png', alt='')
          h4.text-center a)	Señalización
          ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
            li
              i.fas.fa-angle-right
              span.mb-0 Colocar avisos visibles con mensajes como “zona en tratamiento - prohibido entrar”.
            li
              i.fas.fa-angle-right
              span.mb-0 Indicar fecha y hora de aplicación, nombre del producto, dosis y periodo de reingreso.
            li
              i.fas.fa-angle-right
              span.mb-0 En invernaderos o estructuras protegidas, cerrar el acceso durante y después de la aplicación.
      .col-lg-5.col-md-6.mb-3.mb-lg-0
        .bg2.p-4.h-100
          img.w-75.m-auto.mb-4(src='@/assets/curso/temas/t2/tarj3-2.png', alt='')
          h4.text-center b)	Medidas de seguridad
          ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
            li
              i.fas.fa-angle-right
              span.mb-0 Aplicar en horas frescas del día (mañana o tarde) para reducir evaporación y deriva.
            li
              i.fas.fa-angle-right
              span.mb-0 Evitar viento fuerte (velocidad > 10 km/h) y temperaturas extremas.
            li
              i.fas.fa-angle-right
              span.mb-0 Verificar que el equipo esté en buen estado y sin fugas.
            li
              i.fas.fa-angle-right
              span.mb-0 Mantener un botiquín y teléfono de emergencia accesible.
            li
              i.fas.fa-angle-right
              span.mb-0 En caso de intoxicación, llevar la etiqueta del producto al centro médico.



</template>

<script>
import TabsD from '../components/TabsD'
export default {
  name: 'Tema2',
  components: {
    TabsD,
  },
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
