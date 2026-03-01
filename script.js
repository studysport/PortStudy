// Open & Close Side Menu
function toggleMenu() {
    let menu = document.getElementById("sideMenu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

// Category Dropdown Toggle
function toggleDropdown(id) {
    let dropdown = document.getElementById(id);

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
document.querySelectorAll(".dropdown-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        let arrow = this.querySelector(".arrow");
        if (arrow) {
            arrow.classList.toggle("rotate");
        }
    });
});
function searchPage() {
    let input = document.getElementById("searchBox").value.toLowerCase();

    if (input.includes("computer")) {
        window.location.href = "what-is-computer.html";
    }
    else if (input.includes("hardware")) {
        window.location.href = "what-is-hardware.html";
    }
    else if (input.includes("software")) {
        window.location.href = "what-is-software.html";
    }
    else if (input.includes("ram")) {
        window.location.href = "what-is-ram.html";
    }

    else if (input.includes("hard disk")) {
        window.location.href = "what-is-storage.html";
    }
    else if (input.includes("storage")) {
        window.location.href = "what-is-storage.html";
    }
    else if (input.includes("cpu")) {
        window.location.href = "what-is-cpu.html";
    }
    else if (input.includes("rom")) {
        window.location.href = "what-is-rom.html";
    }
    else if (input.includes("motherboard")) {
        window.location.href = "what-is-motherboard.html";
    }
    else if (input.includes("input device")) {
        window.location.href = "what-is-inputdevice.html";
    }
    else if (input.includes("input devices")) {
        window.location.href = "what-is-inputdevice.html";
    }
    else if (input.includes("output device")) {
        window.location.href = "what-is-outputdevice.html";
    }
    else if (input.includes("output devices")) {
        window.location.href = "what-is-outputdevice.html";
    }
    else if (input.includes("operating system")) {
        window.location.href = "what-is-os.html";
    }
    else if (input.includes("operating")) {
        window.location.href = "what-is-os.html";
    }
    else if (input.includes("os")) {
        window.location.href = "what-is-os.html";
    }
    else if (input.includes("keyboard")) {
        window.location.href = "what-is-keyboard.html";
    }
    else if (input.includes("mouse")) {
        window.location.href = "what-is-mouse.html";
    }
    else if (input.includes("monitor")) {
        window.location.href = "what-is-monitor.html";
    }
    else if (input.includes("pinter")) {
        window.location.href = "what-is-printer.html";
    }
    else if (input.includes("biology")) {
        window.location.href = "intro-bio.html";
    }
    else if (input.includes("molecules")) {
        window.location.href = "bio-molecules.html";
    }
    else if (input.includes("enzymes")) {
        window.location.href = "enzymes.html";
    }
    else if (input.includes("cell")) {
        window.location.href = "cell.html";
    }
    else if (input.includes("cel")) {
        window.location.href = "cell.html";
    }
    else if (input.includes("call")) {
        window.location.href = "cell.html";
    }
    else if (input.includes("variety")) {
        window.location.href = "variety.html";
    }
    else if (input.includes("varety")) {
        window.location.href = "variety.html";
    }
    else if (input.includes("varity")) {
        window.location.href = "variety.html";
    }
    else if (input.includes("monera")) {
        window.location.href = "monera.html";
    }
    else if (input.includes("protista")) {
        window.location.href = "protista.html";
    }
    else if (input.includes("fungi")) {
        window.location.href = "fungi.html";
    }
    else if (input.includes("plantae")) {
        window.location.href = "plantae.html";
    }
    else if (input.includes("animalia")) {
        window.location.href = "animalia.html";
    }
    else if (input.includes("bioenergetics")) {
        window.location.href = "bioenergetics.html";
    }
    else if (input.includes("energetics")) {
        window.location.href = "bioenergetics.html";
    }
    else if (input.includes("energetic")) {
        window.location.href = "bioenergetics.html";
    }
    else if (input.includes("nutrition")) {
        window.location.href = "nutrition.html";
    }
    else if (input.includes("gaseous")) {
        window.location.href = "gaseous.html";
    }
    else if (input.includes("transport")) {
        window.location.href = "transport.html";
    }
    else if (input.includes("homeostasis")) {
        window.location.href = "homeostasis.html";
    }
    else if (input.includes("homeo stasis")) {
        window.location.href = "homeostasis.html";
    }
    else if (input.includes("homeo")) {
        window.location.href = "homeostasis.html";
    }
    else if (input.includes("stasis")) {
        window.location.href = "homeostasis.html";
    }
    else if (input.includes("support movement")) {
        window.location.href = "support-and-movement.html";
    }
    else if (input.includes("movement")) {
        window.location.href = "support-and-movement.html";
    }
    else if (input.includes("support")) {
        window.location.href = "support-and-movement.html";
    }
    else if (input.includes("coordination controls")) {
        window.location.href = "coordination-and-controls.html";
    }
    else if (input.includes("controls")) {
        window.location.href = "coordination-and-controls.html";
    }
    else if (input.includes("coordination")) {
        window.location.href = "coordination-and-controls.html";
    }
    else if (input.includes("cordination")) {
        window.location.href = "coordination-and-controls.html";
    }
    else if (input.includes("reproduction")) {
        window.location.href = "reproduction.html";
    }
    else if (input.includes("growth development")) {
        window.location.href = "growth-and-development.html";
    }
    else if (input.includes("development")) {
        window.location.href = "growth-and-development.html";
    }
    else if (input.includes("growth")) {
        window.location.href = "growth-and-development.html";
    }
    else if (input.includes("chromosomes dna")) {
        window.location.href = "chromosomes-and-dna.html";
    }
    else if (input.includes("chromosomes")) {
        window.location.href = "chromosomes-and-dna.html";
    }
    else if (input.includes("dna")) {
        window.location.href = "chromosomes-and-dna.html";
    }
    else if (input.includes("cell cycle")) {
        window.location.href = "cell-cycle.html";
    }
    else if (input.includes("variation genetics")) {
        window.location.href = "variation-and-genetics.html";
    }
    else if (input.includes("genetics")) {
        window.location.href = "variation-and-genetics.html";
    }
    else if (input.includes("variations")) {
        window.location.href = "variation-and-genetics.html";
    }
    else if (input.includes("variation")) {
        window.location.href = "variation-and-genetics.html";
    }
    else if (input.includes("biotechnology")) {
        window.location.href = "biotechnology.html";
    }
    else if (input.includes("technology")) {
        window.location.href = "biotechnology.html";
    }
    else if (input.includes("evolution")) {
        window.location.href = "evolution.html";
    }
    else if (input.includes("ecosystem")) {
        window.location.href = "ecosystem.html";
    }
    else if (input.includes("eco")) {
        window.location.href = "ecosystem.html";
    }
    else if (input.includes("types of eco")) {
        window.location.href = "some-major-eco.html";
    }
    else if (input.includes("types of ecosystem")) {
        window.location.href = "some-major-eco.html";
    }
    else if (input.includes("some major ecosystem")) {
        window.location.href = "some-major-eco.html";
    }
    else if (input.includes("major ecosystem")) {
        window.location.href = "some-majoreco.html";
    }
    else if (input.includes("man envir")) {
        window.location.href = "man-environment.html";
    }
    else if (input.includes("man environment")) {
        window.location.href = "man-environment.html";
    }
    else if (input.includes("environment")) {
        window.location.href = "man-environment.html";
    }
    else if (input.includes("physical quantities measurement")) {
        window.location.href = "physical-quantities.html";
    }
    else if (input.includes("quantities")) {
        window.location.href = "physical-quantities.html";
    }
    else if (input.includes("measurement")) {
        window.location.href = "physical-quantities.html";
    }

    else if (input.includes("kinematics")) {
        window.location.href = "kinematics.html";
    }
    else if (input.includes("kinematic")) {
        window.location.href = "kinematics.html";
    }

    else if (input.includes("dynamics")) {
        window.location.href = "dynamics.html";
    }
    else if (input.includes("dynamic")) {
        window.location.href = "dynamics.html";
    }
    else if (input.includes("work")) {
        window.location.href = "energy.html";
    }
    else if (input.includes("energy")) {
        window.location.href = "energy.html";
    }
    else if (input.includes("power")) {
        window.location.href = "energy.html";
    }
    else if (input.includes("motion")) {
        window.location.href = "motion.html";
    }
    else if (input.includes("rigid")) {
        window.location.href = "motion.html";
    }
    else if (input.includes("gravition")) {
        window.location.href = "gravitation.html";
    }
    else if (input.includes("gravity")) {
        window.location.href = "gravitation.html";
    }
    else if (input.includes("properties of matter")) {
        window.location.href = "Properties.html";
    }
    else if (input.includes("properties matter")) {
        window.location.href = "Properties.html";
    }
    else if (input.includes("matter properties")) {
        window.location.href = "Properties.html";
    }
    else if (input.includes("oscillations")) {
        window.location.href = "oscillations.html";
    }
    else if (input.includes("oscillation")) {
        window.location.href = "oscillations.html";
    }
    else if (input.includes("mechanical waves")) {
        window.location.href = "waves.html";
    }
    else if (input.includes("mechanical wave")) {
        window.location.href = "waves.html";
    }
    else if (input.includes("electrostatics")) {
        window.location.href = "electrostatics.html";
    }
    else if (input.includes("electrostatic")) {
        window.location.href = "electrostatics.html";
    }
    else if (input.includes("current electricity")) {
        window.location.href = "current.html";
    }
    else if (input.includes("current")) {
        window.location.href = "current.html";
    }
    else if (input.includes("electricity")) {
        window.location.href = "current.html";
    }
    else if (input.includes("magnetic")) {
        window.location.href = "magnetism.html";
    }
    else if (input.includes("magnet")) {
        window.location.href = "magnetism.html";
    }
    else if (input.includes("magnetism")) {
        window.location.href = "magnetism.html";
    }
    else if (input.includes("electromagnetic")) {
        window.location.href = "induction.html";
    }
    else if (input.includes("electromagnet")) {
        window.location.href = "induction.html";
    }
    else if (input.includes("induction")) {
        window.location.href = "induction.html";
    }
    else if (input.includes("optics")) {
        window.location.href = "optics.html";
    }
    else if (input.includes("optic")) {
        window.location.href = "optics.html";
    }

    else if (input.includes("dual nature")) {
        window.location.href = "nature.html";
    }
    else if (input.includes("master")) {
        window.location.href = "nature.html";
    }
    else if (input.includes("radiation")) {
        window.location.href = "nature.html";
    }

    else if (input.includes("atoms")) {
        window.location.href = "atoms.html";
    }
    else if (input.includes("atom")) {
        window.location.href = "atoms.html";
    }
    else if (input.includes("nuclei")) {
        window.location.href = "atoms.html";
    }
    else if (input.includes("electronic devices")) {
        window.location.href = "devices.html";
    }
    else if (input.includes("electronic device")) {
        window.location.href = "devices.html";
    }
    else if (input.includes("devices")) {
        window.location.href = "devices.html";
    }
    else {
        window.location.href = "notfound.html";
    }
}

function sendWhatsApp() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    var phoneNumber = "923123985452";

    var fullMessage =
        "Name: " + name +
        "%0AEmail: " + email +
        "%0AMessage: " + message;

    var url = "https://wa.me/" + phoneNumber + "?text=" + fullMessage;

    window.open(url, "_blank");
}

function validateForm() {
    var name = document.getElementById("name").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "" || message === "") {
        alert("Please fill all fields before sending your message.");
        return false;
    }

    return true;
}

function sendWhatsApp() {
    if (!validateForm()) return;

    var name = document.getElementById("name").value.trim();
    var message = document.getElementById("message").value.trim();

    var phoneNumber = "923123985452";
    var fullMessage = "Name: " + name + "%0AMessage: " + message;

    window.open("https://wa.me/" + phoneNumber + "?text=" + fullMessage, "_blank");
}

function sendEmail() {
    if (!validateForm()) return;

    var name = document.getElementById("name").value.trim();
    var message = document.getElementById("message").value.trim();

    var subject = "New Contact Message from Website";

    var myEmail = "portstudys@gmail.com";

    var body = "Name: " + name + "\nMessage: " + message;

    window.location.href = "mailto:" + myEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}