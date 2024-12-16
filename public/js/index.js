function selectNavItem(hash) {
  const [resource] = hash.replace('#', '')?.split('-') || [];

  const selectorText1 = `.docs-sidebar-item a[href="/docs/${hash}"]`;
  const selectorText2 = `.docs-sidebar-item a[href="/docs/${resource}"]`;
  
  const selector1 = document.querySelector(selectorText1);
  const selector2 = document.querySelector(selectorText2);
  
  if (!selector1 && !selector2) return;

  const element = selector1 || selector2;

  document
    .querySelectorAll('.docs-sidebar-item a')
    .forEach(a => a.classList.remove('active'));

  element.classList.add('active');
}