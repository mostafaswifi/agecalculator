let clicker = document.getElementById("clicker");
clicker.onclick = () => {
  let userinput = document.getElementById("d-birth").value,
    dBirth = new Date(userinput),
    msg = document.getElementById("message"),
    dResult = document.getElementById("result");
  if (userinput.trim() == null || userinput.trim() == "") {
    msg.innerHTML = "please enter your bithe date";
    return false;
  } else {
    let dBirthYear = dBirth.getYear(),
      dBirthMonth = dBirth.getMonth(),
      dBirthDate = dBirth.getDate(),
      now = new Date(),
      currentYear = now.getYear(),
      currentMonth = now.getMonth(),
      currentDate = now.getDate(),
      ageString = "";

    yearAge = currentYear - dBirthYear;

    if (currentMonth >= dBirthMonth) 
    var monthAge = currentMonth - dBirthMonth;
    else {
      yearAge--;
      var monthAge = 12 + currentMonth - dBirthMonth;
    }

    if (currentDate >= dBirthDate) 
    var dateAge = currentDate - dBirthDate;
    else {
      monthAge--;
      var dateAge = 31 + currentDate - dBirthDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    if (yearAge > 0 && monthAge > 0 && dateAge > 0)
      ageString =
        yearAge +
        " years, " +
        monthAge +
        " months, and " +
        dateAge +
        " days old.";
    else if (yearAge == 0 && monthAge == 0 && dateAge > 0)
      ageString = "Only " + dateAge + " days old!";
    else if (yearAge > 0 && monthAge == 0 && dateAge == 0)
      ageString = yearAge + " years old. Happy Birthday!!";
    else if (yearAge > 0 && monthAge > 0 && dateAge == 0)
      ageString = yearAge + " years and " + monthAge + " months old.";
    else if (yearAge == 0 && monthAge > 0 && dateAge > 0)
      ageString = monthAge + " months and " + dateAge + " days old.";
    else if (yearAge > 0 && monthAge == 0 && dateAge > 0)
      ageString = yearAge + " years, and" + dateAge + " days old.";
    else if (yearAge == 0 && monthAge > 0 && dateAge == 0)
      ageString = age.months + " months old.";
    else ageString = "less than one day";
    return (dResult.innerHTML = ageString);
  }
};
