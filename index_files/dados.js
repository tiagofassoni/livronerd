(function() {
    var Quiz = window.Quiz || {};
    window.Quiz = Quiz;

    Quiz.questions = {
        first : {
            title : "O que você gosta?",
            answers : {
                a : "Livros, livros e mais livros!",
                b : "Prefiro livros com figuras, então me mostre Quadrinhos!",
                rpg : "Não quero ler, quero viver as histórias!",
                nao_nerd : "E eu que não sou Nerd?"
            }
        },
        a : {
            title : "E o que quer ler?",
            answers : {
                fantasia : "Fantasia",
                ficcao : "Ficção Científica",
                outros : "Nenhum dos dois!"
            }
        },
        b : {
            title : "De que tipo?",
            answers : {
                hq : "HQs",
                manga : "Mangás"
            }
        },
        c : {
            answers : {
                rpg : "RPGs"
            }
        },
        d : {
            answers : {
                nao_nerd : "Nossas sugestões para conhecer um pouco dessa cultura"
            }
        },
        fantasia : {
            title : "O mundo é muito mais misterioso do que imaginamos! E quando quer que a história se passe?",
            answers : {
                fantasia_a : "Hoje em dia",
                fantasia_b : "No Passado",
                fantasia_c : "Em uma viagem"
            }
        },
        fantasia_a : {
            title : "Escolha entre essas histórias sem mofo!",
            books : [
                {
                    title : "Cidade dos Ossos",
                    link : "http://www.estantevirtual.com.br/q/Cidade-dos-Ossos-cassandra?gacp=dia-da-toalha-14&gaid=cidade-dos-ossos",
                    desc : "Clary era garota normal até presenciar um crime e descobrir uma tribo de guerreiros secreta dedicada a libertar a terra de demônios.",
                    cover : "CIDADE_DOS_OSSOS.jpg",
					price : "18,00"
                },
                {
                    title : "Série Harry Potter",
                    link : "http://www.estantevirtual.com.br/q/harry-potter-rowling?gacp=dia-da-toalha-14&gaid=harry-potter",
					desc : "Ao completar 11 anos, Potter descobre ser um bruxo e ingressa na Escola de Magia e Bruxaria de Hogwarts onde viverá grandes aventuras.",
                    cover : "HARRY_POTTER_E_O_ENIGMA_DO_PRINCIPE.jpg",
					price : "8,00",
					flag : "economy",
					economy : "70"
                },
                {
                    title : "A Maldição do Tigre",
                    link : "http://www.estantevirtual.com.br/q/A-Maldicao-do-Tigre?gacp=dia-da-toalha-14&gaid=maldicao-tigre",
					desc : "Kelsey sente uma forte conexão com um tigre branco sem saber que ele é um príncipe amaldiçoado há mais de 300 anos. Agora ela terá que ajudá-lo a quebrar o feitiço.",
                    cover : "A_MALDICAO_DO_TIGRE.jpg",
					price : "15,00"
                },
                {
                    title : "A Batalha do Apocalipse",
                    link : "http://www.estantevirtual.com.br/q/Batalha-do-Apocalipse?gacp=dia-da-toalha-14&gaid=batalha-apocalipse",
                    cover : "A_BATALHA_DO_APOCALIPSE.jpg",
					desc : "Uma viagem pela história humana cheia de lutas heróricas, magia, romance e suspense.",
					price : "10,00",
					flag : "economy",
					economy : "70"
                }
            ]
        },
        fantasia_b : {
            title : "Onde vai se passar?",
            face : 'artur',
            answers : {
                fantasia_ba : "No nosso mundo (ou mais ou menos)",
                fantasia_bb : "Em outros mundos"
            }
        },
        fantasia_ba : {
            title : "Escolha a época:",
            answers : {
                fantasia_baa : "Na época do Rei Artur",
                fantasia_bab : "Outras épocas"
            }
        },
        fantasia_baa : {
            title : "Então desembainhe a Excalibur e escolha!",
            face : 'artur',
            books : [
                {
                    title : "As Brumas de Avalon - A Senhora da Magia",
                    link : "http://www.estantevirtual.com.br/q/Brumas-de-avalon?gacp=dia-da-toalha-14&gaid=brumas-avalon",
                    cover : "A_SENHORA_DA_MAGIA.jpg",
                    desc : "Em quatro volumes, conta a história de Rei Artur pelo ponto de vista de Morgana.",
                    price : "6,00"
                },
                {
                    title : "O Rei Artur e os Cavaleiros da Távola Redonda",
                    link : "http://www.estantevirtual.com.br/q/O-Rei-Artur-e-os-Cavaleiros-da-Tavola-Redonda?gacp=dia-da-toalha-14&gaid=rei-arthur-cavaleiros-tavola-redonda",
                    cover : "ReiArthur_cavaleiros-tavola-redonda.jpg",
					desc : "Nessa obra acompanhamos a lendária história de Artur, um menino que se tornou rei ao retirar a espada Excalibur de uma pedra, e sua jornada em busca do Santo Graal.",
					price : "10,00"
                },
                {
                    title : "Crônicas de Artur - Rei do Inverno",
                    link : "http://www.estantevirtual.com.br/q/Bernard-Cornwell-Cronicas-de-artur?gacp=dia-da-toalha-14&gaid=cronicas-artur",
                    cover : "O_REI_DO_INVERNO.jpg",
					desc : "Mostra uma versão realista da história de Artur em três volumes.",
					price : "15,90"
                },
                {
                    title : "O Único e Eterno Rei - A Espada na Pedra",
                    link : "http://www.estantevirtual.com.br/q/O-unico-e-eterno-rei?gacp=dia-da-toalha-14&gaid=único-eterno-rei",
                    cover : "O_uNICO_E_ETERNO_REI__VOL_I.jpg",
					desc : "Toda a vida de Artur, desde a infância, é contada na série em cinco volumes.",
					price : "14,00"
                }
            ]
        },
        fantasia_bab : {
            title : "Afie sua pena de escrever e escolha!",
            face : 'artur',
            books : [
                {
                    title : "Stardust - O Mistério da Estrela",
                    link : "http://www.estantevirtual.com.br/q/Neil-gaiman-stardust?gacp=dia-da-toalha-14&gaid=stardust",
                    cover : "STARDUST.jpg",
					desc : "Na Inglaterra vitoriana, a calma de uma vila é interrompida por uma feira mágica.",
					price : "30,00"
                },
                {
                    title : "A Sétima Torre",
                    link : "http://www.estantevirtual.com.br/q/a-setima-torre?gacp=dia-da-toalha-14&gaid=setima-torre",
                    cover : "A_SETIMA_TORRE.jpg",
					desc : "O jovem Tal, da Ordem Laranja dos Escolhidos do Castelo, precisa roubar uma Pedra-do-Sol para salvar sua família.",
					price : "5,00"
                },
                {
                    title : "O Nome do Vento",
                    link : "http://www.estantevirtual.com.br/q/O-nome-do-vento?gacp=dia-da-toalha-14&gaid=nome-vento",
                    cover : "O_NOME_DO_VENTO.jpg",
					desc : "A primeira parte da história do Matador de Reis quando estudava para se tornar um Arcanista.",
					price : "35,00"
                },
                {
                    title : "God of War",
                    link : "http://www.estantevirtual.com.br/q/God-of-War-Stover?gacp=dia-da-toalha-14&gaid=god-of-war",
                    cover : "GOD_OF_WAR.jpg",
					desc : "Decidido a não servir mais o traidor deus Ares, Kratos precisará matá-lo. Mas para isso precisará encontrar e usar a Caixa de Pandora que esconde todos os mistérios do universo.",
					price : "15,00"
                }
            ]
        },
        fantasia_bb : {
            title : "E como prefere sua história?",
            answers : {
                fantasia_bba : "A vida não é fácil num mundo de magia e espadas",
                fantasia_bbb : "Eu quero elfos, anões e magos!"
            }
        },
        fantasia_bba : {
            title : "Se prepare para a luta e escolha!",
            face : "mago",
            books : [
                {
                    title : "Crônicas de Gelo e Fogo - Guerra dos Tronos",
                    link : "http://www.estantevirtual.com.br/q/cronicas-de-gelo-e-fogo?gacp=dia-da-toalha-14&gaid=guerra-dos-tronos",
                    cover : "A_GUERRA_DOS_TRONOS.jpg",
					desc : "Quando Ed, lorde de Winterfell, aceita ser a Mão do Rei, não desconfia que sua vida está prestes a ruir.",
					price : "22,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "A Companhia Negra",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?alvo=autor+ou+titulo&pchave=glen+cook&orderby=menor_preco&memoria_queries=autor+ou+titulo+1v1+%252Ba%2520%252Bcompanhia%2520%252Bnegra&bestante=&fest=&bvendor=&section=&refinar=1&ffrete_gratis=&gacp=dia-da-toalha-14&gaid=companiha-negra",
                    cover : "A_COMPANHIA_NEGRA.jpg",
					desc : "Um grupo de mercenários se une ao exército de Dama, uma feiticeira que quer reconquistar tudo que perdeu.",
					price : "15,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Conan",
                    link : "http://www.estantevirtual.com.br/q/Conan-robert-howard?gacp=dia-da-toalha-14&gaid=conan",
                    cover : "CONAN__O_CIMERIO_VOLUME_I.jpg",
					desc : "A saga de Conan, o ladrão, pirata, rei, em histórias intensas, épicas e sombrias.",
					price : "5,00"
                },
                {
                    title : "A Espada Diabólica",
                    link : "http://www.estantevirtual.com.br/q/Michael-Moorcock-espada-diabolica?gacp=dia-da-toalha-14&gaid=espada-diabolica",
                    cover : "A_ESPADA_DIABOLICA.jpg",
					desc : "Elric, albino e fraco, recebe sua energia da espada diabólica que suga a alma das vítimas.",
					price : "4,00"
                }
            ]
        },
        fantasia_bbb : {
            title : "Vista seu manto e escolha!",
            face : "mago",
            books : [
                {
                    title : "O Hobbit",
                    link : "http://www.estantevirtual.com.br/q/tolkien-o-hobbit?gacp=dia-da-toalha-14&gaid=hobbit",
                    cover : "O_HOBBIT.jpg",
					desc : "Bilbo é um Hobbit que sai numa jornada em busca de um tesouro e encontra o 'Um Anel'.",
					price : "22,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "A Sociedade do Anel",
                    link : "http://www.estantevirtual.com.br/q/A-Sociedade-do-Anel?gacp=dia-da-toalha-14&gaid=sociedade-doa-nel",
                    cover : "A_SOCIEDADE_DO_ANEL.jpg",
					desc : "Um jovem hobbit é encarregado de iniciar uma perigosa viagem até as Fendas da Perdição para destruir o Anel do Poder.",
					price : "24,00"
                },
                {
                    title : "O Silmarillion",
                    link : "http://www.estantevirtual.com.br/q/O-Silmarillion-tolkien?gacp=dia-da-toalha-14&gaid=silmarillion",
                    cover : "O_SILMARILLION.jpg",
					desc : "Lendas derivadas de um passado remoto ao final da Terceira Era, ligadas às Silmarils, três gemas perfeitas criadas por Fëanor, o mais talentoso dos elfos.",
					price : "27,00"
                },
                {
                    title : "Eragon",
                    link : "http://www.estantevirtual.com.br/q/eragon-paolini?gacp=dia-da-toalha-14&gaid=eragon",
                    cover : "ERAGON.jpg",
					desc : "Um pacato rapaz se vê em meio a uma disputa pelo poder do Império. Livro repleto de magia, dragões, elfos e outros seres fantásticos.",
					price : "15,00"
                }
            ]
        },
        fantasia_c : {
            title : "Se prepare para começar a jornada e escolha!",
            face : "mago",
			books : [
                {
                    title : "A Torre Negra - O Pistoleiro",
                    link : "http://www.estantevirtual.com.br/q/torre-negra-stephen-king?gacp=dia-da-toalha-14&gaid=torre-negra",
                    cover : "O_PISTOLEIRO__A_TORRE_NEGRA_VOLI.jpg",
					desc : "Para evitar a completa destruição desse mundo já vazio e moribundo, Roland precisa alcançar a Torre Negra.",
					price : "14,90",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "As Crônicas de Nárnia",
                    link : "http://www.estantevirtual.com.br/q/As-Cronicas-de-Narnia-lewis?gacp=dia-da-toalha-14&gaid=cronicas-narnia",
                    cover : "AS_CRONICAS_DE_NARNIA.jpg",
					desc : "Quatro irmãos vivem verdadeiras aventuras com criaturas fantásticas e batalhas épicas entre o bem e o mal.",
					price : "12,00"
                },
                {
                    title : "Filhos do Éden",
                    link : "http://www.estantevirtual.com.br/q/Filhos-do-eden-Eduardo-Spohr?gacp=dia-da-toalha-14&gaid=filhos-eden",
                    cover : "FILHOS_DO_DEN.jpg",
					desc : "Durante uma guerra no céu, dois anjos são enviados a terra para resgatar uma capitã dos exércitos rebeldes.",
					price : "16,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "O Oceano no Fim do Caminho",
                    link : "http://www.estantevirtual.com.br/q/O-Oceano-no-Fim-do-Caminho?gacp=dia-da-toalha-14&gaid=ocenao-fim-caminho",
                    cover : "O_OCEANO_NO_FIM_DO_CAMINHO.jpg",
					desc : "Ele só tinha sete anos quando o inquilino de sua casa cometeu suicídio e despertou forças que de outro mundo. Agora sua família está em perigo e ele precisará defendê-los.",
					price : "14,00"
                }
            ]
        },
        ficcao : {
            title : "O Futuro nos espera! E onde vamos começar?",
            answers : {
                ficcao_a : "Na Terra!",
                ficcao_b : "No Espaço!",
                ficcao_c : "Na verdade eu não queria uma ficção, queria uma publicação científica..."
            }
        },
        ficcao_a : {
            title : "Que pergunta te interessa mais?",
            answers : {
                ficcao_aa : "Como vamos viver?",
                ficcao_ab : "Quando os aliens vão chegar?"
            }
        },
        ficcao_aa : {
            title : "Em que tipo de mundo?",
            answers : {
                ficcao_aaa : "Cyberpunk",
                ficcao_aab : "Subterrâneo",
                ficcao_aac : "Nenhum dos dois"
            }
        },
        ficcao_aaa : {
            title : "Então conecte-se e escolha",
            books : [
                {
                    title : "Nevasca",
                    link : "http://www.estantevirtual.com.br/q/Neal-Stephenson-nevasca?gacp=dia-da-toalha-14&gaid=nevasca",
                    cover : "NEVASCA.jpg",
					desc : "Em um futuro dominado por mercenários e corporações, um samurai precisa proteger o mundo real e virtual.",
					price : "22,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "Neuromancer",
                    link : "http://www.estantevirtual.com.br/q/Neuromancer-William-Gibson?gacp=dia-da-toalha-14&gaid=neuromancer",
                    cover : "NEUROMANCER.jpg",
					desc : "Na Terra, estações espaciais e realidade virtual, o jogo final da humanidade contra as Inteligências Artificiais.",
					price : "26,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "O Caçador de Andróides",
                    link : "http://www.estantevirtual.com.br/q/O-Cacador-de-Androides-philip-dick?gacp=dia-da-toalha-14&gaid=cacador-de-androides",
                    cover : "O_CACADOR_DE_ANDROIDES.jpg",
					desc : "Um caçador de recompensas recebe a perigosa missão de capturar um grupo de andróides rebeldes.",
					price : "50,00",
					flag : "ev-only"
                },
                {
                    title : "Piratas de Dados",
                    link : "http://www.estantevirtual.com.br/q/Bruce-Sterling-piratas-dados?gacp=dia-da-toalha-14&gaid=piratas-dados",
                    cover : "PIRATAS_DE_DADOS.jpg",
					desc : "No futuro, a informação é o bem mais precioso. Os dados são trancados em computadores e racionados.",
					price : "14,00",
					flag : "ev-only"
                }
            ]
        },
        ficcao_aab : {
            title : "Prepare sua lanterna e escolha",
            books : [
                {
                    title : "Silo",
                    link : "http://www.estantevirtual.com.br/q/silo-hugh?gacp=dia-da-toalha-14&gaid=silo",
                    cover : "SILO.jpg",
					desc : "Em um futuro hostil, Juliette é uma das sobreviventes confinada em um gigantesco silo subterrâneo. Ela se recusa a seguir as regras impostas pelo local, um crime cuja punição é mortal.",
					price : "36,90"
                },
                {
                    title : "20.000 Léguas Submarinas",
                    link : "http://www.estantevirtual.com.br/q/Leguas-Submarinas-verne?gacp=dia-da-toalha-14&gaid=20-mil-leguas-submarinas",
                    cover : "20_MIL_LEGUAS_SUBMARINAS.jpg",
					desc : "No século XIX, o capitão Nemo e sua tripulação vivem no submarino Nautilus, com contato com o mundo.",
					price : "5,00",
					flag : "economy",
					economy : "80"
                },
                {
                    title : "Viagem ao Centro da Terra",
                    link : "http://www.estantevirtual.com.br/q/verne-viagem-centro-terra?gacp=dia-da-toalha-14&gaid=viagem-centro-terra",
                    cover : "VIAGEM_AO_CENTRO_DA_TERRA.jpg",
					desc : "Buscando chegar ao centro da terra, três viajantes irão encontrar um mundo paralelo.",
					price : "9,90",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "Caça aos Robôs",
                    link : "http://www.estantevirtual.com.br/q/Caca-aos-Robos-asimov?gacp=dia-da-toalha-14&gaid=caca-aos-robos",
                    cover : "CACA_AOS_ROBOS.jpg",
					desc : "Em cavernas de aço que são as cidades terrestres do futuro,  moram seres humanos que jamais viram o sol.",
					price : "16,00",
					flag : "ev-only"
                }
            ]
        },
        ficcao_aac : {
            title : "Então escolha entre esses possíveis futuros",
            books : [
                {
                    title : "A Revolução dos Bichos",
                    link : "http://www.estantevirtual.com.br/q/George-orwell-Revolucao-dos-Bichos?gacp=dia-da-toalha-14&gaid=revolucao-bichos",
                    cover : "revolucao-dos-bichos.jpg",
					desc : "Uma fábula sobre o poder. Narra a insurreição de animais de uma granja contra seus donos que degenera numa tirania ainda mais opressiva.",
					price : "15,00"
                },
                {
                    title : "Fahrenheit 451",
                    link : "http://www.estantevirtual.com.br/q/Fahrenheit-451?gacp=dia-da-toalha-14&gaid=fahrenheit-451",
                    cover : "fahrenheit451.jpeg",
					desc : "Uma época em que os livros são uma ameaça e estão proibidos. Esse é o mundo de Guy Montag, que ao se sentir incomodado com o poder vigente, tenta mudar a sociedade e encontrar sua felicidade.",
					price : "13,90"
                },
                {
                    title : "Admirável Mundo Novo",
                    link : "http://www.estantevirtual.com.br/q/Admiravel-Mundo-Novo-aldous?gacp=dia-da-toalha-14&gaid=admiravel-mundo-novo",
                    cover : "admiravel-mundo-novo2.jpg",
					desc : "Os seres humanos (pré-condicionados) têm comportamentos (pré-estabelecidos) e ocupam lugares (pré-determinados) na sociedade.",
					price : "14,00",
					flag : "ev-only"
                },
                {
                    title : "Laranja Mecânica",
                    link : "http://www.estantevirtual.com.br/q/laranja-mecanica-Burgess?gacp=dia-da-toalha-14&gaid=laranja-mecanica",
                    cover : "laranja-mecanica.jpg",
					desc : "Diante de uma sociedade extremamente violenta e um governo totalitário, acompanhamos o mundo adolescente pela perspectiva de Alex DeLarge, que leva a vida de forma desregrada.",
					price : "27,90"
                }
            ]
        },
        ficcao_ab : {
            title : "Se prepare para um contato imediato e escolha",
            face : "alien",
            books : [
                {
                    title : "Guerra dos Mundos",
                    link : "http://www.estantevirtual.com.br/q/guerra-dos-mundos-wells?gacp=dia-da-toalha-14&gaid=guerra-mundos",
                    cover : "A_GUERRA_DOS_MUNDOS.jpg",
					desc : "Uma invasão marciana chega à Terra com suas máquinas assassinas.",
					price : "13,00",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "Encontro com Rama",
                    link : "http://www.estantevirtual.com.br/q/Encontro-com-Rama-Clarke?gacp=dia-da-toalha-14&gaid=encontro-rama",
                    cover : "ENCONTRO_COM_RAMA.jpg",
					desc : "Uma expedição enviada para explorar um imenso meteoro que é, na verdade, uma sofisticada construção.",
					price : "20,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "O Fim da Infância",
                    link : "http://www.estantevirtual.com.br/q/O-fim-da-infancia-clarke?gacp=dia-da-toalha-14&gaid=fim-infancia",
                    cover : "O_FIM_DA_INFANCIA.jpg",
					desc : "Fomos dominados por alienígenas que, mesmo sem pousar em nosso planeta, impõem uma 'ditadura benigna'.",
					price : "21,90",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "Contato",
                    link : "http://www.estantevirtual.com.br/q/Contato-Carl-sagan?gacp=dia-da-toalha-14&gaid=contato",
                    cover : "CONTATO.jpg",
					desc : "Sinais captados num radiotelescópio podem nos fazer repensar toda a nossa concepção da vida e do Universo.",
					price : "24,70",
					flag : "economy",
					economy : "60"
                }
            ]
        },
        ficcao_b : {
            title : "E chegando lá...",
            face : "astronaut",
            answers : {
                ficcao_ba : "Vamos explorar",
                ficcao_bb : "Vamos entrar em guerra"
            }
        },
        ficcao_ba : {
            title : "Ligue os propulsores e escolha:",
            face : 'astronaut',
            books : [
                {
                    title : "2001 Odisséia Espacial",
                    link : "http://www.estantevirtual.com.br/q/2001-odisseia-Arthur-Clarke?gacp=dia-da-toalha-14&gaid=2001-odisseia-espacial",
                    cover : "2001_odisseia.jpg",
					desc : "A nave Discovery conta com HAL, um computador que guia o curso da nave e também das vidas a bordo dela.",
					price : "25,00",
					flag : "ev-only"
                },
                {
                    title : "2010 uma Odisséia no Espaço II",
                    link : "http://www.estantevirtual.com.br/q/2010-uma-Odisseia-no-Espaco-II?gacp=dia-da-toalha-14&gaid=2010-odisseia-espaco",
                    cover : "2010-uma-odisseia-espaco-ii.jpg",
					desc : "Uma continuação da história da nave Discovery, comandada pelo Dr. Heywood Floyd, que parte em uma missão para resgatar a primeira nave.",
					price : "12,00"
                },
                {
                    title : "A Máquina do Tempo",
                    link : "http://www.estantevirtual.com.br/q/A-Maquina-do-Tempo-wells?gacp=dia-da-toalha-14&gaid=maquina-tempo",
                    cover : "A_MAQUINA_DO_TEMPO.jpg",
					desc : "A jornada de um cientista inglês a um mundo futuro, desconhecido e perigoso.",
					price : "8,00"
                },
                {
                    title : "O Guia do Mochileiro das Galáxias",
                    link : "http://www.estantevirtual.com.br/q/guia-do-mochileiro-das-galaxias?gacp=dia-da-toalha-14&gaid=guia-mochileiro-galaxias",
                    cover : "O_GUIA_DO_MOCHILEIRO_DAS_GALAXIAS.jpg",
					desc : "Comédia que narra as viagens de Arthur Dent, depois que a terra é destruida.",
					price : "10,00",
					flag : "economy",
					economy : "40"
                }
            ]
        },
        ficcao_bb : {
            title : "Levante os campos de força e escolha:",
            face : 'storm_trooper',
            books : [
                {
                    title : "O Jogo do Exterminador",
                    link : "http://www.estantevirtual.com.br/q/Jogo-do-exterminador?gacp=dia-da-toalha-14&gaid=jogo-exterminador",
                    cover : "O_JOGO_DO_EXTERMINADOR.jpg",
					desc : "A Terra está em guerra com alienígenas e crianças são recrutadas para a Escola de Combate Espacial.",
					price : "60,00",
					flag : "ev-only"
                },
                {
                    title : "Eu, Robô",
                    link : "http://www.estantevirtual.com.br/q/eu-robo-asimov?gacp=dia-da-toalha-14&gaid=eu-robo",
                    cover : "eu-robo-isaac-asimov.jpg",
					desc : "Nove histórias sobre a evolução das máquinas, desde os primitivos homens mecânicos mudos até a máquina que controlaria o mundo e tornaria obsoletos os seres humanos.",
					price : "20,00"
                },
                {
                    title : "Duna",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?pchave=Frank+Herbert+duna+-messias+-filhos+-hereges+-imperador&alvo=autor+ou+titulo&gacp=dia-da-toalha-14&gaid=duna",
                    cover : "DUNA.jpg",
					desc : "Paul Atreides chega ao planeta deserto Arrakis e encara uma intrincada teia política e religiosa.",
					price : "30,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Poeira de Estrelas",
                    link : "http://www.estantevirtual.com.br/q/poeira-de-estrelas-asimov?gacp=dia-da-toalha-14&gaid=poeira-de-estrelas",
                    cover : "POEIRA_DE_ESTRELAS.jpg",
					desc : "Um jovem estudante em fuga pelo espaço, perseguido pelos implacáveis tiranianos, busca o mundo rebelde.",
					price : "8,00",
					flag : "ev-only"
                }
            ]
        },
        ficcao_c : {
            title : "Então se prepare para aprender e escolha:",
            books : [
                {
                    title : "O Universo numa Casca de Noz",
                    link : "http://www.estantevirtual.com.br/q/Universo-numa-Casca-de-Noz?gacp=dia-da-toalha-14&gaid=universo-casca-nos",
                    cover : "O_UNIVERSO_NUMA_CASCA_DE_NOZ.jpg",
					desc : "O leitor é apresentado a gênios responsáveis pelos muitos avanços da Física, dando grande destaque à física teórica e moderna..",
					price : "23,00",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "Almanaque das Curiosidades Matemáticas",
                    link : "http://www.estantevirtual.com.br/q/Curiosidades-Matematicas-stewart?gacp=dia-da-toalha-14&gaid=almanaque-curiosidades-matematicas",
                    cover : "ALMANAQUE_DAS_CURIOSIDADES_MATEMATICAS.jpg",
					desc : "Um conjunto de casos matemáticos notáveis, explicados de forma simples e com bom humor.",
					price : "25,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Uma Breve História de Quase Tudo",
                    link : "http://www.estantevirtual.com.br/q/uma-breve-historia-de-quase-tudo?gacp=dia-da-toalha-14&gaid=breve-historia-quase-tudo",
                    cover : "BREVE_HISTORIA_DE_QUASE_TUDO.jpg",
					desc : "Uma tentativa épica de entender tudo o que sabemos sobre o mundo em um delicioso guia de viagens pela ciência.",
					price : "40,00"
                },
                {
                    title : "Operação Cavalo de Tróia",
                    link : "http://www.estantevirtual.com.br/q/Operacao-Cavalo-de-Troia?gacp=dia-da-toalha-14&gaid=operacao-cavalo-troia",
                    cover : "operacao-cavalo-de-troia.jpg",
					desc : "Relato de um militar e cientista norte-americano que participou de uma experiência que lhe permitiu voltar quase dois mil anos no tempo e ser testemunha ocular da vida de Jesus Cristo.",
					price : "14,90"
                }
            ]
        },
        outros : {
            title : "E que tal...",
            answers : {
                outros_a : "Pessoas não tão comuns",
                outros_b : "Futuros assustadores"
            }
        },
        outros_a : {
            title : "O que elas fazem?",
            answers : {
                outros_aa : "Que viajam no tempo",
                outros_ab : "Que bebem sangue"
            }
        },
        outros_aa : {
            title : "Prepare seu capacitor de fluxo e escolha:",
            books : [
                {
                    title : "A Mulher do Viajante no Tempo",
                    link : "http://www.estantevirtual.com.br/q/A-Mulher-do-Viajante-no-Tempo?gacp=dia-da-toalha-14&gaid=mulher-viajante-tempo",
                    cover : "A_MULHER_DO_VIAJANTE_DO_TEMPO.jpg",
					desc : "Henry tem um distúrbio incontrolável que o faz viajar no tempo para diferentes momentos da sua vida com sua esposa.",
					price : "16,00",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "A Viajante do Tempo, série Ourlander",
                    link : "http://www.sestantevirtual.com.br/q/diana-gabaldon-tempo?gacp=dia-da-toalha-14&gaid=viajante-tempo-ourlander",
                    cover : "A_VIAJANTE_DO_TEMPO.jpg",
					desc : "Claire é uma mulher que busca seu verdadeiro amor enquanto participa de importantes acontecimentos da história.",
					price : "31,60",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "A Máquina do Tempo",
                    link : "http://www.estantevirtual.com.br/q/a-maquina-do-tempo-wells?gacp=dia-da-toalha-14&gaid=maquina-tempo",
                    cover : "A_MAQUINA_DO_TEMPO.jpg",
					desc : "A mais espantosa invenção, capaz de levar seu criador a uma viagem através de milhares de anos de transformações da Terra.",
					price : "10,00",
					flag : "economy",
					economy : "70"
                },
                {
                    title : "Matadouro 5",
                    link : "http://www.estantevirtual.com.br/q/kurt-vonnegut-matadouro?gacp=dia-da-toalha-14&gaid=matadouro-5",
                    cover : "MATADOURO_5.jpg",
					desc : "Billy é um soldado que viaja no tempo, para outros planetas, e revisita diversos momentos da sua própria vida.",
					price : "17,00"
                }
            ]
        },
        outros_ab : {
            title : "Traga o alho, a cruz e escolha:",
            books : [
                {
                    title : "O Vampiro Lestat",
                    link : "http://www.estantevirtual.com.br/q/O-Vampiro-Lestat?gacp=dia-da-toalha-14&gaid=vampiro-lestat",
                    cover : "O_VAMPIRO_LESTAT.jpg",
					desc : "A obra acompanha a longa trajetória do vampiro Lestat, desde a sua infância aristocrática até o seu sucesso como estrela do rock.",
					price : "21,00"
                },
                {
                    title : "A Passagem",
                    link : "http://www.estantevirtual.com.br/q/A-Passagem-Justin?gacp=dia-da-toalha-14&gaid=passagem",
                    cover : "A_PASSAGEM.jpg",
					desc : "Uma pequena comunidade tenta sobreviver em um mundo dominado por humanos que comem qualquer tipo de ser, resultado de uma pesquisa científica que deu errado.",
					price : "15,00"
                },
                {
                    title : "Drácula",
                    link : "http://www.estantevirtual.com.br/q/dracula-bram-stoker?gacp=dia-da-toalha-14&gaid=dracula",
                    cover : "DRACULA.jpg",
					desc : "Inspirado em relatos do folclore romeno e na saga do príncipe Vlad Drakul, que lutou contra os turcos nas Cruzadas.",
					price : "14,90"
                },
                {
                    title : "Os Sete",
                    link : "http://www.estantevirtual.com.br/q/Vianco-os-sete?gacp=dia-da-toalha-14&gaid=os-sete",
                    cover : "OS_SETE.jpg",
					desc : "É descoberta uma caravela portuguesa naufragada no litoral brasileiro. Dentro, sete cadáveres aprisionados, acusados de bruxaria.",
					price : "12,00",
					flag : "economy",
					economy : "60"
                }
            ]
        },
        outros_b : {
            title : "E como vai ser?",
            answers : {
                outros_ba : "Quando o mundo é destruído",
                outros_bb : "Quando as pessoas não tem direitos"
            }
        },
        outros_ba : {
            title : "Prepare o kit de sobrevivência ao apocalipse e escolha:",
            books : [
                {
                    title : "A Dança da Morte",
                    link : "http://www.estantevirtual.com.br/q/danca-da-morte-stephen-king?gacp=dia-da-toalha-14&gaid=dança-morte",
                    cover : "A_DANCA_DA_MORTE.jpg",
					desc : "Uma poderosa arma biológica acaba com grande parte da população, sobrevivendo apenas os poucos resistentes ao vírus.",
					price : "50,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "A Estrada",
                    link : "http://www.estantevirtual.com.br/q/a-estrada-cormac?gacp=dia-da-toalha-14&gaid=estrada",
                    cover : "A_ESTRADA.jpg",
					desc : "O planeta foi totalmente devastado. Um homem e seu filho buscam a salvação sem saber o que encontrarão no final da viagem..",
					price : "20,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Mundo Sem Fim",
                    link : "http://www.estantevirtual.com.br/q/Mundo-sem-Fim-Ken?gacp=dia-da-toalha-14&gaid=mundo-sem-fim",
                    cover : "MUNDO_SEM_FIM.jpg",
					desc : "Acompanhe a trajetória de quatro crianças que, ao presenciarem um crime, se comprometem a mantê-lo em segredo.",
					price : "50,00"
                },
                {
                    title : "Sob a Redoma",
                    link : "http://www.estantevirtual.com.br/q/Sob-a-redoma?gacp=dia-da-toalha-14&gaid=sob-a-redoma",
                    cover : "SOB_A_REDOMA.jpg",
					desc : "A pequena cidade Chester's Mill é subitamente isolada do resto do mundo por um campo de força invisível que expõe os medos e as ambições de cada cidadão.",
					price : "45,00"
                }
            ]
        },
        outros_bb : {
            title : "Esqueça a constituição e escolha:",
            books : [
                {
                    title : "O Processo",
                    link : "http://www.estantevirtual.com.br/q/O-Processo-kafka?gacp=dia-da-toalha-14&gaid=processo",
                    cover : "O_PROCESSO.jpg",
					desc : "O bancário Joseph K. é preso, julgado e condenado por razões que nunca chega a descobrir. Um clássico kafkaniano que mistura sonhos e pesadelos com situações corriqueiras.",
					price : "8,50",
                },
                {
                    title : "O Senhor das Moscas",
                    link : "http://www.estantevirtual.com.br/q/O-Senhor-das-Moscas?gacp=dia-da-toalha-14&gaid=senhor-das-moscas",
                    cover : "senhor-das-moscas.jpg",
					desc : "Após um bombardeio atômico, um grupo de jovens passa a viver em uma ilha deserta, reconstituindo os valores da vida em sociedade.",
					price : "27,92",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "Admirável Mundo Novo",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?pchave=huxley+admir%E1vel+mundo+novo+-regresso&alvo=autor+ou+titulo&gacp=dia-da-toalha-14&gaid=admiravel-mundo-novo",
                    cover : "ADMIRAVEL_MUNDO_NOVO.jpg",
					desc : "Os seres humanos (pré-condicionados) têm comportamentos (pré-estabelecidos) e ocupam lugares (pré-determinados) na sociedade.",
					price : "9,00",
					flag : "economy",
					economy : "70"
                },
                {
                    title : "Jogos Vorazes",
                    link : "http://www.estantevirtual.com.br/q/jogos-vorazes?gacp=dia-da-toalha-14&gaid=jogos-vorazes",
                    cover : "JOGOS_VORAZES.jpg",
					desc : "A Capital demonstra seu poder com uma competição transmitida ao vivo, em que garotos de cada distrito são obrigados a lutar até a morte.",
					price : "19,90",
					flag : "economy",
					economy : "40"
                }
            ]
        },
        hq : {
            title : "Qual dessas perguntas te interessa mais?",
            face : "superman",
            answers : {
                hq_a : "Quem vai nos proteger?",
                hq_b : "E se o mundo fosse bem diferente?",
                hq_c : "Nenhuma delas. Me mostre quadrinhos Cult",
                hq_d : "Cansei dessas histórias gringas, quero ver HQs nacionais!"
            }
        },
        hq_a : {
            title : "Escolha seu campeão!",
            answers : {
                hq_aa : "Super Herói!",
                hq_ab : "Grupo secreto",
                hq_ac : "Eu mesmo"
            }
        },
        hq_aa : {
            title : "Como será o herói?",
            answers : {
                hq_aaa : "Vestindo collant e capa",
                hq_aab : "Batman!"
            }
        },
        hq_aaa : {
            title : "Vista a sua lycra colorida e escolha:",
            face : "superman",
            books : [
                {
                    title : "Superman",
                    link : "http://www.estantevirtual.com.br/qtit/Superman?gacp=dia-da-toalha-14&gaid=superman",
                    desc : "Clark Kent pode parecer um jornalista normal, mas possui poderes especiais que usa para combater o mal como o herói Superman.",
					cover : "SUPERMAN_ENTRE_A_FOICE_E_O_MARTELO.jpg",
					price : "2,00"
                },
                {
                    title : "Demolidor",
                    link : "http://www.estantevirtual.com.br/qtit/Demolidor?gacp=dia-da-toalha-14&gaid=demolidor",
                    desc : "Matthew é deficiente visual, mas possui seus outros sentidos muito aguçados. Ele assume a identidade de Demolidor para vingar a morte de seu pai.",
					cover : "DEMOLIDOR.jpg",
					price : "2,90"
                },
                {
                    title : "Reino do Amanhã",
                    link : "http://www.estantevirtual.com.br/q/Reino-do-Amanha-alex?gacp=dia-da-toalha-14&gaid=reino-amanha",
                    desc : "Nesse universo da DC Comics, os super-heróis, como Superman, estão aposentados e o mundo está nas mãos de novos heróis sem virtudes.",
					cover : "REINO_DO_AMANHA.jpg",
					price : "18,00"
                },
                {
                    title : "Marvels",
                    link : "http://www.estantevirtual.com.br/q/Kurt-Busiek-marvels?gacp=dia-da-toalha-14&gaid=marvels",
                    desc : "Vivendo nas sombras dos Super-heróis, existem aqueles que os veem com um misto de medo, descrença, inveja e admiração.",
					cover : "MARVELS.jpg",
					price : "7,00"
                }
            ]
        },
        hq_aab : {
            title : "Estacione o batmóvel e escolha:",
            face : "superman",
            books : [
                {
                    title : "Batman - Asilo Arkham",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?pchave=Batman+Asilo+Arkham+-retorno&alvo=autor+ou+titulo&gacp=dia-da-toalha-14&gaid=batman-asilo-arkham",
                    desc : "Liderados pelo Coringa, os pacientes fazem os empregados do Asilo reféns, que só serão libertados quando o Batman se entregar.",
					cover : "BATMAN__ASILO_ARKHAM.jpg",
					price : "20,00"
                },
                {
                    title : "Batman - Longo Dia das Bruxas",
                    link : "http://www.estantevirtual.com.br/q/Batman-dia-das-bruxas?gacp=dia-da-toalha-14&gaid=batman-longo-dia-bruxas",
                    desc : "Uma série de assassinatos ocorridos em datas festivas e sempre relacionados ao submundo dos gângsteres de Gotham City",
					cover : "BATMAN_O_LONGO_DIA_DAS_BRUXAS.jpg",
					price : "5,00"
                },
                {
                    title : "Batman - O Cavaleiro das Trevas",
                    link : "http://www.estantevirtual.com.br/q/Batman-cavaleiro-das-trevas?gacp=dia-da-toalha-14&gaid=batman-cavaleiro-trevas",
                    desc : "Bruce Wayne, sexagenário, observa Gothan sendo destruída pela criminalidade. Como um último ato, decide voltar como Batman.",
					cover : "BATMAN__O_CAVALEIRO_DAS_TREVAS.jpg",
					price : "3,90"
                },
                {
                    title : "Batman - Justiça Cega",
                    link : "http://www.estantevirtual.com.br/q/batman-justica-cega?gacp=dia-da-toalha-14&gaid=batman-justica-cega",
                    desc : "Um cartel criminoso toma conta da Wayne Interprises e incrimina Bruce Wayne, utilizando-se do passado misterioso do empresário.",
					cover : "BATMAN_ANUAL.jpg",
					price : "5,00"
                }
            ]
        },
        hq_ab : {
            title : "Prepare o quartel general e escolha:",
            face : "superman",
            books : [
                {
                    title : "Liga Extraordinária",
                    link : "http://www.estantevirtual.com.br/q/Liga-extraordinaria?gacp=dia-da-toalha-14&gaid=liga-extraordinaria",
                    desc : "Allan Quatermain, Capitão Nemo, Hawley Griffin, Dr. Jekyll, Sr. Hyde e a Srta. Mina Murray trabalham a serviço do império britânico.",
					cover : "A_LIGA_EXTRAORDINARIAN_VOL_I.jpg",
					price : "33,00"
                },
                {
                    title : "Hellboy",
                    link : "http://www.estantevirtual.com.br/q/Mike-Hellboy?gacp=dia-da-toalha-14&gaid=hellboy",
                    desc : "Invocado do inferno e criado com valores humanos por um cientista, Hellboy integra o Bureau de Pesquisa e Defesa Paranormal.",
					cover : "HELLBOY__SEMENTES_DA_DESTRUICAO.jpg",
					price : "6,00"
                },
                {
                    title : "Invisíveis",
                    link : "http://www.estantevirtual.com.br/q/Grant-Morrison-invisiveis?gacp=dia-da-toalha-14&gaid=invisiveis",
                    desc : "Uma 'célula' de um grupo anarquista e terrorista tem como objetivo libertar a humanidade do domínio de seres transdimensionais",
					cover : "OS_INVISIVEIS.jpg",
					price : "3,00"
                },
                {
                    title : "Frequência Global",
                    link : "http://www.estantevirtual.com.br/q/Frequencia-global-Ellis-Warren?gacp=dia-da-toalha-14&gaid=frequencia-global",
                    desc : "Uma organização mundial de resgate com 1001 agentes de diversosos campos, desde Bioengenheiros a atletas de Le Parkour.",
					cover : "FREQUENCIA_GLOBAL.jpg",
					price : "2,00"
                }
            ]
        },
        hq_ac : {
            title : "E como quer lutar?",
            answers : {
                hq_aca : "Sozinho contra o mundo",
                hq_acb : "Com a ajuda dos amigos"
            }
        },
        hq_aca : {
            title : "Prepare suas armas e escolha:",
            face : "superman",
            books : [
                {
                    title : "Conan",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&pchave=%2Bconan&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bconan&just_remodeling=1&gacp=dia-da-toalha-14&gaid=conan",
                    desc : "Conan, o bárbaro, o ladrão, o pirata, o rei, desde que saiu de sua terra natal, a ciméria",
					cover : "CONAN_A1.jpg",
					price : "1,50"
                },
                {
                    title : "Y - O Último Homem",
                    link : "http://www.estantevirtual.com.br/q/O-ultimo-Homem-Brian?gacp=dia-da-toalha-14&gaid=o-hultimo-homem",
                    desc : "Em 2002, todos os mamíferos que possuiam o cromossomo Y são dizimados do mundo. Menos  Yorick Brown, um jovem ilusionista, e seu macaco.",
					cover : "Y__O_LTIMO_HOMEM.jpg",
					price : "15,00"
                },
                {
                    title : "Preacher",
                    link : "http://www.estantevirtual.com.br/q/Preacher&gacp=dia-da-toalha-14&gaid=preacher",
                    desc : "Um ex-pastor é possuído por uma entidade sobrenatural que lhe confere o poder de fazer com que qualquer pessoa o obedeça.",
					cover : "PREACHER__1_EDICAO.jpg",
					price : "2,00"
                },
                {
                    title : "Hellblazer",
                    link : "http://www.estantevirtual.com.br/q/Hellblazer?gacp=dia-da-toalha-14&gaid=hellblazer",
                    desc : "Arrogante, negligente e enganador, John Constantine é um exorcista, ainda que use seus poderes de forma um tanto sutil",
					cover : "HELLBLAZER_A1.jpg",
					price : "3,00"
                }
            ]
        },
        hq_acb : {
            title : "Chame a galera e escolha:",
            face : "superman",
            books : [
                {
                    title : "Walking Dead",
                    link : "http://www.estantevirtual.com.br/q/Walking-Dead?gacp=dia-da-toalha-14&gaid=walking-dead",
                    desc : "Zumbis tomaram a terra e o policial Rick Grimes busca sua família num mundo devastado pelos mortos-vivos.",
					cover : "THE_WALKING_DEAD_A1.jpg",
					price : "5,00"
                },
                {
                    title : "Asterix",
                    link : "http://www.estantevirtual.com.br/q/Asterix-Rene?gacp=dia-da-toalha-14&gaid=asterix",
                    desc : "Asterix vive em uma pequena aldeia gaulesa ao norte da antiga Gália que resiste ao domínio romano. Tudo graças a uma porção mágica que lhe dá uma superforça.",
					cover : "ASTERIX_O_GAULES.jpg",
					price : "14,00"
                },
                {
                    title : "Planetary",
                    link : "http://www.estantevirtual.com.br/q/Planetary-ellis?gacp=dia-da-toalha-14&gaid=planetary",
                    desc : "O Planetary é uma organização que busca a história secreta do mundo. Fazem parte dela super seres como Jakita Wagner, O Baterista e o recruta Elijah Snow.",
                    cover : "PLANETARY__MUNDO_ESTRANHO.jpg",
                    price : "10,00"
                },
                {
                    title : "30 dias de noite",
                    link : "http://www.estantevirtual.com.br/q/30-dias-de-noite?gacp=dia-da-toalha-14&gaid=30-dias-noite",
                    desc : "No Alasca uma cidade passa, todo ano, 30 dias sem sol. A longa e gélida escuridão atrái um grupo de vampiros famintos.",
					cover : "30_DIAS_DE_NOITES.jpg",
					price : "25,00"
                }
            ]
        },
        hq_b : {
            title : "Diferente como?",
            answers : {
                hq_ba : "Fábulas e sonhos",
                hq_bb : "Distopias",
                hq_bc : "Nem tanto. Que tal noir?"
            }
        },
        hq_ba : {
            title : "Esqueça a realidade e escolha:",
            face : "superman",
            books : [
                {
                    title : "Stardust - O Mistério da Estrela",
                    link : "http://www.estantevirtual.com.br/q/Neil-gaiman-stardust?gacp=dia-da-toalha-14&gaid=stardust",
                    desc : "Na Inglaterra vitoriana, a calma de uma vila é interrompida por uma feira mágica.",
					cover : "STARDUST.jpg",
					price : "8,00"
                },
                {
                    title : "Sandman",
                    link : "http://www.estantevirtual.com.br/q/Sandman-neil-gaiman?gacp=dia-da-toalha-14&gaid=sandman",
                    desc : "As mentes de todos os seres vivos estão ligadas ao reino de Morpheus, o Sonhar. Para lá vão as almas de todos os que dormem.",
					cover : "SANDMAN_N_1.jpg",
					price : "2,40"
                },
                {
                    title : "Livros da Magia",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&pchave=%2Blivros%20%2Bda%20%2Bmagia&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Blivros%20%2Bda%20%2Bmagia&just_remodeling=1&gacp=dia-da-toalha-14&gaid=livros-magia",
                    desc : "Tim é um jovem suburbano inglês aparentemente normal, mas que pode se tornar o maior mago do mundo.",
					cover : "OS_LIVROS_DA_MAGIA.jpg",
					price : "3,90"
                },
                {
                    title : "Monstro do Pântano",
                    link : "http://www.estantevirtual.com.br/q/Pantano-alan-moore?gacp=dia-da-toalha-14&gaid=monstro-pantano",
                    desc : "O Monstro do Pântano é criado após um acidente biológico. Em busca de sua identidade, vive diversas histórias.",
					cover : "MONSTRO_DO_PANTANO_N_1.jpg",
					price : "5,50"
                }
            ]
        },
        hq_bb : {
            title : "Veja o mundo decadente e escolha:",
            face : "superman",
            books : [
                {
                    title : "Watchmen",
                    link : "http://www.estantevirtual.com.br/q/Watchmen-Alan-Moore-?gacp=dia-da-toalha-14&gaid=watchmen",
                    desc : "Em uma realidade decadente na qual heróis são uma presença real na história da humanidade, um drama de crime e aventura.",
					cover : "WATCHMEN.jpg",
					price : "8,00"
                },
                {
                    title : "Transmetropolitan",
                    link : "http://www.estantevirtual.com.br/q/Transmetropolitan?gacp=dia-da-toalha-14&gaid=transmetropolitan",
                    desc : "A luta contra o abuso de poder e a corrupção, tentando evitar que esse mundo futurista se torne ainda mais distópico.",
					cover : "TRANSMETROPOLITAN_N_1.jpg",
					price : "3,00"
                },
                {
                    title : "DMZ",
                    link : "http://www.estantevirtual.com.br/q/DMZ-Brian-Wood?gacp=dia-da-toalha-14&gaid=dmz",
                    desc : "Manhattan é o ponto que divide os EUA do Estado Livre. Um jornalista é enviado para cobrir o cessar fogo e se vê em meio ao conflito.",
					cover : "DMZ.jpg",
					price : "10,00"
                },
                {
                    title : "V de Vingança",
                    link : "http://www.estantevirtual.com.br/q/vinganca-alan-moore?gacp=dia-da-toalha-14&gaid=v-vinganca",
                    desc : "Numa Inglaterra totalitária, uma figura misteriosa chamada simplesmente V luta para que haja liberdade novamente.",
					cover : "V_DE_VINGANCA.jpg",
					price : "15,00"
                }
            ]
        },
        hq_bc : {
            title : "Coloque seu sobretudo e escolha:",
            face : "noir",
            books : [
                {
                    title : "The Spirit",
                    link : "http://www.estantevirtual.com.br/q/Will-Eisner-Spirit?gacp=dia-da-toalha-14&gaid=spirit",
                    desc : "O cais é o seu cenário predileto. As ruas escuras são seu lar. Aventura e perigo são seus inseparáveis companheiros.",
					cover : "THE_SPIRIT__A1.jpg",
					price : "2,25"
                },
                {
                    title : "Sin City",
                    link : "http://www.estantevirtual.com.br/q/Sin-City?gacp=dia-da-toalha-14&gaid=sin-city",
                    desc : "Uma cidade com ruas pavimentadas com corrupção e ódio e becos que escondem crimes que ninguém quer tomar conhecimento.",
					cover : "SIN_CITY__CIDADE_DO_PECADO.jpg",
					price : "4,50"
                },
                {
                    title : "Do Inferno",
                    link : "http://www.estantevirtual.com.br/q/do-inferno-alan-moore?gacp=dia-da-toalha-14&gaid=do-inferno",
                    desc : "Alan Moore nesse quadrinho especula sobre as motivações e a identidade de um dos assassinos em série que chocou Londres:  Jack, o estripador.",
					cover : "DO_INFERNO.jpg",
					price : "43,20"
                },
                {
                    title : "100 Balas",
                    link : "http://www.estantevirtual.com.br/q/100-balas?gacp=dia-da-toalha-14&gaid=100-balas",
                    desc : "Dentro de uma maleta uma arma, 100 cápsulas de munição irrastreáveis e as provas contra quem arruinou a vida do presenteado.",
					cover : "100_BALAS.jpg",
					price : "1,99"
                }
            ]
        },
        hq_c : {
            title : "Que tipo de história quer ler?",
            answers : {
                hq_ca : "Políticas",
                hq_cb : "Aventuras",
                hq_cc : "Nenhum deles"
            }
        },
        hq_ca : {
            title : "Leia o jornal e escolha:",
            face : "superman",
            books : [
                {
                    title : "Persepolis",
                    link : "http://www.estantevirtual.com.br/q/Persepolis?gacp=dia-da-toalha-14&gaid=persepolis",
                    desc : "Nascida numa família moderna e politizada, em 1979 Marjane assistiu ao início da revolução xiita no Irã.",
					cover : "PERSEPOLISP.jpg",
					price : "13,00"
                },
                {
                    title : "Crime e Castigo",
                    link : "http://www.estantevirtual.com.br/q/John-Higgins-crime-e-castigo?gacp=dia-da-toalha-14&gaid=crime-castigo",
                    desc : "Um jovem comete um crime que tenta justificar pela teoria de que grandes homens foram assassinos absolvidos pela História.",
					cover : "CRIME_E_CASTIGO.jpg",
					price : "5,00"
                },
                {
                    title : "Palestina: uma Nação Ocupada",
                    link : "http://www.estantevirtual.com.br/q/joe-sacco-palestina-uma-nacao-ocupada/?gacp=dia-da-toalha-14&gaid=palestina-nacao-ocupada",
                    desc : "Escrito após uma longa viagem à Palestina, após presenciar violentos confrontos dos soldados com a população.",
					cover : "PALESTINA_UMA_NACAO_OCUPADA.jpg",
					price : "20,00"
                },
                {
                    title : "Maus",
                    link : "http://www.estantevirtual.com.br/q/Art-maus?gacp=dia-da-toalha-14&gaid=maus",
                    cover : "MAUS.jpg",
					desc : "Um relato incisivo e perturbador, que evidencia a brutalidade da catástrofe do Holocausto.",
					price : "30,00"
                }
            ]
        },
        hq_cb : {
            title : "Acorde o seu espírito aventureiro e escolha:",
            face : "superman",
            books : [
                {
                    title : "Scott Pilgrin Contra o Mundo",
                    link : "http://www.estantevirtual.com.br/q/Scott-Pilgrim?gacp=dia-da-toalha-14&gaid=scott-pilgrin",
                    cover : "SCOTT_PILGRIM_CONTRA_O_MUNDO.jpg",
					desc : "A vida de Scott Pilgrin muda quando ele se apaixona por Ramona, mas para ficar com ela precisa lutar com a Liga dos Ex-namorados.",
					price : "20,00"
                },
                {
                    title : "O Gato do Rabino",
                    link : "http://www.estantevirtual.com.br/q/O-gato-do-rabino?gacp=dia-da-toalha-14&gaid=gato-rabino",
                    cover : "O_GATO_DO_RABINON_VOL_1.jpg",
					desc : "Uma saborosa fábula protagonizada por um felino, que discute o judaísmo com humor mordaz e inteligente.",
					price : "20,00"
                },
                {
                    title : "Coraline",
                    link : "http://www.estantevirtual.com.br/q/Coraline-Neil-Gaiman?gacp=dia-da-toalha-14&gaid=coraline",
                    cover : "CORALINE.jpg",
					desc : "Nesse conto de fadas às avessas, Coraline descobre uma porta que leva para um misterioso apartamento e se vê em um mundo de dar arrepios.",
					price : "20,00"
                },
                {
                    title : "Corto Maltese",
                    link : "http://www.estantevirtual.com.br/q/corto-maltese?gacp=dia-da-toalha-14&gaid=corto-maltese",
                    cover : "CORTO_MALTESE.jpg",
					desc : "Aventuras cheias de referências, nas quais várias vezes Corto cruzou com personagens históricos reais.",
					price : "10,00"
                }
            ]
        },
        hq_cc : {
            title : "Então escolha a sua história:",
            face : "superman",
            books : [
                {
                    title : "Asterios Polyp",
                    link : "http://www.estantevirtual.com.br/q/asterios-polyp?gacp=dia-da-toalha-14&gaid=asterios-polyp",
                    cover : "ASTERIOS_POLYP.jpg",
					desc : "Um arquiteto de cinquenta anos, mulherengo, misógino e arrogante vê seu passado se esfacelar após um incêndio em sua casa.",
					price : "50,40"
                },
                {
                    title : "Azul é a Cor Mais Quente",
                    link : "http://www.estantevirtual.com.br/q/Azul-e-a-cor-mais-quente?gacp=dia-da-toalha-14&gaid=azul-e-a-cor-mais-quente",
                    cover : "AZUL__A_COR_MAIS_QUENTE.jpg",
					desc : "Por meio do diário de Clementine, uma jovem de 15 anos, conhecemos as descobertas e tristezas de seu relacionamento com Emma, uma garota de cabelos azuis.",
					price : "31,90"
                },
                {
                    title : "Calvin e Haroldo",
                    link : "http://www.estantevirtual.com.br/q/Calvin-e-Haroldo?gacp=dia-da-toalha-14&gaid=calvin-haroldo",
                    cover : "CALVIN_E_HAROLDO.jpg",
					desc : "Calvin é um menino de seis anos cheio de personalidade e tem como melhor amigo, Haroldo, um tigre de pelúcia.",
					price : "19,00"
                },
                {
                    title : "Retalhos",
                    link : "http://www.estantevirtual.com.br/q/Craig-Thompson-retalhos?gacp=dia-da-toalha-14&gaid=retalhos",
                    cover : "RETALHOS.jpg",
					desc : "Contando as pequenas brutalidades que os infligiam dentro da própria família, descreve a agonia e o êxtase da obsessão.",
					price : "51,00"
                }
            ]
        },
        hq_d : {
            title : "Vista a camisa canarinho e escolha:",
            face : "superman",
            books : [
                {
                    title : "Cachalote",
                    link : "http://www.estantevirtual.com.br/q/cachalote?gacp=dia-da-toalha-14&gaid=cachalote",
                    cover : "CACHALOTE.jpg",
					desc : "Tramas diferentes amarradas por temas recorrentes, como o confronto com acontecimentos que transformam suas vidas.",
					price : "32,00"
                },
                {
                    title : "10 Pãezinhos",
                    link : "http://www.estantevirtual.com.br/q/10-paezinhos?gacp=dia-da-toalha-14&gaid=10-paezinhos",
                    cover : "10_PAEZINHOS_O_GIRASSOL_E_A_LUA.jpg",
					desc : "Uma história de amor, que flerta com o gênero policial, tendo um pé no mistério e outro na fantasia.",
					price : "14,99"
                },
                {
                    title : "O Cheiro do Ralo",
                    link : "http://www.estantevirtual.com.br/q/O-Cheiro-do-Ralo?gacp=dia-da-toalha-14&gaid=cheiro-ralo",
                    cover : "O_CHEIRO_DO_RALO.jpg",
					desc : "Um retrato da alma humana de forma cínica e bem-humorada, com caminhos que só serão percorridos se suportar o odor.",
					price : "25,00"
                },
                {
                    title : "Chiclete com Banana",
                    link : "http://www.estantevirtual.com.br/q/Chiclete-com-Banana-angeli?gacp=dia-da-toalha-14&gaid=chiclete-com-banana",
                    cover : "CHICLETE_COM_BANANA.jpg",
					desc : "Reunindo personagens como Bob Cuspe, Los 3 amigos e Meiaoito, esses quadrinhos vão te transportar para as décadas de 80 e 90.",
					price : "5,00"
                }
            ]
        },
        manga : {
            title : "Ninguém conta histórias como os japoneses! Sobre o que quer ler?",
            face : "manga",
            answers : {
                manga_a : "Histórias de lutadores!",
                manga_b : "Mundos mais interessantes que esse",
                manga_c : "Nenhum dos dois"
            }
        },
        manga_a : {
            title : "Que tipo de história?",
            answers : {
                manga_aa : "Aventuras e lutas",
                manga_ab : "Samurais e Bushido"
            }
        },
        manga_aa : {
            title : "Encontre seus inimigos e escolha:",
            face : "manga",
            books : [
                {
                    title : "Ataque dos Titãs",
                    link : "http://www.estantevirtual.com.br/q/Ataque-dos-titas?gacp=dia-da-toalha-14&gaid=ataque-titas",
                    cover : "ATAQUE_DOS_TITAS.jpg",
					desc : "O mundo foi dominado por criaturas gigantes, chamadas Titãs, e os humanos foram obrigados a viver dentro de grandes muralhas. Mas essas muralhas podem não ser mais tão seguras.",
					price : "10,00"
                },
                {
                    title : "Cavaleiros do Zodíaco",
                    link : "http://www.estantevirtual.com.br/q/Cavaleiros-do-zodiaco?gacp=dia-da-toalha-14&gaid=cavaleiros-zodiaco",
                    cover : "CAVALEIROS_DO_ZODIACO_A1.jpg",
					desc : "Guerreiros com armaduras sagradas defendem a reencarnação da deusa Atena em sua batalha contra outros deuses do Olimpo.",
					price : "1,99"
                },
                {
                    title : "Dragon Ball",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&fcid=&fperf=&fano=&fpric=&fvend=&pchave=%2Bdragon%20%2Bball&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bdragon%20%2Bball&just_remodeling=1&fdesconto_frete=&ffrete_gratis=&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=dragon-ball",
                    cover : "DRAGON_BALL_A01.jpg",
					desc : "Goku, um menino com cauda de macaco e coração puro, viaja e luta com adversários cada vez mais poderosos.",
					price : "1,70"
                },
                {
                    title : "Naruto",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&fcid=&fperf=&fano=&fpric=&fvend=&pchave=%2Bnaruto&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bnaruto&just_remodeling=1&fdesconto_frete=&ffrete_gratis=&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=naruto",
                    cover : "NARUTO_A01.jpg",
					desc : "Naruto é um órfão aprendiz de ninja que precisa ser aprovado numa complicada prova para avançar ao próximo nível do ninjutsu.",
					price : "5,00"
                }
            ]
        },
        manga_ab : {
            title : "Traga a katana e escolha:",
            face : "samurai",
            books : [
                {
                    title : "Lobo Solitário",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&fcid=&fperf=&fano=&fpric=&fvend=&pchave=%2Blobo%20%2Bsolitario&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Blobo%20%2Bsolitario&just_remodeling=1&fdesconto_frete=&ffrete_gratis=&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=lobo-solitario",
                    cover : "LOBO_SOLITARIO_VOLUME_1.jpg",
					desc : "Itto Ogami era o executor oficial do Xogum. Porém, sua família foi vítima de um massacre que poupou apenas ele e seu filho.",
					price : "3,00"
                },
                {
                    title : "Vagabond",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&fcid=&fperf=&fano=&fpric=&fvend=&pchave=%2Bvagabond&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bvagabond&just_remodeling=1&fdesconto_frete=&ffrete_gratis=&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=vagabon",
                    cover : "VAGABOND__VOLUME_01.jpg",
					desc : "A biografia em quadrinhos de Miyamoto Musashi, o samurai dos samurais, uma das principais referências do imaginário japonês.",
					price : "2,00"
                },
                {
                    title : "Blade - a Lâmina do Imortal",
                    link : "http://www.estantevirtual.com.br/q/Blade-a-lamina-do-imortal?gacp=dia-da-toalha-14&gaid=blade",
                    cover : "BLADE__A_LMINA_DO_IMORTAL_A02.jpg",
                    desc : "Manji pode regenerar qualquer ferimento. Ele faz a promessa de matar 1000 bandidos para poder morrer em paz.",
                    price : "1,80"
                },
                {
                    title : "Samurai Executor",
                    link : "http://www.estantevirtual.com.br/q/Samurai-executor?gacp=dia-da-toalha-14&gaid=samurai-executor",
                    cover : "SAMURAI_EXECUTOR.jpg",
                    desc : "O pai de Asaemon Yamada Terceiro pede para que o substitua no ofício de testador de espada. Ao aceitar, Asaemon é submetido a um teste em uma das principais prisões de Tóquio.",
                    price : "25,00"
                }
                
            ]
        },
        manga_b : {
            title : "E o que vai ter?",
            answers : {
                manga_ba : "Magia",
                manga_bb : "Fantasia",
                manga_bc : "Ficção Científica"
            }
        },
        manga_ba : {
            title : "Invoque seus poderes e escolha:",
            face : "manga",
            books : [
                {
                    title : "Nura: A ascensão do clã das sombras",
                    link : "http://www.estantevirtual.com.br/q/Nura-sombras?gacp=dia-da-toalha-14&gaid=nura",
                    cover : "NURA__A_ASCENSAO_DO_CLA_DAS_SOMBRAS.jpg",
					desc : "Rikuo Nura possui apenas 1/4 de sangue youkai (demônio) e é neto de um dos chefes do clã. E para poder sucedê-lo, terá que equilibrar o seu lado humano com o seu lado youkai.",
					price : "6,30"
                },
                {
                    title : "Claymore",
                    link : "http://www.estantevirtual.com.br/q/Claymore?gacp=dia-da-toalha-14&gaid=claymore",
                    cover : "CLAYMORE.jpg",
					desc : "Clare é metade humana e metade demônio e faz parte da organização Claymores, responsável por eliminar demônios que atormentam os seres humanos.",
					price : "10,90"
                },
                {
                    title : "Berserk",
                    link : "http://www.estantevirtual.com.br/q/Berserk?gacp=dia-da-toalha-14&gaid=bersek",
                    cover : "BERSERK.jpg",
					desc : "Gatts é um poderoso e implacável guerreiro, marcado por uma chaga que o avisa da aproximação de demônios.",
					price : "2,50"
                },
                {
                    title : "Tsubasa",
                    link : "http://www.estantevirtual.com.br/q/tsubasa?gacp=dia-da-toalha-14&gaid=tsubasa",
                    cover : "TSUBASA_RESERVOIR_CHRONICLES_A1.jpg",
					desc : "A busca pelas memórias perdidas da princesa Sakura, que foram espalhadas pelas diversas dimensões.",
					price : "3,00"
                }
            ]
        },
        manga_bb : {
            title : "Esqueça a preocupação com a realidade e escolha:",
            face : "manga",
            books : [
                {
                    title : "Fairy Tail",
                    link : "http://www.estantevirtual.com.br/q/Fairy-tail?gacp=dia-da-toalha-14&gaid=fairy-tail",
                    cover : "FAIRY_TAIL.jpg",
					desc : "Lucy é uma jovem feiticeira que tem o poder de evocar Espíritos Celestiais e deseja se tornar membro da famosa Guilda de Magos Fairy Tail.",
					price : "9,90"
                },
                {
                    title : "Fullmetal Alchemist",
                    link : "http://www.estantevirtual.com.br/q/Fullmetal-Alchemist?gacp=dia-da-toalha-14&gaid=fullmetal-alchemist",
                    cover : "FULLMETAL_ALCHEMIST.jpg",
					desc : "Dois alquimistas procuram a pedra filosofal para recuperar seus corpos com seus poderes.",
					price : "4,00"
                },
                {
                    title : "Fushigi Yûgi",
                    link : "http://www.estantevirtual.com.br/q/Fushigi?gacp=dia-da-toalha-14&gaid=fushigi",
                    cover : "FUSHIGI_YUGI.jpg",
					desc : "Miaka é uma garota de 15 anos que tem uma vida bem normal. Até que é transportada por um livro para China antiga, onde viverá aventuras para tentar salvar o mundo.",
					price : "2,00"
                },
                {
                    title : "Soul Eater",
                    link : "http://www.estantevirtual.com.br/q/Soul-Eater?gacp=dia-da-toalha-14&gaid=soul-eater",
                    cover : "SOUL_EATER.jpg",
					desc : "O alunos da escola Shibusen são separados em Armas, humanos que podem ser transformar em armas, e Artesões, que treinam as armas, e suas missões são capturar as almas que se desviaram do bom caminho.",
					price : "10,00"
                }
            ]
        },
        manga_bc : {
            title : "Prepare seu equipamento e escolha:",
            face : "manga",
            books : [
                {
                    title : "Akira",
                    link : "http://www.estantevirtual.com.br/qtit/Akira?gacp=dia-da-toalha-14&gaid=akira",
                    cover : "AKIRA.jpg",
					desc : "Em Neo-Tóquio, após a III Guerra Mundial, um programa governamental busca desenvolver poderes sobrenaturais.",
					price : "5,00"
                },
                {
                    title : "Neon Genesis Evangelion",
                    link : "http://www.estantevirtual.com.br/q/evangelion?gacp=dia-da-toalha-14&gaid=neon-genesis",
                    cover : "NEON_GENESIS_EVANGELION_A0.jpg",
					desc : "Uma criatura misteriosa, chamada Anjo, ataca Tokyo-3 e Shinji, de 14 anos, é convocado para pilotar o andróide Evangelion.",
					price : "1,50"
                },
                {
                   title : "Trigun",
                    link : "http://www.estantevirtual.com.br/q/trigun?gacp=dia-da-toalha-14&gaid=trigun",
                    cover : "TRIGUN.jpg",
                    desc : "Vash The Stampede é um pistoleiro nômade que tem um passado duvidoso. Toda cidade pela qual passa é totalmente devastada.",
                    price : "7,00"
                },
                {
                    title : "Gantz",
                    link : "http://www.estantevirtual.com.br/q/Gantz?gacp=dia-da-toalha-14&gaid=gantz",
                    cover : "GANTZ.jpg",
					desc : "Dois jovens são atropelados mas, ao invés de morrer, surgem em uma sala e recebem uma missão de uma esfera negra: matar alienígenas.",
					price : "9,00"
                }
            ]
        },
        manga_c : {
            title : "Que tal um pouco de comédia?",
            face : "manga",
            answers : {
                manga_ca : "Sim!",
                manga_cb : "Não é bem isso o que eu queria"
            }
        },
        manga_ca : {
            title : "Então relaxe e escolha:",
            face : "manga",
            books : [
                {
                    title : "One Piece",
                    link : "http://www.estantevirtual.com.br/q/one-piece?gacp=dia-da-toalha-14&gaid=one-piece",
                    cover : "ONE_PIECE.jpg",
					desc : "Luffy, o homem-borracha, precisa reunir uma boa tripulação de piratas para encontrar o grande tesouro One Piece.",
					price : "3,00"
                },
                {
                    title : "Chobits",
                    link : "http://www.estantevirtual.com.br/q/Chobits?gacp=dia-da-toalha-14&gaid=chobits",
                    cover : "CHOBITS.jpg",
					desc : "Persocons são robôs em forma humana e por serem muito caros, Hideki Motosuwa nunca pode adquirir um. Até que esbarra com uma linda Persocon jogada no lixo.",
					price : "4,00"
                },
                {
                    title : "Love Hina",
                    link : "http://www.estantevirtual.com.br/q/love-hina?gacp=dia-da-toalha-14&gaid=love-hina",
                    cover : "LOVE_HINA.jpg",
					desc : "Keitarô se torna gerente de uma pensão feminina e por acidente sempre surpreende as moradoras nuas, e apanha delas.",
					price : "3,50"
                },
                {
                    title : "Bleach",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&pchave=%2Bbleach&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bbleach&just_remodeling=1&gacp=dia-da-toalha-14&gaid=bleach",
                    cover : "BLEACH.jpg",
					desc : "O jovem Ichigo Kurosaki ganha poderes que o forçam a assumir o dever de defender os humanos de espíritos malígnos.",
					price : "8,00"
                }
            ]
        },
        manga_cb : {
            title : "Então escolha a sua história:",
            face : "manga",
            books : [
                {
                    title : "Death Note",
                    link : "http://www.estantevirtual.com.br/q/Death-Note?gacp=dia-da-toalha-14&gaid=death-note",
                    cover : "DEATH_NOTE.jpg",
					desc : "Afim de ter um pouco de diversão, o Deus da Morte Ryuk deixa cair na Terra o seu Death Note, caderno que tem o poder de matar os nomes escritos nele.",
					price : "10,00"
                },
                {
                    title : "Monster",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&pchave=%2Bmonster&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bmonster&just_remodeling=1&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=monster",
                    cover : "MONSTER.jpg",
					desc : "Kenzo Tenma é um neurocirurgião de um famoso hospital na Alemanha. Diante de dois pacientes que precisam de cirurgia de emergência, Tenma se vê questionando a ética do hospital e a sua própria.",
					price : "6,50"
                },
                {
                    title : "20th Century Boys",
                    link : "http://www.estantevirtual.com.br/q/century-boys?gacp=dia-da-toalha-14&gaid=century-boys",
                    cover : "20TH_CENTURY_BOYS.jpg",
					desc : "Kenji vê sua vida mudar drasticamente ao descobrir que um amigo de infância cometeu suicídio. Ao investigar o caso, perceberá que as coincidências com sua infância só aumentarão.",
					price : "10,90"
                },
                {
                    title : "Diário do Futuro",
                    link : "http://www.estantevirtual.com.br/q/Diario-do-futuro?gacp=dia-da-toalha-14&gaid=diario-futuro",
                    cover : "DIARIO_DO_FUTURO.jpg",
					desc : "12 pessoas se enfrentarão em um jogo que a única arma é seus respectivos diários. Quem tiver o seu diário destruído, morrerá.",
					price : "10,00"
                }
            ]
        },
        rpg : {
            title : "Então traga os dados, chame os amigos e aproveite um bom RPG! Em que época quer jogar?",
            answers : {
                rpg_a : "Passado fantástico!",
                rpg_b : "Presente e futuro!"
            }
        },
        rpg_a : {
            title : "Traga os mantos, espadas e escolha:",
            face : "mago",
            books : [
                {
                    title : "Tormenta",
                    link : "http://www.estantevirtual.com.br/q/tormenta-cassaro?gacp=dia-da-toalha-14&gaid=tomenta",
                    cover : "TORMENTA.jpg",
					desc : "Sistema e cenário nacional para jogos de fantasia.",
					price : "5,00"
                },
                {
                    title : "Dungeons & Dragons",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=38&pchave=%2Bdungeons%20%2Bdragons&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bdungeons%20%2Bdragons&just_remodeling=1&gacp=dia-da-toalha-14&gaid=dungeons-dragons",
                    cover : "DUNGEONS_E_DRAGONS.jpg",
					desc : "O mais clássico RPG de fantasia, em diversas edições.",
					price : "5,00"
                },
                {
                    title : "Gurps Fantasy",
                    link : "http://www.estantevirtual.com.br/q/gurps-fantasy?gacp=dia-da-toalha-14&gaid=gurps-fantasy",
                    cover : "Gurps_Fantasy.jpg",
					desc : "Sistema genérico para jogos com diversos personagens de fantasia.",
					price : "13,00"
                },
                {
                    title : "A Trilogia do Fogo das Bruxas",
                    link : "http://www.estantevirtual.com.br/q/A-Trilogia-do-Fogo-das-Bruxas?gacp=dia-da-toalha-14&gaid=trilogia-fogo-bruxas",
                    cover : "A_TRILOGIA_DO_FOGO_DAS_BRUXAS_1.jpg",
					desc : "Alguém ou alguma coisa está desenterrando as tumbas da cidade e os aventureiros são contratados para investigar.",
					price : "15,00"
                }
            ]
        },
        rpg_b : {
            title : "Esqueça esse mundo chato e escolha:",
            books : [
                {
                    title : "Shadowrun",
                    link : "http://www.estantevirtual.com.br/q/Shadowrun?gacp=dia-da-toalha-14&gaid=shadowrun",
                    cover : "SHADOWRUN.jpg",
					desc : "Jogue num futuro Cyberpunk que mistura mágoa e tecnologia.",
					price : "8,00"
                },
                {
                    title : "Vampiro",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=38&pchave=%2Bvampiro&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bvampiro&just_remodeling=1&gacp=dia-da-toalha-14&gaid=vampiro",
                    cover : "VAMPIRO_A_MASCARA.jpg",
					desc : "Seja um vampiro nesse amado cenário punk-gótico.",
					price : "15,00"
                },
                {
                    title : "Inimigo Natural",
                    link : "http://www.estantevirtual.com.br/q/Inimigo-Natural?gacp=dia-da-toalha-14&gaid=inimigo-natural",
                    cover : "INIMIGO_NATURAL.jpg",
					desc : "O mundo foi tomado por alienígenas e para detê-los foi criada uma tropa especial formada pelos melhores e mais bem equipados agentes que o governo conseguiu contratar.",
					price : "10,00"
                },
                {
                    title : "Gurps",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=38&pchave=%2Bgurps&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bgurps&just_remodeling=1&gacp=dia-da-toalha-14&gaid=gurps",
                    cover : "gurps-basico.jpg",
					desc : "Sistema genérico para diversas ambientações e personagens.",
					price : "10,00"
                }
            ]
        },
        nao_nerd : {
            title : "Não é nerd? Não tem problema! Aqui você pode aprender um pouco sobre essa cultura. Por onde quer começar?",
            answers : {
                nao_nerd_a : "Livros de Fantasias",
                nao_nerd_b : "Livros de Ficção Científica",
                nao_nerd_c : "Quadrinhos"
            }
        },
        nao_nerd_a : {
            title : "O mundo é muito mais misterioso do que imaginamos! Escolha a sua história:",
            face : "artur",
            books : [
                {
                    title : "O Hobbit",
                    link : "http://www.estantevirtual.com.br/q/tolkien-o-hobbit?gacp=dia-da-toalha-14&gaid=hobbit",
                    cover : "O_HOBBIT.jpg",
					desc : "Bilbo é um Hobbit que sai em jornada em busca de um tesouro, e encontra o 'Um Anel'.",
					price : "22,00"
                },
                {
                    title : "A Sociedade do Anel",
                    link : "http://www.estantevirtual.com.br/q/A-Sociedade-do-Anel?gacp=dia-da-toalha-14&gaid=sociedade-doa-nel",
                    cover : "A_SOCIEDADE_DO_ANEL.jpg",
                    desc : "Um jovem hobbit é encarregado de iniciar uma perigosa viagem até as Fendas da Perdição para destruir o Anel do Poder.",
                    price : "24,00"
                },
                {
                    title : "Crônicas de Gelo e Fogo - Guerra dos Tronos",
                    link : "http://www.estantevirtual.com.br/q/cronicas-de-gelo-e-fogo?gacp=dia-da-toalha-14&gaid=guerra-dos-tronos",
                    cover : "A_GUERRA_DOS_TRONOS.jpg",
					desc : "Quando Ed, lorde de Winterfell, aceita ser a Mão do Rei, não desconfia que sua vida está prestes a ruir.",
					price : "22,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "Brumas de Avalon - A Senhora da Magia",
                    link : "http://www.estantevirtual.com.br/q/Brumas-de-avalon?gacp=dia-da-toalha-14&gaid=brumas-avalon",
                    cover : "A_SENHORA_DA_MAGIA.jpg",
					desc : "Em quatro volumes, conta a história de Rei Artur pelo ponto de vista de Morgana.",
					price : "6,00"
                }
            ]
        },
        nao_nerd_b : {
            title : "O futuro nos espera! Escolha a sua história:",
            face : "astronaut",
            books : [
                {
                    title : "O Guia do Mochileiro das Galáxias",
                    link : "http://www.estantevirtual.com.br/q/guia-do-mochileiro-das-galaxias?gacp=dia-da-toalha-14&gaid=guia-mochileiro-galaxias",
                    cover : "O_GUIA_DO_MOCHILEIRO_DAS_GALAXIAS.jpg",
					desc : "Comédia que narra as viagens de Arthur Dent, depois que a terra é destruída.",
					price : "10,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Viagem ao Centro da Terra",
                    link : "http://www.estantevirtual.com.br/q/verne-viagem-centro-terra?gacp=dia-da-toalha-14&gaid=viagem-centro-terra",
                    cover : "VIAGEM_AO_CENTRO_DA_TERRA.jpg",
					desc : "Buscando chegar ao centro da terra, três viajantes encontram um mundo paralelo.",
					price : "9,90"
                },
                {
                    title : "1984",
                    link : "http://www.estantevirtual.com.br/q/1984-george?gacp=dia-da-toalha-14&gaid=1984",
                    cover : "1984.jpg",
					desc : "Vigiado 24h por dia pelo governo, Winston Smith tenta encontrar uma brecha no grande sistema do Grande Irmão, símbolo do poder do Partido.",
					price : "29,00"
                },
                {
                    title : "A Fundação",
                    link : "http://www.estantevirtual.com.br/q/fundacao-asimov?gacp=dia-da-toalha-14&gaid=fundacao",
                    cover : "FUNDACAO.jpg",
                    desc : "A psico-história, ciência que antecipa o comportamento de grandes populações, prevê a queda do Império Galáctico.",
                    price : "24,90"
                }
            ]
        },
        nao_nerd_c : {
            title : "As histórias ficam mais legais quando tem figuras! Escolha a sua:",
            face : "superman",
            books : [
                {
                    title : "Sandman",
                    link : "http://www.estantevirtual.com.br/q/Sandman-neil-gaiman?gacp=dia-da-toalha-14&gaid=sandman",
                    cover : "SANDMAN_N_1.jpg",
					desc : "As mentes de todos os seres vivos estão ligadas ao reino de Morpheus, o Sonhar. Para lá vão as almas de todos os que dormem.",
					price : "2,40"
                },
                {
                    title : "Watchmen",
                    link : "http://www.estantevirtual.com.br/q/Watchmen-Alan-Moore?gacp=dia-da-toalha-14&gaid=watchmen",
                    cover : "WATCHMEN.jpg",
					desc : "Em uma realidade decadente na qual heróis são uma presença real na história da humanidade, um drama de crime e aventura.",
					price : "8,00"
                },
                {
                    title : "The Walking Dead",
                    link : "http://www.estantevirtual.com.br/q/Walking-Dead?gacp=dia-da-toalha-14&gaid=walking-dead",
                    desc : "Zumbis tomaram a terra e o policial Rick Grimes busca sua família num mundo devastado pelos mortos-vivos.",
                    cover : "THE_WALKING_DEAD_A1.jpg",
                    price : "5,00"
                },
                {
                     title : "Persepolis",
                    link : "http://www.estantevirtual.com.br/q/Persepolis?gacp=dia-da-toalha-14&gaid=persepolis",
                    desc : "Nascida numa família moderna e politizada, em 1979 Marjane assistiu ao início da revolução xiita no Irã.",
                    cover : "PERSEPOLISP.jpg",
                    price : "13,00"
                }
            ]
        }
    };
})();


