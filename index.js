let input = document.querySelector("input");
let removeAlltags = document.querySelector(".btnTab button");
let countNumber = document.querySelector(".count");
let ul = document.querySelector("ul");
let card_body = document.querySelector('.card_body');
let countDetails = document.querySelector('.countDetails');

let tagsElements = [];


let maxTagsNumber = 10;


function removeItems(element, tag) {
    let indexData = tagsElements.indexOf(tag);
    tagsElements = [...tagsElements.slice(0, indexData), ...tagsElements.slice(indexData + 1)];
    element.parentElement.remove();
    countTagsFunction();
}

const countTagsFunction = () =>{
    let totalNumberOftags = maxTagsNumber - tagsElements.length;
    countNumber.innerHTML = totalNumberOftags;
}

const createTags = () => {
  let listData = ul.querySelectorAll("li");
  listData.forEach((e) => {
    e.remove();
  });

  tagsElements.slice();
  tagsElements.reverse();
  tagsElements.forEach((element) => {
    let content = `<li>${element}<i class="fa fa-times" onclick = "removeItems(this, '${element}')" title="remove tags"></i></li>`;
    ul.insertAdjacentHTML('afterbegin', content);
    countTagsFunction();
  });
};

input.addEventListener("keyup", (e) => {
  let inputData = input.value;
  if (e.key == "Enter") {
    if (inputData.length > 1) {
        card_body.style.display = "block";
        countDetails.style.display = "block";
      if (tagsElements.length < 10) {
        inputData.split(",").forEach((e) => {
          tagsElements.push(e);
          createTags();
        });
      }
    }else{
        card_body.style.display = "none"
        countDetails.style.display = "none";
    }
    input.value = "";
  }
});

removeAlltags.addEventListener('click', ()=>{
    ul.querySelectorAll('li').forEach(element => element.remove());
    tagsElements.length = 0;
    card_body.style.display = "none"
    countDetails.style.display = "none";
})

