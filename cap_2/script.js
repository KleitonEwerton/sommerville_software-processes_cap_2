const mindMapData = {
  title: "Mapa Mental: Capítulo 2 - Processo do Software (Sommerville)",
  sections: [
    {
      id: "conceito",
      title: "1. Conceito de Processo de Software",
      intro:
        "Esta seção explora a definição fundamental de um processo de software, suas atividades essenciais, elementos importantes para sua descrição, a complexidade inerente, as abordagens contrastantes de planejamento e a importância da melhoria contínua.",
      subsections: [
        {
          title: "1.1. Definição",
          content: [
            "Um <strong>processo de software</strong> é um conjunto de atividades relacionadas que leva à produção de um sistema de software.",
            "Não há um processo de software universalmente aplicável; depende do tipo de software, requisitos do cliente e habilidades da equipe.",
          ],
        },
        {
          title: "1.2. Atividades Fundamentais da Engenharia de Software",
          content: [
            "1. <strong>Especificação de software</strong>: Definição da funcionalidade e restrições operacionais.",
            "2. <strong>Desenvolvimento de software</strong>: Produção do software conforme a especificação.",
            "3. <strong>Validação de software</strong>: Garantia de que o software atende às necessidades do cliente.",
            "4. <strong>Evolução de software</strong>: Adaptação do software às mudanças de necessidades dos clientes.",
            "Estas atividades incluem subatividades (ex: validação de requisitos, projeto arquitetural, testes de unidade) e atividades de suporte (ex: gerenciamento de configuração, planejamento de projeto).",
          ],
        },
        {
          title: "1.3. Elementos Importantes ao Descrever Processos",
          content: [
            "<strong>Produtos ou Entregas</strong>: Resultados de uma atividade do processo (ex: modelo de arquitetura).",
            "<strong>Papéis</strong>: Responsabilidades das pessoas envolvidas (ex: gerente de projeto, programador).",
            "<strong>Pré e Pós-condições</strong>: Condições que devem ser verdadeiras antes e depois de uma atividade/produto.",
          ],
        },
        {
          title: "1.4. Complexidade e Variedade",
          content: [
            "Processos são complexos e dependem de julgamentos humanos.",
            "Empresas desenvolvem seus próprios processos, evoluindo com as capacidades e características dos sistemas.",
            "Sistemas críticos à segurança: processo estruturado e detalhado.",
            "Sistemas de negócios (requisitos mutáveis): processo flexível e ágil.",
          ],
        },
        {
          title: "1.5. Processos Guiados por Plano vs. Processos Ágeis",
          content: [
            "<strong>Processos Guiados por Plano</strong>: Todas as atividades são planejadas antecipadamente; progresso medido contra o plano.",
            "<strong>Processos Ágeis</strong>: Planejamento incremental e contínuo; mais fácil de adaptar a mudanças.",
            "Para sistemas grandes, busca-se um equilíbrio entre as duas abordagens.",
          ],
        },
        {
          title: "1.6. Melhoria de Processos de Software",
          content: [
            "Muitas organizações podem melhorar seus processos introduzindo técnicas modernas (ex: modelagem UML, desenvolvimento orientado a testes).",
          ],
        },
      ],
    },
    {
      id: "modelos",
      title: "2. Modelos de Processo de Software (SDLC)",
      intro:
        "Aqui são apresentados os modelos de processo de software, que são representações simplificadas de como o software é desenvolvido. Exploraremos os modelos genéricos como Cascata, Incremental e Orientado à Reutilização, além de discutir a combinação de modelos e apresentar uma comparação visual.",
      subsections: [
        {
          title: "2.1. Definição de Modelo de Processo",
          content: [
            "Representação simplificada de um processo de software.",
            "Cada modelo oferece uma perspectiva específica (ex: atividades e sequência).",
            "São estruturas abstratas que podem ser adaptadas.",
          ],
        },
        {
          title: "2.2.1. Modelo Cascata (Waterfall)",
          content: [
            "Representa atividades fundamentais como fases separadas e sequenciais.",
            "<strong>Fases Principais</strong>:",
            "<ol class='list-decimal list-inside ml-4'><li><strong>Análise e definição de requisitos</strong>: Estabelecimento de serviços, restrições e objetivos; consulta aos usuários.</li><li><strong>Projeto do sistema e do software</strong>: Alocação de requisitos entre hardware/software; arquitetura geral; abstrações do sistema.</li><li><strong>Implementação e teste de unidades</strong>: Projeto transformado em programas; verificação de cada unidade.</li><li><strong>Integração e teste do sistema</strong>: Unidades integradas e testadas como um todo.</li><li><strong>Operação e manutenção</strong>: Instalação, uso prático, correção de erros, melhorias, adaptações.</li></ol>",
            "<strong>Características</strong>: Saída de cada fase é um documento aprovado. Fases se sobrepõem na prática, com realimentação. Congelamento prematuro de requisitos pode ser um problema.",
            "<strong>Adequação</strong>: Sistemas embarcados, sistemas críticos, grandes sistemas desenvolvidos por múltiplas empresas.",
            "<strong>Limitações</strong>: Inadequado onde comunicação informal é possível e requisitos mudam rapidamente.",
            "<strong>Variante - Desenvolvimento Formal de Sistemas</strong>: Modelo matemático da especificação é criado e refinado. Usado em sistemas com requisitos rigorosos de segurança/confiabilidade (ex: Método B). Alto custo.",
          ],
          diagramHTML: `
                                <h4 class="text-md font-semibold text-stone-600 mt-3 mb-2">Diagrama: Modelo Cascata (Simplificado)</h4>
                                <div class="flex flex-col items-center space-y-0 bg-white p-4 rounded-lg shadow">
                                    <div class="diagram-box">Definição de Requisitos</div>
                                    <div class="diagram-arrow">↓</div>
                                    <div class="diagram-box">Projeto de Sistema e Software</div>
                                    <div class="diagram-arrow">↓</div>
                                    <div class="diagram-box">Implementação e Testes Unitários</div>
                                    <div class="diagram-arrow">↓</div>
                                    <div class="diagram-box">Integração e Testes de Sistema</div>
                                    <div class="diagram-arrow">↓</div>
                                    <div class="diagram-box">Operação e Manutenção</div>
                                    <p class="text-xs text-stone-500 mt-2">Nota: Setas de feedback entre as fases são omitidas para simplificação visual aqui, mas existem na prática.</p>
                                </div>`,
        },
        {
          title: "2.2.2. Desenvolvimento Incremental",
          content: [
            "Intercala atividades de especificação, desenvolvimento e validação.",
            "Sistema desenvolvido como uma série de versões (incrementos).",
            "<strong>Abordagens</strong>: Orientada por plano (incrementos identificados antecipadamente) ou Ágil (primeiros incrementos definidos; posteriores dependem do progresso e prioridades).",
            "<strong>Vantagens</strong>: Custo reduzido de mudanças, feedback facilitado, entrega antecipada.",
            "<strong>Problemas de Gestão</strong>: Processo não visível, degradação da estrutura (solução: refatoração).",
            "Crítico em sistemas grandes e complexos com múltiplas equipes (necessidade de arquitetura estável planejada).",
            "Não implica necessariamente entrega de cada incremento ao cliente final.",
          ],
          diagramHTML: `
                                <h4 class="text-md font-semibold text-stone-600 mt-3 mb-2">Diagrama: Desenvolvimento Incremental (Simplificado)</h4>
                                <div class="flex items-center justify-center bg-white p-4 rounded-lg shadow">
                                    <div class="diagram-box">Descrição Geral</div>
                                    <div class="diagram-arrow">→</div>
                                    <div class="diagram-connector-col border-2 border-sky-500 p-2 rounded-lg">
                                        <div class="diagram-box bg-sky-100">Especificação</div>
                                        <div class="diagram-arrow">↑↓</div>
                                        <div class="diagram-box bg-sky-100">Desenvolvimento</div>
                                        <div class="diagram-arrow">↑↓</div>
                                        <div class="diagram-box bg-sky-100">Validação</div>
                                        <p class="text-xs text-center mt-1">Atividades Simultâneas</p>
                                    </div>
                                    <div class="diagram-arrow">→</div>
                                    <div class="diagram-connector-col space-y-1">
                                        <div class="diagram-box">Versão Inicial</div>
                                        <div class="diagram-box">Versões Intermediárias</div>
                                        <div class="diagram-box">Versão Final</div>
                                    </div>
                                </div>`,
        },
        {
          title:
            "2.2.3. Integração e Configuração (Engenharia de Software Orientada à Reutilização)",
          content: [
            "Foco na reutilização de software existente.",
            "Depende de componentes reutilizáveis e framework de integração.",
            "<strong>Tipos de Componentes Reutilizáveis</strong>: Sistemas de aplicação independentes, coleções de objetos, serviços web.",
            "<strong>Etapas do Processo</strong>: Especificação de requisitos -> Descoberta e avaliação de software -> Refinamento dos requisitos -> Configuração de sistema de aplicação OU Adaptação e integração de componentes.",
            "<strong>Vantagens</strong>: Redução da quantidade de software a desenvolver, entrega mais rápida.",
            "<strong>Desvantagens</strong>: Compromissos nos requisitos, perda de controle sobre a evolução.",
          ],
        },
        {
          title: "2.3. Combinação de Modelos",
          content: [
            "Processos práticos frequentemente incorporam características de outros modelos.",
            "Exemplo: <strong>Rational Unified Process (RUP)</strong> - modelo flexível, adaptável.",
          ],
        },
        {
          title: "Comparação Conceitual de Modelos de Processo",
          content: [], // Added empty content array here
          chartHTML: `<div class="chart-container bg-white p-4 rounded-lg shadow mt-4"><canvas id="modelComparisonChart"></canvas></div>`,
        },
      ],
    },
    {
      id: "atividades",
      title: "3. Atividades do Processo",
      intro:
        "Esta seção detalha as atividades técnicas, colaborativas e gerenciais que compõem os processos de software, desde a especificação inicial até a evolução contínua do sistema.",
      subsections: [
        {
          title: "3.1. Visão Geral",
          content: [
            "Sequências intercaladas de atividades técnicas, colaborativas e gerenciais.",
            "Suportadas por ferramentas (gerenciamento de requisitos, editores, testes automatizados).",
            "Organização das atividades (especificação, desenvolvimento, validação, evolução) varia conforme o modelo.",
          ],
        },
        {
          title: "3.2. Especificação de Software (Engenharia de Requisitos)",
          content: [
            "Processo de entender e definir serviços e restrições do sistema.",
            "<strong>Criticidade</strong>: Erros nesta fase levam a problemas posteriores.",
            "<strong>Estudo de Viabilidade</strong>: Análise preliminar de necessidade, viabilidade técnica e financeira.",
            "<strong>Processo de Engenharia de Requisitos</strong>:",
            "<ol class='list-decimal list-inside ml-4'><li><strong>Elicitação e análise de requisitos</strong>: Obtenção de requisitos (observação, discussões, modelos, protótipos).</li><li><strong>Especificação de requisitos</strong>: Tradução das informações em um documento. Inclui <strong>Requisitos do usuário</strong> (abstratos) e <strong>Requisitos do sistema</strong> (detalhados).</li><li><strong>Validação de requisitos</strong>: Verificação de realismo, consistência e completude.</li></ol>",
            "Atividades intercaladas; novos requisitos podem surgir.",
            "<strong>Nos métodos ágeis</strong>: Especificação informal para cada incremento, com participação ativa dos usuários.",
          ],
          diagramHTML: `
                                <h4 class="text-md font-semibold text-stone-600 mt-3 mb-2">Diagrama: Processo de Engenharia de Requisitos (Simplificado)</h4>
                                <div class="flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow">
                                    <div class="diagram-box">Elicitação e Análise de Requisitos</div>
                                    <div class="diagram-arrow">↓</div>
                                    <div class="diagram-box">Especificação de Requisitos</div>
                                    <div class="diagram-arrow">↓</div>
                                    <div class="diagram-box">Validação de Requisitos</div>
                                    <p class="text-xs text-stone-500 mt-2">Resulta em: Documento de Requisitos. Há feedback entre as etapas.</p>
                                </div>`,
        },
        {
          title: "3.3. Projeto e Implementação de Software",
          content: [
            "Processo de construir um sistema executável.",
            "Pode envolver atividades separadas de projeto e programação, ou intercaladas (ágil).",
            "<strong>Projeto de Software</strong>: Descrição da estrutura, modelos de dados, interfaces, algoritmos. Desenvolvido em etapas, com revisões.",
            "<strong>Modelo Abstrato do Processo de Projeto</strong>:",
            "  <ul class='list-disc list-inside ml-4'><li><strong>Entradas</strong>: Informações da plataforma, requisitos de software, descrição de dados.</li><li><strong>Atividades Comuns</strong>: Projeto arquitetural, projeto de banco de dados, projeto de interfaces, seleção e projeto de componentes.</li><li><strong>Saídas</strong>: Documentos de projeto, diagramas ou representações no código.</li></ul>",
            "<strong>Programação</strong>: Atividade individual, envolve testes e <strong>depuração (debugging)</strong>.",
          ],
        },
        {
          title: "3.4. Validação de Software (Verificação e Validação - V&V)",
          content: [
            "Objetivo: Demonstrar conformidade com a especificação e atendimento às expectativas do cliente.",
            "<strong>Teste de Programas</strong>: Principal técnica. Pode envolver inspeções e revisões.",
            "<strong>Etapas do Processo de Teste</strong>:",
            "<ol class='list-decimal list-inside ml-4'><li><strong>Teste de componentes (ou unidade)</strong>: Componentes testados individualmente.</li><li><strong>Teste de sistema</strong>: Componentes integrados testados como um todo.</li><li><strong>Teste com o cliente (ou aceitação)</strong>: Sistema testado pelo cliente com dados reais. Para produtos: <strong>Teste beta</strong>.</li></ol>",
            "Processo iterativo. <strong>Desenvolvimento Orientado por Testes (TDD)</strong> é comum em ágil.",
            "<strong>Teste em Processos Orientados a Plano</strong>: Guiados por planos de teste (<strong>Modelo em V</strong>).",
          ],
        },
        {
          title: "3.5. Evolução de Software",
          content: [
            "Flexibilidade do software permite alterações. Distinção entre desenvolvimento e <strong>manutenção</strong> está se tornando irrelevante.",
            "Mais realista ver como um <strong>processo evolutivo contínuo</strong>.",
            "<strong>Atividades</strong>: Definir requisitos -> Avaliar sistemas existentes -> Propor mudanças -> Modificar sistemas -> Novo sistema.",
          ],
        },
      ],
    },
    {
      id: "mudanca",
      title: "4. Lidando com a Mudança",
      intro:
        "A mudança é uma constante no desenvolvimento de software. Esta seção aborda como antecipar e tolerar mudanças, utilizando estratégias como prototipagem e entrega incremental.",
      subsections: [
        {
          title: "4.1. Inevitabilidade da Mudança",
          content: [
            "Requisitos mudam (pressões externas, concorrência, prioridades, novas tecnologias).",
            "Mudanças aumentam custos (<strong>retrabalho</strong>).",
          ],
        },
        {
          title: "4.2. Abordagens para Reduzir Custos de Retrabalho",
          content: [
            "1. <strong>Antecipação de mudanças</strong>: Atividades para prever mudanças (ex: <strong>prototipagem</strong>).",
            "2. <strong>Tolerância a mudanças</strong>: Processo e software projetados para facilitar alterações (ex: <strong>desenvolvimento incremental</strong>, <strong>refatoração</strong>).",
          ],
        },
        {
          title: "4.3. Prototipagem de Sistema",
          content: [
            "Versão inicial de um sistema para demonstrar conceitos, experimentar opções, entender o problema.",
            "Desenvolvimento rápido e iterativo.",
            "<strong>Usos</strong>: Engenharia de requisitos (eliciação e validação), Projeto do sistema (explorar soluções, interface com o usuário).",
            "Permite que usuários experimentem, proponham novos requisitos, identifiquem erros/omissões.",
            "<strong>Modelo de Processo de Prototipagem</strong>: Estabelecer objetivos -> Definir funcionalidade -> Desenvolver protótipo -> Avaliar protótipo.",
            "<strong>Problemas Comuns</strong>: Usuários podem não usar como o sistema final; avaliadores não representativos; tempo de treinamento insuficiente.",
          ],
        },
        {
          title: "4.4. Entrega Incremental",
          content: [
            "Incrementos desenvolvidos são entregues ao cliente para uso e feedback.",
            "Clientes definem prioridades dos serviços.",
            "<strong>Processo</strong>: Definir requisitos básicos -> Atribuir a incrementos -> Projetar arquitetura -> Desenvolver incremento -> Validar -> Integrar -> Validar sistema (parcial) -> Implantar -> Repetir.",
            "<strong>Vantagens</strong>: Clientes usam como protótipos, valor obtido mais cedo, facilidade de incorporar mudanças, serviços prioritários mais testados.",
            "<strong>Problemas</strong>: Problemático ao substituir sistemas existentes, difícil identificar funcionalidades básicas comuns, conflito com modelo de aquisição tradicional.",
            "<strong>Quando Não é a Melhor Abordagem</strong>: Sistemas muito grandes/distribuídos, embarcados, críticos.",
          ],
        },
      ],
    },
    {
      id: "melhoria",
      title: "5. Melhoria de Processos",
      intro:
        "A melhoria contínua dos processos de software é crucial para atender às demandas da indústria. Esta seção discute diferentes abordagens para aprimorar processos, incluindo modelos de maturidade e metodologias ágeis.",
      subsections: [
        {
          title: "5.1. Contexto",
          content: [
            "Demanda por software melhor, mais barato e entregue mais rapidamente.",
            "Objetivo: Aumentar a qualidade do produto, reduzir custos e/ou tempo de desenvolvimento.",
          ],
        },
        {
          title: "5.2. Abordagens para Melhoria",
          content: [
            "1. <strong>Abordagem de Maturidade de Processo</strong>: Foco na melhoria da gestão, introdução de boas práticas. Nível de maturidade reflete adoção dessas práticas. Objetivos: qualidade do produto, previsibilidade.",
            "2. <strong>Abordagem Ágil</strong>: Foco no desenvolvimento iterativo, redução de custos indiretos. Características: entrega rápida, resposta ágil a mudanças. Filosofia: menos burocracia.",
          ],
        },
        {
          title: "5.3. Ciclo de Melhoria de Processos (Baseado na Maturidade)",
          content: [
            "1. <strong>Medição de processo</strong>: Medir atributos (linha de base).",
            "2. <strong>Análise de processo</strong>: Avaliar, identificar fraquezas/gargalos.",
            "3. <strong>Mudança de processo</strong>: Propor e implementar mudanças; ciclo recomeça.",
            "Atividade de longo prazo e contínua.",
          ],
          diagramHTML: `
                                <h4 class="text-md font-semibold text-stone-600 mt-3 mb-2">Diagrama: Ciclo de Melhoria de Processos (Simplificado)</h4>
                                <div class="flex items-center justify-around bg-white p-6 rounded-lg shadow relative">
                                    <div class="diagram-box">Medir</div>
                                    <div class="diagram-arrow absolute" style="top: 50%; left: calc(33% - 1rem); transform: translateY(-50%) rotate(45deg);">↘</div>
                                    <div class="diagram-box">Analisar</div>
                                    <div class="diagram-arrow absolute" style="top: 50%; left: calc(66% - 1rem); transform: translateY(-50%) rotate(-45deg);">↙</div>
                                    <div class="diagram-box">Mudar</div>
                                    <div class="absolute" style="bottom: -20px; left: 50%; transform: translateX(-50%);">
                                        <div class="diagram-arrow" style="transform: rotate(90deg) translateX(5px) translateY(-15px) scaleX(1.5);">⤵</div>
                                    </div>
                                     <p class="text-xs text-stone-500 absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">Ciclo Contínuo (Realimentação para Medir)</p>
                                </div>
                                <div style="height: 20px;"></div>`,
        },
        {
          title: "5.4. Níveis de Maturidade de Processo (SEI - CMMI)",
          content: [
            "Proposto pelo Software Engineering Institute (SEI).",
            "<strong>Níveis</strong>:",
            "<ol class='list-decimal list-inside ml-4'><li><strong>Nível 1: Inicial</strong>: Objetivos atingidos; escopo definido.</li><li><strong>Nível 2: Gerenciado (Managed)</strong>: Políticas organizacionais; planos de projeto; gestão de recursos.</li><li><strong>Nível 3: Definido (Defined)</strong>: Padronização organizacional; processos adaptados; ativos e métricas coletados.</li><li><strong>Nível 4: Gerenciado Quantitativamente</strong>: Uso de métodos estatísticos/quantitativos para controlar subprocessos.</li><li><strong>Nível 5: Otimizado (Optimizing)</strong>: Organização usa medições para direcionar melhorias; processos adaptados.</li></ol>",
            "<strong>Impacto</strong>: Direcionou atenção para processos e práticas.",
            "<strong>Limitações</strong>: Overhead para pequenas empresas; difícil estimar em processos ágeis. Usado por grandes empresas.",
          ],
        },
      ],
    },
  ],
};

