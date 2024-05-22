const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const yuan = document.querySelector('#yuan');

const convert = (fromInput, toInput, isSom) => {
    fromInput.addEventListener('input', (e) => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-Type", "application/json");
        request.send();

        request.addEventListener("load", () => {
            const response = JSON.parse(request.response);

            let convertedValue;

            if (isSom === "usd") {
                convertedValue = (e.target.value / response.usd).toFixed(2);
            } else if (isSom === "yuan") {
                convertedValue = (e.target.value / response.yuan).toFixed(2);
            }else if (isSom){
                convertedValue = (e.target.value * response.usd).toFixed(2)
            }

            toInput.value = convertedValue;
            e.target.value === "" && (toInput.value = "");
        });
    });
};

convert(som, usd, "usd");
convert(usd, som, "som");
convert(som, yuan, "yuan");
convert(yuan, som, "som");







