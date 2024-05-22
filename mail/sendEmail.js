import path from 'path';
import ejs from 'ejs';
import transporter from './transporter.js';
import { fileURLToPath } from 'url';

// Derive __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendEmail = async ({ name, email }) => {
  try {
    const requiredPath = path.join(__dirname, "../views/AccountCreated.ejs");
    console.log(requiredPath);

    const data = await ejs.renderFile(requiredPath, {
      name: name
    });

    var mainOptions = {
      from: '"Dikshak Adhikari" samm@gmail.com',
      to: email,
      subject: "Account Activated",
      html: data,
    };

    await transporter.sendMail(mainOptions);
  } catch (err) {
    console.log(err);
  }
};
