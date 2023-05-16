function submit() {
    var count = 0;

    for(var i = 1; i <= 4; i++) {
        var radiosName = document.getElementsByName('answer'+i);
        for(var j = 0; j < radiosName.length; j++) {
            var radiosValue = radiosName[j];
            if(radiosValue.value == "right" && radiosValue.checked) {
                count++;
            }
        }
    }
  document.getElementById('results').innerHTML = count + " Answers Correct!";
}
