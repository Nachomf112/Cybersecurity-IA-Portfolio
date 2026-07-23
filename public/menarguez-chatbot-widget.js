/**
 * Menarguez-IA-Solutions — Widget de Chat
 * Conecta con un webhook de n8n que llama a la API de Claude.
 *
 * USO: pega este script antes de </body> en tu web:
 * <script src="menarguez-chatbot-widget.js" data-webhook="https://TU-DOMINIO-N8N/webhook/menarguez-chatbot"></script>
 */
(function () {
  const scriptTag = document.currentScript;
  const WEBHOOK_URL = scriptTag.getAttribute('data-webhook') || '';

  if (!WEBHOOK_URL) {
    console.warn('[Menarguez-IA Widget] Falta el atributo data-webhook en el <script>.');
  }

  const SESSION_ID = 'sess_' + Math.random().toString(36).slice(2) + Date.now();
  let history = [];

  const css = `
    .mia-widget * { box-sizing: border-box; }
    .mia-widget {
      --mia-bg: #000000;
      --mia-text: #FFFFFF;
      --mia-primary: #0080F0;
      --mia-accent: #FFC300;
      font-family: 'Lato', Arial, sans-serif;
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
    }
    .mia-bubble {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--mia-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,128,240,0.4);
      transition: transform 0.2s ease;
      border: none;
    }
    .mia-bubble:hover { transform: scale(1.06); }
    .mia-bubble svg { width: 28px; height: 28px; }
    .mia-panel {
      display: none;
      flex-direction: column;
      position: absolute;
      bottom: 76px;
      right: 0;
      width: 360px;
      max-width: calc(100vw - 48px);
      height: 520px;
      max-height: calc(100vh - 140px);
      background: var(--mia-bg);
      border: 1px solid #1f2937;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 12px 40px rgba(0,0,0,0.5);
    }
    .mia-panel.mia-open { display: flex; }
    .mia-header {
      background: linear-gradient(135deg, #000000, #0080F0);
      padding: 16px 18px;
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid #1f2937;
    }
    .mia-avatar {
      width: 34px; height: 34px; border-radius: 50%;
      background: var(--mia-accent);
      display: flex; align-items: center; justify-content: center;
      font-weight: 900; color: #000; font-size: 15px;
      flex-shrink: 0;
    }
    .mia-header-text { color: var(--mia-text); line-height: 1.25; }
    .mia-header-title { font-weight: 700; font-size: 14px; }
    .mia-header-sub { font-size: 11px; color: #cbd5e1; }
    .mia-close {
      margin-left: auto; background: none; border: none; color: #cbd5e1;
      cursor: pointer; font-size: 18px; line-height: 1; padding: 4px;
    }
    .mia-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .mia-msg {
      max-width: 82%;
      padding: 10px 13px;
      border-radius: 12px;
      font-size: 13.5px;
      line-height: 1.4;
      white-space: pre-wrap;
    }
    .mia-msg.bot {
      align-self: flex-start;
      background: #111827;
      color: var(--mia-text);
      border: 1px solid #1f2937;
    }
    .mia-msg.user {
      align-self: flex-end;
      background: var(--mia-primary);
      color: #fff;
    }
    .mia-msg.typing { color: #9ca3af; font-style: italic; }
    .mia-inputbar {
      display: flex;
      gap: 8px;
      padding: 12px;
      border-top: 1px solid #1f2937;
      background: #050505;
    }
    .mia-input {
      flex: 1;
      background: #111827;
      border: 1px solid #1f2937;
      border-radius: 10px;
      color: var(--mia-text);
      padding: 10px 12px;
      font-size: 13.5px;
      font-family: inherit;
      outline: none;
    }
    .mia-input:focus { border-color: var(--mia-primary); }
    .mia-send {
      background: var(--mia-primary);
      border: none;
      border-radius: 10px;
      width: 40px;
      color: #fff;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .mia-send:disabled { opacity: 0.5; cursor: default; }
    .mia-footer {
      text-align: center;
      font-size: 10px;
      color: #4b5563;
      padding: 6px 0 10px;
      background: #050505;
    }
  `;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  const root = document.createElement('div');
  root.className = 'mia-widget';
  root.innerHTML = `
    <div class="mia-panel" id="mia-panel">
      <div class="mia-header">
        <div class="mia-avatar">A</div>
        <div class="mia-header-text">
          <div class="mia-header-title">Menarguez-IA Solutions</div>
          <div class="mia-header-sub">Asistente virtual</div>
        </div>
        <button class="mia-close" id="mia-close" aria-label="Cerrar chat">&times;</button>
      </div>
      <div class="mia-messages" id="mia-messages"></div>
      <div class="mia-inputbar">
        <input class="mia-input" id="mia-input" type="text" placeholder="Escribe tu mensaje..." />
        <button class="mia-send" id="mia-send" aria-label="Enviar">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" stroke-width="2">
            <path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/>
          </svg>
        </button>
      </div>
      <div class="mia-footer">Automatización con IA · ai.menarguez-ia.com</div>
    </div>
    <button class="mia-bubble" id="mia-bubble" aria-label="Abrir chat">
      <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    </button>
  `;
  document.body.appendChild(root);

  const bubble = root.querySelector('#mia-bubble');
  const panel = root.querySelector('#mia-panel');
  const closeBtn = root.querySelector('#mia-close');
  const messagesEl = root.querySelector('#mia-messages');
  const inputEl = root.querySelector('#mia-input');
  const sendBtn = root.querySelector('#mia-send');

  let opened = false;

  function toggle() {
    opened = !opened;
    panel.classList.toggle('mia-open', opened);
    if (opened && messagesEl.children.length === 0) {
      addMessage('bot', '¡Hola! Soy el asistente de Menarguez-IA Solutions. ¿En qué puedo ayudarte con la automatización de tu clínica o negocio?');
    }
  }

  bubble.addEventListener('click', toggle);
  closeBtn.addEventListener('click', toggle);

  function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = 'mia-msg ' + (role === 'user' ? 'user' : 'bot');
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return div;
  }

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || !WEBHOOK_URL) return;

    addMessage('user', text);
    history.push({ role: 'user', content: text });
    inputEl.value = '';
    sendBtn.disabled = true;

    const typingEl = document.createElement('div');
    typingEl.className = 'mia-msg bot typing';
    typingEl.textContent = 'Escribiendo...';
    messagesEl.appendChild(typingEl);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: history.slice(0, -1),
          sessionId: SESSION_ID
        })
      });
      const data = await res.json();
      typingEl.remove();
      const reply = data.reply || 'Lo siento, ha ocurrido un error. Inténtalo de nuevo.';
      addMessage('bot', reply);
      history.push({ role: 'assistant', content: reply });
    } catch (err) {
      typingEl.remove();
      addMessage('bot', 'No se ha podido conectar con el asistente. Inténtalo más tarde.');
      console.error('[Menarguez-IA Widget]', err);
    } finally {
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
})();
