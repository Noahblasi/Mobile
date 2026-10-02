/**
 * TP5 — Tipografía e Interfaces Digitales | FADU-UBA
 * Cátedra Cosgaya | Tipografía 2 | Comisión: Pato+Juancho
 * Lógica de interacción, navegación, buscador y vistas
 */

document.addEventListener('DOMContentLoaded', () => {
  // Referencias DOM principales
  const viewHome = document.getElementById('view-home');
  const viewDetail = document.getElementById('view-detail');
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('search-results');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  // Drawer
  const drawerBackdrop = document.getElementById('concept-drawer-backdrop');
  const drawerPanel = document.getElementById('concept-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerNumber = document.getElementById('drawer-number');
  const drawerRouteTag = document.getElementById('drawer-route-tag');
  const drawerTitle = document.getElementById('drawer-concept-title');
  const drawerAuthorBox = document.getElementById('drawer-author-box');
  const drawerAuthorName = document.getElementById('drawer-author-name');
  const drawerDefinitionText = document.getElementById('drawer-definition-text');
  const drawerTagsList = document.getElementById('drawer-tags-list');
  const drawerRelatedList = document.getElementById('drawer-related-list');
  const drawerSpecialAction = document.getElementById('drawer-special-action');

  // Mapas de búsqueda rápida
  const conceptMapById = new Map();
  const conceptMapByName = new Map();
  GLOSSARY_CONCEPTS.forEach(c => {
    conceptMapById.set(c.id, c);
    conceptMapByName.set(c.name.toLowerCase().trim(), c);
  });

  /* --------------------------------------------------------------------------
     1. RENDERIZADO DINÁMICO DE TARJETAS POR RUTA (GRAMÁTICA CROMÁTICA)
     -------------------------------------------------------------------------- */
  function renderRouteGrids() {
    const routeContainers = {
      conocer: document.getElementById('grid-conocer'),
      habitar: document.getElementById('grid-habitar'),
      desobedecer: document.getElementById('grid-desobedecer'),
      relacionar: document.getElementById('grid-relacionar')
    };

    Object.keys(GLOSSARY_ROUTES).forEach(routeKey => {
      const routeInfo = GLOSSARY_ROUTES[routeKey];
      const container = routeContainers[routeKey];
      if (!container) return;

      container.innerHTML = '';
      const totalCards = routeInfo.conceptIds.length;

      routeInfo.conceptIds.forEach((cId, cardIdx) => {
        const concept = conceptMapById.get(cId);
        if (!concept) return;

        const counterStr = `${String(cardIdx + 1).padStart(2, '0')} / ${String(totalCards).padStart(2, '0')}`;

        const card = document.createElement('article');
        card.className = `concept-card card-family-${routeKey}`;
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Abrir concepto ${concept.name} - Recorrido ${routeInfo.title}`);
        card.dataset.conceptId = concept.id;
        card.dataset.route = routeKey;
        card.dataset.index = cardIdx;

        // Comprobación de conceptos destacados secundarios por ruta
        if (concept.id === routeInfo.featuredConceptId) {
          card.classList.add(`featured-in-route-${routeKey}`);
        }

        // Construcción del badge identificador de pertenencia
        let badgeHtml = '';
        if (routeKey === 'conocer') {
          badgeHtml = `
            <div class="card-family-tag tag-conocer">
              <span class="dot-color dot-yellow"></span>
              01 · CONOCER
            </div>
          `;
        } else if (routeKey === 'habitar') {
          badgeHtml = `
            <div class="card-family-tag tag-habitar">
              <span class="dot-color dot-red"></span>
              02 · HABITAR
            </div>
          `;
        } else if (routeKey === 'desobedecer') {
          badgeHtml = `
            <div class="card-family-tag tag-desobedecer">
              <span class="dot-color dot-blue"></span>
              03 · DESOBEDECER
            </div>
          `;
        } else if (routeKey === 'relacionar') {
          badgeHtml = `
            <div class="card-family-tag tag-relacionar">
              <span class="triad-dots"><span class="dot-yellow"></span><span class="dot-red"></span><span class="dot-blue"></span></span>
              04 · ENCUENTRO
            </div>
          `;
        }

        // Concepto 22: Epistemologías del Sur — Tarjeta Tricromática de 1 columna
        if (concept.id === 22) {
          card.classList.add('card-tricolor-epistemologias');
          card.innerHTML = `
            <div class="card-triad-stripe" aria-hidden="true">
              <span class="triad-seg-y"></span>
              <span class="triad-seg-r"></span>
              <span class="triad-seg-b"></span>
            </div>
            <div class="card-content-inner">
              <div class="card-meta-row">
                <div class="card-meta-left">
                  ${badgeHtml}
                  <span class="card-concept-num-badge">22</span>
                </div>
                <span class="card-index-counter">${counterStr}</span>
                <span class="concept-card-arrow" aria-hidden="true">→</span>
              </div>
              <h3 class="concept-card-title">${concept.name}</h3>
              <p class="concept-card-snippet">${concept.snippet || concept.definition.substring(0, 110) + '...'}</p>
              <div class="concept-card-mobile-action">
                <span class="concept-card-mobile-btn">
                  VER FICHA COMPLETA <span class="action-arrow">→</span>
                </span>
              </div>
            </div>
          `;
        } else {
          card.innerHTML = `
            <div class="card-content-inner">
              <div class="card-meta-row">
                <div class="card-meta-left">
                  ${badgeHtml}
                  ${concept.isShared ? '<span class="card-bridge-pill">PUENTE</span>' : ''}
                </div>
                <span class="card-index-counter">${counterStr}</span>
                <span class="concept-card-arrow" aria-hidden="true">→</span>
              </div>
              <h3 class="concept-card-title">${concept.name}</h3>
              <p class="concept-card-snippet">${concept.snippet || concept.definition.substring(0, 110) + '...'}</p>
              <div class="concept-card-mobile-action">
                <span class="concept-card-mobile-btn">
                  VER CONCEPTO <span class="action-arrow">→</span>
                </span>
              </div>
            </div>
          `;
        }

        // Interacción al click o enter
        card.addEventListener('click', () => handleConceptClick(concept.id));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleConceptClick(concept.id);
          }
        });

        container.appendChild(card);
      });
    });

    // Inicializar carruseles móviles horizontales
    initMobileCarousels();
  }

  /* --------------------------------------------------------------------------
     1b. CONTROLADOR DE CARDS HORIZONTALES EN MOBILE (CARRUSEL EDITORIAL)
     -------------------------------------------------------------------------- */
  function initMobileCarousels() {
    const routeKeys = ['conocer', 'habitar', 'desobedecer', 'relacionar', 'constellation'];

    routeKeys.forEach(routeKey => {
      const grid = document.getElementById(`grid-${routeKey}`);
      if (!grid) return;

      const cards = Array.from(grid.querySelectorAll('.concept-card'));
      if (cards.length === 0) return;

      let currentIndex = 0;
      const total = cards.length;

      const prevBtn = document.querySelector(`.carousel-arrow-btn.arrow-prev[data-route="${routeKey}"]`);
      const nextBtn = document.querySelector(`.carousel-arrow-btn.arrow-next[data-route="${routeKey}"]`);
      const dotsContainer = document.getElementById(`dots-${routeKey}`);

      // Generar puntos indicadores interactivos
      if (dotsContainer) {
        dotsContainer.innerHTML = '';
        cards.forEach((_, idx) => {
          const dot = document.createElement('button');
          dot.type = 'button';
          dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
          dot.setAttribute('aria-label', `Ir al concepto ${idx + 1} de ${total}`);
          dot.addEventListener('click', (e) => {
            e.stopPropagation();
            updateCarousel(idx);
          });
          dotsContainer.appendChild(dot);
        });
      }

      function updateCarousel(newIndex) {
        if (newIndex < 0 || newIndex >= total) return;
        currentIndex = newIndex;

        // Mostrar solo la card activa en mobile
        cards.forEach((card, idx) => {
          if (idx === currentIndex) {
            card.classList.add('active-mobile-card');
          } else {
            card.classList.remove('active-mobile-card');
          }
        });

        // Actualizar estado táctil de flechas
        if (prevBtn) {
          prevBtn.disabled = (currentIndex === 0);
          prevBtn.classList.toggle('is-disabled', currentIndex === 0);
        }
        if (nextBtn) {
          nextBtn.disabled = (currentIndex === total - 1);
          nextBtn.classList.toggle('is-disabled', currentIndex === total - 1);
        }

        // Actualizar puntos de posición y estado cromático de familia
        if (dotsContainer) {
          const dots = dotsContainer.querySelectorAll('.carousel-dot');
          dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
          });
          const activeCard = cards[currentIndex];
          if (activeCard && activeCard.dataset.route) {
            dotsContainer.className = `carousel-dots-row dot-state-${activeCard.dataset.route}`;
          }
        }
      }

      // Estado inicial (mostrar primera card en mobile)
      updateCarousel(0);

      // Listeners para flechas ← →
      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (currentIndex > 0) updateCarousel(currentIndex - 1);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (currentIndex < total - 1) updateCarousel(currentIndex + 1);
        });
      }

      // Soporte para gestos táctiles y arrastre de mouse (Swipe horizontal)
      let touchStartX = 0;
      let touchStartY = 0;
      let isPointerDown = false;

      grid.addEventListener('pointerdown', (e) => {
        touchStartX = e.clientX;
        touchStartY = e.clientY;
        isPointerDown = true;
      });

      grid.addEventListener('pointerup', (e) => {
        if (!isPointerDown) return;
        isPointerDown = false;
        const touchEndX = e.clientX;
        const touchEndY = e.clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX < 0 && currentIndex < total - 1) {
            updateCarousel(currentIndex + 1);
          } else if (diffX > 0 && currentIndex > 0) {
            updateCarousel(currentIndex - 1);
          }
        }
      });

      grid.addEventListener('pointercancel', () => {
        isPointerDown = false;
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. RENDERIZADO DE LOS 8 CONCEPTOS COMPARTIDOS (PUENTES)
     -------------------------------------------------------------------------- */
  function renderSharedRibbons() {
    const container = document.getElementById('shared-ribbons-container');
    if (!container) return;

    container.innerHTML = '';
    const rotations = [-2.5, 3, -1.8, 2.2, -3.2, 1.5, -2, 2.8];

    SHARED_CONCEPTS.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `bridge-ribbon-btn ribbon-${item.color}`;
      btn.style.transform = `rotate(${rotations[index % rotations.length]}deg)`;
      btn.innerHTML = `<span class="ribbon-bridge-tag">PUENTE</span> ${item.name}`;
      btn.setAttribute('aria-label', `Concepto compartido: ${item.name}`);

      btn.addEventListener('click', () => {
        handleConceptClick(item.id);
      });

      container.appendChild(btn);
    });
  }

  /* --------------------------------------------------------------------------
     3. NAVEGACIÓN Y SISTEMA DE VISTAS (SPA)
     -------------------------------------------------------------------------- */
  function showView(viewName) {
    if (viewName === 'detail') {
      viewHome.classList.remove('active-view');
      viewDetail.classList.add('active-view');
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 10);
      updateNavHighlight('');
    } else {
      viewDetail.classList.remove('active-view');
      viewHome.classList.add('active-view');
      updateNavHighlight('home');
    }
  }

  function updateNavHighlight(targetKey) {
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.nav === targetKey) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function handleConceptClick(conceptId) {
    // Si es el concepto 22 asignado, ir directamente a la vista editorial completa
    if (conceptId === 22) {
      window.location.hash = '#epistemologias-del-sur';
      showView('detail');
      return;
    }

    // Para cualquier otro concepto, abrir el drawer editorial detallado
    openDrawer(conceptId);
  }

  /* --------------------------------------------------------------------------
     4. CONTROL DEL DRAWER EDITORIAL (SISTEMA CROMÁTICO APLICADO)
     -------------------------------------------------------------------------- */
  function openDrawer(conceptId) {
    const concept = conceptMapById.get(conceptId);
    if (!concept) return;

    drawerNumber.textContent = concept.number;
    drawerTitle.textContent = concept.name;
    drawerDefinitionText.textContent = concept.definition;

    // Resetear clases de familia cromática del drawer
    drawerPanel.classList.remove(
      'drawer-family-conocer',
      'drawer-family-habitar',
      'drawer-family-desobedecer',
      'drawer-family-relacionar',
      'drawer-family-shared'
    );

    const familyKey = concept.isShared ? 'shared' : concept.primaryRoute;
    drawerPanel.classList.add(`drawer-family-${familyKey}`);

    // Configurar Tag e indicador cromático de pertenencia
    if (concept.isShared) {
      drawerRouteTag.innerHTML = `
        <span class="triad-dots"><span class="dot-yellow"></span><span class="dot-red"></span><span class="dot-blue"></span></span>
        CONCEPTO COMPARTIDO / PUENTE
      `;
    } else if (concept.primaryRoute === 'conocer') {
      drawerRouteTag.innerHTML = `
        <span class="dot-color dot-yellow"></span>
        01 · FAMILIA AMARILLA / CONOCER
      `;
    } else if (concept.primaryRoute === 'habitar') {
      drawerRouteTag.innerHTML = `
        <span class="dot-color dot-red"></span>
        02 · FAMILIA ROJA / HABITAR
      `;
    } else if (concept.primaryRoute === 'desobedecer') {
      drawerRouteTag.innerHTML = `
        <span class="dot-color dot-blue"></span>
        03 · FAMILIA AZUL / DESOBEDECER
      `;
    } else if (concept.primaryRoute === 'relacionar') {
      drawerRouteTag.innerHTML = `
        <span class="triad-dots"><span class="dot-yellow"></span><span class="dot-red"></span><span class="dot-blue"></span></span>
        04 · ESPACIO DE ENCUENTRO / RELACIONAR
      `;
    }

    // Autor
    if (concept.author && concept.author.trim() !== '') {
      drawerAuthorName.textContent = concept.author;
      drawerAuthorBox.style.display = 'block';
    } else {
      drawerAuthorBox.style.display = 'none';
    }

    // Etiquetas
    drawerTagsList.innerHTML = '';
    (concept.tags || []).forEach(tag => {
      const span = document.createElement('span');
      span.className = 'drawer-tag-item';
      span.textContent = tag;
      drawerTagsList.appendChild(span);
    });

    // Conceptos Relacionados con Identificación Cromática de Destino
    drawerRelatedList.innerHTML = '';
    (concept.related || []).forEach(relName => {
      const relConcept = conceptMapByName.get(relName.toLowerCase().trim());
      const relBtn = document.createElement('button');
      relBtn.type = 'button';

      let relRoute = 'conocer';
      if (relConcept) {
        relRoute = relConcept.isShared ? 'shared' : relConcept.primaryRoute;
      }

      relBtn.className = `drawer-related-btn rel-family-${relRoute}`;

      let dotHtml = '';
      if (relRoute === 'conocer') {
        dotHtml = '<span class="rel-dot dot-yellow"></span>';
      } else if (relRoute === 'habitar') {
        dotHtml = '<span class="rel-dot dot-red"></span>';
      } else if (relRoute === 'desobedecer') {
        dotHtml = '<span class="rel-dot dot-blue"></span>';
      } else {
        dotHtml = '<span class="rel-dots-triad"><span class="dot-yellow"></span><span class="dot-red"></span><span class="dot-blue"></span></span>';
      }

      relBtn.innerHTML = `${dotHtml}<span>${relName}</span>`;

      relBtn.addEventListener('click', () => {
        if (relConcept) {
          if (relConcept.id === 22) {
            closeDrawer();
            showView('detail');
          } else {
            openDrawer(relConcept.id);
          }
        } else {
          const found = GLOSSARY_CONCEPTS.find(c => c.name.toLowerCase().includes(relName.toLowerCase()));
          if (found) {
            if (found.id === 22) {
              closeDrawer();
              showView('detail');
            } else {
              openDrawer(found.id);
            }
          }
        }
      });

      drawerRelatedList.appendChild(relBtn);
    });

    // Mostrar drawer
    drawerBackdrop.classList.add('drawer-open');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    drawerCloseBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawerBackdrop.classList.remove('drawer-open');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', (e) => {
    if (e.target === drawerBackdrop) closeDrawer();
  });

  function getRouteNumber(routeKey) {
    if (routeKey === 'conocer') return '1';
    if (routeKey === 'habitar') return '2';
    if (routeKey === 'desobedecer') return '3';
    if (routeKey === 'relacionar') return '4';
    return '';
  }

  /* --------------------------------------------------------------------------
     5. BUSCADOR EN TIEMPO REAL
     -------------------------------------------------------------------------- */
  function handleSearch(query) {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      searchResults.style.display = 'none';
      searchClearBtn.style.display = 'none';
      return;
    }

    searchClearBtn.style.display = 'block';

    const matches = GLOSSARY_CONCEPTS.filter(c => {
      const inName = c.name.toLowerCase().includes(trimmed);
      const inDef = c.definition.toLowerCase().includes(trimmed);
      const inTags = (c.tags || []).some(t => t.toLowerCase().includes(trimmed));
      const inAuthor = (c.author || '').toLowerCase().includes(trimmed);
      return inName || inDef || inTags || inAuthor;
    });

    if (matches.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">No se encontraron conceptos para "' + escapeHtml(query) + '"</div>';
      searchResults.style.display = 'block';
      return;
    }

    searchResults.innerHTML = '';
    matches.slice(0, 8).forEach(c => {
      const item = document.createElement('a');
      item.href = c.id === 22 ? '#epistemologias-del-sur' : `#concepto-${c.id}`;
      item.className = 'search-result-item';
      item.setAttribute('role', 'option');

      const routeName = c.isShared ? 'Puente' : c.primaryRoute;

      item.innerHTML = `
        <div class="search-result-header">
          <span class="search-result-title">${highlightMatch(c.name, trimmed)}</span>
          <span class="search-result-route">${routeName}</span>
        </div>
        <p class="search-result-snippet">${highlightMatch(c.snippet || c.definition.substring(0, 80) + '...', trimmed)}</p>
      `;

      item.addEventListener('click', (e) => {
        e.preventDefault();
        searchResults.style.display = 'none';
        searchInput.value = '';
        searchClearBtn.style.display = 'none';
        handleConceptClick(c.id);
      });

      searchResults.appendChild(item);
    });

    searchResults.style.display = 'block';
  }

  function highlightMatch(text, query) {
    if (!query) return escapeHtml(text);
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escapeHtml(text).replace(regex, '<mark style="background: var(--yellow-light); color: var(--color-ink); font-weight: 700;">$1</mark>');
  }

  function escapeHtml(string) {
    const div = document.createElement('div');
    div.textContent = string;
    return div.innerHTML;
  }

  searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchClearBtn.style.display = 'none';
    searchResults.style.display = 'none';
    searchInput.focus();
  });

  // Cerrar búsqueda al hacer click afuera
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-trigger-wrapper')) {
      searchResults.style.display = 'none';
    }
  });

  /* --------------------------------------------------------------------------
     6. GESTIÓN DE RUTAS HASH Y ENLACES
     -------------------------------------------------------------------------- */
  function handleHashChange() {
    const hash = window.location.hash;

    if (hash === '#epistemologias-del-sur' || hash === '#concepto-22') {
      showView('detail');
    } else if (hash.startsWith('#concepto-')) {
      const id = parseInt(hash.replace('#concepto-', ''), 10);
      showView('home');
      openDrawer(id);
    } else if (['#conocer', '#habitar', '#desobedecer', '#relacionar', '#rutas', '#compartidos', '#fuentes', '#home'].includes(hash)) {
      showView('home');
      setTimeout(() => {
        if (hash === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const targetEl = document.querySelector(hash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 50);
    } else {
      showView('home');
    }
  }

  window.addEventListener('hashchange', handleHashChange);

  // Cerrar menú móvil al clickear un enlace de navegación
  document.querySelectorAll('.main-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('menu-open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Botones Volver al Recorrido Relacionar desde la página de detalle
  function returnToRelacionar(e) {
    e.preventDefault();
    window.location.hash = '#relacionar';
    showView('home');
    setTimeout(() => {
      document.getElementById('relacionar')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  document.getElementById('detail-back-home')?.addEventListener('click', returnToRelacionar);
  document.getElementById('detail-bottom-return-btn')?.addEventListener('click', returnToRelacionar);

  // Apertura de conceptos desde botones y tarjetas en la vista de detalle
  document.querySelectorAll('[data-open-concept]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const cId = parseInt(btn.dataset.openConcept, 10);
      if (cId) {
        openDrawer(cId);
      }
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        const cId = parseInt(btn.dataset.openConcept, 10);
        if (cId) {
          openDrawer(cId);
        }
      }
    });
  });

  // Smooth scroll en enlaces internos del detalle con feedback visual sutil
  document.querySelectorAll('[data-scroll-to]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-scroll-to');
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
        targetElem.classList.remove('section-target-highlight');
        void targetElem.offsetWidth;
        targetElem.classList.add('section-target-highlight');
      }
    });
  });

  // Mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('menu-open');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Tecla Escape cierra Drawer y Búsqueda
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      searchResults.style.display = 'none';
    }
  });

  /* --------------------------------------------------------------------------
     7. INTERACCIÓN DE PLANOS DEL HERO (HOVER + CLICK + TÁCTIL)
     -------------------------------------------------------------------------- */
  const posterStack = document.querySelector('.hero-composition .poster-stack');
  const heroPlanes = document.querySelectorAll('.poster-stack .poster-plane');

  if (heroPlanes.length > 0) {
    heroPlanes.forEach(plane => {
      // Interacción para dispositivos táctiles (mobile / tablet)
      plane.addEventListener('click', (e) => {
        const isTouch = window.matchMedia('(hover: none)').matches;
        if (isTouch) {
          // Si el plano no está activo, se activa para revelar su información
          if (!plane.classList.contains('plane-active')) {
            e.preventDefault();
            heroPlanes.forEach(p => p.classList.remove('plane-active'));
            plane.classList.add('plane-active');
            posterStack?.classList.add('has-active');
            return;
          }
          // Si ya está activo, permite la navegación natural al capítulo (#conocer, #habitar, #desobedecer)
        }
      });
    });

    // Cerrar plano activo al tocar fuera del stack en dispositivos táctiles
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.poster-stack')) {
        heroPlanes.forEach(p => p.classList.remove('plane-active'));
        posterStack?.classList.remove('has-active');
      }
    });
  }

  /* Interacción de Planos en el Hero de Epistemologías del Sur */
  const detailStack = document.querySelector('.detail-planes-stack');
  const detailPlanes = document.querySelectorAll('.detail-planes-stack .detail-plane');

  if (detailPlanes.length > 0) {
    detailPlanes.forEach(plane => {
      plane.addEventListener('click', (e) => {
        const isTouch = window.matchMedia('(hover: none)').matches;
        if (isTouch) {
          if (!plane.classList.contains('plane-active')) {
            e.preventDefault();
            detailPlanes.forEach(p => p.classList.remove('plane-active'));
            plane.classList.add('plane-active');
            detailStack?.classList.add('has-active');
            return;
          }
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.detail-planes-stack')) {
        detailPlanes.forEach(p => p.classList.remove('plane-active'));
        detailStack?.classList.remove('has-active');
      }
    });
  }

  /* --------------------------------------------------------------------------
     14. SISTEMA DE GESTIÓN DE PROTOTIPOS: DESKTOP (1440) Y MOBILE (390)
     -------------------------------------------------------------------------- */
  function updateDeviceScale() {
    const stage = document.querySelector('.device-stage-container');
    const wrapper = document.querySelector('.device-mockup-wrapper');
    if (!stage || !wrapper) return;

    const header = document.querySelector('.device-studio-header');
    const headerH = header ? header.offsetHeight : 52;

    // Márgenes de seguridad dentro de la ventana
    const paddingX = 40;
    const paddingY = 28;

    const availW = Math.max(100, window.innerWidth - paddingX);
    const availH = Math.max(100, window.innerHeight - headerH - paddingY);

    // Dimensiones base del mockup exterior: 416px ancho x (870px bezel + ~28px caption/gap)
    const baseW = 416;
    const baseH = 898;

    const scaleX = availW / baseW;
    const scaleY = availH / baseH;
    // Si la ventana no permite 1:1, escalar proporcionalmente hasta que entre 100% completo
    const scale = Math.min(1, scaleX, scaleY);

    wrapper.style.transform = `scale(${scale.toFixed(4)})`;
  }

  function initPrototypeRouting() {
    const urlParams = new URLSearchParams(window.location.search);
    const requestedVersion = urlParams.get('version'); // 'desktop' | 'mobile' | null
    const isEmbed = urlParams.get('embed') === '1' || window.self !== window.top;
    const isDesktopScreen = window.innerWidth > 768;

    if (isEmbed) {
      document.body.classList.add('is-embedded');
      // Notificar cambios de hash al contenedor padre para mantener sincronizada la URL
      window.addEventListener('hashchange', () => {
        try {
          if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'proto_hashchange', hash: window.location.hash }, '*');
          }
        } catch (e) {}
      });
      return;
    }

    const deviceShell = document.getElementById('device-preview-shell');
    const badge = document.getElementById('prototype-badge');
    const badgeLabel = document.getElementById('prototype-badge-text');
    const badgeLink = document.getElementById('prototype-badge-link');
    const badgeClose = document.getElementById('prototype-badge-close');

    if (badgeClose && badge) {
      badgeClose.addEventListener('click', () => {
        badge.style.display = 'none';
      });
    }

    // CASO 1: Enlace Mobile solicitado (?version=mobile) en pantalla desktop (> 768px)
    if (requestedVersion === 'mobile' && isDesktopScreen) {
      document.body.classList.add('mode-device-preview');
      if (deviceShell) {
        deviceShell.style.display = 'flex';
        const iframe = document.getElementById('mobile-device-iframe');
        if (iframe) {
          const currentHash = window.location.hash || '';
          iframe.src = `index.html?version=mobile&embed=1${currentHash}`;
        }
      }

      // Calcular escala inicial y en cada cambio de tamaño
      updateDeviceScale();
      window.addEventListener('resize', updateDeviceScale);
      requestAnimationFrame(updateDeviceScale);

      // Reenvío de scroll de rueda de mouse desde el fondo del escenario hacia el teléfono
      const stage = document.querySelector('.device-stage-container');
      const iframe = document.getElementById('mobile-device-iframe');
      if (stage && iframe) {
        stage.addEventListener('wheel', (e) => {
          if (e.target !== iframe) {
            e.preventDefault();
            try {
              iframe.contentWindow.scrollBy({ top: e.deltaY, behavior: 'auto' });
            } catch (err) {}
          }
        }, { passive: false });
      }

      // Sincronizar hash desde el iframe hacia la barra de direcciones del navegador principal
      window.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'proto_hashchange') {
          if (window.location.hash !== event.data.hash) {
            history.replaceState(null, '', `${window.location.pathname}?version=mobile${event.data.hash}`);
          }
        }
      });

      // Botón copiar enlace mobile
      const btnCopy = document.getElementById('device-btn-copy');
      if (btnCopy) {
        btnCopy.addEventListener('click', () => {
          const shareUrl = `${window.location.origin}${window.location.pathname}?version=mobile${window.location.hash}`;
          navigator.clipboard.writeText(shareUrl).then(() => {
            const prevText = btnCopy.textContent;
            btnCopy.textContent = '✓ ¡Enlace copiado!';
            setTimeout(() => { btnCopy.textContent = prevText; }, 2000);
          }).catch(() => {
            prompt('Copiá este enlace para el prototipo mobile:', shareUrl);
          });
        });
      }

      if (badge) badge.style.display = 'none';
      return;
    }

    // CASO 2: Modo Desktop nativo o ?version=desktop
    if (badge && badgeLabel && badgeLink) {
      if (isDesktopScreen) {
        badgeLabel.textContent = 'PROTOTIPO DESKTOP · 1440 × 1024 PX';
        badgeLink.textContent = '📱 Ver Mobile (390 × 844) →';
        badgeLink.href = `index.html?version=mobile${window.location.hash}`;
      } else {
        badgeLabel.textContent = 'PROTOTIPO MOBILE · 390 × 844 PX';
        badgeLink.textContent = '🖥 Ver Desktop (1440 × 1024) →';
        badgeLink.href = `index.html?version=desktop${window.location.hash}`;
      }
    }
  }

  /* --------------------------------------------------------------------------
     8. INICIALIZACIÓN
     -------------------------------------------------------------------------- */
  initPrototypeRouting();
  renderRouteGrids();
  renderSharedRibbons();
  handleHashChange();
});
