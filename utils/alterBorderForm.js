export function waitFunction(){
    setTimeout(alterBorderForm, 1000)
}

function alterBorderForm() {
    
    const borderForm = document.querySelector("#formLead");
    const testcss = {
        boxShadow: "box-shadow: 10px 10px 10px #078C6B",
    };

    borderForm.style.cssText = `${testcss.boxShadow}`;
    setTimeout(() => {
        borderForm.style.cssText = "none";
    }, 2000);

}