// Template Editor Communication Script
// This script enables the preview page to communicate with the parent editor

(function() {
  // Check if we're in edit mode
  const urlParams = new URLSearchParams(window.location.search);
  const isEditMode = urlParams.get('edit') === 'true';

  if (!isEditMode) return;

  // Apply edit mode styles
  const style = document.createElement('style');
  style.textContent = `
    [data-editable-section] {
      position: relative;
      cursor: pointer;
      outline: 2px dashed transparent;
      outline-offset: -2px;
      transition: outline-color 0.2s;
    }
    [data-editable-section]:hover {
      outline-color: rgba(255, 165, 0, 0.5);
    }
    [data-editable-section].selected {
      outline-color: #FA5014;
      outline-width: 3px;
    }
    [data-editable-section]::before {
      content: attr(data-section-name);
      position: absolute;
      top: -24px;
      left: 0;
      background: #FA5014;
      color: white;
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 4px 4px 0 0;
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
      z-index: 100;
    }
    [data-editable-section]:hover::before,
    [data-editable-section].selected::before {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);

  let selectedSectionId = null;

  // Make sections clickable
  function makeSectionsEditable() {
    const editableElements = document.querySelectorAll('section, header, footer');
    
    editableElements.forEach((el, index) => {
      // Skip if already processed
      if (el.dataset.sectionIndex) return;
      
      el.dataset.sectionIndex = index;
      el.dataset.sectionName = el.tagName.toLowerCase() + '-' + index;
      el.dataset.editableSection = 'true';
      
      el.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Notify parent editor
        window.parent.postMessage({
          type: 'section-click',
          section: {
            id: el.dataset.sectionIndex,
            type: el.dataset.sectionName,
            element: el.tagName
          }
        }, '*');
        
        // Update selection visual
        document.querySelectorAll('[data-editable-section]').forEach(s => {
          s.classList.remove('selected');
        });
        el.classList.add('selected');
        selectedSectionId = el.dataset.sectionIndex;
      });
    });
  }

  // Listen for messages from parent editor
  window.addEventListener('message', (event) => {
    // Accept messages from any origin in edit mode
    const data = event.data;
    
    if (data.type === 'update-field') {
      // Update a specific field in the DOM
      updateFieldInDOM(data.sectionId, data.fieldId, data.value);
    }
    
    if (data.type === 'update-section-content') {
      // Update entire section content
      updateSectionContentInDOM(data.sectionId, data.content);
    }
    
    if (data.type === 'request-save') {
      // Collect all content and send back
      const content = collectAllContent();
      window.parent.postMessage({
        type: 'save-complete',
        content
      }, '*');
    }
  });

  function updateFieldInDOM(sectionId, fieldId, value) {
    // Find the section and update the field
    const section = document.querySelector(`[data-section-index="${sectionId}"]`);
    if (!section) return;

    // Try to find elements that might correspond to this field
    const headings = section.querySelectorAll('h1, h2, h3, h4');
    const paragraphs = section.querySelectorAll('p');
    const buttons = section.querySelectorAll('a, button');
    const images = section.querySelectorAll('img');

    // Simple heuristic: update first matching element
    switch (fieldId) {
      case 'title':
        const h = section.querySelector('h1, h2, h3');
        if (h) h.textContent = value;
        break;
      case 'subtitle':
      case 'content':
        const p = section.querySelector('p');
        if (p) p.textContent = value;
        break;
      case 'ctaText':
        const btn = section.querySelector('a, button');
        if (btn) btn.textContent = value;
        break;
      case 'backgroundImage':
        const img = section.querySelector('img');
        if (img) img.src = value;
        break;
    }
  }

  function updateSectionContentInDOM(sectionId, content) {
    // Update all relevant fields
    Object.entries(content).forEach(([fieldId, value]) => {
      updateFieldInDOM(sectionId, fieldId, value);
    });
  }

  function collectAllContent() {
    // Collect content from all editable sections
    const sections = document.querySelectorAll('[data-editable-section]');
    const content = {};
    
    sections.forEach(section => {
      content[section.dataset.sectionIndex] = {
        type: section.dataset.sectionName,
        title: section.querySelector('h1, h2, h3')?.textContent,
        subtitle: section.querySelector('p')?.textContent,
      };
    });
    
    return content;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', makeSectionsEditable);
  } else {
    makeSectionsEditable();
  }
})();