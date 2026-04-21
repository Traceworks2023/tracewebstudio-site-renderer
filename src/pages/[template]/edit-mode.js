// Template Editor - Edit Mode
// This script injects into the template preview when ?edit=true is set
// It enables section selection and field editing via parent editor communication

(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('edit') !== 'true') return;

  // Inject edit mode styles
  const style = document.createElement('style');
  style.id = 'edit-mode-styles';
  document.head.appendChild(style);

  function updateEditStyles() {
    style.textContent = `
      /* Section hover/selection outlines */
      section, header, footer, main {
        position: relative;
        cursor: pointer;
      }
      
      section::after, header::after, footer::after, main::after {
        content: '';
        position: absolute;
        inset: 0;
        border: 2px solid transparent;
        pointer-events: none;
        transition: border-color 0.2s;
      }
      
      section:hover::after, header:hover::after, footer:hover::after, main:hover::after {
        border-color: rgba(255, 165, 0, 0.4);
      }
      
      /* Selected section indicator */
      .edit-selected::after {
        border-color: #FA5014 !important;
        border-width: 3px !important;
      }
      
      /* Section label badge */
      .edit-section-label {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(255, 165, 0, 0.9);
        color: white;
        font-size: 11px;
        font-family: system-ui, sans-serif;
        padding: 2px 8px;
        border-radius: 0 0 4px 0;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
        z-index: 9999;
      }
      
      section:hover .edit-section-label,
      header:hover .edit-section-label,
      footer:hover .edit-section-label,
      .edit-selected .edit-section-label {
        opacity: 1;
      }
      
      /* Edit highlight for all editable elements */
      [contenteditable]:focus {
        outline: 2px solid #FA5014;
        outline-offset: 2px;
      }
      
      /* Toolbar at top when editing */
      .edit-toolbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 0;
        z-index: 10000;
        pointer-events: none;
      }
    `;
  }

  updateEditStyles();

  // Get section identifier based on position and content
  function getSectionIdentifier(el) {
    const tag = el.tagName?.toLowerCase() || 'div';
    const text = el.querySelector('h1, h2, h3')?.textContent?.slice(0, 50) || '';
    const index = Array.from(el.parentElement?.children || []).indexOf(el);
    return `${tag}-${index}-${text.slice(0, 20).replace(/[^a-z0-9]/gi, '')}`;
  }

  let currentSelection = null;
  const sectionRegistry = new Map();

  // Initialize sections
  function initSections() {
    const elements = document.querySelectorAll('section, header, footer, main');
    
    elements.forEach((el) => {
      // Skip if already initialized
      if (el.dataset.editInitialized) return;
      el.dataset.editInitialized = 'true';
      
      const id = getSectionIdentifier(el);
      el.dataset.sectionId = id;
      
      // Add section label
      const label = document.createElement('div');
      label.className = 'edit-section-label';
      label.textContent = el.tagName;
      el.appendChild(label);
      
      // Register section
      sectionRegistry.set(id, el);
      
      // Add click handler
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        selectSection(el);
      });
    });
  }

  function selectSection(el) {
    // Deselect previous
    if (currentSelection) {
      currentSelection.classList.remove('edit-selected');
    }
    
    currentSelection = el;
    el.classList.add('edit-selected');
    
    // Notify parent
    const sectionData = {
      id: el.dataset.sectionId,
      type: el.tagName.toLowerCase(),
      content: extractContent(el)
    };
    
    window.parent.postMessage({
      type: 'section-click',
      section: sectionData
    }, '*');
  }

  function extractContent(el) {
    const content = {};
    
    // Try to extract common fields
    const heading = el.querySelector('h1, h2, h3');
    if (heading) content.title = heading.textContent;
    
    const paragraph = el.querySelector('p');
    if (paragraph) content.subtitle = paragraph.textContent;
    
    const link = el.querySelector('a[href], button');
    if (link) content.ctaText = link.textContent;
    
    const img = el.querySelector('img');
    if (img) content.image = img.src;
    
    return content;
  }

  // Listen for messages from parent editor
  window.addEventListener('message', (event) => {
    const data = event.data;
    
    switch (data.type) {
      case 'update-field':
        updateField(data.sectionId, data.fieldId, data.value);
        break;
        
      case 'update-section-content':
        updateSectionContent(data.sectionId, data.content);
        break;
        
      case 'select-section':
        const el = sectionRegistry.get(data.sectionId);
        if (el) selectSection(el);
        break;
        
      case 'request-save':
        window.parent.postMessage({
          type: 'save-complete',
          content: collectContent()
        }, '*');
        break;
    }
  });

  function updateField(sectionId, fieldId, value) {
    const el = sectionRegistry.get(sectionId);
    if (!el) return;
    
    switch (fieldId) {
      case 'title':
        const h = el.querySelector('h1, h2, h3');
        if (h) h.textContent = value;
        break;
      case 'subtitle':
      case 'content':
        const p = el.querySelector('p');
        if (p) p.textContent = value;
        break;
      case 'ctaText':
        const btn = el.querySelector('a, button');
        if (btn) btn.textContent = value;
        break;
      case 'backgroundImage':
        const img = el.querySelector('img');
        if (img) img.src = value;
        break;
    }
  }

  function updateSectionContent(sectionId, content) {
    Object.entries(content).forEach(([fieldId, value]) => {
      updateField(sectionId, fieldId, value);
    });
  }

  function collectContent() {
    const content = {};
    sectionRegistry.forEach((el, id) => {
      content[id] = extractContent(el);
    });
    return content;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initSections();
      setTimeout(initSections, 1000); // Re-init after dynamic content loads
    });
  } else {
    initSections();
    setTimeout(initSections, 1000);
  }
})();