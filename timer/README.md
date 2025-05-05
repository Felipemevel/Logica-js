# ⏱️ Temporizador com HTML, CSS e JavaScript

Este projeto é um temporizador simples que permite **iniciar**, **pausar** e **zerar** a contagem do tempo. Feito com HTML, CSS e JavaScript puro, para treinar manipulação de DOM e lógica de `setInterval`.

---

## 🚀 Funcionalidades

- ✅ Iniciar contagem do tempo
- ⏸️ Pausar o temporizador
- 🔁 Retomar a contagem
- 🔄 Zerar o relógio

---

## 🧠 Lógica Principal

- O tempo é contado em segundos com `setInterval`.
- Cada segundo é convertido para o formato `HH:MM:SS` com a função `getTimeFromSeconds`.
- Os botões interagem com o DOM usando `classList` e `addEventListener`.

---

## 📁 Estrutura do Projeto

```bash
📂 temporizador/
├── index.html
├── style.css
└── script.js