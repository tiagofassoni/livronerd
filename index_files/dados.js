(function() {
    var Quiz = window.Quiz || {};
    window.Quiz = Quiz;

    Quiz.questions = {
        first : {
            title : "O que voc� gosta?",
            answers : {
                a : "Livros, livros e mais livros!",
                b : "Prefiro livros com figuras, ent�o me mostre Quadrinhos!",
                rpg : "N�o quero ler, quero viver as hist�rias!",
                nao_nerd : "E eu que n�o sou Nerd?"
            }
        },
        a : {
            title : "E o que quer ler?",
            answers : {
                fantasia : "Fantasia",
                ficcao : "Fic��o Cient�fica",
                outros : "Nenhum dos dois!"
            }
        },
        b : {
            title : "De que tipo?",
            answers : {
                hq : "HQs",
                manga : "Mang�s"
            }
        },
        c : {
            answers : {
                rpg : "RPGs"
            }
        },
        d : {
            answers : {
                nao_nerd : "Nossas sugest�es para conhecer um pouco dessa cultura"
            }
        },
        fantasia : {
            title : "O mundo � muito mais misterioso do que imaginamos! E quando quer que a hist�ria se passe?",
            answers : {
                fantasia_a : "Hoje em dia",
                fantasia_b : "No Passado",
                fantasia_c : "Em uma viagem"
            }
        },
        fantasia_a : {
            title : "Escolha entre essas hist�rias sem mofo!",
            books : [
                {
                    title : "Cidade dos Ossos",
                    link : "http://www.estantevirtual.com.br/q/Cidade-dos-Ossos-cassandra?gacp=dia-da-toalha-14&gaid=cidade-dos-ossos",
                    desc : "Clary era garota normal at� presenciar um crime e descobrir uma tribo de guerreiros secreta dedicada a libertar a terra de dem�nios.",
                    cover : "CIDADE_DOS_OSSOS.jpg",
					price : "18,00"
                },
                {
                    title : "S�rie Harry Potter",
                    link : "http://www.estantevirtual.com.br/q/harry-potter-rowling?gacp=dia-da-toalha-14&gaid=harry-potter",
					desc : "Ao completar 11 anos, Potter descobre ser um bruxo e ingressa na Escola de Magia e Bruxaria de Hogwarts onde viver� grandes aventuras.",
                    cover : "HARRY_POTTER_E_O_ENIGMA_DO_PRINCIPE.jpg",
					price : "8,00",
					flag : "economy",
					economy : "70"
                },
                {
                    title : "A Maldi��o do Tigre",
                    link : "http://www.estantevirtual.com.br/q/A-Maldicao-do-Tigre?gacp=dia-da-toalha-14&gaid=maldicao-tigre",
					desc : "Kelsey sente uma forte conex�o com um tigre branco sem saber que ele � um pr�ncipe amaldi�oado h� mais de 300 anos. Agora ela ter� que ajud�-lo a quebrar o feiti�o.",
                    cover : "A_MALDICAO_DO_TIGRE.jpg",
					price : "15,00"
                },
                {
                    title : "A Batalha do Apocalipse",
                    link : "http://www.estantevirtual.com.br/q/Batalha-do-Apocalipse?gacp=dia-da-toalha-14&gaid=batalha-apocalipse",
                    cover : "A_BATALHA_DO_APOCALIPSE.jpg",
					desc : "Uma viagem pela hist�ria humana cheia de lutas her�ricas, magia, romance e suspense.",
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
            title : "Escolha a �poca:",
            answers : {
                fantasia_baa : "Na �poca do Rei Artur",
                fantasia_bab : "Outras �pocas"
            }
        },
        fantasia_baa : {
            title : "Ent�o desembainhe a Excalibur e escolha!",
            face : 'artur',
            books : [
                {
                    title : "As Brumas de Avalon - A Senhora da Magia",
                    link : "http://www.estantevirtual.com.br/q/Brumas-de-avalon?gacp=dia-da-toalha-14&gaid=brumas-avalon",
                    cover : "A_SENHORA_DA_MAGIA.jpg",
                    desc : "Em quatro volumes, conta a hist�ria de Rei Artur pelo ponto de vista de Morgana.",
                    price : "6,00"
                },
                {
                    title : "O Rei Artur e os Cavaleiros da T�vola Redonda",
                    link : "http://www.estantevirtual.com.br/q/O-Rei-Artur-e-os-Cavaleiros-da-Tavola-Redonda?gacp=dia-da-toalha-14&gaid=rei-arthur-cavaleiros-tavola-redonda",
                    cover : "ReiArthur_cavaleiros-tavola-redonda.jpg",
					desc : "Nessa obra acompanhamos a lend�ria hist�ria de Artur, um menino que se tornou rei ao retirar a espada Excalibur de uma pedra, e sua jornada em busca do Santo Graal.",
					price : "10,00"
                },
                {
                    title : "Cr�nicas de Artur - Rei do Inverno",
                    link : "http://www.estantevirtual.com.br/q/Bernard-Cornwell-Cronicas-de-artur?gacp=dia-da-toalha-14&gaid=cronicas-artur",
                    cover : "O_REI_DO_INVERNO.jpg",
					desc : "Mostra uma vers�o realista da hist�ria de Artur em tr�s volumes.",
					price : "15,90"
                },
                {
                    title : "O �nico e Eterno Rei - A Espada na Pedra",
                    link : "http://www.estantevirtual.com.br/q/O-unico-e-eterno-rei?gacp=dia-da-toalha-14&gaid=�nico-eterno-rei",
                    cover : "O_uNICO_E_ETERNO_REI__VOL_I.jpg",
					desc : "Toda a vida de Artur, desde a inf�ncia, � contada na s�rie em cinco volumes.",
					price : "14,00"
                }
            ]
        },
        fantasia_bab : {
            title : "Afie sua pena de escrever e escolha!",
            face : 'artur',
            books : [
                {
                    title : "Stardust - O Mist�rio da Estrela",
                    link : "http://www.estantevirtual.com.br/q/Neil-gaiman-stardust?gacp=dia-da-toalha-14&gaid=stardust",
                    cover : "STARDUST.jpg",
					desc : "Na Inglaterra vitoriana, a calma de uma vila � interrompida por uma feira m�gica.",
					price : "30,00"
                },
                {
                    title : "A S�tima Torre",
                    link : "http://www.estantevirtual.com.br/q/a-setima-torre?gacp=dia-da-toalha-14&gaid=setima-torre",
                    cover : "A_SETIMA_TORRE.jpg",
					desc : "O jovem Tal, da Ordem Laranja dos Escolhidos do Castelo, precisa roubar uma Pedra-do-Sol para salvar sua fam�lia.",
					price : "5,00"
                },
                {
                    title : "O Nome do Vento",
                    link : "http://www.estantevirtual.com.br/q/O-nome-do-vento?gacp=dia-da-toalha-14&gaid=nome-vento",
                    cover : "O_NOME_DO_VENTO.jpg",
					desc : "A primeira parte da hist�ria do Matador de Reis quando estudava para se tornar um Arcanista.",
					price : "35,00"
                },
                {
                    title : "God of War",
                    link : "http://www.estantevirtual.com.br/q/God-of-War-Stover?gacp=dia-da-toalha-14&gaid=god-of-war",
                    cover : "GOD_OF_WAR.jpg",
					desc : "Decidido a n�o servir mais o traidor deus Ares, Kratos precisar� mat�-lo. Mas para isso precisar� encontrar e usar a Caixa de Pandora que esconde todos os mist�rios do universo.",
					price : "15,00"
                }
            ]
        },
        fantasia_bb : {
            title : "E como prefere sua hist�ria?",
            answers : {
                fantasia_bba : "A vida n�o � f�cil num mundo de magia e espadas",
                fantasia_bbb : "Eu quero elfos, an�es e magos!"
            }
        },
        fantasia_bba : {
            title : "Se prepare para a luta e escolha!",
            face : "mago",
            books : [
                {
                    title : "Cr�nicas de Gelo e Fogo - Guerra dos Tronos",
                    link : "http://www.estantevirtual.com.br/q/cronicas-de-gelo-e-fogo?gacp=dia-da-toalha-14&gaid=guerra-dos-tronos",
                    cover : "A_GUERRA_DOS_TRONOS.jpg",
					desc : "Quando Ed, lorde de Winterfell, aceita ser a M�o do Rei, n�o desconfia que sua vida est� prestes a ruir.",
					price : "22,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "A Companhia Negra",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?alvo=autor+ou+titulo&pchave=glen+cook&orderby=menor_preco&memoria_queries=autor+ou+titulo+1v1+%252Ba%2520%252Bcompanhia%2520%252Bnegra&bestante=&fest=&bvendor=&section=&refinar=1&ffrete_gratis=&gacp=dia-da-toalha-14&gaid=companiha-negra",
                    cover : "A_COMPANHIA_NEGRA.jpg",
					desc : "Um grupo de mercen�rios se une ao ex�rcito de Dama, uma feiticeira que quer reconquistar tudo que perdeu.",
					price : "15,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Conan",
                    link : "http://www.estantevirtual.com.br/q/Conan-robert-howard?gacp=dia-da-toalha-14&gaid=conan",
                    cover : "CONAN__O_CIMERIO_VOLUME_I.jpg",
					desc : "A saga de Conan, o ladr�o, pirata, rei, em hist�rias intensas, �picas e sombrias.",
					price : "5,00"
                },
                {
                    title : "A Espada Diab�lica",
                    link : "http://www.estantevirtual.com.br/q/Michael-Moorcock-espada-diabolica?gacp=dia-da-toalha-14&gaid=espada-diabolica",
                    cover : "A_ESPADA_DIABOLICA.jpg",
					desc : "Elric, albino e fraco, recebe sua energia da espada diab�lica que suga a alma das v�timas.",
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
					desc : "Bilbo � um Hobbit que sai numa jornada em busca de um tesouro e encontra o 'Um Anel'.",
					price : "22,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "A Sociedade do Anel",
                    link : "http://www.estantevirtual.com.br/q/A-Sociedade-do-Anel?gacp=dia-da-toalha-14&gaid=sociedade-doa-nel",
                    cover : "A_SOCIEDADE_DO_ANEL.jpg",
					desc : "Um jovem hobbit � encarregado de iniciar uma perigosa viagem at� as Fendas da Perdi��o para destruir o Anel do Poder.",
					price : "24,00"
                },
                {
                    title : "O Silmarillion",
                    link : "http://www.estantevirtual.com.br/q/O-Silmarillion-tolkien?gacp=dia-da-toalha-14&gaid=silmarillion",
                    cover : "O_SILMARILLION.jpg",
					desc : "Lendas derivadas de um passado remoto ao final da Terceira Era, ligadas �s Silmarils, tr�s gemas perfeitas criadas por F�anor, o mais talentoso dos elfos.",
					price : "27,00"
                },
                {
                    title : "Eragon",
                    link : "http://www.estantevirtual.com.br/q/eragon-paolini?gacp=dia-da-toalha-14&gaid=eragon",
                    cover : "ERAGON.jpg",
					desc : "Um pacato rapaz se v� em meio a uma disputa pelo poder do Imp�rio. Livro repleto de magia, drag�es, elfos e outros seres fant�sticos.",
					price : "15,00"
                }
            ]
        },
        fantasia_c : {
            title : "Se prepare para come�ar a jornada e escolha!",
            face : "mago",
			books : [
                {
                    title : "A Torre Negra - O Pistoleiro",
                    link : "http://www.estantevirtual.com.br/q/torre-negra-stephen-king?gacp=dia-da-toalha-14&gaid=torre-negra",
                    cover : "O_PISTOLEIRO__A_TORRE_NEGRA_VOLI.jpg",
					desc : "Para evitar a completa destrui��o desse mundo j� vazio e moribundo, Roland precisa alcan�ar a Torre Negra.",
					price : "14,90",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "As Cr�nicas de N�rnia",
                    link : "http://www.estantevirtual.com.br/q/As-Cronicas-de-Narnia-lewis?gacp=dia-da-toalha-14&gaid=cronicas-narnia",
                    cover : "AS_CRONICAS_DE_NARNIA.jpg",
					desc : "Quatro irm�os vivem verdadeiras aventuras com criaturas fant�sticas e batalhas �picas entre o bem e o mal.",
					price : "12,00"
                },
                {
                    title : "Filhos do �den",
                    link : "http://www.estantevirtual.com.br/q/Filhos-do-eden-Eduardo-Spohr?gacp=dia-da-toalha-14&gaid=filhos-eden",
                    cover : "FILHOS_DO_DEN.jpg",
					desc : "Durante uma guerra no c�u, dois anjos s�o enviados a terra para resgatar uma capit� dos ex�rcitos rebeldes.",
					price : "16,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "O Oceano no Fim do Caminho",
                    link : "http://www.estantevirtual.com.br/q/O-Oceano-no-Fim-do-Caminho?gacp=dia-da-toalha-14&gaid=ocenao-fim-caminho",
                    cover : "O_OCEANO_NO_FIM_DO_CAMINHO.jpg",
					desc : "Ele s� tinha sete anos quando o inquilino de sua casa cometeu suic�dio e despertou for�as que de outro mundo. Agora sua fam�lia est� em perigo e ele precisar� defend�-los.",
					price : "14,00"
                }
            ]
        },
        ficcao : {
            title : "O Futuro nos espera! E onde vamos come�ar?",
            answers : {
                ficcao_a : "Na Terra!",
                ficcao_b : "No Espa�o!",
                ficcao_c : "Na verdade eu n�o queria uma fic��o, queria uma publica��o cient�fica..."
            }
        },
        ficcao_a : {
            title : "Que pergunta te interessa mais?",
            answers : {
                ficcao_aa : "Como vamos viver?",
                ficcao_ab : "Quando os aliens v�o chegar?"
            }
        },
        ficcao_aa : {
            title : "Em que tipo de mundo?",
            answers : {
                ficcao_aaa : "Cyberpunk",
                ficcao_aab : "Subterr�neo",
                ficcao_aac : "Nenhum dos dois"
            }
        },
        ficcao_aaa : {
            title : "Ent�o conecte-se e escolha",
            books : [
                {
                    title : "Nevasca",
                    link : "http://www.estantevirtual.com.br/q/Neal-Stephenson-nevasca?gacp=dia-da-toalha-14&gaid=nevasca",
                    cover : "NEVASCA.jpg",
					desc : "Em um futuro dominado por mercen�rios e corpora��es, um samurai precisa proteger o mundo real e virtual.",
					price : "22,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "Neuromancer",
                    link : "http://www.estantevirtual.com.br/q/Neuromancer-William-Gibson?gacp=dia-da-toalha-14&gaid=neuromancer",
                    cover : "NEUROMANCER.jpg",
					desc : "Na Terra, esta��es espaciais e realidade virtual, o jogo final da humanidade contra as Intelig�ncias Artificiais.",
					price : "26,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "O Ca�ador de Andr�ides",
                    link : "http://www.estantevirtual.com.br/q/O-Cacador-de-Androides-philip-dick?gacp=dia-da-toalha-14&gaid=cacador-de-androides",
                    cover : "O_CACADOR_DE_ANDROIDES.jpg",
					desc : "Um ca�ador de recompensas recebe a perigosa miss�o de capturar um grupo de andr�ides rebeldes.",
					price : "50,00",
					flag : "ev-only"
                },
                {
                    title : "Piratas de Dados",
                    link : "http://www.estantevirtual.com.br/q/Bruce-Sterling-piratas-dados?gacp=dia-da-toalha-14&gaid=piratas-dados",
                    cover : "PIRATAS_DE_DADOS.jpg",
					desc : "No futuro, a informa��o � o bem mais precioso. Os dados s�o trancados em computadores e racionados.",
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
					desc : "Em um futuro hostil, Juliette � uma das sobreviventes confinada em um gigantesco silo subterr�neo. Ela se recusa a seguir as regras impostas pelo local, um crime cuja puni��o � mortal.",
					price : "36,90"
                },
                {
                    title : "20.000 L�guas Submarinas",
                    link : "http://www.estantevirtual.com.br/q/Leguas-Submarinas-verne?gacp=dia-da-toalha-14&gaid=20-mil-leguas-submarinas",
                    cover : "20_MIL_LEGUAS_SUBMARINAS.jpg",
					desc : "No s�culo XIX, o capit�o Nemo e sua tripula��o vivem no submarino Nautilus, com contato com o mundo.",
					price : "5,00",
					flag : "economy",
					economy : "80"
                },
                {
                    title : "Viagem ao Centro da Terra",
                    link : "http://www.estantevirtual.com.br/q/verne-viagem-centro-terra?gacp=dia-da-toalha-14&gaid=viagem-centro-terra",
                    cover : "VIAGEM_AO_CENTRO_DA_TERRA.jpg",
					desc : "Buscando chegar ao centro da terra, tr�s viajantes ir�o encontrar um mundo paralelo.",
					price : "9,90",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "Ca�a aos Rob�s",
                    link : "http://www.estantevirtual.com.br/q/Caca-aos-Robos-asimov?gacp=dia-da-toalha-14&gaid=caca-aos-robos",
                    cover : "CACA_AOS_ROBOS.jpg",
					desc : "Em cavernas de a�o que s�o as cidades terrestres do futuro,  moram seres humanos que jamais viram o sol.",
					price : "16,00",
					flag : "ev-only"
                }
            ]
        },
        ficcao_aac : {
            title : "Ent�o escolha entre esses poss�veis futuros",
            books : [
                {
                    title : "A Revolu��o dos Bichos",
                    link : "http://www.estantevirtual.com.br/q/George-orwell-Revolucao-dos-Bichos?gacp=dia-da-toalha-14&gaid=revolucao-bichos",
                    cover : "revolucao-dos-bichos.jpg",
					desc : "Uma f�bula sobre o poder. Narra a insurrei��o de animais de uma granja contra seus donos que degenera numa tirania ainda mais opressiva.",
					price : "15,00"
                },
                {
                    title : "Fahrenheit 451",
                    link : "http://www.estantevirtual.com.br/q/Fahrenheit-451?gacp=dia-da-toalha-14&gaid=fahrenheit-451",
                    cover : "fahrenheit451.jpeg",
					desc : "Uma �poca em que os livros s�o uma amea�a e est�o proibidos. Esse � o mundo de Guy Montag, que ao se sentir incomodado com o poder vigente, tenta mudar a sociedade e encontrar sua felicidade.",
					price : "13,90"
                },
                {
                    title : "Admir�vel Mundo Novo",
                    link : "http://www.estantevirtual.com.br/q/Admiravel-Mundo-Novo-aldous?gacp=dia-da-toalha-14&gaid=admiravel-mundo-novo",
                    cover : "admiravel-mundo-novo2.jpg",
					desc : "Os seres humanos (pr�-condicionados) t�m comportamentos (pr�-estabelecidos) e ocupam lugares (pr�-determinados) na sociedade.",
					price : "14,00",
					flag : "ev-only"
                },
                {
                    title : "Laranja Mec�nica",
                    link : "http://www.estantevirtual.com.br/q/laranja-mecanica-Burgess?gacp=dia-da-toalha-14&gaid=laranja-mecanica",
                    cover : "laranja-mecanica.jpg",
					desc : "Diante de uma sociedade extremamente violenta e um governo totalit�rio, acompanhamos o mundo adolescente pela perspectiva de Alex DeLarge, que leva a vida de forma desregrada.",
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
					desc : "Uma invas�o marciana chega � Terra com suas m�quinas assassinas.",
					price : "13,00",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "Encontro com Rama",
                    link : "http://www.estantevirtual.com.br/q/Encontro-com-Rama-Clarke?gacp=dia-da-toalha-14&gaid=encontro-rama",
                    cover : "ENCONTRO_COM_RAMA.jpg",
					desc : "Uma expedi��o enviada para explorar um imenso meteoro que �, na verdade, uma sofisticada constru��o.",
					price : "20,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "O Fim da Inf�ncia",
                    link : "http://www.estantevirtual.com.br/q/O-fim-da-infancia-clarke?gacp=dia-da-toalha-14&gaid=fim-infancia",
                    cover : "O_FIM_DA_INFANCIA.jpg",
					desc : "Fomos dominados por alien�genas que, mesmo sem pousar em nosso planeta, imp�em uma 'ditadura benigna'.",
					price : "21,90",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "Contato",
                    link : "http://www.estantevirtual.com.br/q/Contato-Carl-sagan?gacp=dia-da-toalha-14&gaid=contato",
                    cover : "CONTATO.jpg",
					desc : "Sinais captados num radiotelesc�pio podem nos fazer repensar toda a nossa concep��o da vida e do Universo.",
					price : "24,70",
					flag : "economy",
					economy : "60"
                }
            ]
        },
        ficcao_b : {
            title : "E chegando l�...",
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
                    title : "2001 Odiss�ia Espacial",
                    link : "http://www.estantevirtual.com.br/q/2001-odisseia-Arthur-Clarke?gacp=dia-da-toalha-14&gaid=2001-odisseia-espacial",
                    cover : "2001_odisseia.jpg",
					desc : "A nave Discovery conta com HAL, um computador que guia o curso da nave e tamb�m das vidas a bordo dela.",
					price : "25,00",
					flag : "ev-only"
                },
                {
                    title : "2010 uma Odiss�ia no Espa�o II",
                    link : "http://www.estantevirtual.com.br/q/2010-uma-Odisseia-no-Espaco-II?gacp=dia-da-toalha-14&gaid=2010-odisseia-espaco",
                    cover : "2010-uma-odisseia-espaco-ii.jpg",
					desc : "Uma continua��o da hist�ria da nave Discovery, comandada pelo Dr. Heywood Floyd, que parte em uma miss�o para resgatar a primeira nave.",
					price : "12,00"
                },
                {
                    title : "A M�quina do Tempo",
                    link : "http://www.estantevirtual.com.br/q/A-Maquina-do-Tempo-wells?gacp=dia-da-toalha-14&gaid=maquina-tempo",
                    cover : "A_MAQUINA_DO_TEMPO.jpg",
					desc : "A jornada de um cientista ingl�s a um mundo futuro, desconhecido e perigoso.",
					price : "8,00"
                },
                {
                    title : "O Guia do Mochileiro das Gal�xias",
                    link : "http://www.estantevirtual.com.br/q/guia-do-mochileiro-das-galaxias?gacp=dia-da-toalha-14&gaid=guia-mochileiro-galaxias",
                    cover : "O_GUIA_DO_MOCHILEIRO_DAS_GALAXIAS.jpg",
					desc : "Com�dia que narra as viagens de Arthur Dent, depois que a terra � destruida.",
					price : "10,00",
					flag : "economy",
					economy : "40"
                }
            ]
        },
        ficcao_bb : {
            title : "Levante os campos de for�a e escolha:",
            face : 'storm_trooper',
            books : [
                {
                    title : "O Jogo do Exterminador",
                    link : "http://www.estantevirtual.com.br/q/Jogo-do-exterminador?gacp=dia-da-toalha-14&gaid=jogo-exterminador",
                    cover : "O_JOGO_DO_EXTERMINADOR.jpg",
					desc : "A Terra est� em guerra com alien�genas e crian�as s�o recrutadas para a Escola de Combate Espacial.",
					price : "60,00",
					flag : "ev-only"
                },
                {
                    title : "Eu, Rob�",
                    link : "http://www.estantevirtual.com.br/q/eu-robo-asimov?gacp=dia-da-toalha-14&gaid=eu-robo",
                    cover : "eu-robo-isaac-asimov.jpg",
					desc : "Nove hist�rias sobre a evolu��o das m�quinas, desde os primitivos homens mec�nicos mudos at� a m�quina que controlaria o mundo e tornaria obsoletos os seres humanos.",
					price : "20,00"
                },
                {
                    title : "Duna",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?pchave=Frank+Herbert+duna+-messias+-filhos+-hereges+-imperador&alvo=autor+ou+titulo&gacp=dia-da-toalha-14&gaid=duna",
                    cover : "DUNA.jpg",
					desc : "Paul Atreides chega ao planeta deserto Arrakis e encara uma intrincada teia pol�tica e religiosa.",
					price : "30,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Poeira de Estrelas",
                    link : "http://www.estantevirtual.com.br/q/poeira-de-estrelas-asimov?gacp=dia-da-toalha-14&gaid=poeira-de-estrelas",
                    cover : "POEIRA_DE_ESTRELAS.jpg",
					desc : "Um jovem estudante em fuga pelo espa�o, perseguido pelos implac�veis tiranianos, busca o mundo rebelde.",
					price : "8,00",
					flag : "ev-only"
                }
            ]
        },
        ficcao_c : {
            title : "Ent�o se prepare para aprender e escolha:",
            books : [
                {
                    title : "O Universo numa Casca de Noz",
                    link : "http://www.estantevirtual.com.br/q/Universo-numa-Casca-de-Noz?gacp=dia-da-toalha-14&gaid=universo-casca-nos",
                    cover : "O_UNIVERSO_NUMA_CASCA_DE_NOZ.jpg",
					desc : "O leitor � apresentado a g�nios respons�veis pelos muitos avan�os da F�sica, dando grande destaque � f�sica te�rica e moderna..",
					price : "23,00",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "Almanaque das Curiosidades Matem�ticas",
                    link : "http://www.estantevirtual.com.br/q/Curiosidades-Matematicas-stewart?gacp=dia-da-toalha-14&gaid=almanaque-curiosidades-matematicas",
                    cover : "ALMANAQUE_DAS_CURIOSIDADES_MATEMATICAS.jpg",
					desc : "Um conjunto de casos matem�ticos not�veis, explicados de forma simples e com bom humor.",
					price : "25,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Uma Breve Hist�ria de Quase Tudo",
                    link : "http://www.estantevirtual.com.br/q/uma-breve-historia-de-quase-tudo?gacp=dia-da-toalha-14&gaid=breve-historia-quase-tudo",
                    cover : "BREVE_HISTORIA_DE_QUASE_TUDO.jpg",
					desc : "Uma tentativa �pica de entender tudo o que sabemos sobre o mundo em um delicioso guia de viagens pela ci�ncia.",
					price : "40,00"
                },
                {
                    title : "Opera��o Cavalo de Tr�ia",
                    link : "http://www.estantevirtual.com.br/q/Operacao-Cavalo-de-Troia?gacp=dia-da-toalha-14&gaid=operacao-cavalo-troia",
                    cover : "operacao-cavalo-de-troia.jpg",
					desc : "Relato de um militar e cientista norte-americano que participou de uma experi�ncia que lhe permitiu voltar quase dois mil anos no tempo e ser testemunha ocular da vida de Jesus Cristo.",
					price : "14,90"
                }
            ]
        },
        outros : {
            title : "E que tal...",
            answers : {
                outros_a : "Pessoas n�o t�o comuns",
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
					desc : "Henry tem um dist�rbio incontrol�vel que o faz viajar no tempo para diferentes momentos da sua vida com sua esposa.",
					price : "16,00",
					flag : "economy",
					economy : "60"
                },
                {
                    title : "A Viajante do Tempo, s�rie Ourlander",
                    link : "http://www.sestantevirtual.com.br/q/diana-gabaldon-tempo?gacp=dia-da-toalha-14&gaid=viajante-tempo-ourlander",
                    cover : "A_VIAJANTE_DO_TEMPO.jpg",
					desc : "Claire � uma mulher que busca seu verdadeiro amor enquanto participa de importantes acontecimentos da hist�ria.",
					price : "31,60",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "A M�quina do Tempo",
                    link : "http://www.estantevirtual.com.br/q/a-maquina-do-tempo-wells?gacp=dia-da-toalha-14&gaid=maquina-tempo",
                    cover : "A_MAQUINA_DO_TEMPO.jpg",
					desc : "A mais espantosa inven��o, capaz de levar seu criador a uma viagem atrav�s de milhares de anos de transforma��es da Terra.",
					price : "10,00",
					flag : "economy",
					economy : "70"
                },
                {
                    title : "Matadouro 5",
                    link : "http://www.estantevirtual.com.br/q/kurt-vonnegut-matadouro?gacp=dia-da-toalha-14&gaid=matadouro-5",
                    cover : "MATADOURO_5.jpg",
					desc : "Billy � um soldado que viaja no tempo, para outros planetas, e revisita diversos momentos da sua pr�pria vida.",
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
					desc : "A obra acompanha a longa trajet�ria do vampiro Lestat, desde a sua inf�ncia aristocr�tica at� o seu sucesso como estrela do rock.",
					price : "21,00"
                },
                {
                    title : "A Passagem",
                    link : "http://www.estantevirtual.com.br/q/A-Passagem-Justin?gacp=dia-da-toalha-14&gaid=passagem",
                    cover : "A_PASSAGEM.jpg",
					desc : "Uma pequena comunidade tenta sobreviver em um mundo dominado por humanos que comem qualquer tipo de ser, resultado de uma pesquisa cient�fica que deu errado.",
					price : "15,00"
                },
                {
                    title : "Dr�cula",
                    link : "http://www.estantevirtual.com.br/q/dracula-bram-stoker?gacp=dia-da-toalha-14&gaid=dracula",
                    cover : "DRACULA.jpg",
					desc : "Inspirado em relatos do folclore romeno e na saga do pr�ncipe Vlad Drakul, que lutou contra os turcos nas Cruzadas.",
					price : "14,90"
                },
                {
                    title : "Os Sete",
                    link : "http://www.estantevirtual.com.br/q/Vianco-os-sete?gacp=dia-da-toalha-14&gaid=os-sete",
                    cover : "OS_SETE.jpg",
					desc : "� descoberta uma caravela portuguesa naufragada no litoral brasileiro. Dentro, sete cad�veres aprisionados, acusados de bruxaria.",
					price : "12,00",
					flag : "economy",
					economy : "60"
                }
            ]
        },
        outros_b : {
            title : "E como vai ser?",
            answers : {
                outros_ba : "Quando o mundo � destru�do",
                outros_bb : "Quando as pessoas n�o tem direitos"
            }
        },
        outros_ba : {
            title : "Prepare o kit de sobreviv�ncia ao apocalipse e escolha:",
            books : [
                {
                    title : "A Dan�a da Morte",
                    link : "http://www.estantevirtual.com.br/q/danca-da-morte-stephen-king?gacp=dia-da-toalha-14&gaid=dan�a-morte",
                    cover : "A_DANCA_DA_MORTE.jpg",
					desc : "Uma poderosa arma biol�gica acaba com grande parte da popula��o, sobrevivendo apenas os poucos resistentes ao v�rus.",
					price : "50,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "A Estrada",
                    link : "http://www.estantevirtual.com.br/q/a-estrada-cormac?gacp=dia-da-toalha-14&gaid=estrada",
                    cover : "A_ESTRADA.jpg",
					desc : "O planeta foi totalmente devastado. Um homem e seu filho buscam a salva��o sem saber o que encontrar�o no final da viagem..",
					price : "20,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Mundo Sem Fim",
                    link : "http://www.estantevirtual.com.br/q/Mundo-sem-Fim-Ken?gacp=dia-da-toalha-14&gaid=mundo-sem-fim",
                    cover : "MUNDO_SEM_FIM.jpg",
					desc : "Acompanhe a trajet�ria de quatro crian�as que, ao presenciarem um crime, se comprometem a mant�-lo em segredo.",
					price : "50,00"
                },
                {
                    title : "Sob a Redoma",
                    link : "http://www.estantevirtual.com.br/q/Sob-a-redoma?gacp=dia-da-toalha-14&gaid=sob-a-redoma",
                    cover : "SOB_A_REDOMA.jpg",
					desc : "A pequena cidade Chester's Mill � subitamente isolada do resto do mundo por um campo de for�a invis�vel que exp�e os medos e as ambi��es de cada cidad�o.",
					price : "45,00"
                }
            ]
        },
        outros_bb : {
            title : "Esque�a a constitui��o e escolha:",
            books : [
                {
                    title : "O Processo",
                    link : "http://www.estantevirtual.com.br/q/O-Processo-kafka?gacp=dia-da-toalha-14&gaid=processo",
                    cover : "O_PROCESSO.jpg",
					desc : "O banc�rio Joseph K. � preso, julgado e condenado por raz�es que nunca chega a descobrir. Um cl�ssico kafkaniano que mistura sonhos e pesadelos com situa��es corriqueiras.",
					price : "8,50",
                },
                {
                    title : "O Senhor das Moscas",
                    link : "http://www.estantevirtual.com.br/q/O-Senhor-das-Moscas?gacp=dia-da-toalha-14&gaid=senhor-das-moscas",
                    cover : "senhor-das-moscas.jpg",
					desc : "Ap�s um bombardeio at�mico, um grupo de jovens passa a viver em uma ilha deserta, reconstituindo os valores da vida em sociedade.",
					price : "27,92",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "Admir�vel Mundo Novo",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?pchave=huxley+admir%E1vel+mundo+novo+-regresso&alvo=autor+ou+titulo&gacp=dia-da-toalha-14&gaid=admiravel-mundo-novo",
                    cover : "ADMIRAVEL_MUNDO_NOVO.jpg",
					desc : "Os seres humanos (pr�-condicionados) t�m comportamentos (pr�-estabelecidos) e ocupam lugares (pr�-determinados) na sociedade.",
					price : "9,00",
					flag : "economy",
					economy : "70"
                },
                {
                    title : "Jogos Vorazes",
                    link : "http://www.estantevirtual.com.br/q/jogos-vorazes?gacp=dia-da-toalha-14&gaid=jogos-vorazes",
                    cover : "JOGOS_VORAZES.jpg",
					desc : "A Capital demonstra seu poder com uma competi��o transmitida ao vivo, em que garotos de cada distrito s�o obrigados a lutar at� a morte.",
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
                hq_d : "Cansei dessas hist�rias gringas, quero ver HQs nacionais!"
            }
        },
        hq_a : {
            title : "Escolha seu campe�o!",
            answers : {
                hq_aa : "Super Her�i!",
                hq_ab : "Grupo secreto",
                hq_ac : "Eu mesmo"
            }
        },
        hq_aa : {
            title : "Como ser� o her�i?",
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
                    desc : "Clark Kent pode parecer um jornalista normal, mas possui poderes especiais que usa para combater o mal como o her�i Superman.",
					cover : "SUPERMAN_ENTRE_A_FOICE_E_O_MARTELO.jpg",
					price : "2,00"
                },
                {
                    title : "Demolidor",
                    link : "http://www.estantevirtual.com.br/qtit/Demolidor?gacp=dia-da-toalha-14&gaid=demolidor",
                    desc : "Matthew � deficiente visual, mas possui seus outros sentidos muito agu�ados. Ele assume a identidade de Demolidor para vingar a morte de seu pai.",
					cover : "DEMOLIDOR.jpg",
					price : "2,90"
                },
                {
                    title : "Reino do Amanh�",
                    link : "http://www.estantevirtual.com.br/q/Reino-do-Amanha-alex?gacp=dia-da-toalha-14&gaid=reino-amanha",
                    desc : "Nesse universo da DC Comics, os super-her�is, como Superman, est�o aposentados e o mundo est� nas m�os de novos her�is sem virtudes.",
					cover : "REINO_DO_AMANHA.jpg",
					price : "18,00"
                },
                {
                    title : "Marvels",
                    link : "http://www.estantevirtual.com.br/q/Kurt-Busiek-marvels?gacp=dia-da-toalha-14&gaid=marvels",
                    desc : "Vivendo nas sombras dos Super-her�is, existem aqueles que os veem com um misto de medo, descren�a, inveja e admira��o.",
					cover : "MARVELS.jpg",
					price : "7,00"
                }
            ]
        },
        hq_aab : {
            title : "Estacione o batm�vel e escolha:",
            face : "superman",
            books : [
                {
                    title : "Batman - Asilo Arkham",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?pchave=Batman+Asilo+Arkham+-retorno&alvo=autor+ou+titulo&gacp=dia-da-toalha-14&gaid=batman-asilo-arkham",
                    desc : "Liderados pelo Coringa, os pacientes fazem os empregados do Asilo ref�ns, que s� ser�o libertados quando o Batman se entregar.",
					cover : "BATMAN__ASILO_ARKHAM.jpg",
					price : "20,00"
                },
                {
                    title : "Batman - Longo Dia das Bruxas",
                    link : "http://www.estantevirtual.com.br/q/Batman-dia-das-bruxas?gacp=dia-da-toalha-14&gaid=batman-longo-dia-bruxas",
                    desc : "Uma s�rie de assassinatos ocorridos em datas festivas e sempre relacionados ao submundo dos g�ngsteres de Gotham City",
					cover : "BATMAN_O_LONGO_DIA_DAS_BRUXAS.jpg",
					price : "5,00"
                },
                {
                    title : "Batman - O Cavaleiro das Trevas",
                    link : "http://www.estantevirtual.com.br/q/Batman-cavaleiro-das-trevas?gacp=dia-da-toalha-14&gaid=batman-cavaleiro-trevas",
                    desc : "Bruce Wayne, sexagen�rio, observa Gothan sendo destru�da pela criminalidade. Como um �ltimo ato, decide voltar como Batman.",
					cover : "BATMAN__O_CAVALEIRO_DAS_TREVAS.jpg",
					price : "3,90"
                },
                {
                    title : "Batman - Justi�a Cega",
                    link : "http://www.estantevirtual.com.br/q/batman-justica-cega?gacp=dia-da-toalha-14&gaid=batman-justica-cega",
                    desc : "Um cartel criminoso toma conta da Wayne Interprises e incrimina Bruce Wayne, utilizando-se do passado misterioso do empres�rio.",
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
                    title : "Liga Extraordin�ria",
                    link : "http://www.estantevirtual.com.br/q/Liga-extraordinaria?gacp=dia-da-toalha-14&gaid=liga-extraordinaria",
                    desc : "Allan Quatermain, Capit�o Nemo, Hawley Griffin, Dr. Jekyll, Sr. Hyde e a Srta. Mina Murray trabalham a servi�o do imp�rio brit�nico.",
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
                    title : "Invis�veis",
                    link : "http://www.estantevirtual.com.br/q/Grant-Morrison-invisiveis?gacp=dia-da-toalha-14&gaid=invisiveis",
                    desc : "Uma 'c�lula' de um grupo anarquista e terrorista tem como objetivo libertar a humanidade do dom�nio de seres transdimensionais",
					cover : "OS_INVISIVEIS.jpg",
					price : "3,00"
                },
                {
                    title : "Frequ�ncia Global",
                    link : "http://www.estantevirtual.com.br/q/Frequencia-global-Ellis-Warren?gacp=dia-da-toalha-14&gaid=frequencia-global",
                    desc : "Uma organiza��o mundial de resgate com 1001 agentes de diversosos campos, desde Bioengenheiros a atletas de Le Parkour.",
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
                    desc : "Conan, o b�rbaro, o ladr�o, o pirata, o rei, desde que saiu de sua terra natal, a cim�ria",
					cover : "CONAN_A1.jpg",
					price : "1,50"
                },
                {
                    title : "Y - O �ltimo Homem",
                    link : "http://www.estantevirtual.com.br/q/O-ultimo-Homem-Brian?gacp=dia-da-toalha-14&gaid=o-hultimo-homem",
                    desc : "Em 2002, todos os mam�feros que possuiam o cromossomo Y s�o dizimados do mundo. Menos  Yorick Brown, um jovem ilusionista, e seu macaco.",
					cover : "Y__O_LTIMO_HOMEM.jpg",
					price : "15,00"
                },
                {
                    title : "Preacher",
                    link : "http://www.estantevirtual.com.br/q/Preacher&gacp=dia-da-toalha-14&gaid=preacher",
                    desc : "Um ex-pastor � possu�do por uma entidade sobrenatural que lhe confere o poder de fazer com que qualquer pessoa o obede�a.",
					cover : "PREACHER__1_EDICAO.jpg",
					price : "2,00"
                },
                {
                    title : "Hellblazer",
                    link : "http://www.estantevirtual.com.br/q/Hellblazer?gacp=dia-da-toalha-14&gaid=hellblazer",
                    desc : "Arrogante, negligente e enganador, John Constantine � um exorcista, ainda que use seus poderes de forma um tanto sutil",
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
                    desc : "Zumbis tomaram a terra e o policial Rick Grimes busca sua fam�lia num mundo devastado pelos mortos-vivos.",
					cover : "THE_WALKING_DEAD_A1.jpg",
					price : "5,00"
                },
                {
                    title : "Asterix",
                    link : "http://www.estantevirtual.com.br/q/Asterix-Rene?gacp=dia-da-toalha-14&gaid=asterix",
                    desc : "Asterix vive em uma pequena aldeia gaulesa ao norte da antiga G�lia que resiste ao dom�nio romano. Tudo gra�as a uma por��o m�gica que lhe d� uma superfor�a.",
					cover : "ASTERIX_O_GAULES.jpg",
					price : "14,00"
                },
                {
                    title : "Planetary",
                    link : "http://www.estantevirtual.com.br/q/Planetary-ellis?gacp=dia-da-toalha-14&gaid=planetary",
                    desc : "O Planetary � uma organiza��o que busca a hist�ria secreta do mundo. Fazem parte dela super seres como Jakita Wagner, O Baterista e o recruta Elijah Snow.",
                    cover : "PLANETARY__MUNDO_ESTRANHO.jpg",
                    price : "10,00"
                },
                {
                    title : "30 dias de noite",
                    link : "http://www.estantevirtual.com.br/q/30-dias-de-noite?gacp=dia-da-toalha-14&gaid=30-dias-noite",
                    desc : "No Alasca uma cidade passa, todo ano, 30 dias sem sol. A longa e g�lida escurid�o atr�i um grupo de vampiros famintos.",
					cover : "30_DIAS_DE_NOITES.jpg",
					price : "25,00"
                }
            ]
        },
        hq_b : {
            title : "Diferente como?",
            answers : {
                hq_ba : "F�bulas e sonhos",
                hq_bb : "Distopias",
                hq_bc : "Nem tanto. Que tal noir?"
            }
        },
        hq_ba : {
            title : "Esque�a a realidade e escolha:",
            face : "superman",
            books : [
                {
                    title : "Stardust - O Mist�rio da Estrela",
                    link : "http://www.estantevirtual.com.br/q/Neil-gaiman-stardust?gacp=dia-da-toalha-14&gaid=stardust",
                    desc : "Na Inglaterra vitoriana, a calma de uma vila � interrompida por uma feira m�gica.",
					cover : "STARDUST.jpg",
					price : "8,00"
                },
                {
                    title : "Sandman",
                    link : "http://www.estantevirtual.com.br/q/Sandman-neil-gaiman?gacp=dia-da-toalha-14&gaid=sandman",
                    desc : "As mentes de todos os seres vivos est�o ligadas ao reino de Morpheus, o Sonhar. Para l� v�o as almas de todos os que dormem.",
					cover : "SANDMAN_N_1.jpg",
					price : "2,40"
                },
                {
                    title : "Livros da Magia",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&pchave=%2Blivros%20%2Bda%20%2Bmagia&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Blivros%20%2Bda%20%2Bmagia&just_remodeling=1&gacp=dia-da-toalha-14&gaid=livros-magia",
                    desc : "Tim � um jovem suburbano ingl�s aparentemente normal,�mas que pode se tornar o maior mago do mundo.",
					cover : "OS_LIVROS_DA_MAGIA.jpg",
					price : "3,90"
                },
                {
                    title : "Monstro do P�ntano",
                    link : "http://www.estantevirtual.com.br/q/Pantano-alan-moore?gacp=dia-da-toalha-14&gaid=monstro-pantano",
                    desc : "O Monstro do P�ntano � criado ap�s um acidente biol�gico. Em busca de sua identidade, vive diversas hist�rias.",
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
                    desc : "Em uma realidade decadente na qual her�is s�o uma presen�a real na�hist�ria�da humanidade, um drama de crime e aventura.",
					cover : "WATCHMEN.jpg",
					price : "8,00"
                },
                {
                    title : "Transmetropolitan",
                    link : "http://www.estantevirtual.com.br/q/Transmetropolitan?gacp=dia-da-toalha-14&gaid=transmetropolitan",
                    desc : "A luta contra o abuso de poder e a corrup��o, tentando evitar que esse mundo futurista se torne ainda mais dist�pico.",
					cover : "TRANSMETROPOLITAN_N_1.jpg",
					price : "3,00"
                },
                {
                    title : "DMZ",
                    link : "http://www.estantevirtual.com.br/q/DMZ-Brian-Wood?gacp=dia-da-toalha-14&gaid=dmz",
                    desc : "Manhattan � o ponto que divide os EUA do Estado Livre. Um jornalista � enviado para cobrir o cessar fogo e se v� em meio ao conflito.",
					cover : "DMZ.jpg",
					price : "10,00"
                },
                {
                    title : "V de Vingan�a",
                    link : "http://www.estantevirtual.com.br/q/vinganca-alan-moore?gacp=dia-da-toalha-14&gaid=v-vinganca",
                    desc : "Numa Inglaterra totalit�ria, uma figura misteriosa chamada simplesmente V luta para que haja liberdade novamente.",
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
                    desc : "O cais � o seu cen�rio predileto. As ruas escuras s�o seu lar. Aventura e perigo s�o seus insepar�veis companheiros.",
					cover : "THE_SPIRIT__A1.jpg",
					price : "2,25"
                },
                {
                    title : "Sin City",
                    link : "http://www.estantevirtual.com.br/q/Sin-City?gacp=dia-da-toalha-14&gaid=sin-city",
                    desc : "Uma cidade com ruas pavimentadas com corrup��o e �dio e becos que escondem crimes que ningu�m quer tomar conhecimento.",
					cover : "SIN_CITY__CIDADE_DO_PECADO.jpg",
					price : "4,50"
                },
                {
                    title : "Do Inferno",
                    link : "http://www.estantevirtual.com.br/q/do-inferno-alan-moore?gacp=dia-da-toalha-14&gaid=do-inferno",
                    desc : "Alan Moore nesse quadrinho especula sobre as motiva��es e a identidade de um dos assassinos em s�rie que chocou Londres:  Jack, o estripador.",
					cover : "DO_INFERNO.jpg",
					price : "43,20"
                },
                {
                    title : "100 Balas",
                    link : "http://www.estantevirtual.com.br/q/100-balas?gacp=dia-da-toalha-14&gaid=100-balas",
                    desc : "Dentro de uma maleta uma arma, 100 c�psulas de muni��o irrastre�veis e as provas contra quem arruinou a vida do presenteado.",
					cover : "100_BALAS.jpg",
					price : "1,99"
                }
            ]
        },
        hq_c : {
            title : "Que tipo de hist�ria quer ler?",
            answers : {
                hq_ca : "Pol�ticas",
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
                    desc : "Nascida numa fam�lia moderna e politizada, em 1979 Marjane assistiu ao in�cio da revolu��o xiita no Ir�.",
					cover : "PERSEPOLISP.jpg",
					price : "13,00"
                },
                {
                    title : "Crime e Castigo",
                    link : "http://www.estantevirtual.com.br/q/John-Higgins-crime-e-castigo?gacp=dia-da-toalha-14&gaid=crime-castigo",
                    desc : "Um jovem comete um crime que tenta justificar pela teoria de que grandes homens foram assassinos absolvidos pela Hist�ria.",
					cover : "CRIME_E_CASTIGO.jpg",
					price : "5,00"
                },
                {
                    title : "Palestina: uma Na��o Ocupada",
                    link : "http://www.estantevirtual.com.br/q/joe-sacco-palestina-uma-nacao-ocupada/?gacp=dia-da-toalha-14&gaid=palestina-nacao-ocupada",
                    desc : "Escrito ap�s uma longa viagem � Palestina, ap�s presenciar violentos confrontos dos soldados com a popula��o.",
					cover : "PALESTINA_UMA_NACAO_OCUPADA.jpg",
					price : "20,00"
                },
                {
                    title : "Maus",
                    link : "http://www.estantevirtual.com.br/q/Art-maus?gacp=dia-da-toalha-14&gaid=maus",
                    cover : "MAUS.jpg",
					desc : "Um relato incisivo e perturbador, que evidencia a brutalidade da cat�strofe do Holocausto.",
					price : "30,00"
                }
            ]
        },
        hq_cb : {
            title : "Acorde o seu esp�rito aventureiro e escolha:",
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
					desc : "Uma saborosa f�bula protagonizada por um felino, que discute o juda�smo com humor mordaz e inteligente.",
					price : "20,00"
                },
                {
                    title : "Coraline",
                    link : "http://www.estantevirtual.com.br/q/Coraline-Neil-Gaiman?gacp=dia-da-toalha-14&gaid=coraline",
                    cover : "CORALINE.jpg",
					desc : "Nesse conto de fadas �s avessas, Coraline descobre uma porta que leva para um misterioso apartamento e se v� em um mundo de dar arrepios.",
					price : "20,00"
                },
                {
                    title : "Corto Maltese",
                    link : "http://www.estantevirtual.com.br/q/corto-maltese?gacp=dia-da-toalha-14&gaid=corto-maltese",
                    cover : "CORTO_MALTESE.jpg",
					desc : "Aventuras cheias de refer�ncias, nas quais v�rias vezes Corto cruzou com personagens hist�ricos reais.",
					price : "10,00"
                }
            ]
        },
        hq_cc : {
            title : "Ent�o escolha a sua hist�ria:",
            face : "superman",
            books : [
                {
                    title : "Asterios Polyp",
                    link : "http://www.estantevirtual.com.br/q/asterios-polyp?gacp=dia-da-toalha-14&gaid=asterios-polyp",
                    cover : "ASTERIOS_POLYP.jpg",
					desc : "Um arquiteto de cinquenta anos, mulherengo, mis�gino e arrogante v� seu passado se esfacelar ap�s um inc�ndio em sua casa.",
					price : "50,40"
                },
                {
                    title : "Azul � a Cor Mais Quente",
                    link : "http://www.estantevirtual.com.br/q/Azul-e-a-cor-mais-quente?gacp=dia-da-toalha-14&gaid=azul-e-a-cor-mais-quente",
                    cover : "AZUL__A_COR_MAIS_QUENTE.jpg",
					desc : "Por meio do di�rio de Clementine, uma jovem de 15 anos, conhecemos as descobertas e tristezas de seu relacionamento com Emma, uma garota de cabelos azuis.",
					price : "31,90"
                },
                {
                    title : "Calvin e Haroldo",
                    link : "http://www.estantevirtual.com.br/q/Calvin-e-Haroldo?gacp=dia-da-toalha-14&gaid=calvin-haroldo",
                    cover : "CALVIN_E_HAROLDO.jpg",
					desc : "Calvin � um menino de seis anos cheio de personalidade e tem como melhor amigo, Haroldo, um tigre de pel�cia.",
					price : "19,00"
                },
                {
                    title : "Retalhos",
                    link : "http://www.estantevirtual.com.br/q/Craig-Thompson-retalhos?gacp=dia-da-toalha-14&gaid=retalhos",
                    cover : "RETALHOS.jpg",
					desc : "Contando as pequenas brutalidades que os infligiam dentro da pr�pria fam�lia, descreve a agonia e o �xtase da obsess�o.",
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
                    title : "10 P�ezinhos",
                    link : "http://www.estantevirtual.com.br/q/10-paezinhos?gacp=dia-da-toalha-14&gaid=10-paezinhos",
                    cover : "10_PAEZINHOS_O_GIRASSOL_E_A_LUA.jpg",
					desc : "Uma hist�ria de amor, que flerta com o g�nero policial, tendo um p� no mist�rio e outro na fantasia.",
					price : "14,99"
                },
                {
                    title : "O Cheiro do Ralo",
                    link : "http://www.estantevirtual.com.br/q/O-Cheiro-do-Ralo?gacp=dia-da-toalha-14&gaid=cheiro-ralo",
                    cover : "O_CHEIRO_DO_RALO.jpg",
					desc : "Um retrato da alma humana de forma c�nica e bem-humorada, com caminhos que s� ser�o percorridos se suportar o odor.",
					price : "25,00"
                },
                {
                    title : "Chiclete com Banana",
                    link : "http://www.estantevirtual.com.br/q/Chiclete-com-Banana-angeli?gacp=dia-da-toalha-14&gaid=chiclete-com-banana",
                    cover : "CHICLETE_COM_BANANA.jpg",
					desc : "Reunindo personagens como Bob Cuspe, Los 3 amigos e Meiaoito, esses quadrinhos v�o te transportar para as d�cadas de 80 e 90.",
					price : "5,00"
                }
            ]
        },
        manga : {
            title : "Ningu�m conta hist�rias como os japoneses! Sobre o que quer ler?",
            face : "manga",
            answers : {
                manga_a : "Hist�rias de lutadores!",
                manga_b : "Mundos mais interessantes que esse",
                manga_c : "Nenhum dos dois"
            }
        },
        manga_a : {
            title : "Que tipo de hist�ria?",
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
                    title : "Ataque dos Tit�s",
                    link : "http://www.estantevirtual.com.br/q/Ataque-dos-titas?gacp=dia-da-toalha-14&gaid=ataque-titas",
                    cover : "ATAQUE_DOS_TITAS.jpg",
					desc : "O mundo foi dominado por criaturas gigantes, chamadas Tit�s, e os humanos foram obrigados a viver dentro de grandes muralhas. Mas essas muralhas podem n�o ser mais t�o seguras.",
					price : "10,00"
                },
                {
                    title : "Cavaleiros do Zod�aco",
                    link : "http://www.estantevirtual.com.br/q/Cavaleiros-do-zodiaco?gacp=dia-da-toalha-14&gaid=cavaleiros-zodiaco",
                    cover : "CAVALEIROS_DO_ZODIACO_A1.jpg",
					desc : "Guerreiros com armaduras sagradas defendem a reencarna��o da deusa Atena em sua batalha contra outros deuses do Olimpo.",
					price : "1,99"
                },
                {
                    title : "Dragon Ball",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&fcid=&fperf=&fano=&fpric=&fvend=&pchave=%2Bdragon%20%2Bball&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bdragon%20%2Bball&just_remodeling=1&fdesconto_frete=&ffrete_gratis=&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=dragon-ball",
                    cover : "DRAGON_BALL_A01.jpg",
					desc : "Goku, um menino com cauda de macaco e cora��o puro, viaja e luta com advers�rios cada vez mais poderosos.",
					price : "1,70"
                },
                {
                    title : "Naruto",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&fcid=&fperf=&fano=&fpric=&fvend=&pchave=%2Bnaruto&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bnaruto&just_remodeling=1&fdesconto_frete=&ffrete_gratis=&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=naruto",
                    cover : "NARUTO_A01.jpg",
					desc : "Naruto � um �rf�o aprendiz de ninja que precisa ser aprovado numa complicada prova para avan�ar ao pr�ximo n�vel do ninjutsu.",
					price : "5,00"
                }
            ]
        },
        manga_ab : {
            title : "Traga a katana e escolha:",
            face : "samurai",
            books : [
                {
                    title : "Lobo Solit�rio",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&fcid=&fperf=&fano=&fpric=&fvend=&pchave=%2Blobo%20%2Bsolitario&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Blobo%20%2Bsolitario&just_remodeling=1&fdesconto_frete=&ffrete_gratis=&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=lobo-solitario",
                    cover : "LOBO_SOLITARIO_VOLUME_1.jpg",
					desc : "Itto Ogami era o executor oficial do Xogum. Por�m, sua fam�lia foi v�tima de um massacre que poupou apenas ele e seu filho.",
					price : "3,00"
                },
                {
                    title : "Vagabond",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&fcid=&fperf=&fano=&fpric=&fvend=&pchave=%2Bvagabond&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bvagabond&just_remodeling=1&fdesconto_frete=&ffrete_gratis=&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=vagabon",
                    cover : "VAGABOND__VOLUME_01.jpg",
					desc : "A biografia em quadrinhos de Miyamoto Musashi, o samurai dos samurais, uma das principais refer�ncias do imagin�rio japon�s.",
					price : "2,00"
                },
                {
                    title : "Blade - a L�mina do Imortal",
                    link : "http://www.estantevirtual.com.br/q/Blade-a-lamina-do-imortal?gacp=dia-da-toalha-14&gaid=blade",
                    cover : "BLADE__A_LMINA_DO_IMORTAL_A02.jpg",
                    desc : "Manji pode regenerar qualquer ferimento. Ele faz a promessa de matar 1000 bandidos para poder morrer em paz.",
                    price : "1,80"
                },
                {
                    title : "Samurai Executor",
                    link : "http://www.estantevirtual.com.br/q/Samurai-executor?gacp=dia-da-toalha-14&gaid=samurai-executor",
                    cover : "SAMURAI_EXECUTOR.jpg",
                    desc : "O pai de Asaemon Yamada Terceiro pede para que o substitua no of�cio de testador de espada. Ao aceitar, Asaemon � submetido a um teste em uma das principais pris�es de T�quio.",
                    price : "25,00"
                }
                
            ]
        },
        manga_b : {
            title : "E o que vai ter?",
            answers : {
                manga_ba : "Magia",
                manga_bb : "Fantasia",
                manga_bc : "Fic��o Cient�fica"
            }
        },
        manga_ba : {
            title : "Invoque seus poderes e escolha:",
            face : "manga",
            books : [
                {
                    title : "Nura: A ascens�o do cl� das sombras",
                    link : "http://www.estantevirtual.com.br/q/Nura-sombras?gacp=dia-da-toalha-14&gaid=nura",
                    cover : "NURA__A_ASCENSAO_DO_CLA_DAS_SOMBRAS.jpg",
					desc : "Rikuo Nura possui apenas 1/4 de sangue youkai (dem�nio) e � neto de um dos chefes do cl�. E para poder suced�-lo, ter� que equilibrar o seu lado humano com o seu lado youkai.",
					price : "6,30"
                },
                {
                    title : "Claymore",
                    link : "http://www.estantevirtual.com.br/q/Claymore?gacp=dia-da-toalha-14&gaid=claymore",
                    cover : "CLAYMORE.jpg",
					desc : "Clare � metade humana e metade dem�nio e faz parte da organiza��o Claymores, respons�vel por eliminar dem�nios que atormentam os seres humanos.",
					price : "10,90"
                },
                {
                    title : "Berserk",
                    link : "http://www.estantevirtual.com.br/q/Berserk?gacp=dia-da-toalha-14&gaid=bersek",
                    cover : "BERSERK.jpg",
					desc : "Gatts � um poderoso e implac�vel guerreiro, marcado por uma chaga que o avisa da aproxima��o de dem�nios.",
					price : "2,50"
                },
                {
                    title : "Tsubasa",
                    link : "http://www.estantevirtual.com.br/q/tsubasa?gacp=dia-da-toalha-14&gaid=tsubasa",
                    cover : "TSUBASA_RESERVOIR_CHRONICLES_A1.jpg",
					desc : "A busca pelas mem�rias perdidas da princesa Sakura, que foram espalhadas pelas diversas dimens�es.",
					price : "3,00"
                }
            ]
        },
        manga_bb : {
            title : "Esque�a a preocupa��o com a realidade e escolha:",
            face : "manga",
            books : [
                {
                    title : "Fairy Tail",
                    link : "http://www.estantevirtual.com.br/q/Fairy-tail?gacp=dia-da-toalha-14&gaid=fairy-tail",
                    cover : "FAIRY_TAIL.jpg",
					desc : "Lucy � uma jovem feiticeira que tem o poder de evocar Esp�ritos Celestiais e deseja se tornar membro da famosa Guilda de Magos Fairy Tail.",
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
                    title : "Fushigi Y�gi",
                    link : "http://www.estantevirtual.com.br/q/Fushigi?gacp=dia-da-toalha-14&gaid=fushigi",
                    cover : "FUSHIGI_YUGI.jpg",
					desc : "Miaka � uma garota de 15 anos que tem uma vida bem normal. At� que � transportada por um livro para China antiga, onde viver� aventuras para tentar salvar o mundo.",
					price : "2,00"
                },
                {
                    title : "Soul Eater",
                    link : "http://www.estantevirtual.com.br/q/Soul-Eater?gacp=dia-da-toalha-14&gaid=soul-eater",
                    cover : "SOUL_EATER.jpg",
					desc : "O alunos da escola Shibusen s�o separados em Armas, humanos que podem ser transformar em armas, e Artes�es, que treinam as armas, e suas miss�es s�o capturar as almas que se desviaram do bom caminho.",
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
					desc : "Em Neo-T�quio, ap�s a III Guerra Mundial, um programa governamental busca desenvolver poderes sobrenaturais.",
					price : "5,00"
                },
                {
                    title : "Neon Genesis Evangelion",
                    link : "http://www.estantevirtual.com.br/q/evangelion?gacp=dia-da-toalha-14&gaid=neon-genesis",
                    cover : "NEON_GENESIS_EVANGELION_A0.jpg",
					desc : "Uma criatura misteriosa, chamada Anjo, ataca Tokyo-3 e Shinji, de 14 anos, � convocado para pilotar o andr�ide Evangelion.",
					price : "1,50"
                },
                {
                   title : "Trigun",
                    link : "http://www.estantevirtual.com.br/q/trigun?gacp=dia-da-toalha-14&gaid=trigun",
                    cover : "TRIGUN.jpg",
                    desc : "Vash The Stampede � um pistoleiro n�made que tem um passado duvidoso. Toda cidade pela qual passa � totalmente devastada.",
                    price : "7,00"
                },
                {
                    title : "Gantz",
                    link : "http://www.estantevirtual.com.br/q/Gantz?gacp=dia-da-toalha-14&gaid=gantz",
                    cover : "GANTZ.jpg",
					desc : "Dois jovens s�o atropelados mas, ao inv�s de morrer, surgem em uma sala e recebem uma miss�o de uma esfera negra: matar alien�genas.",
					price : "9,00"
                }
            ]
        },
        manga_c : {
            title : "Que tal um pouco de com�dia?",
            face : "manga",
            answers : {
                manga_ca : "Sim!",
                manga_cb : "N�o � bem isso o que eu queria"
            }
        },
        manga_ca : {
            title : "Ent�o relaxe e escolha:",
            face : "manga",
            books : [
                {
                    title : "One Piece",
                    link : "http://www.estantevirtual.com.br/q/one-piece?gacp=dia-da-toalha-14&gaid=one-piece",
                    cover : "ONE_PIECE.jpg",
					desc : "Luffy, o homem-borracha, precisa reunir uma boa tripula��o de piratas para encontrar o grande tesouro One Piece.",
					price : "3,00"
                },
                {
                    title : "Chobits",
                    link : "http://www.estantevirtual.com.br/q/Chobits?gacp=dia-da-toalha-14&gaid=chobits",
                    cover : "CHOBITS.jpg",
					desc : "Persocons s�o rob�s em forma humana e por serem muito caros, Hideki Motosuwa nunca pode adquirir um. At� que esbarra com uma linda Persocon jogada no lixo.",
					price : "4,00"
                },
                {
                    title : "Love Hina",
                    link : "http://www.estantevirtual.com.br/q/love-hina?gacp=dia-da-toalha-14&gaid=love-hina",
                    cover : "LOVE_HINA.jpg",
					desc : "Keitar� se torna gerente de uma pens�o feminina e por acidente sempre surpreende as moradoras nuas, e apanha delas.",
					price : "3,50"
                },
                {
                    title : "Bleach",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&pchave=%2Bbleach&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bbleach&just_remodeling=1&gacp=dia-da-toalha-14&gaid=bleach",
                    cover : "BLEACH.jpg",
					desc : "O jovem Ichigo Kurosaki ganha poderes que o for�am a assumir o dever de defender os humanos de esp�ritos mal�gnos.",
					price : "8,00"
                }
            ]
        },
        manga_cb : {
            title : "Ent�o escolha a sua hist�ria:",
            face : "manga",
            books : [
                {
                    title : "Death Note",
                    link : "http://www.estantevirtual.com.br/q/Death-Note?gacp=dia-da-toalha-14&gaid=death-note",
                    cover : "DEATH_NOTE.jpg",
					desc : "Afim de ter um pouco de divers�o, o Deus da Morte Ryuk deixa cair na Terra o seu Death Note, caderno que tem o poder de matar os nomes escritos nele.",
					price : "10,00"
                },
                {
                    title : "Monster",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=71&pchave=%2Bmonster&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bmonster&just_remodeling=1&paginar=40&fadded=&gacp=dia-da-toalha-14&gaid=monster",
                    cover : "MONSTER.jpg",
					desc : "Kenzo Tenma � um neurocirurgi�o de um famoso hospital na Alemanha. Diante de dois pacientes que precisam de cirurgia de emerg�ncia, Tenma se v� questionando a �tica do hospital e a sua pr�pria.",
					price : "6,50"
                },
                {
                    title : "20th Century Boys",
                    link : "http://www.estantevirtual.com.br/q/century-boys?gacp=dia-da-toalha-14&gaid=century-boys",
                    cover : "20TH_CENTURY_BOYS.jpg",
					desc : "Kenji v� sua vida mudar drasticamente ao descobrir que um amigo de inf�ncia cometeu suic�dio. Ao investigar o caso, perceber� que as coincid�ncias com sua inf�ncia s� aumentar�o.",
					price : "10,90"
                },
                {
                    title : "Di�rio do Futuro",
                    link : "http://www.estantevirtual.com.br/q/Diario-do-futuro?gacp=dia-da-toalha-14&gaid=diario-futuro",
                    cover : "DIARIO_DO_FUTURO.jpg",
					desc : "12 pessoas se enfrentar�o em um jogo que a �nica arma � seus respectivos di�rios. Quem tiver o seu di�rio destru�do, morrer�.",
					price : "10,00"
                }
            ]
        },
        rpg : {
            title : "Ent�o traga os dados, chame os amigos e aproveite um bom RPG! Em que �poca quer jogar?",
            answers : {
                rpg_a : "Passado fant�stico!",
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
					desc : "Sistema e cen�rio nacional para jogos de fantasia.",
					price : "5,00"
                },
                {
                    title : "Dungeons & Dragons",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=38&pchave=%2Bdungeons%20%2Bdragons&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bdungeons%20%2Bdragons&just_remodeling=1&gacp=dia-da-toalha-14&gaid=dungeons-dragons",
                    cover : "DUNGEONS_E_DRAGONS.jpg",
					desc : "O mais cl�ssico RPG de fantasia, em diversas edi��es.",
					price : "5,00"
                },
                {
                    title : "Gurps Fantasy",
                    link : "http://www.estantevirtual.com.br/q/gurps-fantasy?gacp=dia-da-toalha-14&gaid=gurps-fantasy",
                    cover : "Gurps_Fantasy.jpg",
					desc : "Sistema gen�rico para jogos com diversos personagens de fantasia.",
					price : "13,00"
                },
                {
                    title : "A Trilogia do Fogo das Bruxas",
                    link : "http://www.estantevirtual.com.br/q/A-Trilogia-do-Fogo-das-Bruxas?gacp=dia-da-toalha-14&gaid=trilogia-fogo-bruxas",
                    cover : "A_TRILOGIA_DO_FOGO_DAS_BRUXAS_1.jpg",
					desc : "Algu�m ou alguma coisa est� desenterrando as tumbas da cidade e os aventureiros s�o contratados para investigar.",
					price : "15,00"
                }
            ]
        },
        rpg_b : {
            title : "Esque�a esse mundo chato e escolha:",
            books : [
                {
                    title : "Shadowrun",
                    link : "http://www.estantevirtual.com.br/q/Shadowrun?gacp=dia-da-toalha-14&gaid=shadowrun",
                    cover : "SHADOWRUN.jpg",
					desc : "Jogue num futuro Cyberpunk que mistura m�goa e tecnologia.",
					price : "8,00"
                },
                {
                    title : "Vampiro",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=38&pchave=%2Bvampiro&alvo=autor%20ou%20titulo&showptit=1&inicio=1&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bvampiro&just_remodeling=1&gacp=dia-da-toalha-14&gaid=vampiro",
                    cover : "VAMPIRO_A_MASCARA.jpg",
					desc : "Seja um vampiro nesse amado cen�rio punk-g�tico.",
					price : "15,00"
                },
                {
                    title : "Inimigo Natural",
                    link : "http://www.estantevirtual.com.br/q/Inimigo-Natural?gacp=dia-da-toalha-14&gaid=inimigo-natural",
                    cover : "INIMIGO_NATURAL.jpg",
					desc : "O mundo foi tomado por alien�genas e para det�-los foi criada uma tropa especial formada pelos melhores e mais bem equipados agentes que o governo conseguiu contratar.",
					price : "10,00"
                },
                {
                    title : "Gurps",
                    link : "http://www.estantevirtual.com.br/mod_perl/busca.cgi?fest=38&pchave=%2Bgurps&alvo=autor%20ou%20titulo&showptit=1&inicio=1&orderby=menor_preco&bestante=&bvendor=&refinar=0&memoria_queries=autor%20ou%20titulo%201v1%20%2Bgurps&just_remodeling=1&gacp=dia-da-toalha-14&gaid=gurps",
                    cover : "gurps-basico.jpg",
					desc : "Sistema gen�rico para diversas ambienta��es e personagens.",
					price : "10,00"
                }
            ]
        },
        nao_nerd : {
            title : "N�o � nerd? N�o tem problema! Aqui voc� pode aprender um pouco sobre essa cultura. Por onde quer come�ar?",
            answers : {
                nao_nerd_a : "Livros de Fantasias",
                nao_nerd_b : "Livros de Fic��o Cient�fica",
                nao_nerd_c : "Quadrinhos"
            }
        },
        nao_nerd_a : {
            title : "O mundo � muito mais misterioso do que imaginamos! Escolha a sua hist�ria:",
            face : "artur",
            books : [
                {
                    title : "O Hobbit",
                    link : "http://www.estantevirtual.com.br/q/tolkien-o-hobbit?gacp=dia-da-toalha-14&gaid=hobbit",
                    cover : "O_HOBBIT.jpg",
					desc : "Bilbo � um Hobbit que sai em jornada em busca de um tesouro, e encontra o 'Um Anel'.",
					price : "22,00"
                },
                {
                    title : "A Sociedade do Anel",
                    link : "http://www.estantevirtual.com.br/q/A-Sociedade-do-Anel?gacp=dia-da-toalha-14&gaid=sociedade-doa-nel",
                    cover : "A_SOCIEDADE_DO_ANEL.jpg",
                    desc : "Um jovem hobbit � encarregado de iniciar uma perigosa viagem at� as Fendas da Perdi��o para destruir o Anel do Poder.",
                    price : "24,00"
                },
                {
                    title : "Cr�nicas de Gelo e Fogo - Guerra dos Tronos",
                    link : "http://www.estantevirtual.com.br/q/cronicas-de-gelo-e-fogo?gacp=dia-da-toalha-14&gaid=guerra-dos-tronos",
                    cover : "A_GUERRA_DOS_TRONOS.jpg",
					desc : "Quando Ed, lorde de Winterfell, aceita ser a M�o do Rei, n�o desconfia que sua vida est� prestes a ruir.",
					price : "22,00",
					flag : "economy",
					economy : "50"
                },
                {
                    title : "Brumas de Avalon - A Senhora da Magia",
                    link : "http://www.estantevirtual.com.br/q/Brumas-de-avalon?gacp=dia-da-toalha-14&gaid=brumas-avalon",
                    cover : "A_SENHORA_DA_MAGIA.jpg",
					desc : "Em quatro volumes, conta a hist�ria de Rei Artur pelo ponto de vista de Morgana.",
					price : "6,00"
                }
            ]
        },
        nao_nerd_b : {
            title : "O futuro nos espera! Escolha a sua hist�ria:",
            face : "astronaut",
            books : [
                {
                    title : "O Guia do Mochileiro das Gal�xias",
                    link : "http://www.estantevirtual.com.br/q/guia-do-mochileiro-das-galaxias?gacp=dia-da-toalha-14&gaid=guia-mochileiro-galaxias",
                    cover : "O_GUIA_DO_MOCHILEIRO_DAS_GALAXIAS.jpg",
					desc : "Com�dia que narra as viagens de Arthur Dent, depois que a terra � destru�da.",
					price : "10,00",
					flag : "economy",
					economy : "40"
                },
                {
                    title : "Viagem ao Centro da Terra",
                    link : "http://www.estantevirtual.com.br/q/verne-viagem-centro-terra?gacp=dia-da-toalha-14&gaid=viagem-centro-terra",
                    cover : "VIAGEM_AO_CENTRO_DA_TERRA.jpg",
					desc : "Buscando chegar ao centro da terra, tr�s viajantes encontram um mundo paralelo.",
					price : "9,90"
                },
                {
                    title : "1984",
                    link : "http://www.estantevirtual.com.br/q/1984-george?gacp=dia-da-toalha-14&gaid=1984",
                    cover : "1984.jpg",
					desc : "Vigiado 24h por dia pelo governo, Winston Smith tenta encontrar uma brecha no grande sistema do Grande Irm�o, s�mbolo do poder do Partido.",
					price : "29,00"
                },
                {
                    title : "A Funda��o",
                    link : "http://www.estantevirtual.com.br/q/fundacao-asimov?gacp=dia-da-toalha-14&gaid=fundacao",
                    cover : "FUNDACAO.jpg",
                    desc : "A psico-hist�ria, ci�ncia que antecipa o comportamento de grandes popula��es, prev� a queda do Imp�rio Gal�ctico.",
                    price : "24,90"
                }
            ]
        },
        nao_nerd_c : {
            title : "As hist�rias ficam mais legais quando tem figuras! Escolha a sua:",
            face : "superman",
            books : [
                {
                    title : "Sandman",
                    link : "http://www.estantevirtual.com.br/q/Sandman-neil-gaiman?gacp=dia-da-toalha-14&gaid=sandman",
                    cover : "SANDMAN_N_1.jpg",
					desc : "As mentes de todos os seres vivos est�o ligadas ao reino de Morpheus, o Sonhar. Para l� v�o as almas de todos os que dormem.",
					price : "2,40"
                },
                {
                    title : "Watchmen",
                    link : "http://www.estantevirtual.com.br/q/Watchmen-Alan-Moore?gacp=dia-da-toalha-14&gaid=watchmen",
                    cover : "WATCHMEN.jpg",
					desc : "Em uma realidade decadente na qual her�is s�o uma presen�a real na�hist�ria�da humanidade, um drama de crime e aventura.",
					price : "8,00"
                },
                {
                    title : "The Walking Dead",
                    link : "http://www.estantevirtual.com.br/q/Walking-Dead?gacp=dia-da-toalha-14&gaid=walking-dead",
                    desc : "Zumbis tomaram a terra e o policial Rick Grimes busca sua fam�lia num mundo devastado pelos mortos-vivos.",
                    cover : "THE_WALKING_DEAD_A1.jpg",
                    price : "5,00"
                },
                {
                     title : "Persepolis",
                    link : "http://www.estantevirtual.com.br/q/Persepolis?gacp=dia-da-toalha-14&gaid=persepolis",
                    desc : "Nascida numa fam�lia moderna e politizada, em 1979 Marjane assistiu ao in�cio da revolu��o xiita no Ir�.",
                    cover : "PERSEPOLISP.jpg",
                    price : "13,00"
                }
            ]
        }
    };
})();


