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
        'Las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos',
      titulo: 'Cuestionario',
      introduccion:
        'Objetivo: comprender las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal del manejo del ambiente en estructuras protegidas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el uso de agroquímicos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el trabajo humano',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar plagas manualmente',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Optimizar el crecimiento del cultivo y reducir enfermedades',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes es un factor ambiental clave en los cultivos bajo cubierta?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Tipo de maquinaria',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Temperatura',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Marca del fertilizante',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Color del suelo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué efecto tiene una humedad relativa muy alta en los cultivos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora la fotosíntesis',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuye la transpiración',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Favorece enfermedades fúngicas',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evita plagas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es el rango ideal de humedad relativa (HR) en la mayoría de cultivos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: '20 – 40 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '40 – 50 %',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '60 – 80 %',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '90 – 100 %',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué función cumple la ventilación en un invernadero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar fertilización',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regular temperatura y humedad',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la luz',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar nutrientes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es un sistema de control climático automatizado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Riego manual',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso de machete',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sensores conectados a un sistema central',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fertilización orgánica',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué factor es fundamental para la fotosíntesis?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Viento',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Radiación solar',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Humedad',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suelo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué sucede con temperaturas muy altas en el cultivo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora la producción',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elimina plagas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Puede generar estrés en la planta',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumenta la humedad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué es el monitoreo ambiental?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar fertilizantes',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir y registrar condiciones climáticas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cosechar productos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Podar plantas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es la función de los insecticidas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar hongos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar malezas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar insectos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar nutrientes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué tipo de producto controla hongos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Fungicida',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Insecticida',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Herbicida',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rodenticida',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué eliminan los herbicidas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Hongos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Insectos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bacterias',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Malezas',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué indica el color rojo en la etiqueta de un plaguicida?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Poco peligroso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seguro',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Muy peligroso',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Moderado',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué entidad regula los productos fitosanitarios en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'SENA',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ministerio de Educación',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'ICA',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Policía Nacional',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el primer paso en el uso responsable de fitosanitarios?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar un diagnóstico correcto',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aplicar rápidamente',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comprar productos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mezclar productos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Para qué sirve el Equipo de Protección Personal (EPP)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar la cosecha',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar producción',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proteger la salud del trabajador',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir costos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Cuál de los siguientes es un EPP básico?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Sombrilla',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Camiseta',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Zapatos de tela',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guantes de nitrilo',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Dónde deben almacenarse los productos fitosanitarios?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'En la casa',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cerca de alimentos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Al aire libre',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En un lugar exclusivo, ventilado y seguro',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué es la trazabilidad?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar fertilizantes',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registrar el historial del cultivo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Podar plantas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Regar cultivos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es un objetivo de las Buenas Prácticas Agrícolas (BPA)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar químicos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir costos únicamente',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar la inocuidad y sostenibilidad',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar trabajadores',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un buen dominio de las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
