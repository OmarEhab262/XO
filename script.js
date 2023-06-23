let value1 = "";
let value2 = "";

(async () => {
  const { value: formValues } = await Swal.fire({
    title: "Multiple inputs",
    html:
      '<input id="swal-input1" class="swal2-input"  placeholder="X">' +
      '<input id="swal-input2" class="swal2-input"  placeholder="O">',
    focusConfirm: false,
    preConfirm: () => {
      const input1 = document.getElementById("swal-input1");
      const input2 = document.getElementById("swal-input2");
      value1 = input1.value;
      value2 = input2.value;
      return [value1, value2];
    },
  });

  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }
  const oo = document.querySelector(".oo");
  oo.textContent = value1;
  const ooo = document.querySelector(".ooo");
  ooo.textContent = value2;
})();

let box = document.querySelectorAll(".box");
var cont = 0;
var ss1 = 0;
var ss2 = 0;
var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var lineone = document.querySelector(".lineone");
var linetwo = document.querySelector(".linetwo");
var linethree = document.querySelector(".linethree");
var linefour = document.querySelector(".linefour");
var linefive = document.querySelector(".linefive");
var linesix = document.querySelector(".linesix");
var lineseven = document.querySelector(".lineseven");
var lineeight = document.querySelector(".lineeight");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var green = document.querySelector(".green");
var yellow = document.querySelector(".yellow");
red.onclick = function () {
  for (let index = 0; index < box.length; index++) {
    box[index].style.backgroundColor = "red";
  }
};
blue.onclick = function () {
  for (let index = 0; index < box.length; index++) {
    box[index].style.backgroundColor = "blue";
  }
};
green.onclick = function () {
  for (let index = 0; index < box.length; index++) {
    box[index].style.backgroundColor = "green";
  }
};
yellow.onclick = function () {
  for (let index = 0; index < box.length; index++) {
    box[index].style.backgroundColor = "yellow";
  }
};
function performOperation(e) {
  Swal.fire({
    title: "Do you want to continue playing?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Continue",
  }).then((result) => {
    if (result.isConfirmed) {
      one.textContent = "";
      two.textContent = "";
      three.textContent = "";
      four.textContent = "";
      five.textContent = "";
      six.textContent = "";
      seven.textContent = "";
      eight.textContent = "";
      nine.textContent = "";
      e.classList.remove("block");
    } else {
      window.close();
    }
  });
}

function executeAfterOneSecond(e) {
  setTimeout(() => performOperation(e), 500); // Delay of 1000 milliseconds = 1 second
}

for (let i = 0; i < box.length; i++) {
  let oo = box[i];
  oo.addEventListener("click", () => {
    if (cont != 10) {
      cont += 1;
      if (cont % 2 !== 0) {
        if (oo.textContent == "") {
          oo.textContent = "X";
        }
      } else {
        if (oo.textContent == "") {
          oo.textContent = "O";
        }
      }
    }
    if (
      one.textContent !== "" &&
      one.textContent === four.textContent &&
      four.textContent === seven.textContent
    ) {
      lineone.classList.add("block");
      if (one.textContent === "X") {
        ss1 += 1;
        s1.textContent = ss1;
        cont = 0;
      }
      if (one.textContent === "O") {
        ss2 += 1;
        s2.textContent = ss2;
        cont = 1;
      }
      executeAfterOneSecond(lineone);
    }
    if (
      two.textContent !== "" &&
      two.textContent === five.textContent &&
      five.textContent === eight.textContent
    ) {
      linetwo.classList.add("block");
      if (two.textContent === "X") {
        ss1 += 1;
        s1.textContent = ss1;
        cont = 0;
      }
      if (two.textContent === "O") {
        ss2 += 1;
        s2.textContent = ss2;
        cont = 1;
      }
      executeAfterOneSecond(linetwo);
    }
    if (
      three.textContent !== "" &&
      three.textContent === six.textContent &&
      six.textContent === nine.textContent
    ) {
      linethree.classList.add("block");
      if (three.textContent === "X") {
        ss1 += 1;
        s1.textContent = ss1;
        cont = 0;
      }
      if (three.textContent === "O") {
        ss2 += 1;
        s2.textContent = ss2;
        cont = 1;
      }
      executeAfterOneSecond(linethree);
    }
    if (
      one.textContent !== "" &&
      one.textContent === two.textContent &&
      two.textContent === three.textContent
    ) {
      linefour.classList.add("block");

      if (one.textContent === "X") {
        ss1 += 1;
        s1.textContent = ss1;
        cont = 0;
      }
      if (one.textContent === "O") {
        ss2 += 1;
        s2.textContent = ss2;
        cont = 1;
      }
      executeAfterOneSecond(linefour);
    }
    if (
      four.textContent !== "" &&
      four.textContent === five.textContent &&
      five.textContent === six.textContent
    ) {
      linefive.classList.add("block");

      if (four.textContent === "X") {
        ss1 += 1;
        s1.textContent = ss1;
        cont = 0;
      }
      if (four.textContent === "O") {
        ss2 += 1;
        s2.textContent = ss2;
        cont = 1;
      }
      executeAfterOneSecond(linefive);
    }
    if (
      seven.textContent !== "" &&
      seven.textContent === eight.textContent &&
      eight.textContent === nine.textContent
    ) {
      linesix.classList.add("block");
      if (seven.textContent === "X") {
        ss1 += 1;
        s1.textContent = ss1;
        cont = 0;
      }
      if (seven.textContent === "O") {
        ss2 += 1;
        s2.textContent = ss2;
        cont = 1;
      }
      executeAfterOneSecond(linesix);
    }
    if (
      one.textContent !== "" &&
      one.textContent === five.textContent &&
      five.textContent === nine.textContent
    ) {
      lineseven.classList.add("block");

      if (one.textContent === "X") {
        ss1 += 1;
        s1.textContent = ss1;
        cont = 0;
      }
      if (one.textContent === "O") {
        ss2 += 1;
        s2.textContent = ss2;
        cont = 1;
      }
      executeAfterOneSecond(lineseven);
    }
    if (
      three.textContent !== "" &&
      three.textContent === five.textContent &&
      five.textContent === seven.textContent
    ) {
      lineeight.classList.add("block");

      if (three.textContent === "X") {
        ss1 += 1;
        s1.textContent = ss1;
        cont = 0;
      }
      if (three.textContent === "O") {
        ss2 += 1;
        s2.textContent = ss2;
        cont = 1;
      }
      executeAfterOneSecond(lineeight);
    }
    function ffff() {
      if (
        one.textContent !== "" &&
        two.textContent !== "" &&
        three.textContent !== "" &&
        four.textContent !== "" &&
        five.textContent !== "" &&
        six.textContent !== "" &&
        seven.textContent !== "" &&
        eight.textContent !== "" &&
        nine.textContent !== ""
      ) {
        (one.textContent = ""),
          (two.textContent = ""),
          (three.textContent = ""),
          (four.textContent = ""),
          (five.textContent = ""),
          (six.textContent = ""),
          (seven.textContent = ""),
          (eight.textContent = ""),
          (nine.textContent = "");
        cont = 0;
      }
    }
    function gg() {
      setTimeout(ffff, 700); // Delay of 1000 milliseconds = 1 second
    }
    if (cont == 9) {
      gg();
    }
  });
}
