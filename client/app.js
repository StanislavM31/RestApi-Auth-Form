
const btn_reg = document.querySelector(".btn-reg");
btn_reg.addEventListener('click', async ()=>{
    const reg_username_input = document.querySelector('.reg-username-input input');
    const reg_email_input = document.querySelector('.reg-email-input input');
    const reg_pwd_input = document.querySelector('.reg-pwd-input input');
    const user = {
        username: reg_username_input.value,
        email: reg_email_input.value,
        pwd: reg_pwd_input.value
    }
    console.log(user);
    const result = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    console.log(result.status);
    console.log(await result.json());
})