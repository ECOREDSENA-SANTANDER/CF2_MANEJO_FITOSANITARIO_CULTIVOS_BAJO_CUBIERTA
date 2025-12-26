<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p Las prácticas seguras y ambientales en el manejo fitosanitario constituyen un pilar fundamental para garantizar la inocuidad, la sostenibilidad y la eficiencia de la producción en ambientes protegidos como invernaderos y casas malla. Estas prácticas integran la seguridad ocupacional, la protección del medio ambiente y la eficacia técnica de los tratamientos, permitiendo que las acciones de control de plagas y enfermedades se desarrollen bajo condiciones controladas, responsables y acordes con los principios de la producción sostenible.
    p El manejo fitosanitario en estos sistemas requiere una aplicación planificada de productos y métodos de control que minimicen los riesgos de intoxicación, contaminación y afectación de la biodiversidad. En este contexto, se prioriza el cumplimiento de las buenas prácticas agrícolas, la capacitación permanente del personal, el uso adecuado de los equipos de protección personal y la correcta calibración y mantenimiento de los equipos de aplicación. Asimismo, la señalización de las áreas tratadas y la adecuada ventilación contribuyen a garantizar condiciones seguras para los trabajadores y el cultivo.
    p.mb-4 Desde el enfoque ambiental y de gestión, estas prácticas promueven la reducción del impacto ecológico mediante el uso racional de productos fitosanitarios, la dosificación precisa, el manejo adecuado de envases y residuos, y la implementación de controles climáticos internos que disminuyan la incidencia de patógenos. A su vez, la documentación mediante registros de aplicación y fichas técnicas fortalece la trazabilidad, el cumplimiento normativo y la mejora continua, asegurando un sistema productivo responsable, competitivo y sostenible.     

    .row.justify-content-center
      .col-lg-11.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama de prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos, con tres ejes: manejo del ambiente, uso seguro de productos y Buenas Prácticas Agrícolas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
