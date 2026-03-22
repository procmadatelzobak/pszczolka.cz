// app.js — pszczolka.cz diary engine

(function () {
  'use strict';

  var state = {
    node: 'INTRO',
    lang: localStorage.getItem('pszczolka-lang') || 'cz',
    history: ['INTRO'],
    typing: false,
    skipRequested: false
  };

  var textOutput = document.getElementById('text-output');
  var cursor = document.getElementById('cursor');
  var choicesEl = document.getElementById('choices');
  var linksEl = document.getElementById('links');
  var langToggle = document.getElementById('lang-toggle');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Utilities ---

  function sleep(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // --- Typing ---

  async function typeLine(text, className) {
    var span = document.createElement('span');
    if (className) span.className = className;
    textOutput.appendChild(span);

    if (reducedMotion || state.skipRequested) {
      span.textContent = text;
      textOutput.appendChild(document.createTextNode('\n'));
      return;
    }

    for (var i = 0; i < text.length; i++) {
      if (state.skipRequested) {
        span.textContent = text;
        break;
      }
      span.textContent += text[i];
      if ('.!?,:;\u2014'.indexOf(text[i]) !== -1) {
        await sleep(random(150, 300));
      } else {
        await sleep(50 + random(-10, 20));
      }
    }
    textOutput.appendChild(document.createTextNode('\n'));
  }

  async function typeAllLines(lines) {
    state.typing = true;
    state.skipRequested = false;
    cursor.classList.remove('hidden');

    for (var i = 0; i < lines.length; i++) {
      await typeLine(lines[i].text, lines[i].class);
    }

    state.typing = false;
    cursor.classList.add('hidden');
  }

  // --- Skip on click ---

  document.addEventListener('click', function (e) {
    if (state.typing && !e.target.closest('#choices') && !e.target.closest('#links') && !e.target.closest('#lang-toggle')) {
      state.skipRequested = true;
    }
  });

  // --- Render Node ---

  function renderNode(nodeId) {
    var data = content[state.lang][nodeId];
    if (!data) return;

    state.node = nodeId;
    textOutput.textContent = '';
    choicesEl.innerHTML = '';
    linksEl.innerHTML = '';

    // Type text, then show choices
    typeAllLines(data.lines).then(function () {
      showChoices(data.choices);
      if (data.links) showLinks(data.links);
    });
  }

  function showChoices(choices) {
    choices.forEach(function (c, i) {
      var btn = document.createElement('button');
      btn.className = 'choice';
      btn.textContent = c.label;
      btn.style.animationDelay = (i * 100) + 'ms';
      btn.addEventListener('click', function () {
        navigate(c.target);
      });
      choicesEl.appendChild(btn);
    });

    // Accessibility: announce new choices
    choicesEl.setAttribute('aria-live', 'polite');
  }

  function showLinks(links) {
    links.forEach(function (l, i) {
      var a = document.createElement('a');
      a.href = l.url;
      a.textContent = l.label;
      a.style.animationDelay = ((i * 100) + 200) + 'ms';
      if (l.url.indexOf('mailto:') !== 0) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
      linksEl.appendChild(a);
    });
  }

  // --- Navigation ---

  function navigate(target) {
    state.history.push(target);
    renderNode(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Language Toggle ---

  function updateLangButton() {
    langToggle.textContent = state.lang === 'cz' ? 'CZ | EN' : 'EN | CZ';
  }

  langToggle.addEventListener('click', function () {
    state.lang = state.lang === 'cz' ? 'en' : 'cz';
    localStorage.setItem('pszczolka-lang', state.lang);
    updateLangButton();
    // If no EN content yet, stay on CZ
    if (!content[state.lang]) {
      state.lang = 'cz';
      localStorage.setItem('pszczolka-lang', 'cz');
      updateLangButton();
    }
    renderNode(state.node);
  });

  // --- Init ---

  updateLangButton();
  renderNode('INTRO');

})();
