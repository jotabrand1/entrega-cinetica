const menuButton = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu-principal");

function closeMenu() {
  menu.classList.remove("menu--aberto");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menu.classList.toggle("menu--aberto", !isOpen);
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) closeMenu();
});

const contactForm = document.getElementById("form-contato");
const formStatus = document.getElementById("form-status");
const submitButton = contactForm.querySelector('button[type="submit"]');

function showFormStatus(message, state) {
  formStatus.textContent = message;
  formStatus.className = `form__status form__status--${state}`;
  formStatus.hidden = false;
}

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const webhookUrl = contactForm.dataset.webhookUrl.trim();
  if (!webhookUrl) {
    showFormStatus("O formulário ainda não está conectado. Configure a URL do webhook para enviar sua mensagem.", "error");
    return;
  }

  submitButton.disabled = true;
  showFormStatus("Enviando sua mensagem…", "info");
  const payload = new URLSearchParams(new FormData(contactForm));

  try {
    const response = await fetch(webhookUrl, { method: "POST", body: payload });
    if (!response.ok) throw new Error(`Falha no envio: ${response.status}`);

    showFormStatus("Mensagem enviada com sucesso! Em breve falamos com você.", "success");
    contactForm.reset();
  } catch (error) {
    showFormStatus("Não foi possível enviar sua mensagem agora. Tente novamente em instantes.", "error");
  } finally {
    submitButton.disabled = false;
  }
});
