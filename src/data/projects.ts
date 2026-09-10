export interface Project {
  slug: string;
  name: string;
  category: string;
  year: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  stack: string[];
  results: { label: string; value: string }[];
  image: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'parreiras-do-sul',
    name: 'Parreiras do Sul',
    category: 'Site Profissional · Sucos e Vinhos',
    year: '2025',
    client: 'Parreiras do Sul',
    summary:
      'Site profissional para a Parreiras do Sul, uma das maiores empresa de sucos e vinhos do DF.',
    challenge:
      'A Parreiras do Sul precisava de um site profissional e responsivo - que mostrasse sua empresa em 1 lugar em todas as buscas de marcas de sucos e vinhos',
    solution:
      'Desenvolvemos um site completo com design responsivo, que apresenta a empresa e seus produtos - com estratégias de SEO e GEO para aparecer um primeiro lugar em quase todas as buscas de marcas de sucos e vinhos.',
    stack: ['React', 'Node.js'],
    results: [
      { label: 'Posicionamento em buscas', value: '+92%' },
      { label: 'Propostas comerciais recebidas', value: '8+' },
      { label: 'Erros operacionais', value: '-100%' }
    ],
    image: '/images/Parreiras-Do-Sul.png'
  },
  {
    slug: 'Studio-Azzu',
    name: 'Studio Azzu',
    category: 'Sistema · Gestão de respostas',
    year: '2026',
    client: 'Ed ',
    summary:
      'Desenvolvimento de formulário seguro que aguente mais de 200 respostas contendo informações sensíveis de clientes, sem haver nenhuma perda de dados.',
    challenge:
      'O Studio Azzu precisava de um sistema de formulário seguro que pudesse lidar com mais de 200 respostas contendo informações sensíveis de clientes, sem risco de perda de dados.',
    solution:
      'Desenvolvemos o formulário + relatório de respotas completo, com armazenamento seguro, com segurança máxima de informações. Suportando mais de 200 respostas sem perda de dados, e com relatórios detalhados para análise.',
    stack: ['React', 'JavaScript', 'Google Forms'],
    results: [
      { label: 'Redução de erros', value: '-100%' },
      { label: 'Respostas processadas', value: '210+' },
      { label: 'Satisfação da operação', value: '96%' }
    ],
    image: '/images/Studio-Azzu.png'
  },
  {
    slug: 'CaldasDiroma',
    name: 'Caldas Diroma Locações',
    category: 'MultiPage · Site',
    year: '2024',
    client: 'Caldas Diroma Locações',
    summary:
      'Desenvolvimento de um site multi-page para a Caldas Diroma Locações, uma empresa de locação de apartamentos em Caldas Novas - GO',
    challenge:
      'A Caldas Diroma Locações precisava de um site multi-page para apresentar seus apartamentos e serviços de locação, com informações detalhadas e contato fácil para os clientes.',
    solution:
      'Desenvolvemos um site multi-page completo, com design responsivo, que apresenta os apartamentos e serviços da empresa, com informações detalhadas e formulário de contato fácil para os clientes.',
    stack: ['WordPress', 'SQLite', 'PHP', 'JS'],
    results: [
      { label: 'Incidentes em produção', value: '-71%' },
      { label: 'Tempo de resposta', value: '-60%' },
      { label: 'Satisfação do cliente', value: '4.5/5' }
    ],
    image: '/images/CaldasDiromaLOC.png'
  },
  {
    slug: 'JJpereira',
    name: 'JJ Pereira',
    category: 'Landing · Site',
    year: '2025',
    client: 'JJ Pereira',
    summary:
      'Desenvolvimento de uma landing page para a JJ Pereira, uma empresa de consultoria em gestão de negócios, com foco em conversão de leads.',
    challenge:
      'A JJ Pereira precisava de uma landing page para apresentar seus serviços de consultoria em gestão de negócios, com foco em conversão de leads e geração de oportunidades de negócio.',
    solution:
      'Desenvolvemos uma landing page completa, com design responsivo, que apresenta os serviços da empresa, com informações detalhadas e formulário de contato fácil para os clientes, com foco em conversão de leads.',
    stack: ['HTML', 'Google Forms', 'JS'],
    results: [
      { label: 'Taxa de conversão', value: '25%' },
      { label: 'Redução de custos', value: '-30%' },
      { label: 'Satisfação do cliente', value: '4.5/5' }
    ],
    image: '/images/JJpereira.png'
  }
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
