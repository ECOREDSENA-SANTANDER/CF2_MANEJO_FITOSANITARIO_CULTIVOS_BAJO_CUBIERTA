<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      //#Actividad_Completar_Frases
      //<ActividadCompletar :parrafo="parrafo"/>

      #Actividad_Cuestionario
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadCompletar from '@/views/plantilla/actividadCompletar/ActividadCompletar.vue'
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadCompletar,
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Promover la aplicación de prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'El éxito de la producción en estructuras protegidas depende, en gran medida, del control preciso de factores ambientales como la temperatura, la humedad, la ventilación y la luminosidad. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 2,
          texto:
            'Los túneles bajos y macrotúneles como ambientes protegidos para cultivos ofrecen una protección parcial frente a lluvia, viento o radiación solar. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 3,
          texto:
            'Los invernaderos de plástico o vidrio, permiten buena ventilación natural. ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 4,
          texto:
            'La humedad relativa, afecta la transpiración y la absorción de nutrientes. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 5,
          texto:
            'Para incrementar la Humedad Relativa HR, se utiliza riego por nebulización, aspersión o reducción de ventilación y para reducir HR, se aumenta la ventilación o calefacción (para evitar condensación en hojas y estructuras). ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 6,
          texto:
            'El monitoreo ambiental consiste en medir y registrar continuamente las condiciones climáticas internas mediante sensores o estaciones meteorológicas. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 7,
          texto:
            'Los insecticidas controlan insectos plaga (por contacto, ingestión o inhalación). ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 8,
          texto:
            'Un manejo adecuado de los productos fitosanitarios puede provocar accidentes, incendios o contaminación del suelo y el agua. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 9,
          texto:
            'El uso responsable de los productos fitosanitarios se fundamenta en los principios del Manejo Integrado de Plagas (MIP) y las Buenas Prácticas Agrícolas (BPA), los cuales orientan la selección, aplicación y manejo de estos insumos de manera segura, eficiente y ambientalmente sostenible. ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 10,
          texto:
            'El EPP es fundamental para prevenir intoxicaciones, irritaciones o exposición directa durante la manipulación y aplicación de agroquímicos. ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta evidencia que identifica la importancia de aplicar prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
      ],
      mensaje_final_aprobado:
        'Promueve la aplicación de prácticas seguras y ambientalmente responsables en el manejo fitosanitario dentro de ambientes protegidos.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
