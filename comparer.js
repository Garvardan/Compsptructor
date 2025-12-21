"use strict"

const gpuData = {
    1650: {
        name: "GTX 1650",
        memory: "4 GB GDDR6",
        cores: "896 CUDA",
        powerUsage: "75 W"
    },
    3060: {
        name: "RTX 3060",
        memory: "12 GB GDDR6",
        cores: "3584 CUDA",
        powerUsage: "170 W"
    },
    4060: {
        name: "RTX 4060",
        memory: "8 GB GDDR6",
        cores: "3072 CUDA",
        powerUsage: "115 W"
    }
};

const select1 = document.getElementById("gpu1");
const select2 = document.getElementById("gpu2");

const gpuBlocks = document.querySelectorAll(".gpuParams");

function renderGpu(select, block) {
    const value = select.value;

    if (!gpuData[value]) {
        block.querySelector(".name").textContent = "";
        block.querySelector(".memory").textContent = "";
        block.querySelector(".cores").textContent = "";
        block.querySelector(".powerUsage").textContent = "";
        return;
    }

    const gpu = gpuData[value];

    block.querySelector(".name").textContent = gpu.name;
    block.querySelector(".memory").textContent = "Памʼять: " + gpu.memory;
    block.querySelector(".cores").textContent = "Ядра: " + gpu.cores;
    block.querySelector(".powerUsage").textContent = "Споживання: " + gpu.powerUsage;
}

function preventSameChoice(changedSelect, otherSelect) {
    if (changedSelect.value === otherSelect.value) {
        otherSelect.selectedIndex = 0;
    }
}

select1.addEventListener("change", () => {
    preventSameChoice(select1, select2);
    renderGpu(select1, gpuBlocks[0]);
});

select2.addEventListener("change", () => {
    preventSameChoice(select2, select1);
    renderGpu(select2, gpuBlocks[1]);
});