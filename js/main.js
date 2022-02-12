let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

let showGlasses = () => {
    let content = "";
    for (let i in dataGlasses) {
        content += `
        <img src="${dataGlasses[i].virtualImg}" class="col-4 mt-5 img_Glasses" alt="">
        `;   
    }
    document.getElementById("vglassesList").style.cursor = "pointer";
    document.getElementById("vglassesList").innerHTML = content;
}
showGlasses();

let arr_Glasses = document.querySelectorAll(".img_Glasses");
arr_Glasses.forEach((value, i) => {
    arr_Glasses[i].addEventListener("click", () => {
        showModelGlasses(i);
        document.querySelector(".btn-before").addEventListener("click", () => {
            i--;
            if (i >= 0 && i < arr_Glasses.length) {
                showModelGlasses(i);
            } else {
                i = 0;
            }
        });
        document.querySelector(".btn-after").addEventListener("click", () => {
            i++;
            if (i >= 0 && i < arr_Glasses.length) {
                showModelGlasses(i);
            } else {
                i = arr_Glasses.length - 1;
            }
        });
    })
});

let showModelGlasses = (i) => {
    document.querySelector(".vglasses__model").innerHTML = `<img src="${arr_Glasses[i].src}" alt="">`;
    document.querySelector(".vglasses__info").style.display = "block";
    document.querySelector(".vglasses__info").innerHTML = `
        <h3>${dataGlasses[i].name} - ${dataGlasses[i].brand} (${dataGlasses[i].color})</h3>
        <buton class="btn-danger p-1">${dataGlasses[i].price}$</buton> <span class="text-success p-1"> Stocking</span>
        <p>${dataGlasses[i].description}</p>
        `
};

