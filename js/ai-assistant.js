// ==========================================
// TUI TECNOLOGIA - AI ASSISTANT WIDGET
// ==========================================

const aiResponses = {
    'desenvolvimento web': {
        text: '🌐 Nosso serviço de <strong>Desenvolvimento Web</strong> inclui:<br><br>• Sites profissionais e responsivos<br>• SEO e otimização para buscadores<br>• Facebook Pixel e Google Analytics/GA4<br>• Áreas administrativas personalizadas<br>• Hospedagem e e-mails corporativos<br><br>Quer receber uma proposta?',
        ctas: ['Solicitar Orçamento', 'Falar no WhatsApp']
    },
    'software': {
        text: '💻 Desenvolvemos <strong>Software sob Medida</strong>:<br><br>• Sistemas administrativos e dashboards<br>• Integrações com APIs externas<br>• Integração com <strong>Stripe</strong> (pagamentos)<br>• Integração com <strong>Sentry</strong> (monitoramento)<br>• IA generativa integrada ao sistema<br><br>Vamos conversar sobre seu projeto?',
        ctas: ['Solicitar Orçamento', 'Falar no WhatsApp']
    },
    'ia': {
        text: '🤖 Soluções de <strong>IA & Automação</strong>:<br><br>• Assistente virtual com IA no seu site<br>• Integração de IA generativa em sistemas<br>• Automação de fluxos com <strong>n8n</strong><br>• E-mail transacional com <strong>Resend</strong><br>• Automação de processos repetitivos<br><br>Quer transformar seu negócio com IA?',
        ctas: ['Solicitar Orçamento', 'Falar no WhatsApp']
    },
    'infraestrutura': {
        text: '🖥️ <strong>Infraestrutura & Suporte</strong>:<br><br>• Suporte técnico especializado<br>• Manutenção e gestão de servidores<br>• Backup e recuperação de dados<br>• Soluções em nuvem<br>• Cabeamento estruturado<br>• Licenças de antivírus e Windows<br><br>Precisa de suporte para sua empresa?',
        ctas: ['Solicitar Orçamento', 'Falar no WhatsApp']
    },
    'marketing': {
        text: '📈 <strong>Marketing Digital</strong>:<br><br>• Gestão de tráfego pago<br>• SEO — otimização para buscadores<br>• Configuração de Facebook Pixel<br>• Google Analytics e GA4<br>• Criação e gestão de campanhas<br><br>Quer atrair mais clientes?',
        ctas: ['Solicitar Orçamento', 'Falar no WhatsApp']
    },
    'orçamento': {
        text: '💬 Para um orçamento personalizado, entre em contato!<br><br>📱 <strong>WhatsApp:</strong> (17) 98815-1758<br>📧 <strong>E-mail:</strong> tuitecnologia@gmail.com<br><br>Nossa equipe responde rapidamente!',
        ctas: ['Falar no WhatsApp', 'Enviar E-mail']
    }
};

const fallbackResponses = [
    'Entendido! Posso te ajudar com informações sobre nossos serviços. Escolha uma das opções abaixo ou fale diretamente com nossa equipe.',
    'Ótima pergunta! Nossa equipe pode te ajudar melhor. Escolha um serviço abaixo ou entre em contato pelo WhatsApp.',
    'Posso te ajudar com informações sobre desenvolvimento web, software, IA, infraestrutura e marketing digital. O que você precisa?'
];

let fallbackIndex = 0;
let panelOpen = false;

function aiToggle() {
    const panel = document.getElementById('aiChatPanel');
    const icon = document.getElementById('aiToggleIcon');
    if (!panel || !icon) return;

    panelOpen = !panelOpen;

    if (panelOpen) {
        panel.classList.remove('ai-panel-hidden');
        icon.classList.replace('fa-robot', 'fa-times');
    } else {
        panel.classList.add('ai-panel-hidden');
        icon.classList.replace('fa-times', 'fa-robot');
    }
}

