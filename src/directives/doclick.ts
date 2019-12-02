export default {
  bind(el: any, binding: any) {
    const documentHandler = (e: any) => {
      if (!el.contains(e.target) && binding.expression) {
        binding.value(e);
      }
    };
    el.emfeDocumentClick = documentHandler;
    document.addEventListener('click', documentHandler);
  },
  unbind(el: any) {
    document.removeEventListener('click', el.emfeDocumentClick);
    delete el.emfeDocumentClick;
  },
};
