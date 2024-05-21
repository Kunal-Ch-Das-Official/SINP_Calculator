// Content: SINP Calculator for canx Immigration, 
// Author: Kunal Chandra Das,
// Date: 30/03/2024



// ALL SELECTTION DONE HERE & GLOBAL VARIABLE DECLEREATIONS

// Education & Training Content Selection
let firstSecInput = document.querySelectorAll(".checkbox-round");
let eaducationAndTraingOutput = document.getElementById(
  "eaducationAndTraingOutput"
);

// Work Experience Content Selection
let secondSecInputBellow5years = document.querySelectorAll(".bellow-5-years");
let secondSecInputAbove5years = document.querySelectorAll(".above-5-years");
let workExperiencePointsOutput = document.getElementById(
  "workExperiencePointsOutput"
);

// Language Content Selection
let thirdSecFirstLanguageInput =
  document.querySelectorAll(".second-checkbox-1");
let thirdSecSecondLanguageInput =
  document.querySelectorAll(".second-checkbox-2");
let languagePointsDisplayer = document.getElementById(
  "languagePointsDisplayer"
);

// Age Content Selection
let ageSelect = document.getElementById("age-select");
let ageDisplaying = document.getElementById("AgeInput");

// Connection with labour market & adaptability content selection
let connectionRadio_1 = document.querySelectorAll(".connection-radio-1");
let connectionRadio_2 = document.querySelectorAll(".connection-radio-2");
let connectionRadio_3 = document.querySelectorAll(".connection-radio-3");
let connectionRadio_4 = document.querySelectorAll(".connection-radio-4");
let connectionDisplaying = document.getElementById("connectionDisplaying");

// Grandtotal content Selection
let pointsInputTotal = document.getElementById("pointsInputTotal");

// INPUTS AS VALUE FOR INDIVIDUAL SECTIONS SELECTION
let workExperiencePointsOutput2 = document.getElementById(
  "workExperiencePointsOutput2"
);
let workExperiencePointsOutput3 = document.getElementById(
  "workExperiencePointsOutput3"
);
let languagePointsDisplayer2 = document.getElementById(
  "languagePointsDisplayer-2"
);
let languagePointsDisplayer3 = document.getElementById(
  "languagePointsDisplayer-3"
);
let connectionDisplaying_2 = document.getElementById("connectionDisplaying_2");
let connectionDisplaying_3 = document.getElementById("connectionDisplaying_3");
let connectionDisplaying_4 = document.getElementById("connectionDisplaying_4");
let connectionDisplaying_5 = document.getElementById("connectionDisplaying_5");

// INPUTS AS VALUE FOR ONLY GRANDTOTAL SECTION SELECTION
let Education$traningContainer = document.getElementById(
  "EducationTraningContainer"
);
let WorkExperienceContainer = document.getElementById(
  "WorkExperienceContainer"
);
let LanguageContainer = document.getElementById("LanguageContainer");
let AgeContainer = document.getElementById("AgeContainer");
let adaptabilityContainer = document.getElementById("adaptabilityContainer");

// ALL VALUE INITIALIZER
pointsInputTotal.value = 0;
Education$traningContainer.value = 0;
WorkExperienceContainer.value = 0;
LanguageContainer.value = 0;
AgeContainer.value = 0;
adaptabilityContainer.value = 0;
workExperiencePointsOutput.value = 0;
workExperiencePointsOutput2.value = 0;
workExperiencePointsOutput3.value = 0;
languagePointsDisplayer.value = 0;
languagePointsDisplayer2.value = 0;
languagePointsDisplayer3.value = 0;
ageDisplaying.value = 0;
connectionDisplaying_2.value = 0;
connectionDisplaying_3.value = 0;
connectionDisplaying_4.value = 0;
connectionDisplaying_5.value = 0;
connectionDisplaying.value = 0;

// EDUCATION AND TRAINING ALGORITHM STARTS
firstSecInput.forEach((firstIteration) => {
  firstIteration.addEventListener("click", () => {
    firstSecInput.forEach((fi) => {
      if (fi !== firstIteration) {
        fi.checked = false;
      }
    });
    firstIteration.checked = true;
  });
});
eaducationAndTraingOutput.value = 0;
const eaducationalPoints = (sec) => {
  const postGraduationPoints = 23;
  const underGraduationPoints = 20;
  const certificationPoints = 20;
  const diplomaPoints = 15;
  const seconderyPoints = 12;

  if (sec === 1) {
    eaducationAndTraingOutput.value = postGraduationPoints;
  } else if (sec === 2) {
    eaducationAndTraingOutput.value = underGraduationPoints;
  } else if (sec === 3) {
    eaducationAndTraingOutput.value = certificationPoints;
  } else if (sec === 4) {
    eaducationAndTraingOutput.value = diplomaPoints;
  } else if (sec === 5) {
    eaducationAndTraingOutput.value = seconderyPoints;
  } else {
    eaducationAndTraingOutput.value;
  }
  let total = parseInt(eaducationAndTraingOutput.value);
  Education$traningContainer.value = total;
};
// EDUCATION AND TRAINING ALGORIDM ENDS

