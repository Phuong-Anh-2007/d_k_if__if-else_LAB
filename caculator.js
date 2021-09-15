let view = document.getElementById("inp");
    function inp_value(value) {
        view.value +=value;
    }

    function AC() {
        view.value="";
    }

    function result() {
        view.value = eval(view.value);

    }