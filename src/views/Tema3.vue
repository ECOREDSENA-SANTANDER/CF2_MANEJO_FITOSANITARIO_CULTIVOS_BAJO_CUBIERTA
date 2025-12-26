<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Buenas Prácticas Agrícolas (BPA) en el manejo fitosanitario 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las Buenas Prácticas Agrícolas (BPA) constituyen un conjunto de principios, normas y procedimientos orientados a garantizar una producción sostenible, segura y eficiente. Su aplicación permite asegurar la inocuidad de los alimentos, la protección del medio ambiente, la salud de los trabajadores y la viabilidad económica de los sistemas productivos, promoviendo un equilibrio entre productividad y responsabilidad ambiental.
        br
        br
        p.mb-0 En el ámbito del manejo fitosanitario, las BPA establecen directrices para el uso racional, seguro y responsable de los productos fitosanitarios, abarcando desde su adecuada selección, almacenamiento y aplicación, hasta su correcta disposición final. Estas prácticas buscan minimizar los riesgos de contaminación, prevenir daños a la salud humana y conservar los ecosistemas, contribuyendo así a una producción agrícola más segura, eficiente y sostenible.

    .row.bgcolor-1.tarjeta.align-items-center.p-2.p-md-4.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t3/2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-1 Documental. Buenas prácticas en el uso de plaguicidas.
                  p.mb-0 Para fortalecer el tema anteriormente plasmado, se presenta el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=H8vHZGJoFp0')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-circle-play

    .subt.mb-4(data-aos="fade-right")
      img(src="@/assets/curso/temas/t3/subt.png")
      h3.mb-0.p-2.pe-lg-5 Objetivos de las BPA

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-6.pe-lg-0
        .bg1.p-4.p-lg-5.h-100
          ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
            li
              i.fas.fa-angle-right
              span.mb-0 Asegurar la inocuidad de los alimentos, reduciendo la presencia de residuos de plaguicidas.
            li
              i.fas.fa-angle-right
              span.mb-0 Proteger la salud del productor y del consumidor.
            li
              i.fas.fa-angle-right
              span.mb-0 Promover un manejo fitosanitario racional dentro del marco del Manejo Integrado de Plagas (MIP). 
            li
              i.fas.fa-angle-right
              span.mb-0 Preservar los recursos naturales, especialmente el suelo, el agua y la biodiversidad.
            li
              i.fas.fa-angle-right
              span.mb-0 Favorecer la trazabilidad y certificación de la producción agrícola para mercados nacionales e internacionales.
            li.mb-0
              i.fas.fa-angle-right
              span.mb-0 Impulsar la sostenibilidad económica y social de las comunidades rurales.
      .col-lg-6.ps-lg-0
        img(src="@/assets/curso/temas/t3/3.png")


    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1. Registros y trazabilidad de las aplicaciones

    .row.justify-content-center.mb-5
      .col-lg-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t3/4.png")
      .col-lg-4(data-aos="fade-left")
        .bg2.tarjeta.p-4.p-lg-5.h-100
          p.mb-0 La trazabilidad es la capacidad de rastrear el historial completo de un producto agrícola, desde la siembra hasta el consumidor final. En el manejo fitosanitario, esto implica llevar registros precisos y actualizados de cada aplicación o tratamiento realizado en el cultivo.

    .row.justify-content-center.cursor-pointer.mb-4.mb-md-5(data-aos="fade-down")
      .col-lg-4.col-md-9.mb-3.mb-lg-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t3/tarj1-1.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.text-white.mb-0 a)	Importancia
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 a)	Importancia
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
                li
                  i.fas.fa-angle-right
                  span.mb-0 Permite demostrar la inocuidad de la producción ante auditorías o certificaciones (como GLOBALG.A.P, USDA Organic).  
                li
                  i.fas.fa-angle-right
                  span.mb-0 Facilita la identificación de problemas en caso de detección de residuos o incidentes.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Contribuye a la transparencia y confianza con compradores y consumidores.
      .col-lg-4.col-md-9.mb-3.mb-lg-0
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t3/tarj1-2.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.text-white.mb-0 b) Registros mínimos que deben mantenerse
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.p-lg-3
              h5.mb-1 b) Registros mínimos que deben mantenerse
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
                li.mb-0
                  i.fas.fa-angle-right
                  span.mb-0 Fecha y hora de aplicación. 
                li.mb-0
                  i.fas.fa-angle-right
                  span.mb-0 Nombre comercial y principio activo del producto fitosanitario. 
                li.mb-0
                  i.fas.fa-angle-right
                  span.mb-0 Número de registro del producto y dosis aplicada. 
                li.mb-0
                  i.fas.fa-angle-right
                  span.mb-0 Superficie o lote tratado. 
                li.mb-0
                  i.fas.fa-angle-right
                  span.mb-0 Condiciones climáticas al momento de la aplicación (temperatura, humedad, viento). 
                li.mb-0
                  i.fas.fa-angle-right
                  span.mb-0 Nombre del aplicador y uso de equipo de protección. 
                li.mb-0
                  i.fas.fa-angle-right
                  span.mb-0 Periodo de carencia o reingreso. 
                li.mb-0
                  i.fas.fa-angle-right
                  span.mb-0 Observaciones (efectividad, síntomas, presencia de plagas, etc.). 
      .col-lg-4.col-md-9.mb-3.mb-lg-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/t3/tarj1-3.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.text-white.mb-0 c) Trazabilidad documental
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5 c) Trazabilidad documental
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
                li
                  i.fas.fa-angle-right
                  span.mb-0 Se debe conservar el registro de compra de los productos (facturas, etiquetas, hojas de seguridad).
                li
                  i.fas.fa-angle-right
                  span.mb-0 Los documentos deben guardarse al menos por un ciclo productivo completo.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Cada lote debe tener un código o identificación que relacione la producción con sus registros fitosanitarios.

    .bg-color-adicional-1.p-4
      .row.justify-content-center.align-items-center
        .col-lg-1.col-md-2.col-3
          img(src="@/assets/curso/temas/t3/5.svg")
        .col-lg-9.col-md-10.col-9
          p.text-white.mb-0 Nota: una trazabilidad completa permite responder con rapidez ante auditorías de certificación o en caso de que se detecten residuos en los alimentos.


    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2. Limpieza y mantenimiento de equipos de aplicación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src="@/assets/curso/temas/t3/6.png")
      .col-lg-6(data-aos="fade-left")
        p Un manejo responsable de los productos fitosanitarios incluye de manera esencial la correcta limpieza y el mantenimiento preventivo de los equipos de aplicación. Estas acciones permiten garantizar la eficiencia del equipo, la seguridad del operario y la precisión en las dosis aplicadas, evitando fallas técnicas, aplicaciones irregulares, contaminación cruzada entre productos y pérdidas de insumos que pueden afectar la eficacia del control fitosanitario y la sanidad del cultivo.
        .bg-color-acento-botones.tarjeta.p-4
          p.text-white.mb-0 La limpieza debe realizarse después de cada jornada de aplicación, asegurando la eliminación de residuos en boquillas, mangueras, filtros, tanques y válvulas, mientras que el mantenimiento preventivo comprende la revisión periódica, la calibración de los equipos y el reemplazo oportuno de piezas desgastadas. Estas prácticas prolongan la vida útil del equipo, reducen el riesgo de accidentes y contribuyen al cumplimiento de las buenas prácticas agrícolas, favoreciendo una gestión fitosanitaria segura, eficiente y ambientalmente responsable.

    TabsC.color-acento-botones(data-aos="fade")
      .py-4.py-md-5.bg2(titulo="a)	Importancia técnica")
        .row.justify-content-center.align-items-center
          .col-md-5.col-lg-3.col-5.mb-4.mb-md-0
            img.px-lg-4(src='@/assets/curso/temas/t3/tabs1-1.png', alt='')
          .col-md-6.col-lg-5.col-11
            h4 a)	Importancia técnica:
            ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
              li
                i.fas.fa-check
                span.mb-0 Asegura una distribución uniforme del producto.
              li
                i.fas.fa-check
                span.mb-0 Evita sobredosificación o subdosificación.
              li
                i.fas.fa-check
                span.mb-0 Previene la contaminación cruzada entre diferentes productos.
              li
                i.fas.fa-check
                span.mb-0 Reduce el riesgo de exposición del operario a residuos tóxicos.
      .py-4.py-md-5.bg2(titulo="b)	Procedimientos de mantenimiento")
        .row.justify-content-evenly
          .col-11
            h4.mb-4 b)	Procedimientos de mantenimiento
          .col-lg-5.col-md-11.col-11
            h5 1.	Antes de la aplicación: 
            ul.lista-ul--color.fa-lista.color-adicional-1
              li
                i.fas.fa-check
                span.mb-0 Revisar boquillas, filtros, mangueras, válvulas y presión del equipo.
              li
                i.fas.fa-check
                span.mb-0 Calibrar el equipo para aplicar la dosis correcta.
              li
                i.fas.fa-check
                span.mb-0 Verificar que no existan fugas.
            h5 2.	Durante la aplicación:
            ul.lista-ul--color.fa-lista.color-adicional-1
              li
                i.fas.fa-check
                span.mb-0 Observar la uniformidad del chorro y presión constante.
              li
                i.fas.fa-check
                span.mb-0 Evitar derrames o goteos.
          .col-lg-5.col-md-11.col-11
            h5 3.	Después de la aplicación: 
            ul.lista-ul--color.fa-lista.color-adicional-1
              li
                i.fas.fa-check
                span.mb-0 Realizar triple lavado del equipo y envases.
              li
                i.fas.fa-check
                span.mb-0 El agua del lavado debe ser aplicada en el mismo lote tratado, nunca en drenajes o cuerpos de agua.
              li
                i.fas.fa-check
                span.mb-0 Almacenar el equipo limpio en un área segura y ventilada.
            h5 4.	Mantenimiento periódico:
            ul.lista-ul--color.fa-lista.color-adicional-1
              li
                i.fas.fa-check
                span.mb-0 Sustituir boquillas desgastadas y juntas dañadas.
              li
                i.fas.fa-check
                span.mb-0 Lubricar partes móviles.
              li
                i.fas.fa-check
                span.mb-0 Revisar calibración cada cierto número de horas de uso.



    Separador
    #t_3_3
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3. Responsabilidad ambiental y social en la producción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        p Las buenas prácticas agrícolas también integran el componente ambiental y social, reconociendo que la sostenibilidad de la producción depende del equilibrio entre la productividad, la protección de los recursos naturales y el bienestar de las comunidades. La actividad agrícola debe desarrollarse bajo criterios que reduzcan el impacto sobre el suelo, el agua, el aire y la biodiversidad, promoviendo el uso racional de insumos, la conservación de los ecosistemas y la prevención de la contaminación generada por residuos químicos, orgánicos e industriales.
        .bg-color-adicional-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-3
              img(src="@/assets/curso/temas/t3/7.svg")
            .col-lg-10.col-md-10.col-9
              p.text-white.mb-0 Desde el enfoque social, la producción sostenible exige condiciones de trabajo dignas y seguras para los trabajadores del sector, garantizando la protección de su salud, el respeto por los derechos laborales y el acceso a entornos de trabajo seguros. 
      .col-lg-6.col-md-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/8.png', alt='')

    p.mb-4 Asimismo, la responsabilidad social implica una relación armónica con las comunidades cercanas a las zonas productivas, evitando afectaciones a la salud pública y promoviendo prácticas transparentes y responsables. De esta manera, la integración de los componentes ambiental y social fortalece la sostenibilidad del sistema productivo, mejora la imagen del sector agropecuario y contribuye al desarrollo económico y social del territorio.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg2")
          .row.justify-content-center(titulo="a)	Responsabilidad ambiental")
            .col-md-11
              h5 1.	Prevención de la contaminación:
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-4
                li.mb-1
                  i.fas.fa-angle-right
                  span.mb-0 No aplicar productos cerca de fuentes de agua o zonas de amortiguamiento ecológico.
                li.mb-1
                  i.fas.fa-angle-right
                  span.mb-0 Manejar adecuadamente los residuos de envases (programas como CampoLimpio).
                li
                  i.fas.fa-angle-right
                  span.mb-0 Promover prácticas de bioseguridad y uso racional del agua.
              h5 2.	Conservación de la biodiversidad:
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-4
                li.mb-1
                  i.fas.fa-angle-right
                  span.mb-0 Favorecer enemigos naturales y polinizadores mediante el uso selectivo de plaguicidas.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Rotar cultivos y fomentar cobertura vegetal.
              h5 3.	Adaptación al cambio climático:
              ul.lista-ul--color.fa-lista.color-adicional-1
                li
                  i.fas.fa-angle-right
                  span.mb-0 Implementar tecnologías que reduzcan el impacto ambiental (riego tecnificado, energía solar, agricultura de precisión).
          .row.justify-content-center(titulo="b)	Responsabilidad social")
            .col-md-11
              h5 1.	Capacitación y protección del personal:
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-4
                li.mb-1
                  i.fas.fa-angle-right
                  span.mb-0 Brindar formación continua sobre manejo seguro de agroquímicos.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Garantizar el uso de EPP y condiciones de trabajo dignas.
              h5 2.	Cumplimiento legal y ético:
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-4
                li.mb-1
                  i.fas.fa-angle-right
                  span.mb-0 Respetar la normativa laboral, sanitaria y ambiental.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Evitar trabajo infantil y discriminación.
              h5 3.	Relación con la comunidad:
              ul.lista-ul--color.fa-lista.color-adicional-1
                li.mb-1
                  i.fas.fa-angle-right
                  span.mb-0 Comunicar las fechas de aplicación para evitar exposición de terceros.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Participar en programas de desarrollo rural sostenible.
      .col-lg-4.col-md-7.col-8(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/9.png', alt='')






</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