// WORK EXPERIENCE ALGORITHM STARTS
secondSecInputBellow5years.forEach((secondBellowfiveyearsiteration) => {
  secondBellowfiveyearsiteration.addEventListener("click", () => {
    secondSecInputBellow5years.forEach((sbfyi) => {
      if (sbfyi !== secondBellowfiveyearsiteration) {
        sbfyi.checked = false;
      }
    });
    secondBellowfiveyearsiteration.checked = true;
  });
});

secondSecInputAbove5years.forEach((secondAbovefiveyearsiteration) => {
  secondAbovefiveyearsiteration.addEventListener("click", () => {
    secondSecInputAbove5years.forEach((safyi) => {
      if (safyi !== secondAbovefiveyearsiteration) {
        safyi.checked = false;
      }
    });
    secondAbovefiveyearsiteration.checked = true;
  });
});
const handleWorkExperiences = (input) => {
  const first5YearsPrior = 10;
  const second5YearsPrior = 8;
  const third5YearsPrior = 6;
  const fourth5YearsPrior = 4;
  const fifth5YearsPrior = 2;

  const first6To10YearsPrior = 5;
  const second6To10YearsPrior = 4;
  const third6To10YearsPrior = 3;
  const fourth6To10YearsPrior = 2;
  const fifth6To10YearsPrior = 0;

  if (input === 1) {
    workExperiencePointsOutput2.value = first5YearsPrior;
  } else if (input === 2) {
    workExperiencePointsOutput2.value = second5YearsPrior;
  } else if (input === 3) {
    workExperiencePointsOutput2.value = third5YearsPrior;
  } else if (input === 4) {
    workExperiencePointsOutput2.value = fourth5YearsPrior;
  } else if (input === 5) {
    workExperiencePointsOutput2.value = fifth5YearsPrior;
  } else if (input === 6) {
    workExperiencePointsOutput3.value = first6To10YearsPrior;
  } else if (input === 7) {
    workExperiencePointsOutput3.value = second6To10YearsPrior;
  } else if (input === 8) {
    workExperiencePointsOutput3.value = third6To10YearsPrior;
  } else if (input === 9) {
    workExperiencePointsOutput3.value = fourth6To10YearsPrior;
  } else if (input === 10) {
    workExperiencePointsOutput3.value = fifth6To10YearsPrior;
  } else {
    workExperiencePointsOutput2.value;
    workExperiencePointsOutput3.value;
  }
  let firstValue = parseInt(workExperiencePointsOutput3.value);
  let secondValue = parseInt(workExperiencePointsOutput2.value);
  workExperiencePointsOutput.value = firstValue + secondValue;
  WorkExperienceContainer.value = parseInt(workExperiencePointsOutput.value);
};
// WORK EXPERIENCE ALGORITHM ENDS

// ALGORITHM FOR LANGUAGE SECTION STARTS
thirdSecFirstLanguageInput.forEach((thirdFirstIteration) => {
  thirdFirstIteration.addEventListener("click", () => {
    thirdSecFirstLanguageInput.forEach((tsfi) => {
      if (tsfi !== thirdFirstIteration) {
        tsfi.checked = false;
      }
    });
    thirdFirstIteration.checked = true;
  });
});

thirdSecSecondLanguageInput.forEach((thirdSecondIteration) => {
  thirdSecondIteration.addEventListener("click", () => {
    thirdSecSecondLanguageInput.forEach((tssi) => {
      if (tssi !== thirdSecondIteration) {
        tssi.checked = false;
      }
    });
    thirdSecondIteration.checked = true;
  });
});

const handlelanguagesSelection = (userInput) => {
  const firstCLB_8 = 20;
  const firstCLB_7 = 18;
  const firstCLB_6 = 16;
  const firstCLB_5 = 14;
  const firstCLB_4 = 12;
  const firstNoCLB = 0;

  const secondCLB_8 = 10;
  const secondCLB_7 = 8;
  const secondCLB_6 = 6;
  const secondCLB_5 = 4;
  const secondCLB_4 = 2;
  const secondNoCLB = 0;

  if (userInput === 1) {
    languagePointsDisplayer2.value = firstCLB_8;
  } else if (userInput === 2) {
    languagePointsDisplayer2.value = firstCLB_7;
  } else if (userInput === 3) {
    languagePointsDisplayer2.value = firstCLB_6;
  } else if (userInput === 4) {
    languagePointsDisplayer2.value = firstCLB_5;
  } else if (userInput === 5) {
    languagePointsDisplayer2.value = firstCLB_4;
  } else if (userInput === 6) {
    languagePointsDisplayer2.value = firstNoCLB;
  } else if (userInput === 7) {
    languagePointsDisplayer3.value = secondCLB_8;
  } else if (userInput === 8) {
    languagePointsDisplayer3.value = secondCLB_7;
  } else if (userInput === 9) {
    languagePointsDisplayer3.value = secondCLB_6;
  } else if (userInput === 10) {
    languagePointsDisplayer3.value = secondCLB_5;
  } else if (userInput === 11) {
    languagePointsDisplayer3.value = secondCLB_4;
  } else if (userInput === 12) {
    languagePointsDisplayer3.value = secondNoCLB;
  } else {
    languagePointsDisplayer2.value;
    languagePointsDisplayer3.value;
  }
  let firstThisValue = parseInt(languagePointsDisplayer2.value);
  let secondThisValue = parseInt(languagePointsDisplayer3.value);
  languagePointsDisplayer.value = firstThisValue + secondThisValue;
  LanguageContainer.value = parseInt(languagePointsDisplayer.value);
};
// ALGORITHM FOR LANGUAGE SECTION ENDS

