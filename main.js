
let map = L.map('map', {                // criar variável map
    center: [-15.543458, -47.336698],   // coordenadas centrais que o mapa será carregado
    zoom: 13,                           // zoom/escala que o mapa será carragado (0 = mundo)
    minZoom: 7,                         // zoom/escala mínima possível, que corresponde ao enquadramento mínimo
    maxZoom: 18                         // zoom/escala máxima possível
    });

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {                                         // carrega base do mapa
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',  // informação da fonte da base
    }).addTo(map);                                                                                          // adicionar à variável map (criada acima)

// formatação da caixa
const caixa = L.control({ position: "topright" });

caixa.onAdd = function () {
  let div = L.DomUtil.create("div", "description");
  L.DomEvent.disableClickPropagation(div);
  const text =
    "<h1>TÍTULO PRINCIPAL</h1><br></br><p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>";
  div.insertAdjacentHTML("beforeend", text);
  return div;
};

caixa.addTo(map);

