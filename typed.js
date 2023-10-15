function typedjs() {
  var typed = new Typed("#typed", {
    strings: [
      "Business Continuity Planning (BCP)",
      "Disaster Recovery (DR)",
      "IT Risk and Governance",
      "Internet of Things (IoT)",
      "Big Data",
      "Resourcing",
      "IT Cloud Infrastructure",
      "Quantum Computing",
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Blockchain",
    ],
    typeSpeed: 50,
    backSpeed: 10,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
  });
}

function console() {
  console.log("success");
}

export { typedjs, console };
// typedjs();
