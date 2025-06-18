import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  ONDG1: [
    {
      type: 'category',
      label: 'INTRODUÇÃO',
      items: ['ONDG01/apresentacao'],
    },
    {
      type: 'category',
      label: 'O NOME PRÓPRIO',
      items: ['ONDG01/importanciahistoria', 'ONDG01/conquistanomeproprio', 
              'ONDG01/textosmusicas',  'ONDG01/bancoatividades', 'ONDG01/palavrasfavoritas'],
    },
    {
      type: 'category',
      label: 'O NOME DA GENTE',
      items: ['ONDG01/sobreolivro', 'ONDG01/versaoimpressa', 'ONDG01/versaodigital'],
    },
    {
      type: 'category',
      label: 'Planos de aula ONDG',
      items: ['ONDG01/contacao','ONDG01/laboratorio', 'ONDG01/emfamilia' ],
    }/*,
    {
      type: 'category',
      label: 'Atividades do workshop',
      items: ['ONDG01/atividade-enviolink', 'ONDG01/atividade-envio-familia',
              'ONDG01/ganhandobadge'],
    },
    {
      type: 'category',
      label: 'BÔNUS',
      items: ['ONDG01/compraemlote', 'ONDG01/descontoworkshop'],
    }*/
  ],
  lengalenga: [
    {
      type: 'category',
      label: 'LENGA-LENGA',
      items: ['lenga-lenga/apresentacao', 'lenga-lenga/tipos',
              'lenga-lenga/testando',
              'lenga-lenga/atividade1', 'lenga-lenga/atividade2', 
              'lenga-lenga/ei', 
              'lenga-lenga/rimas', 
              'lenga-lenga/amenina', 'lenga-lenga/capivara'
             ],

    }
  ]  
};

export default sidebars;

/*
Example of link item:
{
  type: 'category',
  label: 'INTRODUÇÃO',
  items: ['ONDG01/apresentacao', 'ONDG01/preparando', {type:'link',label:'javascript', href: "/docs/preparando"}],
},
*/
