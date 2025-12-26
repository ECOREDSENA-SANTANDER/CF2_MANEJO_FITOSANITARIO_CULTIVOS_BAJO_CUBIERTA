<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manejo del ambiente en estructuras protegidas

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El manejo adecuado del ambiente en estructuras protegidas, como invernaderos o casas malla, permite optimizar el crecimiento de los cultivos y reducir la incidencia de plagas y enfermedades. Entre los factores clave que deben controlarse se encuentran la temperatura, la humedad relativa, la luz y la ventilación.
        br
        br
        p.mb-0 El monitoreo constante de estos parámetros garantiza condiciones favorables para el desarrollo vegetal y disminuye la proliferación de microorganismos patógenos. Asimismo, la implementación de sistemas automáticos de control climático y el manejo racional del riego constituyen prácticas esenciales para mantener un ambiente equilibrado y saludable.

    .div.mb-5(data-aos="fade")
      .titulo-sexto.color-acento-contenido
        h5 Figura 1. 
        span Cultivo bajo cubierta
      figure
        img(src='@/assets/curso/temas/t1/fig1.png', alt='Cultivo bajo cubierta de hortalizas dispuesto en filas dentro de un invernadero.')

    .subt.mb-4(data-aos="fade-right")
      img(src="@/assets/curso/temas/t3/subt.png")
      h3.mb-0.p-2.pe-lg-5 Concepto y tipos de ambientes protegidos

    p El ambiente protegido es un espacio diseñado para modificar o controlar las condiciones climáticas naturales que afectan a los cultivos (temperatura, humedad, radiación, viento, lluvia, entre otras). Su finalidad es proporcionar un entorno estable y favorable para el desarrollo vegetal.
    p.mb-4 Tipos de estructuras y niveles de protección:  

    .row.justify-content-center.align-items-center
      .col-lg-4.col-md-6.col-7.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/2.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .bg2.tarjeta.p-4.py-lg-5
          SlyderA(tipo='b')
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                h4.mb-4 a)	Túneles bajos y macrotúneles: 
                ul.lista-ul--color.fa-lista
                  li
                    i.fas.fa-seedling
                    span.mb-0 Ofrecen una protección parcial frente a la lluvia, el viento o la radiación solar.
                  li
                    i.fas.fa-seedling
                    span.mb-0 Generalmente se utilizan para hortalizas de ciclo corto, como fresas, tomates #[em cherry] y lechugas.
              .col-md-6
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 2. 
                  span Túneles bajos
                figure
                  img(src='@/assets/curso/temas/t1/fig2.png', alt='Cultivo bajo cubierta de fresas en proceso de cosecha.')
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                h4.mb-4 b)	Casas malla o umbráculos:
                ul.lista-ul--color.fa-lista
                  li
                    i.fas.fa-seedling
                    span.mb-0 Protegen del exceso de radiación y del ataque de insectos.
                  li
                    i.fas.fa-seedling
                    span.mb-0 Permiten buena ventilación natural.
              .col-md-6
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 3. 
                  span Casas malla
                figure
                  img(src='@/assets/curso/temas/t1/fig3.png', alt='Casa malla utilizada como estructura de protección para cultivos agrícolas.')
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                h4.mb-4 c)	Invernaderos de plástico o vidrio: 
                ul.lista-ul--color.fa-lista
                  li
                    i.fas.fa-seedling
                    span.mb-0 Estructuras cerradas con control parcial o total del ambiente.
                  li
                    i.fas.fa-seedling
                    span.mb-0 Permiten calefacción, ventilación forzada, riego automatizado, entre otros sistemas.
              .col-md-6
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 4. 
                  span Invernadero de plástico
                figure
                  img(src='@/assets/curso/temas/t1/fig4.png', alt='Trabajos de manejo del cultivo dentro de un invernadero de plástico.')
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                h4.mb-4 d)	Sistemas de ambiente controlado: 
                ul.lista-ul--color.fa-lista
                  li
                    i.fas.fa-seedling
                    span.mb-0 Equipados con sensores, automatización y control computarizado de clima.
                  li
                    i.fas.fa-seedling
                    span.mb-0 Mantienen parámetros óptimos de forma constante (alta inversión, alta productividad).
              .col-md-6
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 5. 
                  span Sistema de ambiente controlado
                figure
                  img(src='@/assets/curso/temas/t1/fig5.png', alt='Persona supervisando un cultivo en invernadero mediante una tableta, como parte de un sistema de ambiente controlado para el manejo de variables climáticas y el desarrollo de las plantas.')
            .row.justify-content-center
              .col-md-5.mb-4.mb-md-0
                h4.mb-4 e)	Sistema de invernadero automatizado:
                ul.lista-ul--color.fa-lista
                  li
                    i.fas.fa-seedling
                    span.mb-0 Equipado con sensores, sistemas de automatización y control computarizado para regular clima, riego y nutrición del cultivo.
                  li
                    i.fas.fa-seedling
                    span.mb-0 Mantiene de forma constante los parámetros óptimos para el crecimiento vegetal, aumentando la eficiencia y la productividad (requiere mayor inversión inicial).
              .col-md-6
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Figura 6. 
                  span Invernadero automatizado
                figure
                  img(src='@/assets/curso/temas/t1/fig6.png', alt='Cultivos organizados en un invernadero automatizado con sistemas de control ambiental.')


    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Factores ambientales que influyen en el desarrollo del cultivo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        p El crecimiento y la productividad de un cultivo dependen directamente de las condiciones del entorno en el que se desarrolla. Estos factores ambientales regulan los procesos fisiológicos de las plantas, como la fotosíntesis, la transpiración, la respiración y la absorción de nutrientes. Cuando las variables ambientales se mantienen dentro de rangos óptimos, las plantas expresan su máximo potencial productivo; por el contrario, valores extremos o desbalances pueden generar estrés, limitar el crecimiento o favorecer la aparición de plagas y enfermedades.
        .bg-color-adicional-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-3
              img(src="@/assets/curso/temas/t1/3.svg")
            .col-lg-10.col-md-10.col-9
              p.text-white.mb-0 Los principales factores ambientales que determinan el comportamiento fisiológico de las plantas son:
      .col-lg-6(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 7. 
          span Inspección de cultivo
        figure
          img(src='@/assets/curso/temas/t1/fig7.png', alt='Técnicos realizando inspección del cultivo dentro de un invernadero.')

    .row.justify-content-center
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        img(src="@/assets/curso/temas/t1/4.png")
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg2")
          .row.justify-content-center(titulo="a)	Temperatura")
            .col-md-11
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
                li
                  i.fas.fa-angle-right
                  span.mb-0 Influye en la fotosíntesis, respiración, transpiración y floración.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Cada especie tiene un rango óptimo (por ejemplo, tomate: 18 – 27 °C).
          .row.justify-content-center(titulo="b)	Humedad relativa")
            .col-md-11
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
                li
                  i.fas.fa-angle-right
                  span.mb-0 Afecta la transpiración y la absorción de nutrientes.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Valores muy altos favorecen enfermedades fúngicas; valores bajos provocan estrés hídrico.
          .row.justify-content-center(titulo="c)	Radiación solar")
            .col-md-11
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
                li
                  i.fas.fa-angle-right
                  span.mb-0 Fuente principal de energía para la fotosíntesis.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Su intensidad se regula con mallas sombra, blanqueo de cubiertas o materiales difusores.
          .row.justify-content-center(titulo="d)	Concentración de CO₂")
            .col-md-11
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
                li
                  i.fas.fa-angle-right
                  span.mb-0 Fundamental para la fotosíntesis.
                li
                  i.fas.fa-angle-right
                  span.mb-0 En estructuras cerradas puede suplementarse (hasta 800 – 1000 ppm).
          .row.justify-content-center(titulo="e)	Viento y movimiento del aire")
            .col-md-11
              ul.lista-ul--color.fa-lista.color-adicional-1.mb-0
                li
                  i.fas.fa-angle-right
                  span.mb-0 Favorece el intercambio gaseoso y la transpiración.
                li
                  i.fas.fa-angle-right
                  span.mb-0 Su exceso puede causar daño físico o deshidratación.


    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Control climático y ventilación

    .row.bgcolor-2.tarjeta.align-items-center.p-4.py-md-5.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-6
              p El control climático es un proceso fundamental en los sistemas de producción bajo cubierta, ya que permite regular las condiciones ambientales que influyen directamente en el crecimiento, el desarrollo y la productividad de los cultivos. Su objetivo principal es mantener variables como la temperatura, la humedad relativa, la radiación y la circulación del aire dentro de rangos óptimos para cada especie vegetal. Para lograrlo, se emplea una combinación estratégica de ventilación natural o forzada, sistemas de sombreo, calefacción, enfriamiento y herramientas de automatización que ajustan los parámetros en tiempo real. Un control climático adecuado reduce el estrés en las plantas, previene enfermedades, mejora la eficiencia del uso de recursos y asegura una producción más estable y de mejor calidad.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 8. 
                span Control de ventilación
              figure
                img(src='@/assets/curso/temas/t1/fig8.png', alt='Invernadero con cultivos organizados y estructura preparada para sistemas de control de ventilación.')

    .row.justify-content-center.tarjeta--container(data-aos="fade-down")
      .col-11.col-md-6.col-lg-5.tarjeta.bg3.p-4.p-md-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-4
            img(src='@/assets/curso/temas/t1/tarj1-1.svg', alt='')
        h3.text-white.text-center a)	Tipos de control
        ul.lista-ul--color.fa-lista.color-primario.mb-0
          li
            i.fas.fa-angle-right
            span.text-white.mb-0 #[b Natural:] mediante ventanas cenitales o laterales, cortinas enrollables, o ventilación cruzada.
          li
            i.fas.fa-angle-right
            span.text-white.mb-0 #[b Forzado:] mediante ventiladores, extractores, sistemas de presión negativa o evaporativos.
          li
            i.fas.fa-angle-right
            span.text-white.mb-0 #[b Automatizado:] sensores de temperatura, humedad y radiación conectados a un sistema central (#[em climate controller]).
      .col-11.col-md-6.col-lg-5.tarjeta.bg4.p-4.p-md-5
        .row.justify-content-center.mb-4
          .col-5.col-md-6.col-lg-4
            img(src='@/assets/curso/temas/t1/tarj1-2.svg', alt='')
        h3.text-white.text-center b)	Ventilación
        ul.lista-ul--color.fa-lista.color-primario.mb-0
          li
            i.fas.fa-angle-right
            span.text-white.mb-0 Permite regular temperatura y humedad y renovar el aire interior.
          li
            i.fas.fa-angle-right
            span.text-white.mb-0 En zonas cálidas, se combina con sistemas evaporativos (#[em cooling pads], nebulizadores) para reducir la temperatura.
          li
            i.fas.fa-angle-right
            span.text-white.mb-0 En zonas frías, se usa calefacción y ventilación mínima para evitar condensación.


    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Manejo de la humedad y temperatura 

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.mb-3.mb-lg-0
        img.w-90.mb-2(src='@/assets/curso/temas/t1/5.svg', alt='')
        p.mb-0 El manejo adecuado de la humedad y la temperatura constituye uno de los pilares fundamentales en la producción agrícola bajo cubierta, debido a que ambos factores determinan el microclima en el que se desarrollan los cultivos. La interacción entre estas dos variables influye directamente en la fisiología vegetal, afectando procesos esenciales como la transpiración, la fotosíntesis, la respiración y la absorción de nutrientes.
      .col-lg-3.col-md-4.col-8.mb-3.mb-md-0
        img(src='@/assets/curso/temas/t1/6.svg', alt='')
      .col-lg-5.col-md-8
        .tarjeta.bg5.p-4.h-100.d-flex.align-items-center
          p.mb-0 Cuando la temperatura y la humedad no se encuentran en equilibrio, las plantas pueden experimentar estrés fisiológico, lo que se traduce en disminución del crecimiento, malformaciones, abortos florales, caída prematura de frutos y dificultades en la polinización. Asimismo, un manejo inadecuado puede favorecer la aparición y proliferación de enfermedades de origen fúngico y bacteriano, dado que muchos patógenos prosperan en ambientes excesivamente húmedos o con baja renovación de aire.

    .row.bgcolor-2.tarjeta.align-items-center.p-4.py-md-5.mb-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-4
              p Por estas razones, el control microclimático en cultivos bajo cubierta implica no solo medir y vigilar ambos parámetros, sino comprender cómo se relacionan con el desarrollo fenológico del cultivo, la densidad de siembra, la ventilación, la radiación solar y el uso de tecnologías como sensores, extractores o sistemas automatizados de climatización. Un manejo técnico y oportuno permite optimizar la productividad, garantizar la calidad del producto final y reducir pérdidas asociadas a condiciones ambientales desfavorables.
            .col-lg-8
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Figura 9. 
                span Control temperatura y humedad
              figure
                img(src='@/assets/curso/temas/t1/fig9.png', alt='Invernadero con cultivo de lechugas, mostrando un sensor digital de temperatura y humedad, un sistema de riego y el uso de un dispositivo móvil para monitoreo ambiental.')

    TabsA.color-acento-botones(data-aos="fade-down")
      .tarjeta.bg2.p-4(titulo="a)	Humedad relativa (HR)")
        h4.sin-b #[b a)	Humedad relativa (HR):] ideal: 60 - 80 %, dependiendo del cultivo.   
        p Para incrementar HR, se utiliza riego por nebulización, aspersión o reducción de ventilación y para reducir HR, se aumenta la ventilación o calefacción (para evitar condensación en hojas y estructuras).
      .tarjeta.bg2.p-4(titulo="b)	Temperatura")
        h4.sin-b #[b b)	Temperatura:] Óptima para la mayoría de cultivos hortícolas: 18 - 28 °C (día), 12 - 18 °C (noche). 
        p Para reducir la temperatura se emplean estrategias como el sombreo, la ventilación y los sistemas de enfriamiento evaporativo o nocturno. En cambio, para incrementarla se recurre a calefactores, tuberías de agua caliente y mantas térmicas.


    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Monitoreo ambiental y su relación con la sanidad vegetal

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-3.mb-lg-0(data-aos="fade-right")
        p.mb-4 El monitoreo ambiental consiste en medir y registrar de manera continua las condiciones climáticas internas de un cultivo mediante el uso de sensores, #[em dataloggers] o estaciones meteorológicas. Esta práctica permite obtener información precisa sobre variables como temperatura, humedad relativa, radiación solar y ventilación, elementos que determinan el microclima en el que se desarrollan las plantas y condicionan su desempeño fisiológico.
        .bg-color-adicional-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-2.col-3
              img(src="@/assets/curso/temas/t1/7.svg")
            .col-lg-10.col-md-10.col-9
              p.text-white.mb-0 La relación entre el monitoreo ambiental y la sanidad vegetal es directa, ya que variaciones fuera de los rangos óptimos pueden favorecer la aparición de plagas y enfermedades, así como generar estrés fisiológico en el cultivo. Un seguimiento adecuado facilita la identificación temprana de riesgos y la toma oportuna de decisiones técnicas, permitiendo implementar medidas preventivas que aseguren un desarrollo vegetal saludable y sostenible.
      .col-lg-5(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 10. 
          span Monitoreo ambiental
        figure
          img(src='@/assets/curso/temas/t1/fig10.png', alt='Persona supervisando plantas en un invernadero mientras registra información con una tableta, con otra persona trabajando entre las hileras de cultivo.')

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-6(data-aos="fade-right")
        .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/tarj2-1.svg' alt='')
            .tarjeta.bg2
              .p-4.px-lg-5
                h4.text-center a)	Parámetros que se monitorean
                ul.lista-ul--color.fa-lista.color-1.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0 Temperatura del aire y del sustrato.
                  li
                    i.fas.fa-check
                    span.mb-0 Humedad relativa.
                  li
                    i.fas.fa-check
                    span.mb-0 Radiación fotosintéticamente activa (PAR).
                  li
                    i.fas.fa-check
                    span.mb-0 CO₂. 
                  li
                    i.fas.fa-check
                    span.mb-0 Conductividad eléctrica y pH del sustrato (en sistemas hidropónicos). 
      .col-lg-5.col-md-6(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarj2-2.svg' alt='')
          .tarjeta.bg2
            .p-4.px-lg-5
              h4.text-center b)	Relación con la sanidad vegetal
              ul.lista-ul--color.fa-lista.color-1.mb-0
                li
                  i.fas.fa-check
                  span.mb-0 Un ambiente mal controlado favorece plagas y enfermedades. 
                li
                  i.fas.fa-check
                  span.mb-0 Alta HR → hongos (#[em botrytis], mildiu). 
                li
                  i.fas.fa-check
                  span.mb-0 Exceso de temperatura: proliferación de ácaros e insectos.  
                li
                  i.fas.fa-check
                  span.mb-0 Baja ventilación: acumulación de etileno, daño fisiológico. 
                li
                  i.fas.fa-check
                  span.mb-0 El monitoreo permite ajustar el clima antes de que se presenten los problemas, reduciendo el uso de agroquímicos. 

    p Además, los datos registrados facilitan la toma de decisiones técnicas, la automatización y el manejo integrado del cultivo.



  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
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
