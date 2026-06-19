var botaoMenu = document.querySelector("#botao-menu");
var menuPrincipal = document.querySelector("#menu-principal");

botaoMenu.addEventListener("click", function () {
	menuPrincipal.classList.toggle("aberto");
	botaoMenu.classList.toggle("aberto");

	var estaAberto = menuPrincipal.classList.contains("aberto");
	botaoMenu.setAttribute("aria-expanded", estaAberto);
});
var linksMenu = document.querySelectorAll(".link-menu");

linksMenu.forEach(function (link) {
	link.addEventListener("click", function () {
		menuPrincipal.classList.remove("aberto");
		botaoMenu.classList.remove("aberto");
	});
});

var secoes = document.querySelectorAll("main section[id]");

function atualizaMenuAtivo() {
	var posicaoScroll = window.scrollY + 120; 

	secoes.forEach(function (secao) {
		var topoSecao = secao.offsetTop;
		var alturaSecao = secao.offsetHeight;
		var idSecao = secao.getAttribute("id");

		if (posicaoScroll >= topoSecao && posicaoScroll < topoSecao + alturaSecao) {
			linksMenu.forEach(function (link) {
				link.classList.remove("ativo");

				if (link.getAttribute("href") === "#" + idSecao) {
					link.classList.add("ativo");
				}
			});
		}
	});
}

var botaoTopo = document.querySelector("#botao-topo");

function controlaBotaoTopo() {
	if (window.scrollY > 400) {
		botaoTopo.classList.add("visivel");
	} else {
		botaoTopo.classList.remove("visivel");
	}
}

botaoTopo.addEventListener("click", function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
	atualizaMenuAtivo();
	controlaBotaoTopo();
});

var numeroProjetos = document.querySelector("#numero-projetos");
var numeroAnos = document.querySelector("#numero-anos");
var numeroClientes = document.querySelector("#numero-clientes");

var contadorJaExecutou = false;

function animaContador(elemento, valorFinal) {
	var valorAtual = 0;
	var incremento = Math.ceil(valorFinal / 60);

	var intervalo = setInterval(function () {
		valorAtual += incremento;

		if (valorAtual >= valorFinal) {
			valorAtual = valorFinal;
			clearInterval(intervalo);
		}

		elemento.textContent = valorAtual;
	}, 25);
}

function verificaSecaoSobre() {
	var secaoSobre = document.querySelector("#sobre");
	var posicaoTopo = secaoSobre.getBoundingClientRect().top;
	var alturaTela = window.innerHeight;

	if (posicaoTopo < alturaTela - 100 && !contadorJaExecutou) {
		animaContador(numeroProjetos, 180);
		animaContador(numeroAnos, 13);
		animaContador(numeroClientes, 95);
		contadorJaExecutou = true;
	}
}

window.addEventListener("scroll", verificaSecaoSobre);
window.addEventListener("load", verificaSecaoSobre); 

var formContato = document.querySelector("#form-contato");
var listaErros = document.querySelector("#lista-erros");
var mensagemSucesso = document.querySelector("#mensagem-sucesso");

var bancoDeDadosContatos = [];

formContato.addEventListener("submit", function (event) {

	event.preventDefault();

	limpaMensagens();

	var dadosContato = obtemDadosFormulario(formContato);

	var erros = validaFormulario(dadosContato);

	if (erros.length > 0) {
		exibeErros(erros);
		return; 
	}
	simulaEnvioFormulario(dadosContato);
});

function obtemDadosFormulario(form) {
	var dados = {
		nome: form.nome.value.trim(),
		email: form.email.value.trim(),
		telefone: form.telefone.value.trim(),
		mensagem: form.mensagem.value.trim()
	};
	return dados;
}

function validaFormulario(dados) {
	var erros = [];

	document.querySelectorAll(".campo-form").forEach(function (campo) {
		campo.classList.remove("campo-invalido");
	});

	if (dados.nome.length === 0) {
		erros.push("O campo Nome é obrigatório.");
		document.querySelector("#nome").classList.add("campo-invalido");
	} else if (dados.nome.length < 3) {
		erros.push("O nome deve ter pelo menos 3 letras.");
		document.querySelector("#nome").classList.add("campo-invalido");
	}

	if (dados.email.length === 0) {
		erros.push("O campo E-mail é obrigatório.");
		document.querySelector("#email").classList.add("campo-invalido");
	} else if (!validaEmail(dados.email)) {
		erros.push("Digite um e-mail válido (exemplo: nome@dominio.com).");
		document.querySelector("#email").classList.add("campo-invalido");
	}

	if (dados.mensagem.length === 0) {
		erros.push("O campo Mensagem é obrigatório.");
		document.querySelector("#mensagem").classList.add("campo-invalido");
	} else if (dados.mensagem.length < 10) {
		erros.push("A mensagem deve ter pelo menos 10 caracteres.");
		document.querySelector("#mensagem").classList.add("campo-invalido");
	}

	return erros;
}

function validaEmail(email) {
	var padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return padraoEmail.test(email);
}

function exibeErros(erros) {
	erros.forEach(function (erro) {
		var item = document.createElement("li");
		item.textContent = erro;
		listaErros.appendChild(item);
	});
}

function limpaMensagens() {
	listaErros.innerHTML = "";
	mensagemSucesso.classList.remove("visivel");
	mensagemSucesso.textContent = "";
}

var camposObrigatorios = document.querySelectorAll("#nome, #email, #mensagem");

camposObrigatorios.forEach(function (campo) {
	campo.addEventListener("blur", function () {
		var valor = campo.value.trim();

		if (valor.length === 0) {
			campo.classList.add("campo-invalido");
		} else if (campo.id === "email" && !validaEmail(valor)) {
			campo.classList.add("campo-invalido");
		} else {
			campo.classList.remove("campo-invalido");
		}
	});

	campo.addEventListener("input", function () {
		campo.classList.remove("campo-invalido");
	});
});

function simulaEnvioFormulario(dados) {
	var botaoEnviar = document.querySelector("#botao-enviar");

	botaoEnviar.disabled = true;
	botaoEnviar.textContent = "Enviando...";

	setTimeout(function () {

		var novoRegistro = {
			id: bancoDeDadosContatos.length + 1,
			nome: dados.nome,
			email: dados.email,
			telefone: dados.telefone,
			mensagem: dados.mensagem,
			dataEnvio: new Date().toLocaleString("pt-BR")
		};

		bancoDeDadosContatos.push(novoRegistro);

		console.log("Registro salvo no banco de dados:", novoRegistro);
		console.log("Total de contatos recebidos:", bancoDeDadosContatos.length);

		mensagemSucesso.textContent = "Mensagem enviada com sucesso! Em breve, " + dados.nome + ", nossa equipe entrará em contato pelo e-mail " + dados.email + ". (Protocolo nº " + novoRegistro.id + ")";
		mensagemSucesso.classList.add("visivel");

		mensagemSucesso.scrollIntoView({ behavior: "smooth", block: "center" });

		formContato.reset();

		botaoEnviar.disabled = false;
		botaoEnviar.textContent = "Enviar mensagem";
	}, 1200);
}



var spanAno = document.querySelector("#ano-atual");
var dataAtual = new Date();
spanAno.textContent = dataAtual.getFullYear();
