const tips = [
    "Beba água regularmente para manter seu corpo hidratado.",
    "Durma pelo menos 7 a 8 horas por noite para ter mais energia.",
    "Faça exercícios físicos ao menos três vezes por semana.",
    "Inclua frutas e vegetais frescos na sua dieta.",
    "Pratique meditação para reduzir o estresse.",
    "Evite o consumo excessivo de açúcar e alimentos processados.",
    "Lave as mãos com frequência para evitar doenças.",
    "Faça pausas regulares ao trabalhar no computador para evitar fadiga ocular.",
    "Mantenha uma postura correta ao sentar para evitar dores nas costas."
];

function showTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const tipContainer = document.getElementById("tip-container");
    tipContainer.innerText = tips[randomIndex];
}
