function numericFilter(txb) {
    txb.value = txb.value.replace(/[^\0-9]/ig, "");
}


var textarea = document.querySelector(".t1-textarea");
textarea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

/////////////////////////

const getName = async ()=> { 
    let peticion = await fetch("templates/one.txt"); /* Here you replace your API url, if you want to add parameters, add ",{}" after it. */
    let resultado = await peticion.text();
    let HTMLCode1 = ``
    console.log(resultado)
    document.querySelector(".result").innerHTML = HTMLCode1
}

document.querySelector(".saveIt").addEventListener("click", 
function(){
    var q = localStorage.getItem("qNumber");
    console.log(q);
    var inputNow = [];
    var allInputs = [];
    var inputNow = document.querySelectorAll('.templateinput');
        for(x=0; x < inputNow.length; x++) allInputs.push(inputNow[x].value);
        localStorage.clear();
    var blob = new Blob([`
    !# Dropped by: ${allInputs[0]}
════════════════════
-> Reason for Dox: ${allInputs[1]}
╔══════════════════════════════════════════════════════════╗
║                       Basic Information                  ║
╚══════════════════════════════════════════════════════════╝
• Alias: ${allInputs[2]}
• Full Name: ${allInputs[3]}
• Age: ${allInputs[4]}
• DNI: ${allInputs[5]}
• Phone Number: ${allInputs[6]}
• Country: ${allInputs[7]}
• Address: ${allInputs[8]}
• School: ${allInputs[9]}
• Gender: ${allInputs[10]}
• Race: ${allInputs[11]}
╔══════════════════════════════════════════════════════════╗
║                       House Information                  ║
╚══════════════════════════════════════════════════════════╝
• Desieses: ${allInputs[12]}
• Mental Problems: ${allInputs[13]}
• Medications: ${allInputs[14]}
• Health Issues: ${allInputs[15]}
╔══════════════════════════════════════════════════════════╗
║                       Social Information                 ║
╚══════════════════════════════════════════════════════════╝
• PayPal: ${allInputs[16]}
• Skype: ${allInputs[17]}
• Instagram: ${allInputs[18]}
• Twitter: ${allInputs[19]}
• YouTube: ${allInputs[20]}
• Kik: ${allInputs[21]}
• Facebook: ${allInputs[22]}
• MySpace: ${allInputs[23]}
• Email(s): ${allInputs[24]}
• Social Activity: ${allInputs[25]}
• Tumbler: ${allInputs[26]}
• Website: ${allInputs[27]}
╔══════════════════════════════════════════════════════════╗
║                       IP Information                     ║
╚══════════════════════════════════════════════════════════╝
• IP Address: ${allInputs[28]}
• Reverse DNS: ${allInputs[29]}
• IP Type: ${allInputs[30]}
• All Known IP's: ${allInputs[31]}
• ISP: ${allInputs[32]}
• AS Number: ${allInputs[33]}
• IP Language: ${allInputs[34]}
• IP Speed: ${allInputs[35]}
• IP Currency: ${allInputs[36]}
• IDD Code: ${allInputs[37]}
╔══════════════════════════════════════════════════════════╗
║                       Family & Friends                   ║
╚══════════════════════════════════════════════════════════╝	
• Father: ${allInputs[38]}
• Mother: ${allInputs[39]}
• Fathers FB: ${allInputs[40]}
• Mothers FB: ${allInputs[41]}
• Fathers Cell: ${allInputs[42]}
• Mothers Cell: ${allInputs[43]}
 
Additional Family Info
- ${allInputs[44]}
- ${allInputs[45]}
- ${allInputs[46]}  
`], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "dynamic.txt");
    
});

document.getElementById("copyImg").addEventListener("click",
function(){

        var q = localStorage.getItem("qNumber");
        console.log(q);
        var inputNow = [];
        var allInputs = [];
        var inputNow = document.querySelectorAll('.templateinput');
            for(x=0; x < inputNow.length; x++) allInputs.push(inputNow[x].value);
            localStorage.clear();
            let htmlElement = (`!# Dropped by: ${allInputs[0]}
════════════════════
-> Reason for Dox: ${allInputs[1]}
╔══════════════════════════════════════════════════════════╗
║                       Basic Information                  ║
╚══════════════════════════════════════════════════════════╝
• Alias: ${allInputs[2]}
• Full Name: ${allInputs[3]}
• Age: ${allInputs[4]}
• DNI: ${allInputs[5]}
• Phone Number: ${allInputs[6]}
• Country: ${allInputs[7]}
• Address: ${allInputs[8]}
• School: ${allInputs[9]}
• Gender: ${allInputs[10]}
• Race: ${allInputs[11]}
╔══════════════════════════════════════════════════════════╗
║                       House Information                  ║
╚══════════════════════════════════════════════════════════╝
• Desieses: ${allInputs[12]}
• Mental Problems: ${allInputs[13]}
• Medications: ${allInputs[14]}
• Health Issues: ${allInputs[15]}
╔══════════════════════════════════════════════════════════╗
║                       Social Information                 ║
╚══════════════════════════════════════════════════════════╝
• PayPal: ${allInputs[16]}
• Skype: ${allInputs[17]}
• Instagram: ${allInputs[18]}
• Twitter: ${allInputs[19]}
• YouTube: ${allInputs[20]}
• Kik: ${allInputs[21]}
• Facebook: ${allInputs[22]}
• MySpace: ${allInputs[23]}
• Email(s): ${allInputs[24]}
• Social Activity: ${allInputs[25]}
• Tumbler: ${allInputs[26]}
• Website: ${allInputs[27]}
╔══════════════════════════════════════════════════════════╗
║                       IP Information                     ║
╚══════════════════════════════════════════════════════════╝
• IP Address: ${allInputs[28]}
• Reverse DNS: ${allInputs[29]}
• IP Type: ${allInputs[30]}
• All Known IP's: ${allInputs[31]}
• ISP: ${allInputs[32]}
• AS Number: ${allInputs[33]}
• IP Language: ${allInputs[34]}
• IP Speed: ${allInputs[35]}
• IP Currency: ${allInputs[36]}
• IDD Code: ${allInputs[37]}
╔══════════════════════════════════════════════════════════╗
║                       Family & Friends                   ║
╚══════════════════════════════════════════════════════════╝	
• Father: ${allInputs[38]}
• Mother: ${allInputs[39]}
• Fathers FB: ${allInputs[40]}
• Mothers FB: ${allInputs[41]}
• Fathers Cell: ${allInputs[42]}
• Mothers Cell: ${allInputs[43]}
 
Additional Family Info
- ${allInputs[44]}
- ${allInputs[45]}
- ${allInputs[46]}  
`)       
    copyText(htmlElement)
});

function copyText(htmlElement)
{
    if (!htmlElement) return;
    let elementText = htmlElement;
    const textToCopy = 'Hello there!';
    navigator.clipboard.writeText(elementText)
        .then(() => { alert(`Copied on your clipboard!`) })
        .catch((error) => { alert(`Copy failed! ${error}`) })
}