
import qri from "qr-image"
import fs from "fs"
import inquirer from "inquirer"

inquirer.prompt([{ message: "enter url", name: "url" },])
    .then((d) => {
        console.log(d.url);
        const q = qri.image(d.url);
        fs.writeFile("user_url.txt", d.url, (er) => { if (er) console.log(er) })
        q.pipe(fs.createWriteStream("qr_img.png"));
    })