const contentArea = document.getElementById("content-area");
const navLinks = document.querySelectorAll(".nav-link");
let currentChart = null;
let currentSectionId = null;

function renderSection(sectionId) {
  currentSectionId = sectionId;
  const sectionData = mindMapData.sections.find((s) => s.id === sectionId);
  if (!sectionData) {
    contentArea.innerHTML = '<p class="text-red-500">Seção não encontrada.</p>';
    return;
  }

  let html = `<h2 class="text-3xl font-bold text-teal-700 mb-2">${sectionData.title}</h2>`;
  html += `<p class="text-stone-600 mb-6 text-sm italic">${sectionData.intro}</p>`;

  sectionData.subsections.forEach((sub, index) => {
    html += `
                    <div class="mb-3 bg-white shadow-md rounded-lg overflow-hidden">
                        <button class="accordion-button w-full text-left p-4 bg-stone-100 hover:bg-neutral-200 focus:outline-none transition-colors duration-150">
                            <span class="font-semibold text-teal-600">${sub.title}</span>
                        </button>
                        <div class="accordion-content p-4 border-t border-stone-200">
                `;
    // Ensure sub.content is an array before calling forEach
    if (sub.content && Array.isArray(sub.content)) {
      sub.content.forEach((item) => {
        if (item.startsWith("<") && item.endsWith(">")) {
          html += item;
        } else {
          html += `<p class="mb-2">${item}</p>`;
        }
      });
    }

    if (sub.diagramHTML) {
      html += `<div class="mt-4 p-2 border border-dashed border-gray-300 rounded-md">${sub.diagramHTML}</div>`;
    }
    if (sub.chartHTML) {
      html += sub.chartHTML;
    }

    html += `</div></div>`;
  });
  contentArea.innerHTML = html;
  contentArea.scrollTop = 0;

  attachAccordionListeners();
}

