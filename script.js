 const territorios = [
      { id: 1, nome: "Agamenon" },
      { id: 2, nome: "Sítio Lira" },
      { id: 3, nome: "Santo Antônio" },
      { id: 4, nome: "Três Ladeiras" },
      { id: 5, nome: "Nova Cruz" },
      { id: 6, nome: "Santa Rita" },
      { id: 7, nome: "Vila Saramandaia" },
      { id: 8, nome: "Rubina" },
      { id: 9, nome: "Vila Rural" },
      { id: 10, nome: "Encanto Igarassu" },
      { id: 11, nome: "Tabatinga" },
      { id: 12, nome: "Sítio dos Marcos" },
      { id: 13, nome: "Beira Mar I" },
      { id: 14, nome: "Centro" },
      { id: 15, nome: "Monjope" },
      { id: 16, nome: "Bonfim II" },
    ];

    const bairros = [
      { nome: "Agamenon", id_territorio: 1 },
      { nome: "Bela Vista", id_territorio: 1 },
      { nome: "Pitanga I", id_territorio: 1 },
      { nome: "Pitanga II", id_territorio: 1 },
      { nome: "Viana e Moura I", id_territorio: 1 },
      { nome: "Viana e Moura II", id_territorio: 1 },
      { nome: "Nossa Senhora da Conceição", id_territorio: 1 },
      { nome: "Ilha do Rato", id_territorio: 1 },
      { nome: "Portelinha", id_territorio: 1 },
      { nome: "Menino de Praga", id_territorio: 1 },
      { nome: "Congrua", id_territorio: 1 },
      { nome: "Tropical", id_territorio: 1 },
      { nome: "Erasmo", id_territorio: 1 },
      { nome: "Jardim das Palmeiras", id_territorio: 1 },
      { nome: "Boa Vista", id_territorio: 1 },

      { nome: "Iaman", id_territorio: 2 },
      { nome: "Escubata", id_territorio: 2 },
      { nome: "Frei", id_territorio: 2 },
      { nome: "Miguelinho", id_territorio: 2 },
      { nome: " Guerere", id_territorio: 2 },
      { nome: "Sítio Santa Cruz", id_territorio: 2 },
      { nome: "Campo Belo", id_territorio: 2 },
      { nome: " Guerere", id_territorio: 2 },
      { nome: "Tapuã", id_territorio: 2 },
      { nome: "Iaman II", id_territorio: 2 },
      { nome: "Bom Retiro", id_territorio: 2 },
      { nome: "Umbura", id_territorio: 2 },
      { nome: "Sítio Viver", id_territorio: 2 },


      { nome: "Três Ladeiras", id_territorio: 3 },
      { nome: "Ana de Albuquerque", id_territorio: 3 },
      { nome: "Pancó", id_territorio: 3 },
      { nome: "Jardim Angélica", id_territorio: 3 },
      
      { nome: "Nova Cruz I", id_territorio: 4 },
      { nome: "Nova Cruz II", id_territorio: 4 },
      { nome: "Mangue Seco", id_territorio: 4 },
      { nome: "Sítio Pirajuí", id_territorio: 4 },
      { nome: "Coroa do Avião", id_territorio: 4 },
      { nome: "Engenho Novo", id_territorio: 4 },
      { nome: "Cueiras", id_territorio: 4 },
      { nome: "Miguel do Leite", id_territorio: 4 },
      { nome: "Sítio Canaa", id_territorio: 4 },
      { nome: "Camboa", id_territorio: 4 },

      { nome: "Água Mineral", id_territorio: 5 },
      { nome: "João Paulo I", id_territorio: 5 },
      { nome: "João Paulo II", id_territorio: 5 },
      { nome: "Vila da Chesf", id_territorio: 5 },
      { nome: "Beira Mar II", id_territorio: 5 },
      { nome: "Campo do Zezo", id_territorio: 5 },
      { nome: "Manancial", id_territorio: 5 },
      { nome: "Verde Teto", id_territorio: 5 },
      { nome: "Posto do Mota", id_territorio: 5 },
      { nome: "Maria Cecília", id_territorio: 5 },
      { nome: "Jardim Tocandira", id_territorio: 5 },
      { nome: "Beco do Machado", id_territorio: 5 },
    ];

/* Nome_Territorio	Bairros_Visualizacao
Sítio Lira	, ,  ,, , , , , , , ,
Santo Antonio	, , , 
Tres Ladeiras

Nova Cruz	, , , , , , , , , 
Santa Rita	, , , , , , , , , , , 
Vila Saramandaia	Saramandaia, Margaret Tati, Rusario, Redenção, Santos Cosme e Damião
Rubina	Bonfim I, Rubina, Big Brother, Santa Luzia, Pastor Euzebio
Vila Rural	Vila Rural, Alto do Céu I, Alto do Céu II, Jardim Sumaré I, Jardim Sumaré II, Corrego da Bacia
Encanto Igarassu	Encanto Igarassu, Jardim Boa Sorte
Tabatinga	Tabatinga, Miguel Arraes, Cortegada
Sitio Dos Marcos	Sítio dos Marcos, Caminho das Águas, Marco de Pedra
Beira Mar I	Beira Mar I, Mumbaba
Centro	Taepe, Campina de Feira
Monjope	Monjope, Tabuleiro, Santa Helena
Bonfim II	Bonfim II
*/


    const container = document.getElementById("container");

    territorios.forEach(territorio => {
      const bairrosRelacionados = bairros
        .filter(b => b.id_territorio === territorio.id)
        .map(b => b.nome)
        .join(", ");

      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h2>${territorio.nome}</h2>
        <p><strong>Bairros:</strong> ${bairrosRelacionados || "Nenhum bairro cadastrado"}</p>
      `;

      container.appendChild(card);
    });