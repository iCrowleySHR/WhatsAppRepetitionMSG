let quantidadeRepetita = Number(10); // Quantidade de vezes que vai repetir a mensagem
const mensagem = " "; // Mensagem que você quer enviar

async function enviarScript(scriptText) {
    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);
  
    if (!textarea) throw new Error("Não há uma conversa aberta");
  
    console.log(scriptText); // Mostra a mensagem no console
  
    textarea.focus();
    document.execCommand("insertText", false, scriptText);
    textarea.dispatchEvent(new Event("change", { bubbles: true }));
  
    setTimeout(() => {
      (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
    }, 100);
  
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  
  async function sendMsg(mensagem) {
    for (let i = 0; i < quantidadeRepetita; i++) {
      await enviarScript(mensagem);
    }
  }

  sendMsg(mensagem)
    .then(() => console.log(`Código finalizado, ${quantidadeRepetita} mensagens enviadas`))
    .catch(console.error);
  
     
