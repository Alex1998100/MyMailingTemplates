import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'bxxxxxxxx@gmail.com',
      to: ['vxxxxxxxxxxxxx@gmail.com'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>'
    });

    console.log('success', data);
  } catch (error) {
    console.error('error',error);
  }
})();