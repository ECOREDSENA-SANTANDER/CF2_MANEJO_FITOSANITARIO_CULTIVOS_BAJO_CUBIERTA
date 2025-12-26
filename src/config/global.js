export default {
  global: {
    Name:
      'Prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos',
    Description:
      'Las prácticas seguras y ambientales para el manejo fitosanitario en ambientes protegidos comprenden un conjunto de acciones orientadas a mantener la sanidad de los cultivos bajo condiciones controladas, garantizando la seguridad del operario, la protección del ambiente y la sostenibilidad de la producción. Estas prácticas incluyen el manejo adecuado del ambiente dentro de las estructuras protegidas, el uso seguro y responsable de los productos fitosanitarios, y la aplicación de Buenas Prácticas Agrícolas (BPA) que promueven el control eficiente de plagas y enfermedades, reduciendo riesgos para la salud y el ecosistema.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo del ambiente en estructuras protegidas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Factores ambientales que influyen en el desarrollo del cultivo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Control climático y ventilación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Manejo de la humedad y temperatura',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Monitoreo ambiental y su relación con la sanidad vegetal',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Uso seguro y responsable de productos fitosanitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación y tipos de productos fitosanitarios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios de uso responsable',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Equipos de Protección Personal (EPP)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Almacenamiento, transporte y eliminación de productos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Señalización y medidas de seguridad durante la aplicación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buenas Prácticas Agrícolas (BPA) en el manejo fitosanitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Registros y trazabilidad de las aplicaciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Limpieza y mantenimiento de equipos de aplicación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Responsabilidad ambiental y social en la producción',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Uso seguro y responsable de productos fitosanitarios.',
      referencia:
        'Cámara de Sanidad Agropecuaria y Fertilizantes (CASAFE). (2019). Manual de uso responsable de los productos fitosanitarios. ',
      tipo: 'PDF',
      link:
        'https://www.casafe.org/wp-content/uploads/2019/05/Manual-Uso-Responsable-Productos-Fitosanitarios.pdf',
    },
    {
      tema: 'Factores ambientales que influyen en el desarrollo del cultivo. ',
      referencia:
        'TvAgro. (2024). Adaptación de hortalizas a climas extremos - TvAgro por Juan Gonzalo Angel Restrepo. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wHsX0Iu0Fb0',
    },
    {
      tema: 'Equipos de protección personal. ',
      referencia:
        'Matarrita Diaz, L. (2013). Equipos de protección personal (EPP) español.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=L5x1I7QDWE4',
    },
  ],
  glosario: [
    {
      termino: 'Absorción',
      significado:
        'proceso mediante el cual una planta o un organismo incorpora una sustancia, como agua o nutrientes, a través de raíces u hojas.',
    },
    {
      termino: 'Acaricida',
      significado:
        'producto fitosanitario utilizado para el control de ácaros en los cultivos.',
    },
    {
      termino: 'Aplicación',
      significado:
        'acción de distribuir un producto fitosanitario sobre un cultivo con el fin de controlar plagas o enfermedades.',
    },
    {
      termino: 'Clasificación toxicológica',
      significado:
        'categorización de los productos fitosanitarios según su nivel de toxicidad, identificada por colores en la etiqueta.',
    },
    {
      termino: 'Control biológico',
      significado:
        'uso de organismos naturales (depredadores o parasitoides) para el control de plagas.',
    },
    {
      termino: 'Control climático',
      significado:
        'regulación de temperatura, humedad y ventilación dentro de un ambiente protegido.',
    },
    {
      termino: 'Deriva',
      significado:
        'desplazamiento del producto fitosanitario fuera del área de aplicación por efecto del viento.',
    },
    {
      termino: 'Desinfección',
      significado:
        'eliminación de agentes patógenos mediante productos o métodos físicos antes o después de la aplicación.',
    },
    {
      termino: 'Diagnóstico fitosanitario',
      significado:
        'identificación precisa del agente causal de una plaga o enfermedad en un cultivo.',
    },
    {
      termino: 'Eficacia biológica',
      significado:
        'capacidad de un producto fitosanitario para controlar el organismo objetivo.',
    },
    {
      termino: 'Fungicida',
      significado:
        'producto utilizado para prevenir o eliminar hongos patógenos en plantas.',
    },
    {
      termino: 'Higiene agrícola',
      significado:
        'conjunto de prácticas que mantienen la limpieza de equipos, instalaciones y áreas de cultivo.',
    },
    {
      termino: 'Humedad relativa',
      significado:
        'porcentaje de vapor de agua presente en el aire respecto a la cantidad máxima que podría contener.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'garantía de que un alimento no causa daño a la salud del consumidor.',
    },
    {
      termino: 'Insecticida',
      significado:
        'producto destinado a eliminar o controlar insectos que afectan los cultivos.',
    },
    {
      termino: 'Medio ambiente',
      significado:
        'conjunto de factores físicos, biológicos y sociales que rodean a los seres vivos.',
    },
    {
      termino: 'Monitoreo ambiental',
      significado:
        'evaluación constante de las condiciones climáticas dentro del ambiente protegido.',
    },
    {
      termino: 'Nebulización',
      significado:
        'método de aplicación que dispersa el producto en gotas muy finas dentro del invernadero.',
    },
    {
      termino: 'Plaga',
      significado:
        'organismo que causa daño económico o fisiológico a los cultivos.',
    },
    {
      termino: 'Sanidad vegetal',
      significado:
        'estado de salud de los cultivos libre de plagas, enfermedades y desórdenes fisiológicos.',
    },
    {
      termino: 'Señalización',
      significado:
        'colocación de avisos o letreros que advierten sobre zonas de aplicación o peligro.',
    },
    {
      termino: 'Sustentabilidad',
      significado:
        'capacidad de mantener la producción agrícola sin agotar los recursos naturales.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'posibilidad de rastrear el origen, manejo y destino de los productos agrícolas y sus insumos.',
    },
    {
      termino: 'Toxicidad',
      significado:
        'grado en que una sustancia puede causar daño a un organismo vivo.',
    },
    {
      termino: 'Ventilación',
      significado:
        'circulación de aire dentro de un ambiente protegido para controlar temperatura y humedad.',
    },
    {
      termino: 'Vidrio o plástico agrícola',
      significado:
        'material de cobertura utilizado en invernaderos para proteger los cultivos y regular el clima interno.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bermejo Merino, J. M., Guisasola Yeregui, A., Cabrerizo Benito, J. I., & Bermejo Olairola. (2018). _Guía para la utilización segura de productos fitosanitarios._ Instituto Vasco de Seguridad y Salud Laborales (OSALAN).',
      link:
        'https://www.osalan.euskadi.eus/contenidos/libro/higiene_201805/es_def/adjuntos/guia_fitosanitarios_osalan.pdf',
    },
    {
      referencia:
        'CropLife Latin America. (s. f.). Clasificación de plaguicidas [Infografía].',
      link: 'https://croplifela.org/images/2023/clasificacion-plaguicidas.png',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2012). Manejo fitosanitario del cultivo de hortalizas: Medidas para la temporada invernal.',
      link:
        'https://www.ica.gov.co/getattachment/bb883b42-80da-4ae5-851f-4db05edf581b/Manejo-fitosanitario-del-cultivo-de-hortalizas.aspx',
    },
    {
      referencia:
        'Red de BPA. (2015). Buenas prácticas agrícolas: Lineamientos de base. Cámara de Sanidad Agropecuaria y Fertilizantes (CASAFE).',
      link:
        'https://www.casafe.org/pdf/2015/BUENAS-PRACTICAS-AGRICOLAS/BuenasPracticasAgricolas-LineamientosdeBase.pdf',
    },
    {
      referencia: 'SISEP:. (s. f.). Diagrama del desarrollo sostenible.',
      link: 'https://www.sisep.cl/assets/img/main/img5.jpg',
    },
    {
      referencia:
        'Unidad Técnica de Proyectos ASOHOFRUCOL. (2017). Guía básica para la implementación de buenas prácticas agrícolas.',
      link: 'https://www.asohofrucol.com.co/img/pdflibros/16libro.pdf',
    },
    {
      referencia:
        'Vasquez Gallo, L. A. (s. f.). Buenas prácticas agrícolas (BPA). Editorial AGROSAVIA.',
      link:
        'https://editorial.agrosavia.co/index.php/publicaciones/catalog/download/162/147/1122-1?inline=1',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
