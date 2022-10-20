        var inputs = document.getElementsByClassName("input");
        for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function () {
        if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fijar");
        } else {
        this.nextElementSibling.classList.remove("fijar");
        }
        });
        }
        
        var inputs = document.getElementsByClassName("input_correo");
        for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function () {
        if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fijar");
        } else {
        this.nextElementSibling.classList.remove("fijar");
        }
        });
        }
        
        var inputs = document.getElementsByClassName("input_rut");
        for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function () {
        if (this.value.length >= 1) {
        this.nextElementSibling.classList.add("fijar");
        } else {
        this.nextElementSibling.classList.remove("fijar");
        }
        });
        }
        