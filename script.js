const topics = [
    { keyword: "computer types", page: "computer-types.html" },
    { keyword: "types of computers", page: "computer-types.html" },
    { keyword: "types of computer", page: "computer-types.html" },

    { keyword: "computer", page: "computer.html" },
    { keyword: "software", page: "software.html" },

    { keyword: "output device", page: "output-devices.html" },
    { keyword: "outputdevices", page: "output-devices.html" },
    { keyword: "output devices", page: "output-devices.html" },

    { keyword: "inputdevices", page: "input-devices.html" },
    { keyword: "input device", page: "input-devices.html" },
    { keyword: "input devices", page: "input-devices.html" },

    { keyword: "ram", page: "ram.html" },
    { keyword: "storage", page: "storage.html" },
    { keyword: "harddisk", page: "storage.html" },
    { keyword: "hard disk", page: "storage.html" },

    { keyword: "motherboard", page: "motherboard.html" },
    { keyword: "mother board", page: "motherboard.html" },
    { keyword: "cpu", page: "cpu.html" },

    { keyword: "rom", page: "rom.html" },
    { keyword: "hardware", page: "hardware.html" },
    { keyword: "hard ware", page: "hardware.html" },

    { keyword: "measurements", page: "measurements.html" },
    { keyword: "measurement", page: "measurements.html" },

    { keyword: "vector and equilibrium", page: "vectors-and-equilibrium.html" },
    { keyword: "vectors and equilibrium", page: "vectors-and-equilibrium.html" },

    { keyword: "motion and force", page: "motion-and-force.html" },
    { keyword: "force and motion", page: "motion-and-force.html" },

    { keyword: "work and energy", page: "work-and-energy.html" },
    { keyword: "energy and work", page: "work-and-energy.html" },

    { keyword: "circular motion", page: "circular-motion.html" },
    { keyword: "fluid dynamics", page: "fluid-dynamics.html" },
    { keyword: "fluid dynamic", page: "fluid-dynamics.html" },

    { keyword: "oscillations", page: "oscillations.html" },
    { keyword: "oscillation", page: "oscillations.html" },

    { keyword: "waves", page: "waves.html" },
    { keyword: "wave", page: "waves.html" },

    { keyword: "electrostatics", page: "electrostatics.html" },
    { keyword: "electrostatic", page: "electrostatics.html" },
    { keyword: "", page: "" },

    { keyword: "current electricity", page: "current-electricity.html" },
    { keyword: "electromagnetism", page: "electromagnetism.html" },
    { keyword: "electro magnetism", page: "electromagnetism.html" },

    { keyword: "electromagnetic induction", page: "electromagnetic-induction.html" },
    { keyword: "alternating current", page: "alternating-current.html" },
    { keyword: "physics of solids", page: "physics-of-solids.html" },

    { keyword: "physics of solid", page: "physics-of-solids.html" },
    { keyword: "electronics", page: "electronics.html" },
    { keyword: "electronic", page: "electronics.html" },

    { keyword: "dawn of modern physics", page: "dawn-of-modern-physics.html" },
    { keyword: "modern dawn physics", page: "dawn-of-modern-physics.html" },
    { keyword: "atomic spectra", page: "atomic-spectra.html" },

    { keyword: "nuclear physics", page: "nuclear-physics.html" },
    { keyword: "formulas", page: "physics-formulas.html" },
    { keyword: "formula", page: "physics-formulas.html" },

    { keyword: "motion", page: "motion.html" },
    { keyword: "force", page: "force.html" },
    { keyword: "velocity", page: "velocity.html" },

    { keyword: "acceleration", page: "acceleration.html" },
    { keyword: "work", page: "work.html" },
    { keyword: "energy", page: "energy.html" },

    { keyword: "tissue", page: "tissue.html" },
    { keyword: "organ", page: "organ.html" },
    { keyword: "photosynthesis", page: "photosynthesis.html" },

    { keyword: "respiration", page: "respiration.html" },
    { keyword: "nervous system", page: "nervous-system.html" },
    { keyword: "respiratory system", page: "respiratory-system.html" },

    { keyword: "circulatory system", page: "circulatory-system.html" },
    { keyword: "digestive system", page: "digestive-system.html" },
    { keyword: "human body", page: "human-body.html" },

    { keyword: "digestion", page: "digestive-system" },
    { keyword: "blood", page: "blood.html" },
    { keyword: "blood groups", page: "blood-groups.html" },
    { keyword: "blood group", page: "blood-groups.html" },

    { keyword: "hormones", page: "hormones.html" },
    { keyword: "hormone", page: "hormones.html" },

    { keyword: "reproduction", page: "reproduction.html" },
    { keyword: "human reproduction", page: "reproduction.html" },

    { keyword: "ecosystem", page: "ecosystem.html" },

    { keyword: "bacteria", page: "bacteria.html" },

    { keyword: "virus", page: "virus.html" },

    { keyword: "immunity", page: "immunity.html" },
    { keyword: "immune system", page: "immunity.html" },

    { keyword: "atom", page: "atom.html" },
    { keyword: "what is atom", page: "atom.html" },

    { keyword: "molecule", page: "molecule.html" },
    { keyword: "what is molecule", page: "molecule.html" },

    { keyword: "element", page: "element.html" },
    { keyword: "chemical element", page: "element.html" },

    { keyword: "compound", page: "compound.html" },
    { keyword: "chemical compound", page: "compound.html" },

    { keyword: "chemical reaction", page: "chemical-reaction.html" },
    { keyword: "reaction", page: "chemical-reaction.html" },

    { keyword: "acid", page: "acids.html" },
    { keyword: "acids", page: "acids.html" },

    { keyword: "base", page: "bases.html" },
    { keyword: "bases", page: "bases.html" },

    { keyword: "ph scale", page: "ph-scale.html" },
    { keyword: "ph", page: "ph-scale.html" },
    { keyword: "ph scale chemistry", page: "ph-scale.html" },

    { keyword: "periodic table", page: "periodic-table.html" },
    { keyword: "periodic", page: "periodic-table.html" },
    { keyword: "periodic table chemistry", page: "periodic-table.html" },

    { keyword: "ionic bond", page: "ionic-bond.html" },
    { keyword: "ionic bonding", page: "ionic-bond.html" },
    { keyword: "ionic compound", page: "ionic-bond.html" },

    { keyword: "covalent bond", page: "covalent-bond.html" },
    { keyword: "covalent bonding", page: "covalent-bond.html" },
    { keyword: "covalent compound", page: "covalent-bond.html" },

    { keyword: "isotope", page: "isotopes.html" },
    { keyword: "isotopes", page: "isotopes.html" },

    { keyword: "solution", page: "solution.html" },
    { keyword: "chemical solution", page: "solution.html" },
    { keyword: "solute solvent", page: "solution.html" },

    { keyword: "electrolysis", page: "electrolysis.html" },
    { keyword: "electrolysis process", page: "electrolysis.html" },

    { keyword: "chemical bond", page: "chemical-bond.html" },
    { keyword: "chemical bonding", page: "chemical-bond.html" },

    { keyword: "chemical change", page: "chemical-change.html" },
    { keyword: "chemical changes", page: "chemical-change.html" },
    { keyword: "chem change", page: "chemical-change.html" },

    { keyword: "physical change", page: "physical-change.html" },
    { keyword: "physical changes", page: "physical-change.html" },

    { keyword: "states of matter", page: "states-of-matter.html" },
    { keyword: "state of matter", page: "states-of-matter.html" },
    { keyword: "solid liquid gas", page: "states-of-matter.html" },

    { keyword: "matter", page: "matter.html" },
    { keyword: "what is matter", page: "matter.html" },

    { keyword: "mixture", page: "mixture.html" },
    { keyword: "mixtures", page: "mixture.html" },

    { keyword: "chemical equation", page: "chemical-equation.html" },
    { keyword: "chemical equations", page: "chemical-equation.html" },

    { keyword: "cell", page: "cell.html" }
];

function searchTopic() {

    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    if (!input) {
        alert("Please enter a topic");
        return;
    }

    // 🔥 Important: Long keywords first
    topics.sort((a, b) => b.keyword.length - a.keyword.length);

    for (let topic of topics) {
        if (input.includes(topic.keyword)) {
            window.location.href = topic.page;
            return;
        }
    }

    window.location.href = "notfound.html";
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