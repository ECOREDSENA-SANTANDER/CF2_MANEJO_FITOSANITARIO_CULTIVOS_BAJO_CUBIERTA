<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-8.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p.mb-4 El manejo fitosanitario en ambientes protegidos, como invernaderos o casas malla, requiere la aplicación de prácticas seguras y sostenibles que garanticen la sanidad de los cultivos, la seguridad de los trabajadores y la protección del medio ambiente. Para lograrlo, resulta indispensable integrar conocimientos técnicos sobre el control de plagas y enfermedades con una gestión responsable del entorno y el uso adecuado de los productos fitosanitarios.
        .row.justify-content-center
          .col-lg-2.col-md-2.col-3
            img.px-lg-2(src='@/assets/curso/temas/intro/2.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 El éxito de la producción en estructuras protegidas depende, en gran medida, del control preciso de factores ambientales como la temperatura, la humedad, la ventilación y la luminosidad, los cuales influyen directamente en el desarrollo de las plantas y en la incidencia de organismos nocivos. De igual manera, el uso racional de agroquímicos y la implementación de Buenas Prácticas Agrícolas (BPA) son esenciales para disminuir riesgos de contaminación, preservar la biodiversidad y asegurar la inocuidad de los alimentos producidos.

    p.mb-4 En el ámbito educativo, la formación en prácticas seguras y ambientalmente responsables fortalece competencias clave para la agricultura moderna, tales como la observación técnica, la toma de decisiones sostenibles y el cumplimiento de normativas de seguridad y sanidad vegetal. De esta manera, el componente contribuye a consolidar el compromiso del aprendiz con una agricultura responsable, eficiente y respetuosa del entorno natural.    

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 



</template>

<script>
export default {
  name: 'Introduccion',
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