function attachAccordionListeners() {
  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      const isOpening = content.style.display !== "block";
      content.style.display = isOpening ? "block" : "none";

      if (isOpening) {
        const chartCanvas = content.querySelector("#modelComparisonChart");
        if (chartCanvas && currentSectionId === "modelos") {
          renderModelComparisonChart();
        }
      }
    });
  });
}

function renderModelComparisonChart() {
  const ctx = document.getElementById("modelComparisonChart");
  if (!ctx) return;

  if (currentChart) {
    currentChart.destroy();
  }

  currentChart = new Chart(ctx.getContext("2d"), {
    type: "radar",
    data: {
      labels: [
        "Flexibilidade (Mudanças)",
        "Planejamento Inicial",
        "Feedback do Cliente",
        "Visibilidade do Processo",
        "Custo Mudança Tardia",
      ],
      datasets: [
        {
          label: "Cascata",
          data: [1, 5, 1, 4, 5],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          pointBackgroundColor: "rgba(255, 99, 132, 1)",
        },
        {
          label: "Incremental",
          data: [4, 3, 4, 3, 2],
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          pointBackgroundColor: "rgba(54, 162, 235, 1)",
        },
        {
          label: "Reutilização",
          data: [3, 2, 3, 3, 3],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          pointBackgroundColor: "rgba(75, 192, 192, 1)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { display: true },
          suggestedMin: 0,
          suggestedMax: 5,
          pointLabels: { font: { size: 10 } },
          ticks: { stepSize: 1 },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Comparação Conceitual de Modelos de Processo",
          font: { size: 16, weight: "bold" },
          padding: { top: 10, bottom: 10 },
        },
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.r !== null) {
                label += context.parsed.r;
              }
              return label;
            },
          },
        },
      },
    },
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((l) =>
      l.classList.remove("bg-stone-300", "font-semibold")
    );
    link.classList.add("bg-stone-300", "font-semibold");
    renderSection(link.dataset.section);
  });
});

if (mindMapData.sections.length > 0) {
  renderSection(mindMapData.sections[0].id);
  navLinks[0].classList.add("bg-stone-300", "font-semibold");
} else {
  contentArea.innerHTML =
    "<p>Bem-vindo! Selecione uma seção no menu para começar.</p>";
}
