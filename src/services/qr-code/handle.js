import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {

    if (err) {
        console.log("Erro na aplicação");
        return;
    }

    console.log(chalk.green("\nQR Code gerado com sucesso:\n"));

    // VS Code renderiza melhor o small
    qr.generate(result.link, {
        small: true
    });

}

export default handle;