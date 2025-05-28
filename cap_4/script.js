document.addEventListener('DOMContentLoaded', function() {
    const chapterData = {
        title: "Capítulo 4: Engenharia de Requisitos",
        sections: [
            {
                id: "intro",
                title: "1. Introdução à ER",
                intro: "A engenharia de requisitos (ER) é o processo de descobrir, analisar, documentar e verificar os serviços que um sistema deve fornecer e as restrições sob as quais ele opera. Esta seção aborda as definições fundamentais, a distinção entre requisitos de usuário e de sistema, e a importância de identificar todas as partes interessadas (stakeholders).",
                subsections: [
                    {
                        title: "1.1. Requisitos de Usuário vs. Requisitos de Sistema",
                        content: [
                            "A distinção entre os níveis de detalhe dos requisitos é crucial. Falhas em separar esses níveis podem causar problemas durante o desenvolvimento.",
                            "<strong>Requisitos de Usuário:</strong> São declarações de alto nível, em linguagem natural e com diagramas, dos serviços e restrições do sistema. São compreensíveis por usuários e gerentes que não possuem conhecimento técnico detalhado. Exemplo: 'O sistema deve gerar relatórios mensais de custos.'",
                            "<strong>Requisitos de Sistema:</strong> São descrições detalhadas e estruturadas das funções, serviços e restrições operacionais. Servem como base para o contrato, definindo exatamente o que será implementado. São direcionados a desenvolvedores, arquitetos e testadores. Exemplo: 'No último dia útil do mês, às 17:30, um relatório de custos de medicamentos por clínica deve ser gerado para impressão.'"
                        ],
                        diagramId: 'fig4-1'
                    },
                    {
                        title: "1.2. Stakeholders (Partes Interessadas)",
                        content: [
                            "Stakeholders são quaisquer pessoas, grupos ou organizações afetados pelo sistema de alguma forma e que, portanto, têm um interesse legítimo nele. A identificação de todos os stakeholders é essencial para obter uma visão completa e evitar conflitos de interesse.",
                            "Para um sistema de saúde mental (Mentcare), os stakeholders podem incluir pacientes, médicos, enfermeiros, recepcionistas, equipe de TI, gerentes de ética, gerentes de saúde e a equipe de registros médicos."
                        ]
                    }
                ]
            },
            {
                id: "func-nao-func",
                title: "2. Requisitos Funcionais e Não Funcionais",
                intro: "Os requisitos são classificados em funcionais e não funcionais. Os funcionais descrevem o que o sistema faz, enquanto os não funcionais impõem restrições sobre como ele faz. A distinção nem sempre é clara, pois um requisito não funcional pode gerar vários requisitos funcionais.",
                subsections: [
                    {
                        title: "2.1. Requisitos Funcionais",
                        content: [
                            "São declarações dos serviços que o sistema deve fornecer, como deve reagir a entradas e se comportar em certas situações. A ambiguidade é um problema comum; uma palavra como 'pesquisar' pode ser interpretada de várias formas pelo desenvolvedor e pelo cliente.",
                            "Idealmente, a especificação funcional deve ser <strong>completa</strong> (todos os serviços e informações exigidos pelo usuário estão definidos) e <strong>consistente</strong> (os requisitos não devem se contradizer). Atingir ambos é um desafio em sistemas complexos com múltiplos stakeholders."
                        ]
                    },
                    {
                        title: "2.2. Requisitos Não Funcionais (RNF)",
                        content: [
                            "São restrições sobre os serviços ou funções, como desempenho, segurança e confiabilidade. Frequentemente, são mais críticos que os requisitos funcionais individuais, pois sua falha pode tornar o sistema inteiro inutilizável (ex: um sistema de aeronave que não atende aos requisitos de confiabilidade).",
                            "A implementação de RNFs geralmente afeta a arquitetura geral do sistema e não apenas componentes isolados, pois suas propriedades são emergentes e se aplicam ao sistema como um todo."
                        ],
                        diagramId: 'fig4-3'
                    },
                    {
                        title: "2.3. Métricas para RNF",
                        content: [
                            "Sempre que possível, os RNFs devem ser escritos de forma quantitativa para que possam ser testados objetivamente. Metas vagas como 'o sistema deve ser fácil de usar' devem ser traduzidas em requisitos mensuráveis e testáveis.",
                            "Por exemplo, a meta de 'minimizar erros dos usuários' pode ser especificada como: 'Após 2 horas de treinamento, o número médio de erros cometidos por usuários experientes não deve exceder dois por hora de uso do sistema.'"
                        ],
                        diagramId: 'fig4-5'
                    }
                ]
            },
            {
                id: "processo-er",
                title: "3. Processo de Engenharia de Requisitos",
                intro: "A engenharia de requisitos é um processo iterativo no qual as atividades são entrelaçadas. As principais atividades são elicitação, especificação e validação, organizadas em um ciclo contínuo para refinar a compreensão dos requisitos.",
                subsections: [
                    {
                        title: "3.1. Modelo em Espiral do Processo de ER",
                        content: [
                            "O modelo em espiral ilustra a natureza iterativa da ER. O processo começa com a compreensão dos requisitos de alto nível (nos anéis internos da espiral) e, a cada iteração, aprofunda-se nos detalhes, movendo-se para requisitos de sistema mais específicos (nos anéis externos)."
                        ],
                        diagramId: 'fig4-6'
                    },
                    {
                        title: "3.2. Elicitação e Análise de Requisitos",
                        content: [
                            "Esta fase visa descobrir e compreender os requisitos dos stakeholders. É um processo difícil devido a fatores como a dificuldade dos stakeholders em articular suas necessidades, diferenças de vocabulário, conhecimento implícito do trabalho e influências políticas internas na organização."
                        ],
                        diagramId: 'fig4-7'
                    },
                     {
                        title: "3.3. Técnicas de Elicitação",
                        content: [
                            "<strong>Entrevistas:</strong> Conversas com stakeholders para obter uma compreensão geral de seu trabalho. Podem ser fechadas (perguntas pré-definidas) ou abertas (exploratórias). Seu desafio é superar o jargão técnico do domínio e o conhecimento que os especialistas consideram tão óbvio que nem o mencionam.",
                            "<strong>Etnografia:</strong> Técnica observacional onde o analista se insere no ambiente de trabalho para entender como as pessoas <i>realmente</i> trabalham, em oposição aos processos formais. É excelente para descobrir requisitos implícitos e sociais.",
                            "<strong>Histórias e Cenários:</strong> Descrições de como o sistema pode ser usado. <strong>Histórias</strong> são narrativas de alto nível para facilitar a discussão. <strong>Cenários</strong> são descrições mais estruturadas de uma sessão de interação específica, detalhando o fluxo normal, possíveis erros e o estado do sistema."
                        ]
                    }
                ]
            },
            {
                id: "especificacao",
                title: "4. Especificação de Requisitos",
                intro: "A especificação é o processo de registrar os requisitos em um documento. A clareza e a ausência de ambiguidade são essenciais, embora difíceis de alcançar. Existem várias notações para escrever requisitos, cada uma com suas vantagens.",
                subsections: [
                    {
                        title: "4.1. Notações para Especificação",
                        content: ["As formas de especificar requisitos variam desde a linguagem natural, que é universal mas ambígua, até modelos matemáticos formais, que são precisos mas de difícil compreensão para clientes não técnicos. Notações gráficas (UML) e linguagem estruturada (formulários) são soluções intermediárias."],
                        diagramId: 'fig4-11'
                    },
                    {
                        title: "4.2. O Documento de Requisitos de Software (SRS)",
                        content: [
                            "O SRS é a declaração oficial do que os desenvolvedores devem implementar. É um documento essencial quando o sistema é terceirizado, desenvolvido por equipes diferentes ou quando análises detalhadas são obrigatórias.",
                            "Possui um conjunto diversificado de usuários: clientes (para validação), gerentes (para planejamento), engenheiros de sistema (para desenvolvimento), testadores (para criar testes de validação) e engenheiros de manutenção (para entender o sistema).",
                            "Em abordagens ágeis, um SRS formal e extenso pode ser substituído por uma coleção de histórias de usuário, priorizadas para implementação em cada incremento."
                        ]
                    }
                ]
            },
            {
                id: "validacao-mudanca",
                title: "4. Validação e Mudança",
                intro: "Após a especificação, os requisitos devem ser validados para garantir que definem o sistema desejado pelo cliente. Além disso, é preciso ter um processo robusto para gerenciar as mudanças que inevitavelmente ocorrem ao longo do ciclo de vida do projeto.",
                subsections: [
                    {
                        title: "5.1. Validação dos Requisitos",
                        content: [
                            "É o processo de verificar se os requisitos estão corretos. Erros encontrados nesta fase são muito mais baratos de corrigir. O custo pode aumentar exponencialmente se o erro for descoberto apenas após o sistema estar em uso.",
                            "<strong>Tipos de Verificação:</strong><ul><li><b>Validade:</b> Os requisitos atendem às necessidades reais dos usuários?</li><li><b>Consistência:</b> Não há requisitos contraditórios?</li><li><b>Completude:</b> Todas as funções e restrições desejadas estão incluídas?</li><li><b>Realismo:</b> Os requisitos podem ser implementados com a tecnologia e o orçamento disponíveis?</li><li><b>Verificabilidade:</b> É possível criar testes para demonstrar que cada requisito foi atendido?</li></ul>",
                            "<strong>Técnicas de Validação:</strong> Revisões formais de requisitos, prototipagem para obter feedback do usuário e geração antecipada de casos de teste."
                        ],
                         chartId: 'costOfChangeChart'
                    },
                    {
                        title: "5.2. Gerenciamento de Mudanças nos Requisitos",
                        content: [
                            "Grandes sistemas são desenvolvidos para resolver problemas 'complexos', e a compreensão desses problemas evolui, levando a mudanças inevitáveis nos requisitos.",
                            "Um processo formal de gerenciamento de mudanças é essencial para avaliar o impacto e o custo de cada alteração proposta. Ele garante que todas as propostas sejam tratadas de forma consistente.",
                            "O processo geralmente envolve três etapas: <strong>1) Análise do problema e especificação da mudança</strong> (validar a necessidade da mudança); <strong>2) Análise do impacto e estimativa de custos</strong> (avaliar o efeito da mudança nos outros requisitos e no cronograma); e <strong>3) Implementação da mudança</strong> (modificar o documento de requisitos, o design e o código de forma controlada)."
                        ]
                    }
                ]
            }
        ]
    };

    const sidebarNav = document.getElementById('sidebar-nav');
    const contentArea = document.getElementById('content-area');
    let currentChart = null;

    function init() {
        populateSidebar();
        const firstSectionId = chapterData.sections[0]?.id;
        if (firstSectionId) {
            renderSection(firstSectionId);
            document.querySelector('.nav-link')?.classList.add('bg-stone-300', 'font-semibold');
        }
    }

    function populateSidebar() {
        let navHtml = '';
        chapterData.sections.forEach(section => {
            navHtml += `<li><a href="#" class="nav-link text-stone-700 hover:text-teal-600 hover:bg-stone-300 block p-2 rounded-md transition-colors duration-150" data-section="${section.id}">${section.title}</a></li>`;
        });
        sidebarNav.innerHTML = navHtml;

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('bg-stone-300', 'font-semibold'));
                e.currentTarget.classList.add('bg-stone-300', 'font-semibold');
                renderSection(e.currentTarget.dataset.section);
            });
        });
    }

    function renderSection(sectionId) {
        if (currentChart) {
            currentChart.destroy();
            currentChart = null;
        }

        const sectionData = chapterData.sections.find(s => s.id === sectionId);
        if (!sectionData) return;

        let html = `<h2 class="text-3xl font-bold text-teal-700 mb-2">${sectionData.title}</h2>`;
        html += `<p class="text-stone-600 mb-6 text-sm italic">${sectionData.intro}</p>`;

        sectionData.subsections.forEach(sub => {
            html += `
                <div class="mb-3 bg-white shadow-md rounded-lg overflow-hidden">
                    <button class="accordion-button w-full text-left p-4 bg-stone-100 hover:bg-neutral-200 focus:outline-none transition-colors duration-150">
                        <span class="font-semibold text-teal-600">${sub.title}</span>
                    </button>
                    <div class="accordion-content p-4">
                        ${sub.content.map(item => `<p class="mb-2">${item}</p>`).join('').replace(/<ul>/g, '<ul class="list-disc list-inside mt-2 space-y-1">')}
                        ${renderDiagram(sub.diagramId)}
                        ${sub.chartId ? `<div class="chart-container mt-4 p-2 border-dashed border-gray-300 rounded-md"><canvas id="${sub.chartId}"></canvas></div>` : ''}
                    </div>
                </div>
            `;
        });
        contentArea.innerHTML = html;
        contentArea.scrollTop = 0;

        attachAccordionListeners();
        
        const chartId = sectionData.subsections.find(s => s.chartId)?.chartId;
        if (chartId && !document.getElementById(chartId).closest('.accordion-content')) {
             if (chartId === 'costOfChangeChart') renderCostOfChangeChart();
        }
    }
    
    function attachAccordionListeners() {
        document.querySelectorAll('.accordion-button').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
                const content = button.nextElementSibling;
                const isOpening = content.style.display !== 'block';
                content.style.display = isOpening ? 'block' : 'none';

                if (isOpening) {
                    const chartCanvas = content.querySelector('canvas');
                    if (chartCanvas) {
                        if (chartCanvas.id === 'costOfChangeChart') renderCostOfChangeChart();
                    }
                }
            });
        });
    }
    
    function renderDiagram(diagramId) {
        if (!diagramId) return '';
        
        const diagrams = {
            'fig4-1': `
                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 class="font-bold text-blue-800">Requisito de Usuário</h4>
                        <p class="mt-2 text-sm">"O sistema Mentcare deverá gerar relatórios gerenciais mensais mostrando o custo dos medicamentos prescritos por cada clínica durante aquele mês."</p>
                    </div>
                    <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 class="font-bold text-green-800">Requisitos de Sistema (Exemplos)</h4>
                        <ul class="list-disc list-inside mt-2 text-sm space-y-1">
                            <li>1.1 No último dia útil de cada mês, será gerado um resumo dos medicamentos...</li>
                            <li>1.2 O sistema deverá gerar o relatório para impressão após as 17h30...</li>
                            <li>1.3 Um relatório deverá ser criado para cada clínica e listar nomes, doses, etc.</li>
                            <li>1.5 O acesso aos relatórios deve ser restrito...</li>
                        </ul>
                    </div>
                </div>`,
            'fig4-3': `
                <h4 class="font-bold text-stone-600 mt-4 mb-2">Tipos de Requisitos Não Funcionais</h4>
                <div class="tree bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm">
                    <ul>
                        <li><span class="font-semibold">Requisitos do Produto</span>
                            <ul>
                                <li>Usabilidade</li>
                                <li>Eficiência (Desempenho, Espaço)</li>
                                <li>Confiabilidade</li>
                                <li>Segurança (Safety & Security)</li>
                            </ul>
                        </li>
                        <li><span class="font-semibold">Requisitos Organizacionais</span>
                             <ul>
                                <li>Ambientais</li>
                                <li>Operacionais</li>
                                <li>Desenvolvimento</li>
                            </ul>
                        </li>
                        <li><span class="font-semibold">Requisitos Externos</span>
                             <ul>
                                <li>Regulatórios</li>
                                <li>Éticos</li>
                                <li>Legislativos (Privacidade, etc.)</li>
                            </ul>
                        </li>
                    </ul>
                </div>`,
            'fig4-5': `
                <h4 class="font-bold text-stone-600 mt-4 mb-2">Métricas para RNFs (Exemplos)</h4>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 rounded-lg">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr><th scope="col" class="px-6 py-3">Propriedade</th><th scope="col" class="px-6 py-3">Medida</th></tr>
                        </thead>
                        <tbody>
                             <tr class="bg-white border-b"><td class="px-6 py-4 font-medium">Velocidade</td><td class="px-6 py-4">Transações processadas/segundo, Tempo de resposta</td></tr>
                             <tr class="bg-gray-50 border-b"><td class="px-6 py-4 font-medium">Tamanho</td><td class="px-6 py-4">Megabytes, Número de chips ROM</td></tr>
                             <tr class="bg-white border-b"><td class="px-6 py-4 font-medium">Facilidade de uso</td><td class="px-6 py-4">Tempo de treinamento, Taxa de erros do usuário</td></tr>
                             <tr class="bg-gray-50 border-b"><td class="px-6 py-4 font-medium">Confiabilidade</td><td class="px-6 py-4">Tempo médio até a falha (MTTF), Disponibilidade</td></tr>
                             <tr class="bg-white"><td class="px-6 py-4 font-medium">Robustez</td><td class="px-6 py-4">Tempo para reiniciar após falha, % de eventos que causam falha</td></tr>
                        </tbody>
                    </table>
                </div>`,
            'fig4-6': `
                 <h4 class="font-bold text-stone-600 mt-4 mb-2">Visão em Espiral da ER</h4>
                 <div class="flex justify-center items-center p-4 bg-gray-50 rounded-lg border">
                    <p class="text-center">Especificação → Elicitação → Validação → (O Ciclo se repete com maior detalhe)</p>
                 </div>`,
            'fig4-7': `
                 <h4 class="font-bold text-stone-600 mt-4 mb-2">Processo de Elicitação e Análise</h4>
                 <div class="flex flex-wrap justify-center items-center p-4 bg-gray-50 rounded-lg border">
                    <div class="diagram-box">1. Descoberta</div> <div class="diagram-arrow">→</div>
                    <div class="diagram-box">2. Classificação</div> <div class="diagram-arrow">→</div>
                    <div class="diagram-box">3. Priorização</div> <div class="diagram-arrow">→</div>
                    <div class="diagram-box">4. Documentação</div>
                 </div>`,
            'fig4-11': `
                 <h4 class="font-bold text-stone-600 mt-4 mb-2">Notações para Especificação de Requisitos</h4>
                 <ul class="list-disc list-inside space-y-2 text-sm">
                    <li><b>Linguagem Natural:</b> Frases numeradas, expressivas mas podem ser ambíguas.</li>
                    <li><b>Linguagem Natural Estruturada:</b> Usa formulários/modelos padrão para reduzir variabilidade.</li>
                    <li><b>Notações Gráficas:</b> Modelos como diagramas de caso de uso e sequência da UML.</li>
                    <li><b>Especificações Matemáticas:</b> Baseadas em conceitos formais. Inequívocas, mas de difícil compreensão para clientes.</li>
                 </ul>`
        };
        
        return diagrams[diagramId] || '';
    }
    
    function renderCostOfChangeChart() {
        const ctx = document.getElementById('costOfChangeChart');
        if (!ctx || ctx.chart) return; 

        if (currentChart) {
            currentChart.destroy();
        }
        
        currentChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Requisitos', 'Design', 'Codificação', 'Teste', 'Pós-Lançamento'],
                datasets: [{
                    label: 'Custo Relativo para Corrigir Erro',
                    data: [1, 5, 10, 20, 200], // Valores exponenciais clássicos
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        type: 'logarithmic',
                        title: {
                            display: true,
                            text: 'Custo (Escala Logarítmica)'
                        }
                    },
                    x: {
                         title: {
                            display: true,
                            text: 'Fase do Projeto'
                        }
                    }
                },
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Custo de Correção de Erros por Fase do Projeto',
                        font: { size: 16 }
                    }
                }
            }
        });
        ctx.chart = currentChart;
    }

    init();
});