function aiQuickReply(topic) {
    const messagesEl = document.getElementById('aiChatMessages');
    if (!messagesEl) return;

    // Remove quick replies only from the initial greeting message
    const firstMsg = messagesEl.querySelector('.ai-message');
    if (firstMsg) firstMsg.querySelectorAll('.ai-quick-replies').forEach(el => el.remove());

    // User bubble
    const userMsg = document.createElement('div');
    userMsg.className = 'ai-message user-message';
    userMsg.innerHTML = `<div class="ai-message-bubble">${escapeHtml(topic)}</div>`;
    messagesEl.appendChild(userMsg);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    const key = detectTopic(topic.toLowerCase());
    const response = aiResponses[key] || {
        text: fallbackResponses[fallbackIndex++ % fallbackResponses.length],
        ctas: ['Solicitar Orçamento', 'Falar no WhatsApp']
    };

    setTimeout(() => {
        addAiMessage(response.text, response.ctas, messagesEl);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }, 600);
}

function aiSendMessage() {
    const input = document.getElementById('aiInput');
    const messagesEl = document.getElementById('aiChatMessages');
    if (!input || !messagesEl) return;

    const text = input.value.trim();
    if (!text) return;

    input.value = '';

    const userMsg = document.createElement('div');
    userMsg.className = 'ai-message user-message';
    userMsg.innerHTML = `<div class="ai-message-bubble">${escapeHtml(text)}</div>`;
    messagesEl.appendChild(userMsg);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    const key = detectTopic(text.toLowerCase());
    const response = aiResponses[key] || {
        text: fallbackResponses[fallbackIndex++ % fallbackResponses.length],
        ctas: ['Solicitar Orçamento', 'Falar no WhatsApp']
    };

    setTimeout(() => {
        addAiMessage(response.text, response.ctas, messagesEl);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }, 700);
}

function detectTopic(text) {
    if (/site|web|wordpress|hospedagem|seo|analytics|pixel/.test(text)) return 'desenvolvimento web';
    if (/software|sistema|dashboard|stripe|sentry|api/.test(text)) return 'software';
    if (/ia|intelig|automa|n8n|resend|chatbot|bot|robô/.test(text)) return 'ia';
    if (/infraestrutura|servidor|backup|suporte|técnico|antivírus|windows|nuvem|cloud/.test(text)) return 'infraestrutura';
    if (/marketing|tráfego|pago|campanha|facebook|instagram/.test(text)) return 'marketing';
    if (/orçamento|preço|valor|custo|quanto|proposta/.test(text)) return 'orçamento';
    return null;
}

function addAiMessage(text, ctas, messagesEl) {
    const msgEl = document.createElement('div');
    msgEl.className = 'ai-message';

    const bubble = document.createElement('div');
    bubble.className = 'ai-message-bubble';
    bubble.innerHTML = text;
    msgEl.appendChild(bubble);

    if (ctas && ctas.length) {
        const ctasEl = document.createElement('div');
        ctasEl.className = 'ai-quick-replies';
        ctas.forEach(cta => {
            const btn = document.createElement('button');
            btn.className = 'ai-quick-btn';
            btn.textContent = cta;
            btn.addEventListener('click', () => handleCtaClick(cta));
            ctasEl.appendChild(btn);
        });
        msgEl.appendChild(ctasEl);
    }

    messagesEl.appendChild(msgEl);
}

function handleCtaClick(cta) {
    switch (cta) {
        case 'Solicitar Orçamento':
            window.location.href = 'contato.html';
            break;
        case 'Falar no WhatsApp':
            window.open('https://wa.me/5517988151758?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.', '_blank', 'noopener,noreferrer');
            break;
        case 'Enviar E-mail':
            window.open('mailto:tuitecnologia@gmail.com', '_blank', 'noopener,noreferrer');
            break;
        case 'Ver mais serviços':
            window.location.href = 'servicos.html#servicos';
            break;
        default:
            aiQuickReply(cta);
    }
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('aiToggleBtn');
    const closeBtn  = document.getElementById('aiChatClose');
    const input     = document.getElementById('aiInput');
    const sendBtn   = document.getElementById('aiSendBtn');

    if (toggleBtn) toggleBtn.addEventListener('click', aiToggle);
    if (closeBtn)  closeBtn.addEventListener('click', aiToggle);
    if (input)     input.addEventListener('keydown', e => { if (e.key === 'Enter') aiSendMessage(); });
    if (sendBtn)   sendBtn.addEventListener('click', aiSendMessage);
});
