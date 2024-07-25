const res = async () =>
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
    },
    body: JSON.stringify({
      from: "bxxxxxxxx@gmail.com",
      to: "vxxxxxxxxxxxxx@gmail.com",
      subject: "hello world",
      html: "<strong>it works!</strong>",
    }),
  });

const data = res()
  .then((x) => console.log(x))
  .catch((x) => console.log(x));
