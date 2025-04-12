
export default [
  {
    name: "Simed Financeiro",
    description: "O Simed3 é um sistema criado para automatizar e agilizar processos financeiros que antes eram feitos manualmente com planilhas. Ele controla contas a pagar e receber, permite transferências, emissão de ordens de pagamento, geração de relatórios e gerenciamento de cadastros. Também oferece upload e visualização de notas fiscais e conta com módulos extras como controle de estoque, produção e pesquisa de satisfação.",
    imageFolder: "simed",
    detailDescription: "Sistema criado para automatizar, controlar e melhorar os processos financeiros de um cliente que realizava todas as rotinas financeiras de forma manual e através de planilhas eletrônicas demandando muito tempo do funcionário do setor ao registrar as movimentações.",
    functions: "O Simed3 realiza o controle de contas a pagar, contas a receber, realiza os pagamentos com emissão de ordem para autorização junto ao banco, realiza transferências entre as contas, cadastra empresas, contas bancárias, fornecedores, clientes, movimentações com abertura e fechamento com bloqueio, extratos das movimentações com emissão de relatórios simplificado e detalhado. Possui opção para realizar upload das notas fiscais das contas a pagar e opção de visualização e impressão das mesmas.\n Atualmente o simed3 possui outros módulos solicitados pelos clientes como: Estoque com Solicitações, Pesquisa de Satisfação, Produção/Controles e outros.",
    stacks: ["Java","Spring Boot", "Thymeleaf", "Bootstrap", "MySQL Database", "Servidor Tomcat"],
    youtubeCode: '-Tx6KwYTFXY',
    acessoProjeto:false
  },
  {
    name: "MotoGestor 1.0",
    description: "O Motogestor foi criado para resolver problemas de controle e registro enfrentados por uma oficina que utilizava planilhas eletrônicas, o que tornava os processos lentos e inconsistentes. O sistema permite o cadastro de clientes, veículos, peças e serviços, além da criação e atendimento de ordens de serviço com inclusão de itens, valores, descontos e acréscimos. Registra os fechamentos no livro caixa e conta com um dashboard com gráficos e indicadores. Um módulo financeiro mais completo está em desenvolvimento.",
    imageFolder: "motogestor",
    detailDescription: "Projeto solicitado pelo cliente após passar por problemas com históricos dos atendimentos, consultas de informações dos clientes e ordens de serviços ineficientes pois, controlava tudo com planilhas eletrônicas e principalmente tornando o registro das movimentações da oficina demorado e inconsistente. Foram realizados todos os levantamentos dos requisitos e o projeto ainda está em andamento.",
    functions: "O Motogestor realiza o cadastro dos clientes e seus veículos. Possui o cadastro de peças e serviços com quantidades e preços, realiza o cadastro da ordem de serviço com busca de clientes e seleção do veículo para manutenção. Possui o atendimento da ordem de serviço com a inclusão das peças e serviços, quantidades e valores bem como o fechamento da ordem com opção de descontos e acréscimos. Módulo financeiro em desenvolvimento, mas possui o registro dos fechamentos das ordens de serviços no livro caixa.\n Possui o cadastro de mecânicos e marcas dos veículos além de um dashboard com graficos e principais indicadores para análise.",
    stacks: ["Java", "Spring Boot", "VueJS", "PostgreSQL Database", "Autenticação com Firebase"],
    youtubeCode: 'XvEQi2AN_4s',
    acessoProjeto:false
  },
  {
    name: "StockSet Catálogo",
    description: "O StockSet permite o cadastro de produtos com fotos, preços e categorias, além da personalização visual da aplicação e inclusão do número de WhatsApp do vendedor. Gera um link público para exibição dos produtos, que pode ser compartilhado com clientes, mostrando as principais informações. Também oferece um botão de contato que inicia uma conversa via WhatsApp entre cliente e vendedor para facilitar negociações.",
    imageFolder: "stockset",
    detailDescription: "O projeto foi criado no formato Serverless BaaS (Backend as a Service), onde toda a parte do backend foi usado a stack do Google Firebase. O projeto possui a opção de realizar o login criando um conta com e-mail e senha bem como a utilização de login social (Google).",
    link: "https://stockset.jeffersonfreitas.dev/",
    functions: "O StockSet realiza o cadastro de produtos com fotos e preços, cadastro de categorias, configuração do usuário podendo personalizar as cores e titulo da aplicação e a inclusão do número de Whatsapp do vendedor para contato. Disponibiliza um link público que pode ser compartilhado com os clientes exibindo os produtos cadastrados para venda, mostrando a foto e as principais informações dos produtos. Possui um botão de contato que abre uma conversa, no whatsapp, entre o cliente e o vendedor possibilitando a obtenção de mais detalhes e negociação sobre o produto selecionado",
    stacks: ["VueJS", "Quasar Framework", "Firebase Authentication", "Firebase Storage", "Banco NoSQL Firestore", "Firebase Hosting", "Github Actions"],
    github: "https://github.com/jeffersonfreitas-dev/stock-quasar-supabase",
    youtubeCode: '9GFRPZNE1VY',
    acessoProjeto:true
  }
]

