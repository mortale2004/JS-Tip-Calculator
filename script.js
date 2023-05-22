const calBtn = document.getElementsByTagName("button")[0];

const calculate = ()=>{
    const amo = document.getElementsByTagName("input")[0];
    const guest = document.getElementsByTagName("input")[1];
    const quality = document.getElementsByTagName("select")[0];
    const bill = document.getElementById("tip");
    let totTip = Number.parseInt(amo.value) / Number.parseInt(guest.value) * (Number.parseInt(quality.value)/ 100);
    console.log(totTip)
    bill.style.display = "block";
    // totTip = toString(totTip)
    bill.innerText = `Total tip is ${totTip} $`;

}
calBtn.addEventListener("click", ()=>{
    calculate();
})