// AGE SELECTION OPTION ALGORITHM STARTS

ageSelect.addEventListener("change", function () {
  var selectedOption = this.options[this.selectedIndex];
  var selectedAge = parseInt(selectedOption.value);
  ageDisplaying.value = selectedAge;
  AgeContainer.value = parseInt(selectedAge);
});
// AGE SELECTION OPTION ALGORITHM ENDS

// CONNECTION WITH LABOUR MARKET & ADAPTABILITY ALGORITHM STARTS
connectionRadio_1.forEach((fifthFirstIteration) => {
  fifthFirstIteration.addEventListener("click", () => {
    connectionRadio_1.forEach((ffi) => {
      if (ffi !== fifthFirstIteration) {
        ffi.checked = false;
      }
    });
    fifthFirstIteration.checked = true;
  });
});
connectionRadio_2.forEach((fifthSecondIteration) => {
  fifthSecondIteration.addEventListener("click", () => {
    connectionRadio_2.forEach((fsi) => {
      if (fsi !== fifthSecondIteration) {
        fsi.checked = false;
      }
    });
    fifthSecondIteration.checked = true;
  });
});
connectionRadio_3.forEach((fifthThirdIteration) => {
  fifthThirdIteration.addEventListener("click", () => {
    connectionRadio_3.forEach((fti) => {
      if (fti !== fifthThirdIteration) {
        fti.checked = false;
      }
    });
    fifthThirdIteration.checked = true;
  });
});
connectionRadio_4.forEach((fifthFourthIteration) => {
  fifthFourthIteration.addEventListener("click", () => {
    connectionRadio_4.forEach((ffI) => {
      if (ffI !== fifthFourthIteration) {
        ffI.checked = false;
      }
    });
    fifthFourthIteration.checked = true;
  });
});
const connectionHandler = (connectionInput) => {
  const saskatchewanEmployerTrue = 30;
  const familyRelativeTrue = 20;
  const experience12MonthsInSaskatchewanTrue = 5;
  const validStudyPermitTrue = 5;
  const commonFalse = 0;

  if (connectionInput === 1) {
    connectionDisplaying_2.value = saskatchewanEmployerTrue;
  } else if (connectionInput === 2) {
    connectionDisplaying_2.value = commonFalse;
  } else if (connectionInput === 3) {
    connectionDisplaying_3.value = familyRelativeTrue;
  } else if (connectionInput === 4) {
    connectionDisplaying_3.value = commonFalse;
  } else if (connectionInput === 5) {
    connectionDisplaying_4.value = experience12MonthsInSaskatchewanTrue;
  } else if (connectionInput === 6) {
    connectionDisplaying_4.value = commonFalse;
  } else if (connectionInput === 7) {
    connectionDisplaying_5.value = validStudyPermitTrue;
  } else if (connectionInput === 8) {
    connectionDisplaying_5.value = commonFalse;
  } else {
    connectionDisplaying_2.value;
    connectionDisplaying_3.value;
    connectionDisplaying_4.value;
    connectionDisplaying_5.value;
  }
  let firstConnectionValue = parseInt(connectionDisplaying_2.value);
  let secondConnectionValue = parseInt(connectionDisplaying_3.value);
  let thirdConnectionValue = parseInt(connectionDisplaying_4.value);
  let fourthConnectionValue = parseInt(connectionDisplaying_5.value);

  connectionDisplaying.value =
    firstConnectionValue +
    secondConnectionValue +
    thirdConnectionValue +
    fourthConnectionValue;
  adaptabilityContainer.value = parseInt(connectionDisplaying.value);
};
// CONNECTION WITH LABOUR MARKET & ADAPTABILITY ALGORITHM ENDS

// ALGORITHM FOR GRAND TOTAL VALUE STARTS
function calculateGrandTotal() {
  let grandTotal =
    parseInt(Education$traningContainer.value) +
    parseInt(WorkExperienceContainer.value) +
    parseInt(LanguageContainer.value) +
    parseInt(AgeContainer.value) +
    parseInt(adaptabilityContainer.value);

  pointsInputTotal.value = grandTotal;
}
// ALGORITHM FOR GRAND TOTAL VALUE ENDS
